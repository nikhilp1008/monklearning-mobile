/**
 * DEV ONLY — the anchor editor that turns a plate into a figure.
 *
 * ~65 masters arrive in one zip. Each needs a label set: a term, in two
 * languages, anchored to the exact point on the art it names. Doing that by
 * typing normalised coordinates into JSON is both slow and unreviewable — you
 * cannot tell from `[0.31, 0.42]` whether it lands on Bowman's capsule or on
 * the tubule beside it, which is the ONE thing that matters.
 *
 * So: tap the plate to place an anchor, drag it to adjust, type the term, and
 * export. The tap point IS the anchor, which makes the coordinate a consequence
 * of looking at the picture rather than an input to be checked against it.
 *
 * ITS OWN SCREEN, not a section of dev-widget-preview. That file is 1,400 lines
 * of per-widget panels and this is a different kind of tool — it edits content
 * rather than previewing code.
 *
 * WHAT THIS DELIBERATELY DOES NOT DO. It never marks a set reviewed. `draft
 * -labels` proposes anchors by vision and a proposal is a guess about where a
 * structure IS; `reviewed_by` is the record that a human looked at THIS anchor
 * on THIS art. A tool that filled it in on export would make the review gate a
 * formality, so the field is typed by the person who did the reviewing.
 */
import { router } from 'expo-router';
import React, { useMemo, useState } from 'react';
import {
  Image, LayoutChangeEvent, Pressable, ScrollView, StyleSheet, Text, TextInput, View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Line } from 'react-native-svg';

import { colors } from '@/constants/brand';
import {
  LABEL_SET_SCHEMA_VERSION, resolveSide, validateLabelSet,
  type AuthoredLabel, type AuthoredSide, type LabelSet,
} from '@/lib/widgets/labelled-figure/label-set';
import { PLACEHOLDER_SLUG } from '@/lib/widgets/labelled-figure/placeholder-figure';

const ART = require('../assets/figures/placeholder-plant-cell.png') as number;
const ART_W = 1600;
const ART_H = 1200;

/**
 * Pre-filled from the manifest's `ncert_labels` for this slug. Typed here for
 * the dev fixture; `draft-labels` writes the same list into a draft file for a
 * real slug, and the editor opens that.
 *
 * The point of pre-filling is that the author is CHOOSING which term to place
 * next rather than remembering the list — a term nobody placed is then visibly
 * still in the tray, instead of being silently absent from the export.
 */
const SUGGESTED = [
  'Cell wall', 'Plasma membrane', 'Cytoplasm', 'Vacuole', 'Tonoplast',
  'Nucleus', 'Nucleolus', 'Chloroplast', 'Mitochondrion', 'Golgi body',
];

const SIDES: AuthoredSide[] = ['l', 'r', 't', 'b', 'auto'];

export default function DevLabelEditorScreen() {
  const [labels, setLabels] = useState<AuthoredLabel[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [reviewer, setReviewer] = useState('');
  const [box, setBox] = useState({ w: 0, h: 0 });

  /** The art is letterboxed into the editor box exactly as the board does it,
   *  so a tap maps to the same normalised point the renderer will read. */
  const fit = useMemo(() => {
    if (!box.w || !box.h) return { s: 1, sW: 0, sH: 0, ox: 0, oy: 0 };
    const s = Math.min(box.w / ART_W, box.h / ART_H);
    const sW = s * ART_W;
    const sH = s * ART_H;
    return { s, sW, sH, ox: (box.w - sW) / 2, oy: (box.h - sH) / 2 };
  }, [box]);

  const onArt = (px: number, py: number) => {
    if (!fit.sW || !fit.sH) return;
    const u = (px - fit.ox) / fit.sW;
    const v = (py - fit.oy) / fit.sH;
    // Outside the plate is not a clamped anchor — it is a miss. Clamping would
    // silently place the label on the edge and look deliberate.
    if (u < 0 || u > 1 || v < 0 || v > 1) return;
    const round = (n: number) => Math.round(n * 1000) / 1000;

    if (selected) {
      // Dragging: re-place the selected anchor rather than adding another.
      setLabels((ls) => ls.map((l) => (l.id === selected ? { ...l, anchor: [round(u), round(v)] } : l)));
      return;
    }
    // The id is derived INSIDE the updater from the array itself, not from a
    // counter ref. A ref incremented in the handler is not idempotent, and the
    // first anchor placed here came out as `l2` — proof the handler can fire
    // twice for one tap. With a counter that is a cosmetic gap in the
    // numbering; with a double-fire that reaches the append it is two labels
    // sharing an id, which `validateLabelSet` refuses and which would read as
    // the editor being broken rather than the tap being doubled.
    let id = '';
    setLabels((ls) => {
      const next = ls.length + 1;
      id = `l${next}`;
      if (ls.some((l) => l.id === id)) return ls;
      return [
        ...ls,
        { id, text: { en: SUGGESTED[ls.length] ?? '', hi: '' }, anchor: [round(u), round(v)], side: 'auto' },
      ];
    });
    setSelected(id);
  };

  const patch = (id: string, p: Partial<AuthoredLabel>) =>
    setLabels((ls) => ls.map((l) => (l.id === id ? { ...l, ...p } : l)));

  const set: LabelSet = useMemo(
    () => ({
      asset_slug: PLACEHOLDER_SLUG,
      image_w: ART_W,
      image_h: ART_H,
      schema_version: LABEL_SET_SCHEMA_VERSION,
      ...(reviewer.trim() ? { reviewed_by: reviewer.trim() } : {}),
      labels,
    }),
    [labels, reviewer]
  );

  // Validated LIVE, against the same function the resolver runs. An editor that
  // exports a file the loader then refuses is an editor that wasted the
  // author's afternoon.
  const check = useMemo(() => validateLabelSet(set), [set]);
  const json = useMemo(() => JSON.stringify(set, null, 2), [set]);

  return (
    <SafeAreaView style={s.root}>
      <View style={s.bar}>
        <Pressable onPress={() => router.back()} hitSlop={10}>
          <Text style={s.back}>‹ Back</Text>
        </Pressable>
        <Text style={s.title}>Label editor · {PLACEHOLDER_SLUG}</Text>
      </View>

      <View
        style={s.stage}
        onLayout={(e: LayoutChangeEvent) =>
          setBox({ w: e.nativeEvent.layout.width, h: e.nativeEvent.layout.height })
        }
      >
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={(e) => onArt(e.nativeEvent.locationX, e.nativeEvent.locationY)}
        >
          <Image
            source={ART}
            style={{ position: 'absolute', left: fit.ox, top: fit.oy, width: fit.sW, height: fit.sH }}
            resizeMode="contain"
          />
          <Svg style={StyleSheet.absoluteFill}>
            {labels.map((l) => {
              const x = fit.ox + l.anchor[0] * fit.sW;
              const y = fit.oy + l.anchor[1] * fit.sH;
              const side = resolveSide(l.side, l.anchor[0]);
              const tx = side === 'left' ? fit.ox - 6 : fit.ox + fit.sW + 6;
              const on = l.id === selected;
              return (
                <React.Fragment key={l.id}>
                  {/* The leader is drawn at edit time for the same reason it is
                      drawn on the board: an anchor with no line to its term
                      looks correct from anywhere. */}
                  <Line x1={x} y1={y} x2={tx} y2={y} stroke={on ? colors.marigold : '#999'} strokeWidth={1.5} />
                  <Circle cx={x} cy={y} r={on ? 5 : 3} fill={on ? colors.marigold : '#333'} />
                </React.Fragment>
              );
            })}
          </Svg>
        </Pressable>
      </View>

      <Text style={s.hint}>
        {selected
          ? 'Tap the plate to move the selected anchor. Tap its row to deselect.'
          : 'Tap the plate to place an anchor.'}
      </Text>

      <ScrollView style={s.list}>
        {labels.map((l) => (
          <View key={l.id} style={[s.row, l.id === selected && s.rowOn]}>
            <Pressable onPress={() => setSelected(l.id === selected ? null : l.id)} hitSlop={6}>
              <Text style={s.rowId}>{l.id}</Text>
            </Pressable>
            <TextInput
              style={s.input}
              placeholder="English term"
              value={l.text.en}
              onChangeText={(t) => patch(l.id, { text: { ...l.text, en: t } })}
            />
            <TextInput
              style={s.input}
              placeholder="Hinglish (romanised)"
              value={l.text.hi}
              onChangeText={(t) => patch(l.id, { text: { ...l.text, hi: t } })}
            />
            <Pressable
              onPress={() => patch(l.id, { side: SIDES[(SIDES.indexOf(l.side) + 1) % SIDES.length] })}
              hitSlop={6}
            >
              {/* Shows the side as AUTHORED and the side it will actually
                  RESOLVE to. `t` and `b` cannot be honoured on a 2.09:1 board —
                  see resolveSide — and an author should see that here rather
                  than discover it on a device. */}
              <Text style={s.side}>
                {l.side}
                {l.side === 'l' || l.side === 'r' ? '' : ` → ${resolveSide(l.side, l.anchor[0])[0]}`}
              </Text>
            </Pressable>
            <Pressable onPress={() => setLabels((ls) => ls.filter((x) => x.id !== l.id))} hitSlop={6}>
              <Text style={s.del}>✕</Text>
            </Pressable>
          </View>
        ))}
        {SUGGESTED.length > labels.length && (
          <Text style={s.tray}>
            Not yet placed: {SUGGESTED.slice(labels.length).join(', ')}
          </Text>
        )}
      </ScrollView>

      <View style={s.footer}>
        <TextInput
          style={[s.input, s.reviewer]}
          placeholder="reviewed_by (who checked these anchors)"
          value={reviewer}
          onChangeText={setReviewer}
        />
        <Text style={check.ok ? s.ok : s.bad}>
          {check.ok ? '✓ valid — exportable' : check.errors.slice(0, 3).join(' · ')}
        </Text>
      </View>

      <ScrollView style={s.json} horizontal={false}>
        <Text selectable style={s.jsonText}>
          {json}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
  bar: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 12 },
  back: { fontFamily: 'Onest_600SemiBold', fontSize: 15, color: colors.ink },
  title: { fontFamily: 'Onest_700Bold', fontSize: 15, color: colors.ink },
  stage: { height: 260, backgroundColor: '#f4f4f4', marginHorizontal: 12, borderRadius: 8 },
  hint: { fontFamily: 'Onest_400Regular', fontSize: 12, color: '#666', padding: 8, paddingHorizontal: 14 },
  list: { maxHeight: 210, paddingHorizontal: 12 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 6, paddingVertical: 4 },
  rowOn: { backgroundColor: '#fff6e0', borderRadius: 6 },
  rowId: { fontFamily: 'Onest_600SemiBold', fontSize: 11, width: 26, color: colors.ink },
  input: {
    flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 6,
    paddingHorizontal: 8, paddingVertical: 5, fontFamily: 'Onest_400Regular', fontSize: 13,
  },
  side: { fontFamily: 'Onest_600SemiBold', fontSize: 12, color: colors.marigold, width: 52 },
  del: { fontSize: 14, color: '#c33', paddingHorizontal: 4 },
  tray: { fontFamily: 'Onest_400Regular', fontSize: 12, color: '#888', paddingVertical: 8 },
  footer: { padding: 12, gap: 6 },
  reviewer: { flex: 0 },
  ok: { fontFamily: 'Onest_600SemiBold', fontSize: 12, color: '#0a0' },
  bad: { fontFamily: 'Onest_400Regular', fontSize: 11, color: '#c33' },
  json: { maxHeight: 160, backgroundColor: '#fafafa', margin: 12, borderRadius: 6, padding: 8 },
  jsonText: { fontFamily: 'Menlo', fontSize: 10, color: '#333' },
});
