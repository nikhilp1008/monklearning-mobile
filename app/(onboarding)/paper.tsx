import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Svg, { Line, Path } from 'react-native-svg';

import { OnbScreen } from '@/components/onboarding/onb-screen';
import { EXAMS, YEARS, ob, obFont, useDesignScale, type ExamKey, type YearKey } from '@/constants/onboarding';
import { SUBJECTS_FOR } from '@/constants/onboarding-chapters';
import { revalidateAuthState } from '@/lib/auth';
import { getMockStatus } from '@/lib/mock';
import { getAnswers, saveAnswers } from '@/lib/onboarding-answers';
import { getProfile, pushProfile } from '@/lib/profile';

/**
 * The last screen of onboarding: the starting-point paper, as an admit card.
 *
 * Every JEE and NEET student knows what an admit card is, and one with their
 * own name on it makes the paper feel official without feeling like a test.
 * "Start the paper" and "Later, from Home" both finish onboarding; the first
 * then opens Mock tests, where the paper waits.
 *
 * FINISHING lives here now. It was on "What's inside", which followed the
 * teacher; that screen is no longer in the flow. The profile goes to the
 * server only at this point — writing it earlier flips the gate to
 * "onboarded" while the student still has screens to go.
 */
const SKY_CARD = require('@/assets/images/onboarding/sky-card.png');
const CREAM = '#FBF9F2';

function Check({ size }: { size: number }) {
  return (
    <View
      style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: ob.ink, alignItems: 'center', justifyContent: 'center' }}>
      <Svg width={size * 0.5} height={size * 0.5} viewBox="0 0 16 16" fill="none">
        <Path d="M3.5 8.4l3 3L12.5 5" stroke={CREAM} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
      </Svg>
    </View>
  );
}

export default function PaperScreen() {
  const { ds, fs, tracking } = useDesignScale();
  const [name, setName] = useState('');
  const [exam, setExam] = useState<ExamKey>('jee');
  const [year, setYear] = useState<YearKey>('class12');
  const [examYear, setExamYear] = useState<string | null>(null);
  const [paper, setPaper] = useState({ questions: 35, minutes: 45, subjects: 3 });
  const [busy, setBusy] = useState<'start' | 'later' | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    Promise.all([getProfile(), getAnswers()]).then(([p, a]) => {
      if (!live) return;
      setName(p.name);
      setExam(p.exam);
      setYear(p.year);
      setExamYear(a.examYear && a.examYear !== 'unsure' ? a.examYear : null);
      setPaper((x) => ({ ...x, subjects: SUBJECTS_FOR[p.exam].length }));
      // The paper's real size, when the server says. The numbers above stand
      // if it does not answer.
      getMockStatus(p.exam)
        .then((s) => {
          const d = s.diagnostic;
          if (live && d) setPaper({ questions: d.questions, minutes: d.duration_minutes, subjects: d.sections.length || 3 });
        })
        .catch(() => {});
    });
    return () => {
      live = false;
    };
  }, []);

  const finish = async (then: 'start' | 'later') => {
    if (busy) return;
    setBusy(then);
    setError(null);
    try {
      await pushProfile();
    } catch {
      setBusy(null);
      setError('Couldn’t save your details. Check your connection and try again.');
      return;
    }
    await saveAnswers({ finished: true });
    // The gate still believes onboarding is owed until it re-reads the
    // profile; awaited so Home never paints on the old answer.
    await revalidateAuthState();
    router.replace('/(tabs)');
    if (then === 'start') router.push('/mocks');
  };

  const examLine = [
    `${EXAMS[exam].name}${examYear ? ` ${examYear}` : ''}`,
    YEARS[year] === 'Dropper' ? 'Done with Class 12' : YEARS[year],
  ].join(' · ');

  const stat = (n: number, label: string) => (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ fontFamily: obFont.m500, fontSize: fs(30), letterSpacing: tracking(-0.03, 30), color: ob.ink }}>
        {n}
      </Text>
      <Text style={{ marginTop: ds(2), fontFamily: obFont.r400, fontSize: fs(12.5), color: ob.ink55 }}>{label}</Text>
    </View>
  );
  const rule = <View style={{ width: 1, alignSelf: 'stretch', backgroundColor: 'rgba(28,26,22,0.08)' }} />;
  const notch = (side: 'left' | 'right') => (
    <View
      style={{
        position: 'absolute',
        [side]: -ds(11),
        top: -ds(11),
        width: ds(22),
        height: ds(22),
        borderRadius: ds(11),
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: 'rgba(28,26,22,0.10)',
      }}
    />
  );

  return (
    <OnbScreen
      title="One last thing: your starting-point paper"
      sub="It shows where you really stand, so your first week is built around you."
      cta={{ label: 'Start the paper', busy: busy === 'start', onPress: () => finish('start') }}
      secondary={{ label: 'Later, from Home', onPress: () => finish('later') }}>
      <Animated.View
        entering={FadeInDown.duration(480).delay(120)}
        style={{
          borderRadius: ds(20),
          backgroundColor: '#FFFFFF',
          boxShadow: [
            { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(28,26,22,0.08)' },
            { offsetX: 0, offsetY: ds(18), blurRadius: ds(40), spreadDistance: -ds(22), color: 'rgba(28,26,22,0.35)' },
          ],
        }}>
        <View
          style={{
            height: ds(104),
            borderTopLeftRadius: ds(20),
            borderTopRightRadius: ds(20),
            overflow: 'hidden',
            paddingVertical: ds(18),
            paddingHorizontal: ds(20),
            justifyContent: 'space-between',
          }}>
          <Image source={SKY_CARD} contentFit="fill" style={{ position: 'absolute', inset: 0 }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontFamily: obFont.sb600, fontSize: fs(11), letterSpacing: tracking(0.13, 11), color: 'rgba(251,249,242,0.8)' }}>
              STARTING-POINT PAPER
            </Text>
            <Text style={{ fontFamily: obFont.sb600, fontSize: fs(11), letterSpacing: tracking(0.13, 11), color: 'rgba(251,249,242,0.8)' }}>
              PAPER 1
            </Text>
          </View>
          <View>
            <Text numberOfLines={1} style={{ fontFamily: obFont.m500, fontSize: fs(20), letterSpacing: tracking(-0.015, 20), color: CREAM }}>
              {name || 'Your name'}
            </Text>
            <Text style={{ marginTop: ds(2), fontFamily: obFont.r400, fontSize: fs(13), color: 'rgba(251,249,242,0.85)' }}>
              {examLine}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: ds(18), paddingHorizontal: ds(8) }}>
          {stat(paper.questions, 'questions')}
          {rule}
          {stat(paper.minutes, 'minutes')}
          {rule}
          {stat(paper.subjects, 'subjects')}
        </View>

        {/* The tear line, with the two half-moons an admit card is cut at. */}
        <View style={{ height: 1 }}>
          <Svg width="100%" height={2} style={{ position: 'absolute', top: -1 }}>
            <Line x1="0" y1="1" x2="100%" y2="1" stroke="rgba(28,26,22,0.16)" strokeWidth={1.5} strokeDasharray="5 5" />
          </Svg>
          {notch('left')}
          {notch('right')}
        </View>

        <View style={{ paddingTop: ds(16), paddingBottom: ds(18), paddingHorizontal: ds(20), gap: ds(10) }}>
          {['No marks shown, no ranking', 'Skip what you don’t know'].map((t) => (
            <View key={t} style={{ flexDirection: 'row', alignItems: 'center', gap: ds(10) }}>
              <Check size={ds(18)} />
              <Text style={{ fontFamily: obFont.r400, fontSize: fs(14), color: ob.ink80 }}>{t}</Text>
            </View>
          ))}
        </View>
      </Animated.View>

      {error ? (
        <Text style={{ marginTop: ds(16), textAlign: 'center', fontFamily: obFont.r400, fontSize: fs(14), color: '#C0392B' }}>
          {error}
        </Text>
      ) : null}
    </OnbScreen>
  );
}
