/**
 * THE ONE PAYLOAD VALIDATOR, callable from the server.
 *
 *   node scripts/validate-payload.mjs <payload.json>          # one payload
 *   node scripts/validate-payload.mjs <payloads.json> --many  # {key: payload}
 *   ... --json                                                # machine output
 *
 * exit 0 = every payload would draw, 1 = at least one is refused, 2 = could
 * not judge.
 *
 * WHY THIS EXISTS
 * ===============
 * Same shape as `gate-label-set.mjs`, and for the same reason. Each widget's
 * `validate()` is TypeScript and lives beside its renderer, which is correct:
 * whether a payload can be drawn is a question only the drawing code can
 * answer. But the server WRITES payloads, and it is Python — so it grew its
 * own idea of what a valid payload is, which was "the model named a registered
 * widget and the params are a dict".
 *
 * That is two validators with no mechanism to agree, and it already cost a
 * whole chapter: `reaction_scheme` caps a species label at 10 characters and a
 * reagent at 12, the server measured neither, and 37 of the 38 stored payloads
 * in chem12 ch8 were refused by the client at render time. They had passed the
 * server gate. Nobody found out because nothing ever asked the client.
 *
 * So the server stops guessing and asks this instead, on the exact params it
 * is about to store.
 *
 * WHAT IT DOES NOT DO. It does not judge whether the widget is the RIGHT one
 * for the segment, or whether the chemistry is correct. Those are review
 * questions. This answers exactly one: would the board draw this?
 */
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');

/*
 * The widget modules are TypeScript and node cannot import them. Transpiled
 * with the `typescript` the repo already pins and cached under build/, exactly
 * as the label gate does — no new runtime dependency for one script.
 *
 * `registry.ts` is deliberately NOT the entry point: it imports molecule-3d,
 * which `require`s an HTML file that a bare tsc emit cannot resolve. The list
 * below is the same closed set, and the fixture in
 * lib/widgets/__tests__/payload-validator.test.ts fails if the two drift.
 */
const WIDGETS = {
  projectile_motion: ['projectile-motion', 'projectileMotion'],
  field_lines: ['field-lines', 'fieldLines'],
  free_body_forces: ['free-body-forces', 'freeBodyForces'],
  xy_plot: ['xy-plot', 'xyPlot'],
  data_table_trend: ['data-table-trend', 'dataTableTrend'],
  process_flow: ['process-flow', 'processFlow'],
  reaction_scheme: ['reaction-scheme', 'reactionScheme'],
  molecule_struct: ['molecule-struct', 'moleculeStruct'],
  circuit_network: ['circuit-network', 'circuitNetwork'],
  lines_planes_3d: ['lines-planes-3d', 'linesPlanes3d'],
  // molecule_3d renders a WebView, not SVG; its validate() is reachable but
  // the module pulls an HTML asset through require(). Listed as unjudgeable
  // rather than silently absent — see UNJUDGEABLE below.
};
const UNJUDGEABLE = { molecule_3d: 'renders a WebView; its module require()s an HTML asset' };

function loadTs(relPaths) {
  const outDir = join(ROOT, 'build', 'payload-cli');
  mkdirSync(outDir, { recursive: true });
  const program = ts.createProgram(relPaths.map((r) => join(ROOT, r)), {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
    outDir, rootDir: ROOT, skipLibCheck: true, esModuleInterop: true,
    allowJs: true, resolveJsonModule: true, jsx: ts.JsxEmit.React, noEmitOnError: false,
  });
  program.emit();
  return outDir;
}

/*
 * STUBS, so node can import a module written for a phone.
 *
 * Every widget's index.tsx imports react, react-native-svg and often
 * reanimated — none of which node can load, and none of which `validate()`
 * touches. Node resolves `node_modules` by walking up from the importing
 * file, so stubs placed at the root of the build directory are found before
 * the real packages and nothing outside this script sees them.
 *
 * A Proxy rather than an empty object: these modules are destructured at
 * module scope (`import Svg, { Circle, G } from 'react-native-svg'`), and a
 * missing named export throws before validate() is ever reached. The Proxy
 * answers every name with a harmless component-shaped function.
 */
function writeStubs(outDir) {
  const nm = join(outDir, 'node_modules');
  // `default` resolves to the stub ITSELF, not to a bare function: the
  // transpiled code reaches through it — `reanimated.default.createAnimated
  // Component(...)` — and a plain function there throws at module scope,
  // before any validate() is reachable.
  const proxy = `
const h = () => null;
const base = {
  createAnimatedComponent: (c) => c,
  useAnimatedProps: (f) => (typeof f === 'function' ? f() : {}),
  useSharedValue: (v) => ({ value: v }),
  withTiming: (v) => v,
  Platform: { OS: 'ios', select: (o) => (o && (o.ios ?? o.default)) },
  StyleSheet: { create: (s) => s, hairlineWidth: 1, flatten: (s) => s },
};
const stub = new Proxy(base, {
  get: (t, k) => {
    if (k === '__esModule') return true;
    if (k === 'default') return stub;
    if (!(k in t)) t[k] = h;
    return t[k];
  },
});
module.exports = stub;
`;
  for (const pkg of ['react', 'react-native', 'react-native-svg',
                     'react-native-reanimated', 'react-native-webview',
                     'expo-file-system', 'expo-asset']) {
    mkdirSync(join(nm, pkg), { recursive: true });
    writeFileSync(join(nm, pkg, 'package.json'),
      JSON.stringify({ name: pkg, version: '0.0.0', main: 'index.js' }));
    writeFileSync(join(nm, pkg, 'index.js'), proxy);
  }
}

const OUT = loadTs(Object.values(WIDGETS).map(([dir]) => `lib/widgets/${dir}/index.tsx`));
writeStubs(OUT);

const mods = {};
for (const [id, [dir, exportName]] of Object.entries(WIDGETS)) {
  const m = await import(join(OUT, 'lib/widgets', dir, 'index.js'));
  mods[id] = m[exportName];
}

const [, , file, ...flags] = process.argv;
const asJson = flags.includes('--json');
const many = flags.includes('--many');
if (!file) {
  console.error('usage: node scripts/validate-payload.mjs <payload.json> [--many] [--json]');
  process.exit(2);
}

let raw;
try {
  raw = JSON.parse(readFileSync(file, 'utf8'));
} catch (e) {
  console.error(`could not read ${file}: ${e.message}`);
  process.exit(2);
}

function judge(p) {
  const widget = p?.widget;
  if (!widget) return { ok: false, widget: null, errors: ['payload has no `widget`'] };
  if (UNJUDGEABLE[widget]) return { ok: null, widget, errors: [UNJUDGEABLE[widget]] };
  const mod = mods[widget];
  if (!mod) return { ok: false, widget, errors: [`"${widget}" is not in the registry`] };
  const r = mod.validate(p.params ?? {});
  return { ok: r.ok, widget, errors: r.ok ? [] : r.errors };
}

const items = many ? Object.entries(raw) : [[file, raw]];
const results = items.map(([k, p]) => ({ key: k, ...judge(p) }));
const refused = results.filter((r) => r.ok === false);

if (asJson) {
  console.log(JSON.stringify({ ok: refused.length === 0, total: results.length, results }));
} else if (many) {
  const drew = results.filter((r) => r.ok === true).length;
  console.log(`${drew}/${results.length} would draw`);
  for (const r of refused) console.log(`REFUSED ${r.key}\n  ${r.errors.join('\n  ')}`);
} else {
  const r = results[0];
  console.log(r.ok === true ? 'payload would draw'
    : r.ok === null ? `cannot judge: ${r.errors[0]}`
    : `REFUSED: ${r.errors.join('; ')}`);
}
process.exit(refused.length === 0 ? 0 : 1);
