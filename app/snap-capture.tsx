import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { SnapLoading } from '@/components/snap-loading';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import {
  DoubtPhoto,
  SnapFailure,
  readSnapFailure,
  rejectPhoto,
  setPendingSnapResult,
  snapDoubt,
} from '@/lib/doubts';

type Phase = 'opening' | 'idle' | 'permission_denied' | 'uploading' | 'failed';

function quotaMessage(failure: SnapFailure): string {
  if (failure.daily_limit == null) return failure.message;
  const used = failure.used_today ?? failure.daily_limit;
  return `${failure.message} (${used}/${failure.daily_limit} today)`;
}

export default function SnapCaptureScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

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
  /** Lets Cancel on the loading screen actually stop the request in flight,
   *  rather than leaving it running against a screen nobody is watching. */
  const uploadAbortRef = useRef<AbortController | null>(null);

  async function upload(toUpload: DoubtPhoto) {
    setPhase('uploading');
    setFailure(null);
    const controller = new AbortController();
    uploadAbortRef.current = controller;
    try {
      const response = await snapDoubt(toUpload, controller.signal);
      // Handed off via a module-level slot, not a router param — see
      // setPendingSnapResult's own comment for why JSON.stringify-through-
      // params is unsafe for this payload.
      setPendingSnapResult(response);
      router.push('/snap-solved');
    } catch (err) {
      // A deliberate cancel already closed the screen — don't flash a failure
      // at someone who asked to stop.
      if (controller.signal.aborted) return;
      const result = readSnapFailure(err);
      setFailure(result);
      setCanRetryUpload(result.stage !== 'quota');
      setPhase('failed');
    } finally {
      uploadAbortRef.current = null;
    }
  }

  const cancelUpload = () => {
    uploadAbortRef.current?.abort();
    close();
  };

  async function handlePicked(result: ImagePicker.ImagePickerResult) {
    if (result.canceled || !result.assets?.[0]) {
      setPhase('idle');
      return;
    }
    const asset = result.assets[0];
    const picked: DoubtPhoto = {
      uri: asset.uri,
      fileName: asset.fileName,
      mimeType: asset.mimeType,
      fileSize: asset.fileSize,
    };
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

    await upload(picked);
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
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        setDeniedTarget('gallery');
        setPhase('permission_denied');
        return;
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
    openCamera();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = () => (router.canGoBack() ? router.back() : router.replace('/'));

  // The full-bleed loading design owns the whole screen while a solve is in
  // flight — the student's own shot behind the scan, not a spinner over a
  // thumbnail. See snap-loading-2c/ for the spec this implements.
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
          <Text style={styles.headerTitle}>Snap a doubt</Text>
          <View style={styles.iconButton} />
        </View>

        <View style={styles.body}>
          {(phase === 'uploading' || phase === 'failed') && photo ? (
            <View style={styles.photoFrame}>
              <Image source={{ uri: photo.uri }} style={StyleSheet.absoluteFillObject} resizeMode="cover" />
              <LinearGradient
                colors={['rgba(14,12,9,.15)', 'rgba(14,12,9,.82)']}
                start={{ x: 0.5, y: 0.35 }}
                end={{ x: 0.5, y: 1 }}
                style={StyleSheet.absoluteFillObject}
              />
              {phase === 'uploading' ? (
                <View style={styles.statusBlock}>
                  <ActivityIndicator color="#F5CB60" size="large" />
                  <Text style={styles.statusTitle}>Drona is reading your photo…</Text>
                  <Text style={styles.statusSubtext}>
                    Pulling out the question, the formulas, the context — up to 30 seconds.
                  </Text>
                </View>
              ) : failure ? (
                <View style={styles.statusBlock}>
                  <View style={styles.errorIconChip}>
                    <Text style={styles.errorIconGlyph}>!</Text>
                  </View>
                  <Text style={styles.statusTitle}>
                    {failure.stage === 'quota' ? "That's today's limit" : "Couldn't solve that one"}
                  </Text>
                  <Text style={styles.statusSubtext}>
                    {failure.stage === 'quota' ? quotaMessage(failure) : failure.message}
                  </Text>
                  {failure.stage === 'quota' ? (
                    <View style={styles.failureActions}>
                      <Pressable style={styles.primaryAction} onPress={close}>
                        <Text style={styles.primaryActionText}>Got it</Text>
                      </Pressable>
                    </View>
                  ) : (
                    <View style={styles.failureActions}>
                      {canRetryUpload && (
                        <Pressable style={styles.primaryAction} onPress={() => upload(photo)}>
                          <Text style={styles.primaryActionText}>Try again</Text>
                        </Pressable>
                      )}
                      {failure.retake_helps !== false && (
                        <Pressable
                          style={[styles.secondaryAction, !canRetryUpload && styles.primaryAction]}
                          onPress={openCamera}>
                          <Text
                            style={[
                              styles.secondaryActionText,
                              !canRetryUpload && styles.primaryActionText,
                            ]}>
                            Retake
                          </Text>
                        </Pressable>
                      )}
                    </View>
                  )}
                </View>
              ) : null}
            </View>
          ) : phase === 'permission_denied' ? (
            <View style={styles.fallbackBlock}>
              <View style={styles.fallbackIconChip}>
                <CameraOffIcon size={scale(22)} />
              </View>
              <Text style={styles.statusTitle}>
                {deniedTarget === 'camera' ? 'Camera access is off' : 'Photo access is off'}
              </Text>
              <Text style={styles.statusSubtext}>
                {deniedTarget === 'camera'
                  ? 'Turn it on in Settings to snap a doubt, or pick a photo you already have.'
                  : 'Turn it on in Settings to pick a saved photo, or use the camera instead.'}
              </Text>
              <View style={styles.failureActions}>
                <Pressable style={styles.primaryAction} onPress={() => Linking.openSettings()}>
                  <Text style={styles.primaryActionText}>Open Settings</Text>
                </Pressable>
                {/* Offer the OTHER route — sending someone who just denied the
                    gallery back to the gallery is a loop. */}
                {deniedTarget === 'camera' ? (
                  <Pressable style={styles.secondaryAction} onPress={openGallery}>
                    <Text style={styles.secondaryActionText}>Choose from gallery</Text>
                  </Pressable>
                ) : (
                  <Pressable style={styles.secondaryAction} onPress={openCamera}>
                    <Text style={styles.secondaryActionText}>Use camera</Text>
                  </Pressable>
                )}
              </View>
            </View>
          ) : phase === 'idle' ? (
            <View style={styles.fallbackBlock}>
              <Text style={styles.statusTitle}>
                {idleNote ? 'Camera unavailable' : "Didn't catch a photo"}
              </Text>
              <Text style={styles.statusSubtext}>
                {idleNote ?? 'Try the camera again, or pick one from your gallery.'}
              </Text>
              <View style={styles.failureActions}>
                <Pressable style={styles.primaryAction} onPress={openCamera}>
                  <Text style={styles.primaryActionText}>Open camera</Text>
                </Pressable>
                <Pressable style={styles.secondaryAction} onPress={openGallery}>
                  <Text style={styles.secondaryActionText}>Gallery</Text>
                </Pressable>
              </View>
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
                Point it at one question — up to 3 on a page.
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

function CameraOffIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M3 4h13l2 3h3v13H5a2 2 0 0 1-2-2V4Z"
        stroke="#EFEBDD"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M2 2l20 20" stroke="#EFEBDD" strokeWidth={1.7} strokeLinecap="round" />
    </Svg>
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
    iconButton: {
      width: scale(34),
      height: scale(34),
      borderRadius: scale(17),
      backgroundColor: 'rgba(255,255,255,.1)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeGlyph: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(14),
      color: '#EFEBDD',
    },
    headerTitle: {
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(18),
      color: '#FF9C8C',
    },
    statusTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(16),
      color: '#fff',
      textAlign: 'center',
    },
    statusSubtext: {
      fontFamily: 'AnekLatin_400Regular',
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
      fontFamily: 'AnekLatin_700Bold',
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
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(13),
      color: '#EFEBDD',
    },
  });
}
