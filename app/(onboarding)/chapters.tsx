import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { OnbLabel, OnbScreen } from '@/components/onboarding/onb-screen';
import { ChipWrap, SkyChoice } from '@/components/onboarding/sky-choice';
import { ob, obFont, useDesignScale, type YearKey } from '@/constants/onboarding';
import { chapterGroups, SUBJECT_NAMES, SUBJECTS_FOR, type SubjectKey } from '@/constants/onboarding-chapters';
import { getAnswers, saveAnswers } from '@/lib/onboarding-answers';
import { getProfile } from '@/lib/profile';

/**
 * Question 4: the chapters that cost them most, in their weakest subject.
 *
 * The subject is whichever they just called weakest, so a NEET student who
 * said Biology sees Biology chapters. The list follows the class: Class 11
 * sees only Class 11 chapters, everyone else both years. Four of each show at
 * first; the search finds the rest, and anything not in the list can be typed
 * in as their own.
 *
 * Under it, one chapter from their strongest subject that they feel sure of.
 */
const MAX_HARD = 3;
const SHOWN = 4;

export default function ChaptersScreen() {
  const { ds, fs } = useDesignScale();
  const [year, setYear] = useState<YearKey>('class12');
  const [weak, setWeak] = useState<SubjectKey>('physics');
  const [strong, setStrong] = useState<SubjectKey | null>(null);
  const [hard, setHard] = useState<string[]>([]);
  const [confident, setConfident] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let live = true;
    Promise.all([getProfile(), getAnswers()]).then(([p, a]) => {
      if (!live) return;
      setYear(p.year);
      // Checked against the exam: a Maths answer left from before a switch to
      // NEET must not ask a NEET student about Maths chapters.
      const allowed = SUBJECTS_FOR[p.exam];
      const w = a.weakest && allowed.includes(a.weakest) ? a.weakest : allowed[0];
      setWeak(w);
      setStrong(a.strongest && a.strongest !== w && allowed.includes(a.strongest) ? a.strongest : null);
      if (w === a.weakest) {
        if (a.hardChapters) setHard(a.hardChapters);
        if (a.confidentChapter) setConfident(a.confidentChapter);
      }
    });
    return () => {
      live = false;
    };
  }, []);

  const groups = chapterGroups(weak, year);
  const all = groups.flatMap((g) => g.chapters);
  const q = query.trim().toLowerCase();
  const matches = q ? all.filter((c) => c.toLowerCase().includes(q)) : [];
  // Only offered once nothing in the list matches: while a real chapter does,
  // "Add 'Rot'" next to Rotational Motion is noise.
  const canAddOwn = q.length > 1 && matches.length === 0 && !hard.some((c) => c.toLowerCase() === q);
  const own = hard.filter((c) => !all.includes(c));
  const full = hard.length >= MAX_HARD;

  const toggle = (c: string) =>
    setHard((list) => (list.includes(c) ? list.filter((x) => x !== c) : list.length >= MAX_HARD ? list : [...list, c]));

  const chip = (c: string) => (
    <SkyChoice
      key={c}
      shape="chip"
      labelSize={14}
      label={c}
      selected={hard.includes(c)}
      disabled={full && !hard.includes(c)}
      onPress={() => {
        toggle(c);
        // A pick from the search clears it, so the list comes back with the
        // new pick in place.
        if (q) setQuery('');
      }}
    />
  );

  const strongChoices = strong ? chapterGroups(strong, year).flatMap((g) => g.chapters.slice(0, year === 'class11' ? 5 : 3)) : [];

  return (
    <OnbScreen
      keyboard
      title={`Which ${SUBJECT_NAMES[weak]} chapters do you find hardest?`}
      sub={year === 'class11' ? 'Only Class 11 chapters. Pick up to 3.' : 'Pick up to 3, or type your own.'}
      cta={{
        label: 'Continue',
        disabled: hard.length === 0,
        onPress: () => {
          saveAnswers({ hardChapters: hard, confidentChapter: confident ?? undefined });
          router.push('/ai');
        },
      }}
      onSkip={() => router.push('/ai')}>
      <View
        style={{
          height: ds(50),
          flexDirection: 'row',
          alignItems: 'center',
          gap: ds(10),
          paddingHorizontal: ds(16),
          borderRadius: ds(14),
          borderWidth: 1.5,
          borderColor: ob.hairline14,
        }}>
        <Svg width={ds(17)} height={ds(17)} viewBox="0 0 20 20" fill="none">
          <Circle cx={9} cy={9} r={6} stroke={ob.ink55} strokeWidth={1.8} />
          <Path d="M13.5 13.5L17 17" stroke={ob.ink55} strokeWidth={1.8} strokeLinecap="round" />
        </Svg>
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search, or type your own"
          placeholderTextColor={ob.placeholder}
          autoCorrect={false}
          returnKeyType="done"
          selectionColor={ob.amber}
          style={{ flex: 1, fontFamily: obFont.r400, fontSize: fs(16), color: ob.ink }}
        />
      </View>

      {own.length > 0 ? (
        <>
          <OnbLabel>Your own</OnbLabel>
          <ChipWrap>{own.map(chip)}</ChipWrap>
        </>
      ) : null}

      {q ? (
        <>
          <OnbLabel>{matches.length ? 'Matching chapters' : 'No chapter by that name'}</OnbLabel>
          <ChipWrap>
            {matches.map(chip)}
            {canAddOwn && !full ? (
              <Pressable
                onPress={() => {
                  setHard((list) => [...list, query.trim()]);
                  setQuery('');
                }}
                style={{
                  paddingVertical: ds(8) - 1.5,
                  paddingHorizontal: ds(14) - 1.5,
                  borderRadius: ds(12),
                  borderWidth: 1.5,
                  borderStyle: 'dashed',
                  borderColor: 'rgba(28,26,22,0.24)',
                }}>
                <Text style={{ fontFamily: obFont.m500, fontSize: fs(14), color: ob.ink80 }}>Add “{query.trim()}”</Text>
              </Pressable>
            ) : null}
          </ChipWrap>
        </>
      ) : (
        groups.map((g) => {
          const open = expanded[g.label];
          const shown = open ? g.chapters : g.chapters.slice(0, SHOWN);
          // A picked chapter from further down the list stays visible.
          const extra = open ? [] : g.chapters.slice(SHOWN).filter((c) => hard.includes(c));
          return (
            <View key={g.label}>
              <OnbLabel>{g.label}</OnbLabel>
              <ChipWrap>
                {[...shown, ...extra].map(chip)}
                {g.chapters.length > SHOWN && !open ? (
                  <Pressable
                    onPress={() => setExpanded((e) => ({ ...e, [g.label]: true }))}
                    style={{ paddingVertical: ds(9), paddingHorizontal: ds(6) }}>
                    <Text style={{ fontFamily: obFont.sb600, fontSize: fs(14), color: ob.link }}>
                      All {g.chapters.length}
                    </Text>
                  </Pressable>
                ) : null}
              </ChipWrap>
            </View>
          );
        })
      )}

      {strong && !q ? (
        <>
          <View style={{ height: 1, backgroundColor: 'rgba(28,26,22,0.08)', marginTop: ds(22), marginHorizontal: ds(4) }} />
          <OnbLabel>And one {SUBJECT_NAMES[strong]} chapter you’re confident in?</OnbLabel>
          <ChipWrap>
            {strongChoices.map((c) => (
              <SkyChoice
                key={`s-${c}`}
                shape="chip"
                labelSize={14}
                label={c}
                selected={confident === c}
                onPress={() => setConfident((cur) => (cur === c ? null : c))}
              />
            ))}
          </ChipWrap>
        </>
      ) : null}
    </OnbScreen>
  );
}
