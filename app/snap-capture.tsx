import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Linking, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SnapCamera, inAppCameraAvailable } from '@/components/snap-camera';
import { StateCard } from '@/components/states';
import { useDarkNavigationBar } from '@/lib/nav-bar';
import { takePendingSnap } from '@/lib/snap-pending';
import { SnapCrop } from '@/components/snap-crop';
import { SnapFailed, SnapLoading, failureCopy } from '@/components/snap-loading';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { DoubtPhoto, SnapFailure, rejectPhoto } from '@/lib/doubts';
import { SNAP_HANDOFF_MS, cancelSnapJob, startSnapJob, useSnapJob } from '@/lib/snap-job';
import { hapticKey } from '@/lib/haptics';

type Phase = 'opening' | 'camera' | 'idle' | 'cropping' | 'permission_denied' | 'uploading' | 'failed';


export default function SnapCaptureScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  useDarkNavigationBar();

  const [phase, setPhase] = useState<Phase>('opening');
  const [photo, setPhoto] = useState<DoubtPhoto | null>(null);
  const [failure, setFailure] = useState<SnapFailure | null>(null);
  // Separate from `failure.stage` on purpose: the backend can legitimately
  // return stage:'config' too, so reusing that as a "was this even uploaded"
  // signal would wrongly hide "Try again" on a real, retry-worthy backend hiccup.
  const [canRetryUpload, setCanRetryUpload] = useState(false);
  /** Why we fell back to the idle screen, when it wasn't just a cancelled pick. */
  const [idleNote, setIdleNote] = useState<string | null>(null);
  /** Which permission was refused — the copy differs, and offering "choose from
   *  gallery" to someone who just denied gallery access is a dead end. */
  const [deniedTarget, setDeniedTarget] = useState<'camera' | 'gallery'>('camera');

  const job = useSnapJob();

  /**
   * Starts the solve and lets the scan play, then hands over to the solution
   * screen whether or not the answer is back.
   *
   * A solve runs 30–45s, and the scanning animation has nothing new to say
   * after the first few seconds of it — holding someone there for the rest is
   * just a long wait on a screen that gets thrown away. So it hands over on
   * whichever comes first: the answer, or `SNAP_HANDOFF_MS`. The solution
   * screen shows its skeleton until the result lands, which puts the wait on
   * the page the content will actually fill.
   *
   * A failure *before* the handoff keeps the student here, because this is the
   * screen that can act on it — quota, an unreadable photo, "try again" all
   * belong next to the camera, not on an empty solution page. After the
   * handoff the solution screen owns it.
   *
   * `replace`, not `push`: this screen has no job left once it hands over, and
   * back should return to wherever the student opened Snap from rather than to
   * a scan of a doubt already solved.
   */
  function upload(toUpload: DoubtPhoto) {
    setPhase('uploading');
    setFailure(null);
    startSnapJob(toUpload);
  }

  useEffect(() => {
    if (phase !== 'uploading') return;

    if (job.status === 'failed') {
      setFailure(job.failure);
      setCanRetryUpload(job.failure.stage !== 'quota' && job.failure.stage !== 'pass');
      setPhase('failed');
      return;
    }

    if (job.status === 'solved') {
      // Nothing worth opening a Solution screen for. Saying so here, over the
      // photo they just took, is the honest place for it: sending someone to a
      // page titled Solution to read "try snapping it again" is a wasted
      // navigation and a worse answer.
      const usable = job.response.questions.some(
        (q) => q.status === 'solved' || q.status === 'unsure'
      );
      if (!usable) {
        const first = job.response.questions[0];
        setFailure({
          message: first?.failure_reason || 'We could not find a question in that photo.',
          stage: 'read',
          remedy: (first?.remedy as SnapFailure['remedy']) ?? 'retake',
          retake_helps: true,
        });
        setCanRetryUpload(true);
        setPhase('failed');
        return;
      }
      router.replace('/snap-solved');
      return;
    }

    if (job.status !== 'solving') return;

    // Hand off as soon as the photo has actually been read.
    //
    // It used to hand off on a blind 7s timer, which meant a photo with no
    // question in it landed on the Solution screen and only then admitted it
    // had nothing. `questions_read` tells us there IS a question well before
    // the answer exists, so that is what the navigation waits for.
    if (job.read.some((q) => q.legible !== false)) {
      router.replace('/snap-solved');
      return;
    }

    // The non-streaming fallback never reports what it read, so there is
    // nothing to wait for and the timer is the only signal available.
    if (!job.streaming) {
      const id = setTimeout(() => router.replace('/snap-solved'), SNAP_HANDOFF_MS);
      return () => clearTimeout(id);
    }
  }, [phase, job]);

  const cancelUpload = () => {
    cancelSnapJob();
    close();
  };

  /** Where to go when nothing was picked: back to Snap's own camera, or the
   *  idle card where there is no in-app camera in this build. */
  const backToCamera = () => setPhase(inAppCameraAvailable() ? 'camera' : 'idle');

  async function handlePicked(result: ImagePicker.ImagePickerResult) {
    if (result.canceled || !result.assets?.[0]) {
      backToCamera();
      return;
    }
    // The moment the photo lands back here: the snap, as far as the app can
    // feel it. (Snap's own camera taps on its shutter instead.)
    hapticKey();
    const asset = result.assets[0];
    takeShot({
      uri: asset.uri,
      fileName: asset.fileName,
      mimeType: asset.mimeType,
      fileSize: asset.fileSize,
    });
  }

  /** A photo, from either camera or the gallery, on its way to the crop. */
  function takeShot(picked: DoubtPhoto) {
    setPhoto(picked);

    // A bad mime/size never even reaches the server — same photo, same
    // result, so only retaking (not "try again") makes sense here.
    const rejectReason = rejectPhoto(picked);
    if (rejectReason) {
      setFailure({ message: rejectReason, stage: 'config', remedy: 'retake', retake_helps: true });
      setCanRetryUpload(false);
      setPhase('failed');
      return;
    }

    // Straight to the crop, not to the solver. A photo of a page holds more
    // than one question, and choosing which one to send is the student's call.
    setPhase('cropping');
  }

  async function openCamera() {
    setPhase('opening');
    setIdleNote(null);
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        setDeniedTarget('camera');
        setPhase('permission_denied');
        return;
      }
      // Snap's own camera where the build has it (components/snap-camera):
      // gallery at hand, no second confirm. The phone's camera app otherwise.
      if (inAppCameraAvailable()) {
        setPhase('camera');
        return;
      }
      const result = await ImagePicker.launchCameraAsync({ quality: 0.85, allowsEditing: false });
      await handlePicked(result);
    } catch {
      // launchCameraAsync throws outright where no camera exists (every
      // simulator, and some locked-down devices). Unhandled, the rejection
      // left `phase` stuck on 'opening' — a black screen with a spinner, no
      // text and no way out but the ✕. Fall back to a state that explains
      // itself and still offers the gallery.
      setIdleNote("Couldn't open the camera on this device. Pick a photo from your gallery instead.");
      setPhase('idle');
    }
  }

  async function openGallery() {
    setPhase('opening');
    setIdleNote(null);
    try {
      // Android's photo picker needs no permission: asking for one put up a
      // needless "allow access to photos" prompt, and saying no to it blocked
      // a gallery that would have opened anyway. iOS still asks.
      if (Platform.OS !== 'android') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          setDeniedTarget('gallery');
          setPhase('permission_denied');
          return;
        }
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        quality: 0.85,
      });
      await handlePicked(result);
    } catch {
      setIdleNote("Couldn't open your photos. Try again, or use the camera.");
      setPhase('idle');
    }
  }

  // Opens the real camera the instant this screen is reached — no decorative
  // placeholder in between. Guarded against React's dev-mode double-invoke
  // and any re-render racing the async permission prompt, same one-shot
  // pattern as entering-classroom.tsx's autoSubmittedRef.
  const autoOpenedRef = useRef(false);
  useEffect(() => {
    if (autoOpenedRef.current) return;
    autoOpenedRef.current = true;
    // A snap Android rescued after closing the app mid-camera (see
    // lib/snap-pending.ts) goes straight on, instead of opening the camera
    // again for a photo already taken.
    const rescued = takePendingSnap();
    if (rescued) {
      void handlePicked(rescued);
      return;
    }
    openCamera();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = () => (router.canGoBack() ? router.back() : router.replace('/'));

  // The full-bleed loading design owns the whole screen while a solve is in
  // flight — the student's own shot behind the scan, not a spinner over a
  // thumbnail. See snap-loading-2c/ for the spec this implements.
  if (phase === 'cropping' && photo) {
    return (
      <>
        <StatusBar style="light" />
        <SnapCrop
          photo={photo}
          onCancel={backToCamera}
          onDone={(cropped) => {
            setPhoto(cropped);
            upload(cropped);
          }}
        />
      </>
    );
  }

  // The day's limit is not a failed photo: it gets the limit card in the
  // screen below, not the photo-failure screen. Nor is an ended pass.
  if (phase === 'failed' && photo && failure && failure.stage !== 'quota' && failure.stage !== 'pass') {
    const copy = failureCopy(failure.remedy, failure.message);
    return (
      <>
        <StatusBar style="dark" />
        <SnapFailed
          photoUri={photo.uri}
          title={copy.title}
          body={copy.body}
          onRetry={canRetryUpload ? () => upload(photo) : undefined}
          onRetake={failure.retake_helps !== false ? openCamera : undefined}
          onClose={close}
        />
      </>
    );
  }

  if (phase === 'camera') {
    return (
      <>
        <StatusBar style="light" />
        <SnapCamera
          onCapture={(picture) =>
            takeShot({ uri: picture.uri, fileName: 'snap.jpg', mimeType: 'image/jpeg' })
          }
          onGallery={() => void openGallery()}
          onClose={close}
          onFailed={() => {
            setIdleNote("Couldn't open the camera on this device. Pick a photo from your gallery instead.");
            setPhase('idle');
          }}
        />
      </>
    );
  }

  if (phase === 'uploading' && photo) {
    return (
      <>
        <StatusBar style="light" />
        <SnapLoading photoUri={photo.uri} onCancel={cancelUpload} onClose={cancelUpload} />
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.headerRow}>
          <Pressable style={styles.iconButton} onPress={close}>
            <Text style={styles.closeGlyph}>✕</Text>
          </Pressable>
          <Text style={styles.headerTitle}>Snap and Solve</Text>
          {/* Balances the close button so the title is centred; no fill of its own. */}
          <View style={styles.iconSpacer} />
        </View>

        <View style={styles.body}>
          {phase === 'failed' && failure?.stage === 'quota' ? (
            <View style={styles.stateBlock}>
              <StateCard
                tone="dark"
                glyph="clock"
                title="You've used today's snaps"
                line={`Snaps open again tomorrow. Everything you've solved is in Doubts.${
                  failure.daily_limit != null ? ` (${failure.used_today ?? failure.daily_limit} of ${failure.daily_limit} today)` : ''
                }`}
                action={{ label: 'Open Doubts', onPress: () => router.replace('/(tabs)/doubts') }}
                quiet={{ label: 'Close', onPress: close }}
              />
            </View>
          ) : phase === 'failed' && failure?.stage === 'pass' ? (
            // The app root is already opening Plans (lib/pass-events); this
            // is only what shows if that navigation has not happened.
            <View style={styles.stateBlock}>
              <StateCard
                tone="dark"
                glyph="clock"
                title="Your pass has ended"
                line="Pick a plan to keep snapping. Everything you've solved is still in Doubts."
                action={{ label: 'See plans', onPress: () => router.replace('/plans') }}
                quiet={{ label: 'Close', onPress: close }}
              />
            </View>
          ) : phase === 'permission_denied' ? (
            <View style={styles.stateBlock}>
              <StateCard
                tone="dark"
                glyph="cameraOff"
                title={deniedTarget === 'camera' ? 'Camera access is off' : 'Photo access is off'}
                line={
                  deniedTarget === 'camera'
                    ? 'Turn it on in Settings to snap a question, or pick a photo you already have.'
                    : 'Turn it on in Settings to pick a saved photo, or use the camera instead.'
                }
                action={{ label: 'Open Settings', onPress: () => void Linking.openSettings() }}
                // Offer the OTHER route: sending someone who just denied the
                // gallery back to the gallery is a loop.
                quiet={
                  deniedTarget === 'camera'
                    ? { label: 'Choose from gallery', onPress: () => void openGallery() }
                    : { label: 'Use the camera', onPress: () => void openCamera() }
                }
              />
            </View>
          ) : phase === 'idle' ? (
            <View style={styles.stateBlock}>
              <StateCard
                tone="dark"
                glyph={idleNote ? 'cameraOff' : 'retry'}
                title={idleNote ? 'Camera unavailable' : "Didn't catch a photo"}
                line={idleNote ?? 'Try the camera again, or pick one from your gallery.'}
                action={{ label: 'Open camera', onPress: () => void openCamera() }}
                quiet={{ label: 'Choose from gallery', onPress: () => void openGallery() }}
              />
            </View>
          ) : (
            // Was a bare spinner on near-black: if the camera was slow, or
            // never came back at all, this screen said nothing and offered
            // nothing. It now names what it's doing and keeps the gallery
            // reachable throughout.
            <View style={styles.fallbackBlock}>
              <ActivityIndicator color="#EFEBDD" />
              <Text style={styles.statusTitle}>Opening the camera…</Text>
              <Text style={styles.statusSubtext}>
                Point it at one question, up to 3 on a page.
              </Text>
              <View style={styles.failureActions}>
                <Pressable style={styles.secondaryAction} onPress={openGallery}>
                  <Text style={styles.secondaryActionText}>Choose from gallery</Text>
                </Pressable>
              </View>
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}


function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#0E0C09',
    },
    safeArea: {
      flex: 1,
    },
    headerRow: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: verticalScale(6),
      paddingBottom: verticalScale(12),
      paddingHorizontal: scale(20),
    },
    // The camera's own controls, so the header is one across Snap's screens.
    iconSpacer: { width: scale(44), height: scale(44) },
    iconButton: {
      width: scale(44),
      height: scale(44),
      borderRadius: scale(22),
      backgroundColor: 'rgba(26,24,20,.45)',
      borderWidth: StyleSheet.hairlineWidth * 2,
      borderColor: 'rgba(255,253,248,.18)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeGlyph: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(14),
      color: '#EFEBDD',
    },
    headerTitle: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(15),
      color: '#fff',
    },
    body: {
      flex: 1,
      minHeight: 0,
      marginHorizontal: scale(16),
      marginBottom: verticalScale(16),
      borderRadius: scale(18),
      overflow: 'hidden',
    },
    photoFrame: {
      flex: 1,
    },
    /** Where a state card sits on the dark camera ground. */
    stateBlock: { flex: 1, justifyContent: 'center', paddingHorizontal: scale(4) },
    fallbackBlock: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: verticalScale(10),
      paddingHorizontal: scale(36),
    },
    fallbackIconChip: {
      width: scale(52),
      height: scale(52),
      borderRadius: scale(26),
      backgroundColor: 'rgba(255,255,255,.08)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: verticalScale(4),
    },
    statusBlock: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: scale(36),
      paddingBottom: verticalScale(48),
      gap: verticalScale(9),
    },
    errorIconChip: {
      width: scale(44),
      height: scale(44),
      borderRadius: scale(22),
      backgroundColor: 'rgba(221,68,51,.16)',
      borderWidth: 1,
      borderColor: 'rgba(221,68,51,.4)',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: verticalScale(2),
    },
    errorIconGlyph: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(18),
      color: '#FF9C8C',
    },
    statusTitle: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(16),
      color: '#fff',
      textAlign: 'center',
    },
    statusSubtext: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: '#C7C1B3',
      textAlign: 'center',
    },
    failureActions: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      marginTop: verticalScale(10),
    },
    primaryAction: {
      height: verticalScale(44),
      paddingHorizontal: scale(20),
      borderRadius: scale(99),
      backgroundColor: colors.marigold,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryActionText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: '#16130E',
    },
    secondaryAction: {
      height: verticalScale(44),
      paddingHorizontal: scale(20),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,.22)',
      backgroundColor: 'rgba(255,255,255,.06)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondaryActionText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: '#EFEBDD',
    },
  });
}
