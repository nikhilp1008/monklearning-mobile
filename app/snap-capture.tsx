import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { RuledPaper } from '@/components/ruled-paper';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { DoubtPhoto, readSnapFailure, rejectPhoto, setPendingSnapResult, snapDoubt } from '@/lib/doubts';

export default function SnapCaptureScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const autoOpenedRef = useRef(false);

  async function handlePicked(result: ImagePicker.ImagePickerResult) {
    if (result.canceled || !result.assets?.[0]) return;
    const asset = result.assets[0];
    const photo: DoubtPhoto = {
      uri: asset.uri,
      fileName: asset.fileName,
      mimeType: asset.mimeType,
      fileSize: asset.fileSize,
    };

    const rejectReason = rejectPhoto(photo);
    if (rejectReason) {
      setError(rejectReason);
      return;
    }

    setError(null);
    setUploading(true);
    try {
      const response = await snapDoubt(photo);
      // Handed off via a module-level slot, not a router param — see
      // setPendingSnapResult's own comment for why JSON.stringify-through-
      // params is unsafe for this payload.
      setPendingSnapResult(response);
      router.push('/snap-solved');
    } catch (err) {
      setError(readSnapFailure(err).message);
    } finally {
      setUploading(false);
    }
  }

  async function openCamera() {
    if (uploading) return;
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      setError('Camera access is off — enable it in Settings to snap a doubt.');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({ quality: 0.85, allowsEditing: false });
    await handlePicked(result);
  }

  async function openGallery() {
    if (uploading) return;
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      setError('Photo access is off — enable it in Settings to pick a doubt.');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.85,
    });
    await handlePicked(result);
  }

  // Guard against React's dev-mode double-invoke of effects (and any
  // re-render before the async permission prompt resolves) — the camera
  // should open exactly once per mount, not once per shutter tap.
  useEffect(() => {
    if (autoOpenedRef.current) return;
    autoOpenedRef.current = true;
    openCamera();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.headerRow}>
          <Pressable
            style={styles.iconButton}
            onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}>
            <Text style={styles.closeGlyph}>✕</Text>
          </Pressable>
          <Text style={styles.headerTitle}>Snap a doubt</Text>
          <View style={styles.iconButton}>
            <SettingsIcon size={scale(16)} />
          </View>
        </View>

        <View style={styles.viewfinder}>
          <LinearGradient
            colors={['#2A251C', '#191510']}
            start={{ x: 0.33, y: 0.03 }}
            end={{ x: 0.67, y: 0.97 }}
            style={StyleSheet.absoluteFillObject}
          />
          <View style={styles.viewfinderRuledClip}>
            <View style={styles.viewfinderRuledSkew}>
              <RuledPaper step={verticalScale(27)} color="rgba(239,235,221,.05)" count={20} />
            </View>
          </View>
          <Text style={styles.readyText}>Tap the shutter to open your camera</Text>
          <View style={[styles.corner, styles.cornerTL]} />
          <View style={[styles.corner, styles.cornerTR]} />
          <View style={[styles.corner, styles.cornerBL]} />
          <View style={[styles.corner, styles.cornerBR]} />
          <View style={styles.framePillWrap} pointerEvents="none">
            <View style={styles.framePill}>
              <Text style={styles.framePillText}>
                Frame the question · <Text style={styles.framePillTextBold}>max 2 at a time</Text>
              </Text>
            </View>
          </View>

          {uploading && (
            <View style={styles.uploadingOverlay}>
              <ActivityIndicator color="#F5CB60" size="large" />
              <Text style={styles.uploadingText}>Drona is reading your photo…</Text>
              <Text style={styles.uploadingSubtext}>This can take up to 30 seconds.</Text>
            </View>
          )}
        </View>

        {error && !uploading && (
          <Pressable style={styles.errorBanner} onPress={() => setError(null)}>
            <Text style={styles.errorBannerText}>{error}</Text>
            <Text style={styles.errorBannerDismiss}>Dismiss</Text>
          </Pressable>
        )}

        <View style={styles.controlsRow}>
          <Pressable style={styles.controlButton} onPress={openGallery} disabled={uploading}>
            <View style={styles.controlIconChip}>
              <GalleryIcon size={scale(19)} />
            </View>
            <Text style={styles.controlLabel}>Gallery</Text>
          </Pressable>
          <Pressable
            style={[styles.shutterButton, uploading && styles.shutterButtonDisabled]}
            onPress={openCamera}
            disabled={uploading}>
            <View style={styles.shutterInner} />
          </Pressable>
          <View style={styles.controlButton}>
            <View style={styles.controlIconChip}>
              <FlashIcon size={scale(19)} />
            </View>
            <Text style={styles.controlLabel}>Flash</Text>
          </View>
        </View>

        <Text style={styles.hint}>
          Two at a time keeps Drona focused — each one gets read and explained properly.
        </Text>

      </SafeAreaView>
    </View>
  );
}

function SettingsIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"
        stroke="#EFEBDD"
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function GalleryIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect x={3} y={4} width={18} height={16} rx={3} stroke="#EFEBDD" strokeWidth={1.8} />
      <Circle cx={9} cy={10} r={1.6} stroke="#EFEBDD" strokeWidth={1.8} />
      <Path
        d="m21 16-4.5-4.5L7 21"
        stroke="#EFEBDD"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function FlashIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M13 2 4.5 14h6L10 22l8.5-12h-6z"
        stroke="#EFEBDD"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
    viewfinder: {
      flex: 1,
      minHeight: 0,
      marginHorizontal: scale(16),
      borderRadius: scale(18),
      overflow: 'hidden',
      position: 'relative',
    },
    viewfinderRuledClip: {
      ...StyleSheet.absoluteFillObject,
      overflow: 'hidden',
    },
    viewfinderRuledSkew: {
      ...StyleSheet.absoluteFillObject,
      transform: [{ rotate: '-2deg' }, { scale: 1.1 }],
    },
    readyText: {
      position: 'absolute',
      left: '10%',
      right: '10%',
      top: '44%',
      textAlign: 'center',
      fontFamily: 'AnekLatin_600SemiBold',
      color: 'rgba(239,235,221,.55)',
      fontSize: scale(13),
    },
    corner: {
      position: 'absolute',
      width: scale(26),
      height: scale(26),
      borderColor: colors.marigold,
      borderWidth: scale(2.5),
    },
    cornerTL: {
      top: verticalScale(16),
      left: scale(16),
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderTopLeftRadius: scale(7),
    },
    cornerTR: {
      top: verticalScale(16),
      right: scale(16),
      borderLeftWidth: 0,
      borderBottomWidth: 0,
      borderTopRightRadius: scale(7),
    },
    cornerBL: {
      bottom: verticalScale(16),
      left: scale(16),
      borderRightWidth: 0,
      borderTopWidth: 0,
      borderBottomLeftRadius: scale(7),
    },
    cornerBR: {
      bottom: verticalScale(16),
      right: scale(16),
      borderLeftWidth: 0,
      borderTopWidth: 0,
      borderBottomRightRadius: scale(7),
    },
    framePillWrap: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: verticalScale(22),
      alignItems: 'center',
    },
    framePill: {
      backgroundColor: 'rgba(14,12,9,.7)',
      borderWidth: 1,
      borderColor: 'rgba(239,235,221,.2)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(14),
    },
    framePillText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(12),
      color: '#EFEBDD',
      textAlign: 'center',
    },
    framePillTextBold: {
      color: '#F5CB60',
    },
    uploadingOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(14,12,9,.86)',
      alignItems: 'center',
      justifyContent: 'center',
      gap: verticalScale(10),
    },
    uploadingText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(14),
      color: '#EFEBDD',
    },
    uploadingSubtext: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(12),
      color: '#938d80',
    },
    errorBanner: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(10),
      backgroundColor: 'rgba(221,68,51,.16)',
      borderWidth: 1,
      borderColor: 'rgba(221,68,51,.4)',
      borderRadius: scale(12),
      marginHorizontal: scale(16),
      marginTop: verticalScale(10),
      paddingVertical: verticalScale(9),
      paddingHorizontal: scale(14),
    },
    errorBannerText: {
      flex: 1,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: '#FFD9D2',
    },
    errorBannerDismiss: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: '#FFD9D2',
      textDecorationLine: 'underline',
    },
    controlsRow: {
      flexShrink: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: verticalScale(22),
      paddingBottom: verticalScale(8),
      paddingHorizontal: scale(44),
    },
    controlButton: {
      alignItems: 'center',
      gap: verticalScale(5),
    },
    controlIconChip: {
      width: scale(44),
      height: scale(44),
      borderRadius: scale(12),
      backgroundColor: 'rgba(255,255,255,.1)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    controlLabel: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: '#938d80',
    },
    shutterButton: {
      width: scale(74),
      height: scale(74),
      borderRadius: scale(37),
      borderWidth: scale(4),
      borderColor: colors.paper,
      alignItems: 'center',
      justifyContent: 'center',
    },
    shutterButtonDisabled: {
      opacity: 0.4,
    },
    shutterInner: {
      width: scale(58),
      height: scale(58),
      borderRadius: scale(29),
      backgroundColor: colors.paper,
    },
    hint: {
      flexShrink: 0,
      textAlign: 'center',
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(11),
      lineHeight: scale(16.5),
      color: '#938d80',
      paddingTop: verticalScale(6),
      paddingHorizontal: scale(40),
    },
  });
}
