/**
 * VECTOR HATS IN A DRAWING'S OWN TEXT.
 *
 * k̂ is a k and U+0302, there being no single character for it (î and ĵ have
 * one, and NFC folds them to it). Onest's U+0302 has no advance and is drawn
 * centred on its own origin, so after a k the hat sits on the k's right edge,
 * half off it. react-native-svg then lays the mark out as a glyph of its own
 * and it floats beside the letter instead of over it (iPhone, 2026-11-05;
 * Physics 11, vector products: 148 of the 176 hats in the stored plans are k̂).
 *
 * The mark is therefore set by hand: a tspan shifted back by half the letter's
 * width, and a little up, because Onest's hat otherwise overlaps the top of a
 * k. A tspan splits a run, and react-native-svg places a split run wrongly
 * when the text is centred or right-aligned (the anchor is applied per run), so a
 * label with a hat is turned into a start-anchored one, with its x moved by
 * half or all of the width, from Onest's own advances (this table is read
 * from the font's hmtx; kerning is ignored, a pixel at label sizes).
 *
 * Plain `<text>` with a font-size and one x is handled. Anything else, a text
 * with its own tspans, a list of x values, a size in em, an anchor set on a
 * parent, is left exactly as it was: no change is better than a wrong one.
 */

const ADVANCES = (
  '20:270,21:273,22:359,23:653,24:656,25:804,26:677,27:222,28:308,29:308,2a:414,2b:550,2c:261,' +
  '2d:458,2e:254,2f:477,30:665,31:363,32:566,33:599,34:633,35:616,36:623,37:505,38:622,39:620,' +
  '3a:253,3b:261,3c:550,3d:550,3e:550,3f:513,40:983,41:670,42:655,43:704,44:720,45:610,46:599,' +
  '47:720,48:727,49:261,4a:558,4b:625,4c:574,4d:856,4e:741,4f:761,50:630,51:761,52:658,53:652,' +
  '54:569,55:726,56:683,57:983,58:593,59:614,5a:597,5b:321,5c:477,5d:321,5e:550,5f:463,60:559,' +
  '61:555,62:604,63:553,64:604,65:573,66:366,67:604,68:591,69:219,6a:254,6b:520,6c:219,6d:819,' +
  '6e:591,6f:595,70:604,71:604,72:373,73:509,74:370,75:576,76:536,77:843,78:515,79:597,7a:518,' +
  '7b:389,7c:261,7d:389,7e:550,a0:270,a1:273,a2:584,a3:584,a5:664,a7:550,a8:574,a9:927,aa:366,' +
  'ab:476,ae:483,af:563,b0:370,b1:550,b2:372,b3:399,b4:559,b6:635,b7:249,b8:598,b9:219,ba:387,' +
  'bb:476,bc:889,bd:920,be:981,bf:513,c0:670,c1:670,c2:670,c3:670,c4:670,c5:670,c6:923,c7:704,' +
  'c8:610,c9:610,ca:610,cb:610,cc:261,cd:261,ce:261,cf:261,d0:720,d1:741,d2:761,d3:761,d4:761,' +
  'd5:761,d6:761,d7:550,d8:761,d9:726,da:726,db:726,dc:726,dd:614,de:630,df:607,e0:555,e1:555,' +
  'e2:555,e3:555,e4:555,e5:555,e6:929,e7:553,e8:573,e9:573,ea:573,eb:573,ec:219,ed:219,ee:219,' +
  'ef:219,f0:573,f1:591,f2:595,f3:595,f4:595,f5:595,f6:595,f7:550,f8:595,f9:576,fa:576,fb:576,' +
  'fc:576,fd:597,fe:604,ff:597,100:670,101:555,102:670,103:555,104:670,105:555,106:704,107:553,' +
  '108:704,109:553,10a:704,10b:553,10c:704,10d:553,10e:720,10f:604,110:720,111:604,112:610,113:573,' +
  '114:610,115:573,116:610,117:573,118:610,119:573,11a:610,11b:573,11c:720,11d:604,11e:720,11f:604,' +
  '120:720,121:604,122:720,123:604,124:727,125:591,126:727,127:591,128:261,129:219,12a:261,12b:219,' +
  '12c:261,12d:219,12e:261,12f:219,130:261,131:219,132:749,133:460,134:558,135:254,136:625,137:520,' +
  '138:519,139:574,13a:219,13b:574,13c:219,13d:574,13e:179,13f:574,140:297,141:588,142:313,143:741,' +
  '144:591,145:741,146:591,147:741,148:591,149:686,14a:741,14b:591,14c:761,14d:595,14e:761,14f:595,' +
  '150:761,151:595,152:1120,153:985,154:658,155:373,156:658,157:373,158:658,159:373,15a:652,' +
  '15b:509,15c:652,15d:509,15e:652,15f:509,160:652,161:509,162:569,163:370,164:569,165:396,166:569,' +
  '167:370,168:726,169:576,16a:726,16b:576,16c:726,16d:576,16e:726,16f:576,170:726,171:576,172:726,' +
  '173:576,174:983,175:843,176:614,177:597,178:614,179:597,17a:518,17b:597,17c:518,17d:597,17e:518,' +
  '17f:303,2013:578,2014:759,2018:261,2019:261,201a:261,201c:450,201d:450,201e:450,2022:340,' +
  '2190:701,2191:701,2192:701,2193:701,2196:701,2197:701,2198:701,2199:701,21a9:1138,21b6:1012,' +
  '21b7:1012,21ba:937,21bb:937,2212:550,2248:550,2260:550,2264:550,2265:550,'
)
  .split(',')
  .filter(Boolean)
  .reduce<Record<number, number>>((acc, pair) => {
    const [cp, adv] = pair.split(':');
    acc[parseInt(cp, 16)] = Number(adv) / 1000;
    return acc;
  }, {});

/** An advance, in ems, for a character the table has no entry for. */
const UNKNOWN = 0.58;
/** Bold faces run about this much wider than the regular Onest the table was read from. */
const BOLD = 1.06;
/** How far a hat is raised, in ems, and how far back it goes is half its letter's width. */
const HAT_RAISE = 0.2;

const MARK = '\u0302';

/** Width in ems of a string, from Onest's advances. */
export function textWidthEm(s: string): number {
  let w = 0;
  for (const ch of s) w += ADVANCES[ch.codePointAt(0)!] ?? UNKNOWN;
  return w;
}

const num = (v: string | undefined): number | null => {
  if (v === undefined) return null;
  const m = /^\s*(-?\d+(?:\.\d+)?)(?:px)?\s*$/.exec(v);
  return m ? Number(m[1]) : null;
};

const attrOf = (attrs: string, name: string): string | undefined =>
  new RegExp(`(?:^|\\s)${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`).exec(attrs)?.slice(1).find((x) => x !== undefined);

const styleOf = (attrs: string, prop: string): string | undefined => {
  const style = attrOf(attrs, 'style');
  return style ? new RegExp(`(?:^|;)\\s*${prop}\\s*:\\s*([^;]+)`).exec(style)?.[1].trim() : undefined;
};

const decodeNumeric = (s: string) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)));

const escapeText = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const stripAttr = (attrs: string, name: string) =>
  attrs.replace(new RegExp(`\\s${name}\\s*=\\s*(?:"[^"]*"|'[^']*')`, 'g'), '');

const fmt = (n: number) => String(Math.round(n * 1000) / 1000);

/** Sets the hats in every simple `<text>` of a drawing; see the file comment. */
export function placeHats(svg: string): string {
  if (!/\u0302|&#x0*302;|&#770;/i.test(svg)) return svg;
  // An anchor on any element but a <text> may reach a <text> by inheritance.
  const inherited = /<(?!text\b)[a-z][^>]*\btext-anchor\s*[=:]/i.test(svg);
  return svg.replace(/<text\b([^>]*)>([^<]*)<\/text>/g, (whole, attrs: string, body: string) => {
    if (/\/\s*$/.test(attrs)) return whole;
    if (/&(?!#)/.test(body.replace(/&(amp|lt|gt|quot|apos);/g, ''))) return whole;
    const decoded = decodeNumeric(body).replace(/&(amp|lt|gt|quot|apos);/g, (m) =>
      ({ '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&apos;': "'" })[m]!
    );
    const text = decoded.normalize('NFC');
    // i + U+0302 and j + U+0302 fold to î and ĵ, which Onest draws itself.
    if (!text.includes(MARK)) return text === decoded ? whole : `<text${attrs}>${escapeText(text)}</text>`;

    const size = num(attrOf(attrs, 'font-size') ?? styleOf(attrs, 'font-size'));
    const x = num(attrOf(attrs, 'x'));
    if (size === null || x === null || attrOf(attrs, 'dx') !== undefined || attrOf(attrs, 'y') === undefined) return whole;
    const ownAnchor = attrOf(attrs, 'text-anchor') ?? styleOf(attrs, 'text-anchor');
    if (ownAnchor === undefined && inherited) return whole;
    if (ownAnchor !== undefined && !/^(start|middle|end)$/.test(ownAnchor)) return whole;
    const weight = attrOf(attrs, 'font-weight') ?? styleOf(attrs, 'font-weight') ?? '';
    const k = /^(bold|[6-9]00)$/.test(weight) ? BOLD : 1;

    // Runs of text, each ending in a letter that carries a hat.
    const runs: { text: string; hatOn?: string }[] = [];
    let run = '';
    for (const ch of Array.from(text)) {
      if (ch !== MARK) {
        run += ch;
        continue;
      }
      if (!run) return whole; // a mark with nothing under it
      runs.push({ text: run, hatOn: Array.from(run).pop() });
      run = '';
    }
    if (run) runs.push({ text: run });

    const width = textWidthEm(text.split(MARK).join('')) * k * size;
    const start = ownAnchor === 'middle' ? x - width / 2 : ownAnchor === 'end' ? x - width : x;

    // The hat has no advance: it goes back half its letter and up, and the run
    // after it starts where the letter ended and back on the baseline.
    let carry = '';
    const parts = runs.map((r) => {
      let out = `<tspan${carry}>${escapeText(r.text)}</tspan>`;
      carry = '';
      if (r.hatOn) {
        const back = (ADVANCES[r.hatOn.codePointAt(0)!] ?? UNKNOWN) * k * 0.5;
        out += `<tspan dx="${fmt(-back)}em" dy="${fmt(-HAT_RAISE)}em">${MARK}</tspan>`;
        carry = ` dx="${fmt(back)}em" dy="${fmt(HAT_RAISE)}em"`;
      }
      return out;
    });
    // A hat last in the label has nothing after it to put back; the baseline
    // only matters to a run that follows.

    const keep = stripAttr(stripAttr(attrs, 'text-anchor'), 'x');
    const style = attrOf(keep, 'style');
    const cleaned = style ? keep.replace(style, style.replace(/(^|;)\s*text-anchor\s*:[^;]*/g, '$1')) : keep;
    return `<text${cleaned} x="${fmt(start)}" text-anchor="start">${parts.join('')}</text>`;
  });
}
