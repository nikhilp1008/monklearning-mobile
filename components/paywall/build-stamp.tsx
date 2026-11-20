import * as Application from 'expo-application';
import { Text } from 'react-native';

import { ob, obFont } from '@/constants/onboarding';

/**
 * WHICH BUILD IS THIS. A student, tester or the founder reading a payment screen can say the build number
 * in one glance, so "it still shows the old message" can be told apart from "this build fails for a new
 * reason". The number is the Play versionCode of the installed app. Quiet and small, under the notes.
 */
export function buildLabel(): string {
  const build = Application.nativeBuildVersion;
  const version = Application.nativeApplicationVersion;
  if (!build && !version) return '';
  return `Build ${build ?? '?'}${version ? ` · v${version}` : ''}`;
}

export function BuildStamp() {
  const label = buildLabel();
  if (!label) return null;
  return (
    <Text style={{ fontFamily: obFont.r400, fontSize: 11, lineHeight: 15, color: ob.ink55, textAlign: 'center', marginTop: 10, opacity: 0.7 }}>
      {label}
    </Text>
  );
}
