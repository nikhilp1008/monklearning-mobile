/**
 * A react-native-svg TEST TREE -> real SVG markup.
 *
 * The widgets render through `react-native-svg`, whose test tree is native
 * nodes (`RNSVGPath`) with native prop shapes (a colour is
 * `{type:0, payload:<uint32 ARGB>}`, not `#rrggbb`). That is unreadable to a
 * human and unrasterisable by anything. This converts one to the other so a
 * payload can be LOOKED AT in a review sheet.
 *
 * It is a review tool, not a second renderer: it never decides geometry, it
 * only transcribes what the real widget already produced. If it drew something
 * the device would not, the bug would be here and the sheet would be lying —
 * so it transcribes and nothing more.
 */
type Node = { type?: string; props?: Record<string, unknown>; children?: Node[] } | string | null;

/** `{type:0, payload:4288309778}` -> `#9a6bd2`. Alpha is the top byte. */
function colour(v: unknown): string | null {
  if (v == null) return 'none';
  if (typeof v === 'string') return v;
  const p = (v as { payload?: number }).payload;
  if (typeof p !== 'number') return null;
  const a = (p >>> 24) & 0xff;
  const r = (p >>> 16) & 0xff;
  const g = (p >>> 8) & 0xff;
  const b = p & 0xff;
  const hex = `#${[r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('')}`;
  return a === 255 ? hex : `${hex}${a.toString(16).padStart(2, '0')}`;
}

const CAP = ['butt', 'round', 'square'];
const JOIN = ['miter', 'round', 'bevel'];

function attrs(p: Record<string, unknown>): string {
  const out: string[] = [];
  const push = (k: string, v: unknown) => {
    if (v === undefined || v === null || v === '') return;
    out.push(`${k}="${String(v).replace(/"/g, '&quot;')}"`);
  };
  if ('fill' in p) push('fill', colour(p.fill));
  if ('stroke' in p) push('stroke', colour(p.stroke));
  push('stroke-width', p.strokeWidth);
  if (typeof p.strokeLinecap === 'number') push('stroke-linecap', CAP[p.strokeLinecap]);
  if (typeof p.strokeLinejoin === 'number') push('stroke-linejoin', JOIN[p.strokeLinejoin]);
  if (Array.isArray(p.strokeDasharray) && p.strokeDasharray.length) {
    push('stroke-dasharray', (p.strokeDasharray as number[]).join(','));
  }
  push('fill-opacity', p.fillOpacity);
  push('opacity', p.opacity);
  return out.length ? ' ' + out.join(' ') : '';
}

function textOf(n: Node): string {
  if (n == null) return '';
  if (typeof n === 'string') return n;
  const c = (n.props?.content as string) ?? '';
  return c + (n.children ?? []).map(textOf).join('');
}

export function treeToSvg(root: Node, width: number, height: number): string {
  const body: string[] = [];

  function walk(n: Node): void {
    if (n == null || typeof n === 'string') return;
    const p = (n.props ?? {}) as Record<string, unknown>;
    const kids = n.children ?? [];
    const num = (v: unknown) => (Array.isArray(v) ? v[0] : v);
    switch (n.type) {
      case 'RNSVGSvgView':
        kids.forEach(walk);
        return;
      case 'RNSVGGroup':
        body.push(`<g${attrs(p)}>`);
        kids.forEach(walk);
        body.push('</g>');
        return;
      case 'RNSVGPath':
        body.push(`<path d="${p.d}"${attrs(p)}/>`);
        return;
      case 'RNSVGCircle':
        body.push(`<circle cx="${p.cx}" cy="${p.cy}" r="${p.r}"${attrs(p)}/>`);
        return;
      case 'RNSVGEllipse':
        body.push(`<ellipse cx="${p.cx}" cy="${p.cy}" rx="${p.rx}" ry="${p.ry}"${attrs(p)}/>`);
        return;
      case 'RNSVGLine':
        body.push(`<line x1="${p.x1}" y1="${p.y1}" x2="${p.x2}" y2="${p.y2}"${attrs(p)}/>`);
        return;
      case 'RNSVGRect':
        body.push(`<rect x="${p.x}" y="${p.y}" width="${p.width}" height="${p.height}"`
                  + `${p.rx ? ` rx="${p.rx}"` : ''}${attrs(p)}/>`);
        return;
      case 'RNSVGText': {
        const f = (p.font ?? {}) as Record<string, unknown>;
        const anchor = f.textAnchor ? ` text-anchor="${f.textAnchor}"` : '';
        const size = f.fontSize ? ` font-size="${f.fontSize}"` : '';
        // The board's face is not installed on a rasteriser, and substituting
        // silently would misreport how wide a pill is. A generic stack is used
        // and SAID so rather than pretending the metrics match the device.
        body.push(`<text x="${num(p.x)}" y="${num(p.y)}"${size}${anchor}`
                  + ` font-family="Helvetica, Arial, sans-serif"${attrs(p)}>`
                  + `${textOf(n).replace(/[<&]/g, (c) => (c === '<' ? '&lt;' : '&amp;'))}</text>`);
        return;
      }
      default:
        kids.forEach(walk);
    }
  }

  walk(root);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" `
       + `viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" `
       + `fill="#FFFDF7"/>${body.join('')}</svg>`;
}
