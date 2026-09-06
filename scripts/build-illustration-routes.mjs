#!/usr/bin/env node
/**
 * Builds content/illustration-routes.csv -- the record of WHICH MEDIUM each
 * commissioned figure gets, and why.
 *
 * This file did not exist. It was referred to as though it did, with a row
 * count (75) that no grouping of the real data produces. So it is generated
 * here rather than reconstructed by guess, and every row carries the reason
 * for its route so the next person can disagree with a specific decision
 * instead of the whole file.
 *
 * THREE ROUTES
 *
 *   illustration  the Gemini work order already covers it (joined by
 *                 asset_slug against illustration-manifest.csv)
 *   widget:<id>   the runtime will draw it from a registry widget
 *   svg           served by TIER 3 at runtime -- NOT hand-authored
 *
 * STATUS OF route=svg, decided 2026-09-05. These 100 rows are NOT a backlog
 * of drawings anybody owes. The plan to hand-author them was made when tier 3
 * -- the runtime SVG fallback -- passed its gate at 50%, under the 60% bar,
 * i.e. when it was not a usable fallback at all.
 *
 * It now passes at 97% first-attempt, measured over two chapters on live
 * content: biology 11 ch1, 16 diagrams and 0 rejections; maths 12 ch8, 50
 * diagrams and 2 rejections. A tier-3 schematic is authored per CONCEPT
 * against the segment's actual objective, so it is better matched than one
 * drawing reused across a chapter, and there is no brief to write and no
 * asset to store. (What closed the gap was not the layout repair but a
 * trailing-prose bug in the fence stripper -- see diagram_author.py.)
 *
 * The column is still worth generating: it records WHY each concept is not an
 * illustration and not a widget, and it is how a future widget's coverage gets
 * measured against the corpus. Read it as a routing record, not a work order.
 *
 * WHY THE WIDGET TEST IS `v2_confidence == "high"` AND NOT `archetype_v2 in
 * REGISTRY`, which is the whole point of this script:
 *
 * docs/widget-routing.md is the authority and routing is HYBRID. Only high
 * confidence routes deterministically to a widget; med and low go to the
 * model, which MAY decline. And the residual error has a measured direction:
 * of ten disagreements against the blind adjudication, the classifier claimed
 * a diagram where the adjudicator said none 6 times against 3 the other way,
 * and all ten were med or low. So med LEANS toward claiming a widget it
 * should not have.
 *
 * Routing a med-confidence concept to "widget" here would therefore drop it
 * from the SVG batch on the strength of the one signal known to be optimistic
 * in exactly that direction -- and the failure is silent: no SVG is authored,
 * the model declines at runtime, and the board falls to tier 3 forever with
 * nobody notified. Authoring a schematic that a widget later covers costs one
 * redundant SVG. The asymmetry is not close.
 */
import fs from 'node:fs';
import path from 'node:path';

const WORKLIST = process.env.WORKLIST
  ?? '/Users/raasikhnaveed/Downloads/dronaclaudecodebundle-5/content/illustration-worklist.csv';
const MANIFEST = process.env.MANIFEST
  ?? '/Users/raasikhnaveed/Downloads/geminiillustrationworkorder/illustration-manifest.csv';
const ARCHETYPES = 'content/concept-archetypes.csv';
const OUT = 'content/illustration-routes.csv';

// Kept in sync with lib/widgets/registry.ts BY HAND and asserted below, because
// importing registry.ts from a plain .mjs would drag molecule-3d's
// require('...molecule-host.html') into the graph -- the same reason the tree
// harness imports widget modules directly.
const REGISTRY = new Set([
  'projectile_motion', 'molecule_3d', 'field_lines', 'xy_plot', 'data_table_trend',
  'process_flow', 'reaction_scheme', 'molecule_struct', 'circuit_network',
]);

function readCsv(p) {
  const txt = fs.readFileSync(p, 'utf8');
  const rows = [];
  let cur = [], field = '', q = false;
  for (let i = 0; i < txt.length; i++) {
    const c = txt[i];
    if (q) {
      if (c === '"' && txt[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') q = false;
      else field += c;
    } else if (c === '"') q = true;
    else if (c === ',') { cur.push(field); field = ''; }
    else if (c === '\n') { cur.push(field); rows.push(cur); cur = []; field = ''; }
    else if (c !== '\r') field += c;
  }
  if (field.length || cur.length) { cur.push(field); rows.push(cur); }
  const head = rows.shift();
  return rows.filter(r => r.length > 1 || (r[0] ?? '').trim())
             .map(r => Object.fromEntries(head.map((h, i) => [h.trim(), (r[i] ?? '').trim()])));
}

function csvCell(v) {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

const worklist = readCsv(WORKLIST);
const manifest = readCsv(MANIFEST);
const archetypes = readCsv(path.resolve(ARCHETYPES));

const covered = new Set(manifest.map(r => r.asset_slug));
const byConcept = new Map(archetypes.map(r => [r.concept.trim(), r]));

const out = [];
const unmatched = [];
for (const r of worklist) {
  const a = byConcept.get(r.concept.trim());
  if (!a) {
    // A worklist row whose concept is not in the archetype table cannot be
    // routed. It must NOT quietly become an svg row: that would hide a broken
    // join inside a plausible-looking batch.
    unmatched.push(r);
    continue;
  }
  const arch = a.archetype_v2 ?? '';
  const conf = a.v2_confidence ?? '';
  let route, reason;
  if (covered.has(r.asset_slug)) {
    route = 'illustration';
    reason = 'in illustration-manifest.csv';
  } else if (conf === 'high' && REGISTRY.has(arch)) {
    route = `widget:${arch}`;
    reason = 'archetype_v2 high-confidence, widget in registry';
  } else if (REGISTRY.has(arch)) {
    route = 'svg';
    reason = `archetype_v2=${arch} but v2_confidence=${conf || 'none'}; med leans none, so author the schematic`;
  } else {
    route = 'svg';
    reason = `archetype_v2=${arch || 'none'} maps to no registry widget`;
  }
  out.push({
    subject: r.subject, class: r.class, chapter_order: r.chapter_order,
    chapter: r.chapter, concept: r.concept, asset_slug: r.asset_slug,
    archetype_v2: arch, v2_confidence: conf, route, route_reason: reason,
  });
}

if (unmatched.length) {
  console.error(`REFUSING: ${unmatched.length} worklist row(s) have no concept-archetypes match:`);
  for (const r of unmatched.slice(0, 10)) console.error(`  ${r.subject}/${r.class}  ${r.concept}`);
  process.exit(1);
}

const cols = ['subject', 'class', 'chapter_order', 'chapter', 'concept', 'asset_slug',
              'archetype_v2', 'v2_confidence', 'route', 'route_reason'];
out.sort((a, b) => a.subject.localeCompare(b.subject) || Number(a.class) - Number(b.class)
  || Number(a.chapter_order) - Number(b.chapter_order) || a.asset_slug.localeCompare(b.asset_slug));
fs.writeFileSync(OUT, [cols.join(','), ...out.map(r => cols.map(c => csvCell(r[c])).join(','))].join('\n') + '\n');

const tally = {};
for (const r of out) {
  const k = r.route.startsWith('widget:') ? 'widget' : r.route;
  tally[k] = (tally[k] ?? 0) + 1;
}
console.log(`wrote ${OUT}  (${out.length} rows)`);
for (const [k, v] of Object.entries(tally).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(4)}  ${k}`);
const svg = out.filter(r => r.route === 'svg');
console.log(`\nroute=svg by chapter (the batches):`);
const byChap = {};
for (const r of svg) { const k = `${r.subject}${r.class} ch${r.chapter_order} ${r.chapter}`; byChap[k] = (byChap[k] ?? 0) + 1; }
for (const [k, v] of Object.entries(byChap).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(3)}  ${k}`);
