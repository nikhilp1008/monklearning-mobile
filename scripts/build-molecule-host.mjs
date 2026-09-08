/**
 * Builds assets/molecule-host.html — 3Dmol.js inlined with the postMessage bridge.
 *
 *   node scripts/build-molecule-host.mjs
 *
 * Why inline rather than a CDN <script src>: the classroom must render with no
 * network, and a CDN fetch per mount is exactly the failure mode that got the
 * old KaTeX WebView removed. Why an .html asset rather than a .ts string literal:
 * 'html' is already in Metro's default assetExts, so it bundles with no config
 * change and does not bloat the JS bundle or the diff.
 *
 * Run this in CI and fail the build if the output is missing or stale.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const lib = readFileSync(
  resolve(root, 'node_modules/3dmol/build/3Dmol-min.js'),
  'utf8'
);

const bridge = `
(function () {
  'use strict';
  var viewer = null;

  function send(msg) {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify(msg));
    }
  }

  function styleFor(rep) {
    switch (rep) {
      case 'space_filling': return { sphere: { scale: 1.0 } };
      case 'wireframe':     return { line: { linewidth: 2.5 } };
      case 'cartoon':       return { cartoon: { color: 'spectrum' } };
      default:              return { stick: { radius: 0.13 }, sphere: { scale: 0.23 } };
    }
  }

  function ensureViewer() {
    if (viewer) return viewer;
    viewer = window.$3Dmol.createViewer(document.getElementById('stage'), {
      backgroundAlpha: 0,
      antialias: true
    });
    return viewer;
  }

  function handle(raw) {
    var msg;
    try { msg = JSON.parse(raw); } catch (e) { return; }
    try {
      var v = ensureViewer();
      if (msg.type === 'load') {
        v.removeAllModels();
        var format = msg.sdf.indexOf('ATOM') === 0 || msg.sdf.indexOf('HEADER') === 0 ? 'pdb' : 'sdf';
        var model = v.addModel(msg.sdf, format);
        v.setStyle({}, styleFor(msg.representation));
        v.zoomTo();
        v.render();
        v.spin(msg.autoRotate ? 'y' : false);
        var atoms = model.selectedAtoms({}).length;
        // 3Dmol accepts unparseable input silently and yields an empty model.
        // Treat that as a failure so the caller can fall back to the cached still
        // rather than showing the student an empty box mid-lesson.
        if (atoms === 0) {
          send({ type: 'error', message: 'structure parsed to zero atoms' });
        } else {
          send({ type: 'rendered', atoms: atoms });
        }
      } else if (msg.type === 'style') {
        v.setStyle({}, styleFor(msg.representation));
        v.render();
      } else if (msg.type === 'spin') {
        v.spin(msg.on ? 'y' : false);
      } else if (msg.type === 'reset') {
        v.zoomTo();
        v.render();
      }
    } catch (err) {
      send({ type: 'error', message: String(err && err.message ? err.message : err) });
    }
  }

  // iOS delivers postMessage on window; Android on document. Bind both.
  window.addEventListener('message', function (e) { handle(e.data); });
  document.addEventListener('message', function (e) { handle(e.data); });

  send({ type: 'ready' });
})();
`;

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<style>
  html,body{margin:0;padding:0;height:100%;background:transparent;overflow:hidden;
    -webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
  #stage{position:absolute;inset:0}
</style>
</head>
<body>
<div id="stage"></div>
<script>${lib}</script>
<script>${bridge}</script>
</body>
</html>
`;

mkdirSync(resolve(root, 'assets'), { recursive: true });
writeFileSync(resolve(root, 'assets/molecule-host.html'), html, 'utf8');
console.log(
  'assets/molecule-host.html written:',
  (Buffer.byteLength(html) / 1024).toFixed(0) + ' KB'
);
