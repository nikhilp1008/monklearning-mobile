/**
 * molecule_struct — `angle_override`, and the provenance word that goes with it.
 *
 * A separate file rather than more of lib/widgets/__tests__/physics.test.ts,
 * for two reasons: this is one parameter's whole contract and reads better
 * together, and those two shared files are being edited concurrently by the
 * agents working on xy_plot and circuit_network.
 *
 * THE ROUTE EVERY ASSERTION HERE TAKES IS THE RENDERED TREE OR THE FITTED
 * STRING — never the arithmetic that produced them. That is deliberate. The
 * implementation is `override ? override.bond : entry.bondAngle`, so
 * "an override equal to the table gives the table's number" is TRUE BY
 * CONSTRUCTION and asserting it proves nothing — the same shape of defect a
 * verifier found in circuit_network, whose `terminal_v === i_total * r_eq`
 * cannot fail. What is NOT true by construction, and is what these tests
 * actually pin down:
 *
 *   - that the readout's provenance word is decided by comparing the NUMBER
 *     against the table rather than by the presence of the key. An
 *     implementation that flipped to `measured` whenever `angle_override`
 *     existed would pass every arithmetic check and fail the tree comparison
 *     in the first describe below, because NH3's tree would gain a word.
 *   - that the idealised value is GONE from an overridden board — not just
 *     that the new one is present. `117.5` must appear nowhere in ozone's
 *     tree: not in the readout, not on the arc.
 *   - that the tag survives `fitReadout` at 343x236, which is a width
 *     measurement and cannot be reasoned about from the lookup at all.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { maxChars, PAD_SIDE, READOUT_SIZE } from '../../chrome';
import { renderWidgetTree, renderWidgetTreeAt } from '../../__tests__/test-utils';
import { moleculeStruct } from '../index';
import {
  AXE, AXE_KEYS, MAX_ANGLE_DEVIATION, MIN_OVERRIDE_ANGLE, MODES, TAG_IDEAL,
  TAG_IDEAL_SHORT, TAG_MEASURED, axeFor, drawnArcSeparation, drawnIsStraight,
  effectiveAngles, readoutText, readoutValue,
  type BondStyle, type MoleculeMode, type MoleculeStructParams,
} from '../vsepr-math';

const outDir = resolve(__dirname, '../../../../build/trees');

const SPEC_SMALL = { width: 343, height: 236 };
const REAL_SMALL = { width: 495, height: 270 };
const BOARD = { width: 900, height: 430 };
const BOARDS = [SPEC_SMALL, REAL_SMALL, BOARD];

function species(patch: Partial<MoleculeStructParams> & {
  centre: string; ligands: string[]; lone_pairs: number;
}): MoleculeStructParams {
  return {
    mode: 'electron_domain',
    bond_pairs: patch.ligands.length,
    bond_orders: patch.ligands.map(() => 1),
    bond_styles: patch.ligands.map(() => 'plain' as BondStyle),
    charge: 0,
    bracket: false,
    show_lone_pairs: true,
    show_angle: true,
    label: '',
    highlight_site: -1,
    ...patch,
  };
}

/** Every string the component actually put on the board. */
function texts(tree: unknown): string[] {
  const out: string[] = [];
  const walk = (n: unknown): void => {
    if (Array.isArray(n)) { for (const x of n) walk(x); return; }
    if (!n || typeof n !== 'object') return;
    const node = n as { props?: Record<string, unknown>; children?: unknown };
    const c = node.props?.content;
    if (typeof c === 'string') out.push(c);
    walk(node.children);
  };
  walk(tree);
  return out;
}

const render = (p: MoleculeStructParams, w: number, h: number) =>
  renderWidgetTreeAt(moleculeStruct, p, { highlight_site: p.highlight_site }, w, h);

const errorsOf = (r: ReturnType<typeof moleculeStruct.validate>) =>
  (r as { ok: false; errors: string[] }).errors.join(' | ');

/* ------------------------------------------------------- the four named cases */

/** O3. NCERT gives 117; the AX2E1 row derives 120 - 1*2.5 = 117.5. */
const OZONE = species({
  centre: 'O', ligands: ['O', 'O'], lone_pairs: 1, bond_orders: [2, 1],
  label: 'Ozone', angle_override: { bond: 117 },
});
/** SO2. NCERT gives ~119, from the SAME row as ozone — the whole complaint. */
const SO2 = species({
  centre: 'S', ligands: ['O', 'O'], lone_pairs: 1, bond_orders: [2, 2],
  label: 'Sulfur dioxide', angle_override: { bond: 119 },
});
/** NH3 107 — ALREADY what 109.5 - 1*2.5 produces. The override is a no-op. */
const AMMONIA = species({ centre: 'N', ligands: ['H', 'H', 'H'], lone_pairs: 1, label: 'Ammonia' });
/** H2O 104.5 — ALREADY 109.5 - 2*2.5. Also a no-op. */
const WATER = species({ centre: 'O', ligands: ['H', 'H'], lone_pairs: 2, label: 'Water' });
/**
 * SF4, the two-angle case the object shape exists for: measured 101.6
 * equatorial and ~87.4 axial-equatorial against the see-saw row's 117 / 89.
 */
const SF4 = species({
  centre: 'S', ligands: ['F', 'F', 'F', 'F'], lone_pairs: 1,
  label: 'Sulfur tetrafluoride', angle_override: { bond: 101.6, secondary: 87.4 },
});

describe('an override that AGREES with the table is inert', () => {
  /**
   * The strongest form of "changes nothing": the same payload with and
   * without the key renders the SAME TREE, at every board — same readout
   * string, same arc label, same boxes, same everything.
   *
   * This is the assertion that constrains the provenance logic. `overridden`
   * is computed by comparing numbers, not by asking whether the key is there;
   * had it been the latter, NH3's readout would gain the word `measured` here
   * and every one of these six comparisons would fail.
   */
  test.each([
    ['NH3 107, which is 109.5 - 1*2.5', AMMONIA, { bond: 107 }],
    ['H2O 104.5, which is 109.5 - 2*2.5', WATER, { bond: 104.5 }],
  ])('%s renders identically with and without the override', (_name, base, override) => {
    const withOverride = { ...base, angle_override: override };
    expect(moleculeStruct.validate(withOverride).ok).toBe(true);
    for (const box of BOARDS) {
      const plain = render(base, box.width, box.height);
      const overridden = render(withOverride, box.width, box.height);
      expect([box.width, JSON.stringify(overridden)])
        .toEqual([box.width, JSON.stringify(plain)]);
    }
  });

  test('and the readout still says it is a VSEPR value, because it is', () => {
    // The provenance word describes the NUMBER on the board, not the payload
    // that produced it. 107 is what the sp3 series derives whoever typed it.
    for (const box of BOARDS) {
      const line = readoutText({ ...AMMONIA, angle_override: { bond: 107 } }, box.width);
      expect([box.width, line]).toEqual([box.width, readoutText(AMMONIA, box.width)]);
      expect([box.width, /VSEPR/.test(line)]).toEqual([box.width, true]);
      expect([box.width, line.includes(TAG_MEASURED)]).toEqual([box.width, false]);
    }
  });

  test('effectiveAngles reports it as not overridden, and derive agrees', () => {
    const a = effectiveAngles({ ...WATER, angle_override: { bond: 104.5 } });
    expect([a.bond, a.secondary, a.overridden]).toEqual([104.5, 0, false]);
    const d = moleculeStruct.computeDerived({ ...WATER, angle_override: { bond: 104.5 } });
    expect(d.bond_angle_deg).toBe(moleculeStruct.computeDerived(WATER).bond_angle_deg);
  });
});

describe('an override that DISAGREES replaces the number everywhere', () => {
  test('ozone reports 117 and 117.5 is gone from the board entirely', () => {
    for (const box of BOARDS) {
      const drawn = texts(render(OZONE, box.width, box.height)).join(' | ');
      // The arc label AND the readout, both.
      expect([box.width, drawn.includes('117°')]).toEqual([box.width, true]);
      // The idealised value must not survive anywhere — this is the assertion
      // a "readout only" implementation fails, because the arc keeps its own
      // label and a student reads the picture before the strip.
      expect([box.width, drawn.includes('117.5')]).toEqual([box.width, false]);
      expect([box.width, drawn.includes(TAG_MEASURED)]).toEqual([box.width, true]);
      expect([box.width, /VSEPR/.test(drawn)]).toEqual([box.width, false]);
    }
  });

  test('SO2 and ozone come from ONE row and now read differently', () => {
    // The row is untouched and still cannot tell them apart: both are AX2E1
    // and both derive 117.5. Only the payloads differ.
    expect(axeFor(2, 1)!.bondAngle).toBe(117.5);
    expect(effectiveAngles({ ...OZONE, angle_override: undefined }).bond).toBe(117.5);

    const o3 = texts(render(OZONE, BOARD.width, BOARD.height)).join(' | ');
    const so2 = texts(render(SO2, BOARD.width, BOARD.height)).join(' | ');
    expect(o3.includes('117°')).toBe(true);
    expect(so2.includes('119°')).toBe(true);
    expect(so2.includes('117')).toBe(false);
  });

  test('SF4 overrides BOTH angles, and the line is measured throughout', () => {
    const line = readoutText(SF4, BOARD.width);
    expect(line).toContain('101.6°');
    expect(line).toContain('87.4°');
    expect(line).toContain(TAG_MEASURED);
    // Neither of the row's own numbers is left on a line calling itself
    // measured — the reason `secondary` is required on a two-angle row.
    expect(line).not.toContain('117°');
    expect(line).not.toContain('89°');
    const d = moleculeStruct.computeDerived(SF4);
    expect([d.bond_angle_deg, d.secondary_angle_deg]).toEqual([101.6, 87.4]);
    // The PARENT geometry's angle is never overridden, so a caption can still
    // contrast the measured value with the one VSEPR predicts.
    expect(d.ideal_angle_deg).toBe(axeFor(4, 1)!.idealAngle);
  });

  test('the three overridden payloads render, and their trees go to the gate', () => {
    mkdirSync(outDir, { recursive: true });
    const cases: Record<string, MoleculeStructParams> = { o3: OZONE, so2: SO2, sf4: SF4 };
    for (const [name, params] of Object.entries(cases)) {
      expect([name, moleculeStruct.validate(params).ok]).toEqual([name, true]);
      const full = renderWidgetTree(moleculeStruct, params, { highlight_site: -1 });
      expect(full).not.toBeNull();
      writeFileSync(
        resolve(outDir, `${moleculeStruct.id}@${moleculeStruct.version}.${name}.json`),
        JSON.stringify(full, null, 1)
      );
      for (const [suffix, box] of [['real-small', REAL_SMALL], ['spec-small', SPEC_SMALL]] as const) {
        const tree = render(params, box.width, box.height);
        expect([name, suffix, tree === null]).toEqual([name, suffix, false]);
        writeFileSync(
          resolve(outDir, `${moleculeStruct.id}@${moleculeStruct.version}.${name}.${suffix}.json`),
          JSON.stringify(tree, null, 1)
        );
      }
    }
  });
});

/* ------------------------------------------------------------- the readout */

describe('the readout names where its angle came from, at every board', () => {
  test('the component renders exactly the string readoutText produces', () => {
    // The premise the width sweep below rests on, checked once rather than
    // assumed: the sweep measures `readoutText`, so `readoutText` had better
    // be what reaches the board.
    for (const box of BOARDS) {
      const drawn = texts(render(OZONE, box.width, box.height));
      expect([box.width, drawn]).toEqual(
        [box.width, expect.arrayContaining([readoutText(OZONE, box.width)])]
      );
    }
  });

  /**
   * THE WIDTH MEASUREMENT, and the reason the ladder exists. `fitReadout`
   * truncates, so a tag that does not fit is a tag that silently is not there.
   * Every row, both modes that print an angle, all three boards.
   */
  test('the provenance word is never truncated away — 14 rows x 2 modes x 3 boards', () => {
    for (const key of AXE_KEYS) {
      const [bp, lp] = key.split('-').map(Number);
      for (const mode of MODES.filter((m) => m !== 'coordination')) {
        const p = species({
          centre: 'Xe', ligands: new Array<string>(bp).fill('F'), lone_pairs: lp,
          mode: mode as MoleculeMode, label: 'X'.repeat(24),
        });
        for (const box of BOARDS) {
          const line = readoutText(p, box.width);
          const where = `${key}/${mode}/${box.width}`;
          expect([where, line.includes(TAG_IDEAL) || line.includes(TAG_IDEAL_SHORT)])
            .toEqual([where, true]);
          // And it is not there by overflowing the line it has to share.
          const cap = maxChars(box.width - 2 * PAD_SIDE, READOUT_SIZE, line);
          expect([where, line.length <= cap]).toEqual([where, true]);
        }
      }
    }
  });

  test('an overridden line is never truncated away either', () => {
    // The measured tag is 8 characters against the ideal tag's 11, so it is
    // the easier of the two to fit — but "easier" is not "checked".
    for (const p of [OZONE, SO2, SF4]) {
      for (const box of BOARDS) {
        const line = readoutText(p, box.width);
        const where = `${p.centre}/${box.width}`;
        expect([where, line.includes(TAG_MEASURED)]).toEqual([where, true]);
        expect([where, line.length <= maxChars(box.width - 2 * PAD_SIDE, READOUT_SIZE, line)])
          .toEqual([where, true]);
      }
    }
  });

  /**
   * THE LADDER, as the arithmetic in vsepr-math.ts's header states it. At
   * 343x236 the budget is floor(319 / (14*0.58)) = 39 characters.
   */
  test('the ladder drops the hybridisation first and the shape last, at 39 chars', () => {
    const cap343 = maxChars(SPEC_SMALL.width - 2 * PAD_SIDE, READOUT_SIZE, 'latin');
    expect(cap343).toBe(39);

    // Rung 1 — everything fits: 'sp3   bent   104.5°   VSEPR ideal' = 33.
    expect(readoutValue(WATER, cap343)).toBe('sp3   bent   104.5°   VSEPR ideal');
    // Rung 2 — CH4's rung 1 is 40, one over, so the hybridisation goes.
    const ch4 = species({ centre: 'C', ligands: ['H', 'H', 'H', 'H'], lone_pairs: 0 });
    expect(readoutValue(ch4).length).toBe(40);
    expect(readoutValue(ch4, cap343)).toBe('tetrahedral   109.5°   VSEPR ideal');
    // Rung 3 — square pyramidal is 43 at rung 2, so the tag abbreviates.
    const brf5 = species({ centre: 'Br', ligands: ['F', 'F', 'F', 'F', 'F'], lone_pairs: 1 });
    expect(readoutValue(brf5, cap343)).toBe('square pyramidal   89° / 180°   VSEPR');
    // Rung 4 — trigonal bipyramidal is 41 even abbreviated, so the shape goes.
    const pcl5 = species({ centre: 'P', ligands: new Array<string>(5).fill('Cl'), lone_pairs: 0 });
    expect(readoutValue(pcl5, cap343)).toBe('120° / 90°   VSEPR');
    // Every one of those is under budget, which is the point of the ladder.
    for (const line of [readoutValue(WATER, cap343), readoutValue(ch4, cap343),
      readoutValue(brf5, cap343), readoutValue(pcl5, cap343)]) {
      expect([line, line.length <= cap343]).toEqual([line, true]);
    }
  });

  test('REGRESSION: PCl5 no longer loses its degree sign at 343x236', () => {
    // Before the ladder, the value string was 40 characters against a 39
    // budget and `fitReadout` sliced the last one off: the checked-in
    // pcl5.spec-small tree read `sp3d   trigonal bipyramidal   120° / 90`.
    // That defect predates this change and the ladder fixes it as a
    // side-effect, so it is pinned here rather than left to be re-found.
    const pcl5 = species({
      centre: 'P', ligands: new Array<string>(5).fill('Cl'), lone_pairs: 0,
      label: 'Phosphorus(V) chloride',
    });
    const line = readoutText(pcl5, SPEC_SMALL.width);
    expect(line).toContain('120° / 90°');
    expect(line.endsWith('90')).toBe(false);
  });

  test('coordination mode prints no angle and therefore no provenance word', () => {
    const fecn6 = species({
      centre: 'Fe', ligands: new Array<string>(6).fill('CN'), lone_pairs: 0,
      mode: 'coordination', charge: -4, bracket: true, show_lone_pairs: false,
      show_angle: false, label: 'Hexacyanoferrate(II)',
    });
    const line = readoutText(fecn6, BOARD.width);
    expect(line).toContain('ox +2');
    expect(line).not.toContain(TAG_IDEAL);
    expect(line).not.toContain(TAG_MEASURED);
  });
});

/* ------------------------------------------------------------- validate() */

describe('validate() and the drawn-geometry veto', () => {
  /**
   * The veto's premise, checked rather than assumed: `arc` really does span
   * two DRAWN bond sites in every row, so its sweep is the separation the
   * student sees between the two bonds the angle label sits between.
   */
  test('every row’s arc spans two of its own bond sites', () => {
    for (const key of AXE_KEYS) {
      const e = AXE[key];
      const at = (deg: number) => ((deg % 360) + 360) % 360;
      const sites = e.bondSites.map(at);
      expect([key, sites.includes(at(e.arc[0]))]).toEqual([key, true]);
      expect([key, sites.includes(at(e.arc[0] + e.arc[1]))]).toEqual([key, true]);
    }
  });

  /**
   * The DRAWING and the TABLE are authored independently — one for legibility,
   * one from NCERT — and this is the one place they are required to agree:
   * exactly the rows drawn collinear are the rows NCERT calls 180.
   *
   * That agreement is what makes the veto meaningful rather than circular. If
   * a future row ever drew a 175-degree species collinear, this fails here
   * instead of silently letting validate() demand 180 for it.
   */
  test('drawn-collinear and reported-180 are the same two rows', () => {
    const straight = AXE_KEYS.filter((k) => drawnIsStraight(AXE[k]));
    const flat = AXE_KEYS.filter((k) => AXE[k].bondAngle === 180);
    expect(straight.sort()).toEqual(flat.sort());
    expect(straight.sort()).toEqual(['2-0', '2-3']);
    expect(drawnArcSeparation(AXE['4-0'])).toBe(90);   // methane, drawn bent
  });

  test.each([
    [
      'a bare number',
      { ...OZONE, angle_override: 117 as unknown as { bond: number } },
      /must be an object like \{ bond: 117 \}/,
    ],
    [
      'an array',
      { ...OZONE, angle_override: [117] as unknown as { bond: number } },
      /must be an object like/,
    ],
    [
      'a typo’d key',
      { ...OZONE, angle_override: { bond_angle: 117 } as unknown as { bond: number } },
      /has no bond_angle key/,
    ],
    [
      'a NaN angle',
      { ...OZONE, angle_override: { bond: NaN } },
      /angle_override\.bond must be a finite number/,
    ],
    [
      'an Infinity angle',
      { ...OZONE, angle_override: { bond: Infinity } },
      /angle_override\.bond must be a finite number/,
    ],
    [
      'a reflex angle',
      { ...OZONE, angle_override: { bond: 200 } },
      /must be 60 to 180 degrees/,
    ],
    [
      'an angle below the domain',
      { ...OZONE, angle_override: { bond: 30 } },
      /must be 60 to 180 degrees/,
    ],
    [
      'an angle far from its own row',
      { ...OZONE, angle_override: { bond: 90 } },
      /27\.5° from the 117\.5°/,
    ],
    [
      '180 on a row that is drawn bent',
      { ...OZONE, angle_override: { bond: 180 } },
      /contradicts the drawing: this row is drawn bent/,
    ],
    [
      'a bent angle on a row drawn collinear (XeF2)',
      species({
        centre: 'Xe', ligands: ['F', 'F'], lone_pairs: 3,
        angle_override: { bond: 172.5 },
      }),
      /contradicts the drawing: this row draws its two bonds collinear/,
    ],
    [
      'a missing secondary on a two-angle row',
      { ...SF4, angle_override: { bond: 101.6 } },
      /has TWO distinct angles .* must supply secondary/s,
    ],
    [
      'a secondary on a one-angle row',
      { ...OZONE, angle_override: { bond: 117, secondary: 90 } },
      /has only one angle, so angle_override\.secondary has nothing to override/,
    ],
    [
      'a secondary far from its own row',
      { ...SF4, angle_override: { bond: 101.6, secondary: 130 } },
      /angle_override\.secondary 130° is 41\.0° from the 89°/,
    ],
    [
      'an override in coordination mode',
      species({
        centre: 'Fe', ligands: new Array<string>(6).fill('CN'), lone_pairs: 0,
        mode: 'coordination', charge: -4, bracket: true, show_lone_pairs: false,
        show_angle: false, angle_override: { bond: 90 },
      }),
      /prints no angle, so there is no line for angle_override to be attributed on/,
    ],
  ])('rejects %s with a readable message', (_name, payload, pattern) => {
    const r = moleculeStruct.validate(payload);
    expect(r.ok).toBe(false);
    expect(errorsOf(r)).toMatch(pattern);
  });

  test('accepts each of the four named cases, and 180 on a linear row', () => {
    for (const p of [OZONE, SO2, SF4,
      { ...AMMONIA, angle_override: { bond: 107 } },
      { ...WATER, angle_override: { bond: 104.5 } },
      // The only override a collinear row can carry — and it is inert.
      species({ centre: 'Xe', ligands: ['F', 'F'], lone_pairs: 3, angle_override: { bond: 180 } }),
    ]) {
      const r = moleculeStruct.validate(p);
      expect([p.centre, r.ok, r.ok ? '' : errorsOf(r)]).toEqual([p.centre, true, '']);
    }
  });

  test('the deviation window admits every real NCERT-level exception', () => {
    // The three widest gaps a real species has from its own row's idealised
    // value — the calibration MAX_ANGLE_DEVIATION is stated against.
    const widest = [
      ['SbH3', 91.7, axeFor(3, 1)!.bondAngle],   // 107   -> 15.3
      ['AsH3', 91.8, axeFor(3, 1)!.bondAngle],   // 107   -> 15.2
      ['SF4', 101.6, axeFor(4, 1)!.bondAngle],   // 117   -> 15.4
      ['H2S', 92.1, axeFor(2, 2)!.bondAngle],    // 104.5 -> 12.4
    ] as const;
    for (const [name, measured, table] of widest) {
      const gap = Math.abs(measured - table);
      expect([name, gap <= MAX_ANGLE_DEVIATION]).toEqual([name, true]);
      expect([name, measured >= MIN_OVERRIDE_ANGLE]).toEqual([name, true]);
    }
    // And the window is not so wide that a row confusion passes: a payload
    // that typed the AX2E1 row and meant a 90° one is 27.5° out and refused.
    // (Adjacent rows of this table are 2.5 apart, so no window of any width
    // could separate a genuine exception from a NEARBY mis-keyed row — the
    // window is a sanity bound, not a discriminator. See vsepr-math.ts.)
    expect(Math.abs(90 - axeFor(2, 1)!.bondAngle)).toBeGreaterThan(MAX_ANGLE_DEVIATION);
  });

  test('validate() never throws on a malformed override', () => {
    for (const junk of [null, 0, '117', [], { bond: '117' }, { bond: {} },
      { bond: 117, secondary: null }, { secondary: 90 }]) {
      expect(() => moleculeStruct.validate({ ...OZONE, angle_override: junk })).not.toThrow();
    }
  });

  test('a v1 payload — no override — validates to the same params it always did', () => {
    // Forward compatibility, at the only place it can be checked: the params
    // object a payload written before this parameter existed produces.
    const r = moleculeStruct.validate(AMMONIA);
    expect(r.ok).toBe(true);
    const params = (r as { ok: true; params: MoleculeStructParams }).params;
    expect('angle_override' in params).toBe(false);
    expect(moleculeStruct.version).toBe(2);
  });
});
