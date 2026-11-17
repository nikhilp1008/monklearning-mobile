import type { Topic } from '@/lib/textbooks';

/**
 * Chapter 11 Three Dimensional Geometry, Topics 04–05, pp. 725–742 of the
 * Class 12 Mathematics Master Reference (October 2026 edition), word for word:
 *   Topic 04 = the book's Subtopic 04 "The Perpendicular Toolkit: Distances,
 *              Feet & Images" (pp. 725–733),
 *   Topic 05 = Subtopic 05 "Line–Plane & Plane–Plane Configurations"
 *              (pp. 734–742; its header's "JEE-only" mark is the first line of
 *              its Exam relevance part).
 * The header lines ("Class 12 · Mathematics · Chapter 11 … · Subtopic 0N") are
 * not copied. Each topic opens with its "Exam Relevance:" box (and the
 * "merged subtopic" paragraph under it) as a part of its own, then is split at
 * its Sections 1 to 8; the "Cheat Sheet Box" is the part "Cheat sheet".
 * "Subtopic" / "Sub-04" → "topic" / "Topic 04". Figures stand where their
 * captions are printed: 11.5 (caption p. 727, drawn p. 728) after Theorem 1 of
 * Topic 04; 11.6 (caption p. 736, drawn p. 737) after Theorem 2 of Topic 05.
 * A vector is its letters and the combining arrow (escaped ARW) inside one <i>
 * (decision 36); unit vectors with hats. Every fraction is stacked (<frac>);
 * no em dashes.
 */
const fr = (a: string, b: string) => `<frac><num>${a}</num><den>${b}</den></frac>`;
const I = (s: string) => `<i>${s}</i>`;
/** A no-break space: keeps a short expression on one line. */
const NB = '\u00a0';
/** A word joiner after an opening modulus bar, so the bar never ends a line. */
const WJ = '\u2060';
/** The combining right arrow over a vector's letters. */
const ARW = '\u20d7';
/** The combining hat over a unit vector's letter. */
const HAT = '\u0302';
const ESTIMATE = '(the book’s estimate from past papers, not official figures)';

/** A vector: its letter(s) and the arrow, inside the italic (decision 36). */
const V = (s: string) => I(`${s}${ARW}`);
const ZERO = `0${ARW}`;
const ii = I('\u00ee');
const jj = I('\u0135');
const kk = I(`k${HAT}`);
const bhat = I(`b${HAT}`);

const sb = (base: string, s: string) => `${base}<sub>${s}</sub>`;
const sq = (s: string) => `${s}<sup>2</sup>`;
const md = (s: string) => `|${WJ}${s}|`;
const rt = (s: string) => `√(${s})`;
const rel = (lhs: string, op: string, rhs: string) => `${lhs}${NB}${op}${NB}${rhs}`;
/** A point or triple, its commas glued: (1, −1, 3). */
const pt = (...s: string[]) => `(${s.join(`,${NB}`)})`;
const dot = (u: string, v: string) => `${u}${NB}·${NB}${v}`;
/** Coefficients and unit vectors, as printed: ijk('', '+ 2', '+ 3') → i + 2j + 3k with hats. */
/** A lone sign gets its space before the unit vector: '−' → '− '. */
const op = (v: string) => (/^[+−]$/.test(v) ? `${v} ` : v);
const ijk = (u: string, v: string, w: string) => `${u}${ii} ${op(v)}${jj} ${op(w)}${kk}`;
/** Every space in a short expression made a no-break space, so it never wraps inside. */
const glue = (s: string) => s.replace(/ /g, NB);

const a = I('a');
const b = I('b');
const c = I('c');
const d = I('d');
const s = I('s');
const t = I('t');
const x = I('x');
const y = I('y');
const z = I('z');
const A = I('A');
const B = I('B');
const C = I('C');
const D = I('D');
const F = I('F');
const K = I('K');
const M = I('M');
const P = I('P');
const Q = I('Q');
const PF = I('PF');
const Pp = I('P′');
const Qp = I('Q′');
const PPp = I('PP′');
const la = I('λ');
const mu = I('μ');
const th = I('θ');
const L0 = sb(la, '0');
const x1 = sb(x, '1');
const y1 = sb(y, '1');
const z1 = sb(z, '1');

const va = V('a');
const vb = V('b');
const vn = V('n');
const vp = V('p');
const vr = V('r');
const vN = V('N');
const vP = V('P');
const vAP = V('AP');
const vFP = V('FP');
const vPF = V('PF');
const mb = md(vb);
const mb2 = `${mb}<sup>2</sup>`;
const mn = md(vn);
const mn2 = `${mn}<sup>2</sup>`;
const APb = dot(vAP, vb);
const APxb = md(`${vAP} × ${vb}`);
/** The same, glued inside its bars so the bars never tear: |AP × b|. */
const APxbG = md(`${vAP}${NB}×${NB}${vb}`);
const LAM0 = fr(APb, mb2);
const DLINE = fr(APxb, mb);
const FOOT_L = `${va} + ${L0}${vb}`;
const LINE = `${vr} = ${va} + ${la}${vb}`;
const PLN = `${a}${x1} + ${b}${y1} + ${c}${z1} + ${d}`;
const NRM2 = `${sq(a)} + ${sq(b)} + ${sq(c)}`;
const TT = fr(PLN, NRM2);
const DPLANE = fr(md(PLN), rt(NRM2));
const PLANE = `${a}${x} + ${b}${y} + ${c}${z} + ${d} = 0`;
const IMG = `${Pp} = 2${F} − ${P}`;
const FOOT_P = `${F} = ${P} − ${t}${vn}`;
const IMG_P = `${Pp} = ${P} − 2${t}${vn}`;
const PX = `${P}${pt(x1, y1, z1)}`;

// Topic 05
const vb1 = sb(vb, '1');
const vb2 = sb(vb, '2');
const va1 = sb(va, '1');
const va2 = sb(va, '2');
const vn1 = sb(vn, '1');
const vn2 = sb(vn, '2');
const vni = sb(vn, I('i'));
const P1 = sb(P, '1');
const P2 = sb(P, '2');
const Pi = sb(P, I('i'));
const a1 = sb(a, '1');
const b1 = sb(b, '1');
const c1 = sb(c, '1');
const d1 = sb(d, '1');
const a2 = sb(a, '2');
const b2 = sb(b, '2');
const c2 = sb(c, '2');
const d2 = sb(d, '2');
const bn = dot(vb, vn);
const BIS = `${fr(P1, md(vn1))}${NB}=${NB}±${NB}${fr(P2, md(vn2))}`;
const PLANE5 = `${A}${x} + ${B}${y} + ${C}${z} + ${D} = 0`;
const LINE5 = `${fr(`${x} − ${x1}`, a)} = ${fr(`${y} − ${y1}`, b)} = ${fr(`${z} − ${z1}`, c)}`;
const PARAM = `(${x1}${NB}+${NB}${a}${la}, ${y1}${NB}+${NB}${b}${la}, ${z1}${NB}+${NB}${c}${la})`;
const N_LP = `${vN} = ${vb} × (${vP} − ${va})`;
const N_II = `${vN} = ${vb1} × ${vb2}`;
const N_PAR = `${vN} = ${vb} × (${va2} − ${va1})`;
const PI2 = 'π′';

export const TOPICS: Topic[] = [
  // ──────────────── Topic 04 · pp. 725–733 ────────────────
  {
    n: '04',
    title: 'The Perpendicular Toolkit: Distances, Feet & Images',
    kalam: 'Master one idea (drop a perpendicular) and four formula families fall out at once.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `One of the most question-dense corners of the chapter ${ESTIMATE}. “Foot of perpendicular,” “image of a point,” and “perpendicular distance” appear in CBSE Boards (point-to-line) and almost every JEE Main paper ${ESTIMATE}, with JEE Advanced combining images and feet into multi-step locus and reflection problems. Master one idea (drop a perpendicular) and four formula families fall out at once.`,
      },
      {
        t: 'p',
        html: 'This <b>merged topic</b> has two halves bound by a single idea: <b>(04a)</b> dropping a perpendicular from a point to a line, and <b>(04b)</b> dropping one to a plane. In both, the foot, the distance, and the mirror image are three answers to the same construction.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: `Almost every “shortest”, “nearest”, “foot”, or “image” question in this chapter is the same physical act: stand at a point ${P} off to one side, and drop a perpendicular onto a line or a plane. Three things appear the instant you do:`,
      },
      {
        t: 'p',
        html: `• the <b>foot</b> ${F}: where the perpendicular lands,`,
      },
      {
        t: 'p',
        html: `• the <b>distance</b>: the length ${PF} of that perpendicular,`,
      },
      {
        t: 'p',
        html: `• the <b>image</b> ${Pp}: the mirror reflection of ${P}, found by continuing the perpendicular an equal distance through to the other side.`,
      },
      {
        t: 'p',
        html: `These are not three separate topics; they are three readings of one drawing. Find ${F} and you immediately get the distance (${md(PF)}) and the image (${IMG}, because ${F} is the midpoint of ${P} and its reflection). Which of the three a question asks for is almost cosmetic: the work is identical up to the last line. That is the single most reassuring fact about this topic: a dozen differently worded problems collapse to one routine, so your practice compounds quickly.`,
      },
      {
        t: 'p',
        html: `<b>Dropping onto a line.</b> Take a line ${LINE}. From the known point ${va} on the line, draw the arrow ${vAP} = ${vP} − ${va} to your external point. Now split that arrow into two parts: the part running along the line and the part sticking out perpendicular to it. The along-part has length equal to the projection of ${vAP} onto the direction ${vb}; sliding that far from ${va} lands you exactly at the foot ${F}. The out-part is the perpendicular distance, and the cleanest way to grab just that perpendicular piece is the cross product, since ${APxb} = ${md(vAP)}${md(vb)}${NB}sin${NB}${th} already isolates the perpendicular component.`,
      },
      {
        t: 'p',
        html: '<b>Think about it this way…</b> the dot product hands you the shadow along the line (giving the foot), while the cross product hands you the height above the line (giving the distance). Two products, two halves of the same right triangle.',
      },
      {
        t: 'p',
        html: `To make that split concrete, picture the arrow ${vAP} resting against the line at ${A}. Any vector can be resolved into a piece pointing <b>along</b> a chosen direction and a piece pointing <b>across</b> it. The along-piece is (${dot(vAP, bhat)})${NB}${bhat}, where ${bhat} is the unit direction: its length is the dot product with the unit vector, exactly the amount you must travel from ${A} to sit directly “below” ${P}. That landing spot is the foot ${F}. Whatever is left over, ${vAP} − (${dot(vAP, bhat)})${bhat}, points straight out from the line to ${P}, and its length is the perpendicular distance. The cross product is just a shortcut to that leftover length, because ${APxb} already strips out the along-component and keeps only the across-part (scaled by ${mb}, which is why we divide by ${mb} once at the end). So the dot and the cross are not two unrelated formulas: they are the two legs of one right-angled decomposition of ${vAP}.`,
      },
      {
        t: 'p',
        html: `<b>Dropping onto a plane.</b> A plane is even friendlier, because the perpendicular direction is handed to you for free: it is the plane’s normal ${vn}. So from ${P} you simply step along ${vn} until you hit the plane. How far to step is fixed by forcing the landing point to satisfy the plane equation, which gives a single number<br>${t} = ${TT}.<br>Step back ${t} normals (${FOOT_P}) to reach the foot, 2${t} normals (${IMG_P}) to reach the image, and the distance is ${md(t)} times the normal’s length.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> for a plane you never resolve anything: the normal is the perpendicular direction, so the entire job is “how many normals away is the plane?” That number is ${t}. There is nothing to decompose and no angle to chase; the plane case is genuinely easier than the line case, and recognising that asymmetry up front stops students from over-engineering plane problems with cross products they do not need.`,
      },
      {
        t: 'p',
        html: `Images are worth more than they first appear, because of a classic reflection principle. The shortest path from a point ${A} to a point ${B} on the same side of a given plane, which must first touch the plane, is found by reflecting one point across the plane: the straight segment from ${A} to the image ${I('B′')} crosses the plane at the optimal touch-point, and its length is the shortest possible total path. (If ${A} and ${B} lie on opposite sides, the segment ${I('AB')} already crosses the plane and no reflection is needed.) This is why “image of a point” questions are not idle exercises: they are the engine behind shortest-path, ray-reflection, and minimum-distance problems that JEE Advanced dresses up in physical language. Knowing that the foot is the midpoint of a point and its image lets you convert such a problem into a single straight-line distance.`,
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• The point-to-line distance ${DLINE} requires ${rel(vb, '≠', ZERO)}; the division by ${mb} (not ${mb2}) is essential because the cross product already carries one factor of ${mb}.`,
      },
      {
        t: 'p',
        html: `• The image satisfies ${IMG} only because ${F} is the midpoint of ${PPp}: true for reflection in both a line and a plane.`,
      },
      {
        t: 'p',
        html: `• For the plane formulas, write the plane as ${PLANE} (everything on one side); a constant on the wrong side flips the sign of ${t} and sends the foot the wrong way.`,
      },
      {
        t: 'p',
        html: `• If ${P} already lies on the line or plane, the distance is zero, the foot is ${P} itself, and the image coincides with ${P}: every formula above still returns these degenerate answers automatically (${L0} lands on ${P}; ${rel(t, '=', '0')}), so no special-casing is needed.`,
      },
      {
        t: 'p',
        html: 'The unifying picture to carry away: a foot is a point, a distance is a length, and an image is the foot’s reflection of the original point, and the only thing that differs between the line case and the plane case is how you locate the foot. For a line you must extract the perpendicular direction yourself (dot for along, cross for across); for a plane the perpendicular direction is gift-wrapped as the normal. Everything downstream of the foot is identical.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: `Distances are lengths; feet and images are points. The four formula families below all descend from one construction (dropping a perpendicular), so rather than memorising eight separate things, anchor on two questions: where does the perpendicular land (the foot) and how long is it (the distance); the image is then always 2${F} − ${P}.`,
      },
      {
        t: 'p',
        html: `<b>Point to a line (04a).</b> Line ${LINE}, external point ${P} (position vector ${vp}), ${vAP} = ${vp} − ${va}:`,
      },
      {
        t: 'formula',
        kicker: 'Point to a line',
        main: `Foot: ${L0} = ${LAM0}, ${F} = ${FOOT_L}<br><br>Distance: ${PF} = ${DLINE}<br>Image: ${IMG}`,
        legend: [
          `${va} = a known point on the line`,
          `${vb} = the line direction`,
          `${vAP} = the vector ${vp} − ${va}`,
          `${L0} = the parameter of the foot on the line`,
          `${F} = the foot of the perpendicular`,
          `${Pp} = the image (reflection) of ${P}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Point to a plane (04b).</b> Plane ${PLANE}, normal ${vn} = ${pt(a, b, c)}, point ${PX}, with<br>${t} = ${TT}:`,
      },
      {
        t: 'formula',
        kicker: 'Point to a plane',
        main: `${t} = ${TT}<br><br>Distance: ${DPLANE}<br>Foot: ${FOOT_P}<br>Image: ${IMG_P}`,
        legend: [
          `${vn} = the plane normal ${pt(a, b, c)}`,
          `${PX} = the given point`,
          `${t} = the number of normals to step back from ${P} to reach the plane (signed)`,
          `${F} = the foot of the perpendicular`,
          `${Pp} = the image (reflection) of ${P}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `In symmetric notation the foot and image lie along the normal through ${P}:<br>${fr(`${x} − ${x1}`, a)} = ${fr(`${y} − ${y1}`, b)} = ${fr(`${z} − ${z1}`, c)} = −${t}${NB}(foot),<br>= −2${t}${NB}(image).`,
      },
      {
        t: 'p',
        html: `<b>Notation key:</b> ${va} = a known point on the line; ${vb} = line direction; ${vAP} = ${vp} − ${va}; ${L0} = parameter of the foot on the line; ${F} = foot of perpendicular; ${Pp} = image (reflection); ${vn} = ${pt(a, b, c)} = plane normal; ${t} = the number of normals to step back from ${P} to reach the plane (signed).`,
      },
      {
        t: 'table',
        title: null,
        head: ['Drop onto', 'Foot', 'Distance', 'Image'],
        rows: [
          ['Line', `${va} + ${LAM0}${vb}<br>`, DLINE, `2${F} − ${P}`],
          ['Plane', `${P} − ${t}${vn}`, DPLANE, `${P} − 2${t}${vn}`],
        ],
      },

      { t: 'part', title: 'Theorems and procedures' },
      {
        t: 'p',
        html: `<b>Procedure & Theorem 1 (foot and distance, point to a line).</b> The foot of the perpendicular from ${P} to ${LINE} is ${F} = ${FOOT_L} with<br>${L0} = ${LAM0},${NB}and${NB}${PF} = ${DLINE}.`,
      },
      { t: 'fig', id: 'm12-11-fig-11.5' },
      {
        t: 'p',
        html: `<b>Proof.</b> A general point on the line is ${va}${NB}+${NB}${la}${vb},${NB}so<br>${vFP} = ${vp} − (${va} + ${la}${vb}) = ${vAP} − ${la}${vb}.<br>The foot is where this is perpendicular to the line, i.e. ${rel(dot(vFP, vb), '=', '0')}:<br>(${vAP} − ${la}${vb})${NB}·${NB}${vb} = 0<br>⇒ ${APb} − ${la}${mb2} = 0<br>⇒ ${L0} = ${LAM0}.<br>Substituting gives ${F}. For the distance, decompose ${vAP} into parts parallel and perpendicular to ${vb}; the perpendicular part has length ${md(vAP)}${NB}sin${NB}${th}, where ${th} is the angle between ${vAP} and ${vb}. Since ${APxb} = ${md(vAP)}${md(vb)}${NB}sin${NB}${th}, dividing by ${mb} isolates exactly that perpendicular length:<br>${PF} = ${DLINE}. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2 (foot and image, point to a plane).</b> For ${PX} and plane ${PLANE}, the foot is ${FOOT_P} and the image is ${IMG_P}, with<br>${t} = ${TT}.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> The perpendicular from ${P} to the plane runs along the normal ${vn} = ${pt(a, b, c)}, so any point on it is<br>${P} − ${s}${vn} = (${x1} − ${s}${a},${NB}${y1} − ${s}${b},${NB}${z1} − ${s}${c}).<br>It meets the plane when it satisfies<br>${a}(${x1} − ${s}${a}) + ${b}(${y1} − ${s}${b})${NB}+<br>${c}(${z1} − ${s}${c}) + ${d} = 0,${NB}i.e.<br>(${PLN}) − ${s}(${NRM2}) = 0,<br>giving${NB}${s} = ${t} = ${TT}.<br>Hence the foot ${FOOT_P}. The image is the reflection, reached by stepping twice as far: ${IMG_P}, which automatically makes ${F} the midpoint of ${PPp}. The distance<br>${PF} = ${md(t)}${NB}${mn} = ${DPLANE}. ■`,
      },
      {
        t: 'p',
        html: `The single number ${t} deserves emphasis because it is the hinge of the entire plane case. It answers “how many copies of the normal vector must I lay end-to-end, starting at ${P}, to reach the plane?” Once you know that count, the foot is ${P} minus that many normals, the image is ${P} minus twice that many (overshooting symmetrically to the far side), and the distance is that count times the normal’s length. Three distinct geometric objects (a point on the plane, a mirrored point, and a length) all fall out of one scalar, which is why examiners can ask for any of them with equal ease and why computing ${t} first is always the efficient opening move.`,
      },
      {
        t: 'proc',
        title: 'Procedure: image of a point (either case), in three steps',
        steps: [
          `Find the foot ${F} by the appropriate method above.`,
          `Use ${F} as the midpoint of ${P} and its image.`,
          `Solve ${F} = ${fr('1', '2')}(${P} + ${Pp}) for ${IMG}.`,
        ],
      },
      {
        t: 'p',
        html: `The same three steps reflect a point in a line and in a plane; only the foot-finding differs. For instance, if a computation gives foot ${F} = ${pt('2', '1', '0')} for an original point ${P} = ${pt('0', '3', '4')}, the image is read off immediately as<br>${Pp} = 2${pt('2', '1', '0')} − ${pt('0', '3', '4')} = ${pt('4', '−1', '−4')},<br>no further geometry required: the midpoint relation does all the work.`,
      },
      {
        t: 'p',
        html: `<b>Theorem 3 (two equivalent routes to the point–line distance).</b> The distance ${PF} may be found either as ${md(`${P} − ${F}`)} after locating the foot, or directly as ${DLINE} without ever finding the foot.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> The first route is definitional: once ${F} = ${FOOT_L} is known, ${PF} = ${md(`${P} − ${F}`)} is an ordinary distance. The second route avoids ${F} entirely. From the decomposition ${vAP} = ${vAP}<sub>∥</sub> + ${vAP}<sub>⊥</sub> into components along and across ${vb}, the perpendicular distance is ${md(`${vAP}<sub>⊥</sub>`)} = ${md(vAP)}${NB}sin${NB}${th}, and since ${APxb} = ${md(vAP)}${md(vb)}${NB}sin${NB}${th}, dividing by ${mb} returns exactly ${md(vAP)}${NB}sin${NB}${th}. The two routes must agree, which gives a built-in check: if ${md(`${P} − ${F}`)} and ${DLINE} disagree, an arithmetic slip has occurred. In exams, the cross-product route is faster when only the distance is wanted; the foot route is unavoidable when the foot or image is also required. ■`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'CBSE Board Level (Foot, distance, image: point to a line)',
        q: `Find the foot of the perpendicular, the distance, and the image of ${P}${pt('2', '4', '1')} in the line ${vr} = (${ijk('', '+ 2', '+ 3')}) + ${la}(${ijk('', '−', '+')}).`,
        steps: [
          `Here ${va} = ${pt('1', '2', '3')}, ${vb} = ${pt('1', '−1', '1')}, ${mb2} = 3, and ${vAP} = ${pt('1', '2', '−2')}.`,
          `${L0} = ${LAM0} = ${fr('1 − 2 − 2', '3')} = −1<br>⇒ ${F} = ${va} − ${vb} = ${pt('0', '3', '2')}.`,
          `Distance: ${vAP} × ${vb} = ${pt('1', '2', '−2')} × ${pt('1', '−1', '1')} = ${pt('0', '−3', '−3')}, so<br>${PF} = ${fr(md(pt('0', '−3', '−3')), '√3')} = ${fr('3√2', '√3')} = √6.`,
          `Image: ${IMG} = (0${NB}−${NB}2,${NB}6${NB}−${NB}4,${NB}4${NB}−${NB}1)${NB}=${NB}${pt('−2', '2', '3')}. (Check: ${vPF} = ${pt('−2', '−1', '1')} and ${dot(vPF, vb)} = −2 + 1 + 1 = 0 ✓, genuinely perpendicular.)`,
          `Two habits make this example a template for all the rest. First, compute ${L0} before anything else; it converts the abstract “somewhere on the line” into the concrete foot ${F}, after which distance and image are trivial. Second, always run the perpendicularity check ${rel(dot(vPF, vb), '=', '0')}: it costs one line and catches almost every arithmetic slip in ${L0}, because a wrong foot will fail it immediately.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap (Point–line distance)',
        q: `Find the distance of ${pt('1', '0', '2')} from the${NB}line through ${pt('3', '1', '1')} with direction ${pt('2', '2', '1')}.`,
        steps: [
          `${vAP} = (1${NB}−${NB}3,${NB}0${NB}−${NB}1,${NB}2${NB}−${NB}1) = ${pt('−2', '−1', '1')}, ${vb} = ${pt('2', '2', '1')}.`,
          `${vAP} × ${vb} = ${pt('−3', '4', '−2')}, ${APxbG} = √(9${NB}+${NB}16${NB}+${NB}4)${NB}=${NB}√29, ${mb} = 3.`,
          `Distance = ${fr('√29', '3')}.`,
          `<b>The trap:</b> the denominator is ${mb} = 3, <b>not</b> ${mb2} = 9 and certainly not absent. The cross product already contains one factor of ${mb}, so you divide by exactly one more. Students who write ${fr('√29', '9')} over-divided; those who write √29 forgot the denominator entirely. A reliable way to never misremember this: dimensionally, ${APxb} behaves like (length)×(length of ${vb}), so to recover a pure length you must cancel one power of ${mb}: one division, never two.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Multi-concept (Foot, distance, image: point to a plane)',
        q: `Find the foot of the perpendicular, the distance, and the image of ${P}${pt('4', '1', '3')} in the plane ${x} − 2${y} + 2${z} − 5 = 0.`,
        steps: [
          `Normal ${vn} = ${pt('1', '−2', '2')}, ${mn2} = 9. Compute ${t}:<br>${t} = ${fr('(4) − 2(1) + 2(3) − 5', '9')} = ${fr('4 − 2 + 6 − 5', '9')} = ${fr('3', '9')} = ${fr('1', '3')}.`,
          `Foot: ${FOOT_P}<br>= (4 − ${fr('1', '3')},${NB}1 + ${fr('2', '3')},${NB}3 − ${fr('2', '3')})<br>= (${fr('11', '3')},${NB}${fr('5', '3')},${NB}${fr('7', '3')}).`,
          `Distance: ${md(t)}${NB}${mn} = ${fr('1', '3')}${NB}·${NB}3 = 1 unit (equivalently ${fr('|3|', '√9')} = 1).`,
          `Image: ${IMG_P}<br>= (4 − ${fr('2', '3')},${NB}1 + ${fr('4', '3')},${NB}3 − ${fr('4', '3')})<br>= (${fr('10', '3')},${NB}${fr('7', '3')},${NB}${fr('5', '3')}).`,
          `Three answers from one number ${t}: the multi-concept efficiency the examiners are testing. Observe the internal consistency: the foot is one normal-step (−${t}${vn}) from ${P}, the image is two (−2${t}${vn}), so the foot is automatically the midpoint of ${P} and ${Pp}: you can confirm this in your head by averaging ${P} and ${Pp} coordinatewise and recovering ${F}. A neat sign-check: ${t} = ${fr('1', '3')} is positive, meaning ${P} sits on the positive side of the plane (where ${x} − 2${y} + 2${z} − 5 > 0), so the correcting step −${t}${vn} moves ${P} toward the plane, exactly as it must.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced (Image of a point in a line)',
        q: `Find the image of ${P}${pt('1', '6', '3')} in the line ${vr} = (${jj} + 2${kk}) + ${la}(${ijk('', '+ 2', '+ 3')}).`,
        steps: [
          `${va} = ${pt('0', '1', '2')}, ${vb} = ${pt('1', '2', '3')}, ${mb2} = 14, ${vAP} = ${pt('1', '5', '1')}.`,
          `${L0} = ${LAM0} = ${fr('1 + 10 + 3', '14')} = ${fr('14', '14')} = 1<br>⇒ ${F} = ${va} + ${vb} = ${pt('1', '3', '5')}.`,
          `Image: ${IMG} = ${glue('(2 − 1, 6 − 6, 10 − 3)')} = ${pt('1', '0', '7')}.`,
          `Verification: ${vPF} = ${pt('0', '−3', '2')}, and ${dot(vPF, vb)}${NB}= 0${NB}−${NB}6${NB}+${NB}6${NB}=${NB}0${NB}✓; the midpoint of ${P}${pt('1', '6', '3')} and ${Pp}${pt('1', '0', '7')} is ${pt('1', '3', '5')} = ${F} ✓.`,
          `The clean integer ${rel(L0, '=', '1')} is the hallmark of a well-posed reflection problem. When the algebra is heavier than this (large ${mb2}, fractional ${L0}), the method does not change one bit; only the arithmetic does. That invariance is the point of practising on clean numbers first: the procedure (foot via projection, image via 2${F} − ${P}) is identical whether ${L0} is 1 or ${fr('17', '43')}, so once the steps are automatic, messy coefficients become a calculator exercise rather than a conceptual one.`,
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[CBSE]</b> Find the foot of the perpendicular from ${P}${pt('1', '2', '3')} to the line ${vr} = (${ijk('6', '+ 7', '+ 7')}) + ${la}(${ijk('3', '+ 2', '− 2')}).`,
            a: `${pt('3', '5', '9')}: here ${APb} = −17 and ${mb2} = 17, so ${rel(L0, '=', '−1')} and ${F} = ${va} − ${vb}.`,
          },
          {
            q: `<b>[CUET / JEE Main]</b> Find the perpendicular distance of ${pt('2', '3', '−1')} from the line through the origin with direction ${pt('1', '2', '2')}.`,
            a: `√10 units (${vAP} × ${vb} = ${pt('8', '−5', '1')}, ${md('·')}${NB}=${NB}3√10, divided by ${mb}${NB}=${NB}3)`,
          },
          {
            q: `<b>[JEE Main]</b> Find the distance and the foot of the perpendicular from ${pt('3', '−2', '1')} to the plane 2${x} − ${y} + 2${z} + 3 = 0.`,
            a: `Distance ${fr('13', '3')}; foot (${fr('1', '9')},${NB}−${fr('5', '9')},${NB}−${fr('17', '9')}):<br>with ${t} = ${fr('13', '9')} and ${vn} = ${pt('2', '−1', '2')}, foot${NB}=${NB}${P}${NB}−${NB}${t}${vn}.`,
          },
          {
            q: `<b>[JEE Main]</b> Find the image of the point ${pt('1', '3', '4')} in the plane 2${x} − ${y} + ${z} + 3 = 0.`,
            a: `${pt('−3', '5', '2')}: ${t} = ${fr('6', '6')} = 1, image = ${P} − 2${vn} with ${vn} = ${pt('2', '−1', '1')}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the image of ${pt('2', '−1', '5')} in the line ${glue(`${vr} = (${ijk('11', '− 2', '− 8')}) + ${la}(${ijk('10', '− 4', '− 11')})`)}.`,
            a: `${pt('0', '5', '1')}: ${APb} = −237 = −${mb2}, so ${rel(L0, '=', '−1')}, ${F} = ${pt('1', '2', '3')}, image = 2${F} − ${P}.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The perpendicular distance of ${P}${pt('1', '4', '1')} from the line through ${A}${pt('1', '1', '1')} with direction ${vb} = ${pt('2', '1', '2')} is`,
        opts: [
          { label: '2√2', nudge: null },
          { label: fr('2√2', '3'), nudge: `<b>(B)</b> divides by ${mb2} = 9 instead of ${mb} = 3.` },
          { label: '6√2', nudge: '<b>(C)</b> drops the denominator entirely.' },
          { label: '3√2', nudge: `<b>(D)</b> halves 6√2 instead of dividing it by ${mb} = 3.` },
        ],
        correct: 0,
        solution: `${vAP} = ${pt('0', '3', '0')}; ${vAP} × ${vb} = ${pt('6', '0', '−6')}, magnitude ${rt('36 + 0 + 36')} = 6√2; with ${mb} = 3, distance = ${fr('6√2', '3')} = 2√2. The structure to remember: cross product over ${mb}, divided <b>once</b>.`,
      },
      {
        t: 'mcq',
        q: `The foot of the perpendicular from ${P}${pt('1', '2', '−1')} to the plane 2${x} − ${y} + 2${z} + 1 = 0 is ${FOOT_P}, where ${vn} = ${pt('2', '−1', '2')} and ${t} =`,
        opts: [
          { label: fr('−1', '9'), nudge: null },
          { label: fr('1', '3'), nudge: `<b>(B)</b> divides by ${mn} = 3 instead of ${mn2} = 9 and drops the sign: that is the distance, not ${t}.` },
          { label: fr('−1', '3'), nudge: `<b>(C)</b> divides by ${mn} = 3 instead of ${mn2} = 9: that is the signed distance, not ${t}.` },
          { label: '9', nudge: '<b>(D)</b> inverts the fraction and drops its sign.' },
        ],
        correct: 0,
        solution: `${t} = ${fr('2(1) − 2 + 2(−1) + 1', '4 + 1 + 4')} = ${fr('2 − 2 − 2 + 1', '9')} = ${fr('−1', '9')}. The defining difference: ${t} divides by ${mn2} because it scales the vector ${vn} to reach the plane, whereas the distance divides by ${mn} because it converts that vector step into a pure length.`,
      },
      {
        t: 'mcq',
        q: `The image of ${P} in a line, given the foot of perpendicular is ${F}, is`,
        opts: [
          { label: `2${F} − ${P}`, nudge: null },
          { label: `${F} − ${P}`, nudge: '<b>(B)</b> is the displacement, not a point.' },
          { label: fr(`${P} + ${F}`, '2'), nudge: `<b>(C)</b> is the midpoint of ${P} and ${F}: half the needed step.` },
          { label: `2${P} − ${F}`, nudge: `<b>(D)</b> reflects the wrong point (it images ${F} in ${P}).` },
        ],
        correct: 0,
        solution: `${F} is the midpoint of ${P} and its image ${Pp}, so ${F} = ${fr('1', '2')}(${P} + ${Pp}) ⇒ ${IMG}. The relation ${IMG} is the single most reused identity in this topic; memorise it as “twice the foot, minus the point.”`,
      },
      {
        t: 'mcq',
        q: `The distance of ${pt('1', '1', '1')} from the plane ${x} + 2${y} + 2${z} + 5 = 0 is`,
        opts: [
          { label: fr('10', '3'), nudge: null },
          { label: '10', nudge: '<b>(B)</b> forgets the denominator.' },
          { label: fr('10', '9'), nudge: `<b>(C)</b> divides by ${mn2} = 9.` },
          { label: fr('5', '3'), nudge: '<b>(D)</b> mistakenly halves the numerator.' },
        ],
        correct: 0,
        solution: `${fr(md('1 + 2 + 2 + 5'), rt('1 + 4 + 4'))} = ${fr('10', '3')}. The distance formula always reads “absolute value of the plane expression at the point, over the length of the normal”: the modulus guarantees a non-negative answer regardless of which side of the plane the point lies on.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Dividing point–line distance by ${mb2}.</b> The cross product already carries one ${mb}; divide by ${mb} exactly once.`,
          `<b>Reporting the foot as the image.</b> The image is 2${F} − ${P}, not ${F}. The foot is the midpoint of the point and its image.`,
          `<b>Confusing ${t} with the distance.</b> ${t} = ${TT} divides by ${mn2}; the distance divides by ${mn}. They differ by a factor of ${mn}.`,
          `<b>Stepping the normal the wrong way.</b> Use ${FOOT_P} (note the minus); writing ${P} + ${t}${vn} steps away from the plane, to a point on the same side twice as far from it.`,
          `<b>Skipping the perpendicularity check on the line foot.</b> A wrong ${L0} produces a plausible-looking but wrong ${F}; the one-line test ${rel(dot(vPF, vb), '=', '0')} exposes it instantly.`,
          `<b>Treating ${t} as the perpendicular foot offset in coordinates directly.</b> The step from ${P} to ${F} is −${t}${vn}, a vector scaled by ${t}, not ${t} added to each coordinate.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (one foot, three answers):</b> never solve a “distance / foot / image” set separately. Find the foot ${F} first; the distance is ${md(PF)} and the image is 2${F} − ${P}. Three marks from one computation.`,
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (which tool):</b> dropping onto a <b>line</b> needs both a dot product (for the foot) and a cross product (for the distance); dropping onto a <b>plane</b> needs neither: just the single number ${t}, because the normal is the ready-made perpendicular direction.`,
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (reflections solve shortest-path):</b> if a problem asks for the minimum total distance of a path that must meet a plane, with both endpoints on the same side of it, reflect one endpoint across the plane and join it to the other endpoint with a straight segment. The segment’s length is the answer and its crossing point is the optimal contact point: an image computation in disguise.',
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (sign of ${t} locates the side):</b> a positive ${t} means ${P} lies on the side where the plane expression is positive, a negative ${t} the other side, and ${rel(t, '=', '0')} means ${P} is already on the plane. Reading the sign before computing gives a free check on the direction of the corrective step. This also lets you answer “are these two points on the same side of the plane?” without any distance work: just compare the signs of the plane expression at each point; same sign means same side, opposite signs mean the plane separates them.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Point to a line (04a)', note: `${vAP} = ${vp} − ${va}:` },
          { f: `Foot ${F} = ${va} + ${LAM0}${vb};<br><br>Distance = ${DLINE}; Image = 2${F} − ${P}.`, note: '' },
          { f: 'Point to a plane (04b)', note: `${t} = ${TT}:` },
          { f: `Foot ${FOOT_P}; Image ${IMG_P}; Distance = ${DPLANE}.`, note: '' },
        ],
        aids: [
          '“Dot for the foot, cross for the gap” (line case).',
          `“The normal is the perpendicular” (plane case: just count normals, ${t}).`,
          `“Foot is the midpoint”: so the image is always 2${F} − ${P}.`,
          `“${t} over ${mn}², distance over ${mn}”: the same numerator, two different denominators, never interchange them.`,
          '“Reflect to straighten a bent path”: shortest-touch problems become one straight segment after imaging an endpoint.',
        ],
      },
    ],
  },

  // ──────────────── Topic 05 · pp. 734–742 ────────────────
  {
    n: '05',
    title: 'Line–Plane & Plane–Plane Configurations',
    kalam: 'A line and a plane can do exactly three things.',
    blocks: [
      { t: 'part', title: 'Exam relevance' },
      {
        t: 'p',
        html: `<b>JEE only:</b> This is where the whole chapter converges: lines, planes, and points interacting. JEE Main reliably asks for a point of intersection of a line and a plane, or a plane built from given lines ${ESTIMATE}; JEE Advanced layers on bisector planes and reflections of lines. The plane material is outside the rationalized CBSE Board scope, so the ladder runs JEE Main warm-up → CUET/JEE Main Speed Trap → JEE Main multi-concept → JEE${NB}Advanced.`,
      },
      {
        t: 'p',
        html: 'A <b>merged topic</b> with four diagnostic units: <b>(05a)</b> a line meeting, lying in, or running parallel to a plane; <b>(05b)</b> building the plane that contains given lines (or a line and a point); <b>(05c)</b> the angle-bisector planes of two planes; and <b>(05d)</b> reflecting and projecting a line.',
      },

      { t: 'part', title: 'Concept intuition' },
      {
        t: 'p',
        html: 'By now you can describe lines and planes separately. The real exam questions ask how they fit together. There are only a few possibilities, and recognising which one you face is half the battle. The good news is that every configuration in this topic reduces to one of two reflexes: either substitute a moving point and solve (for intersections) or gather in-plane vectors and cross them (for building planes). Almost nothing here is genuinely new; it is the earlier machinery (dot products, cross products, the point–normal form) pointed at the question of how lines and planes coexist.',
      },
      {
        t: 'p',
        html: `<b>A line and a plane</b> can do exactly three things. The line can <b>pierce</b> the plane at a single point (the generic case); it can lie <b>flat inside</b> the plane (every point of the line on the plane); or it can run <b>parallel</b> and never touch. The deciding quantity is the dot product of the line’s direction ${vb} with the plane’s normal ${vn}. If ${rel(bn, '≠', '0')}, the line is not perpendicular to the normal, so it must cross: one clean intersection point, found by sliding along the line until the plane equation is satisfied. If ${rel(bn, '=', '0')}, the line is perpendicular to the normal, hence parallel to the surface, and now a second test decides between “lies in” and “parallel”: pick any point of the line and check whether it satisfies the plane. On the plane means the whole line lies in it; off the plane means strictly parallel.`,
      },
      {
        t: 'p',
        html: `<b>Think about it this way…</b> ${rel(bn, '=', '0')} is necessary but never sufficient for a line to lie in a plane. It only says the line is parallel to the surface. A railway track running alongside a wall is parallel to it (direction perpendicular to the wall’s normal) yet clearly not painted on the wall. You must test a point to tell “alongside” from “on”.`,
      },
      {
        t: 'p',
        html: `<b>Building a plane from lines.</b> Often you must produce the plane that contains given data. The recipe is always “find the normal, then use a point.” If you have two intersecting lines, their two directions both lie in the plane, so the normal is their cross product ${vb1} × ${vb2}. If you have a line and an external point, the line’s direction and the vector from the line to the point both lie in the plane, so the normal is ${vb} × (${vP} − ${va}). If you have two parallel lines, the shared direction and the vector joining them lie in the plane, giving normal ${vb} × (${va2} − ${va1}). Same idea every time: two in-plane vectors, one cross product.`,
      },
      {
        t: 'p',
        html: `<b>Bisecting the angle between two planes.</b> Two intersecting planes make a pair of “valley” angles, and there are two planes that bisect them, exactly like the two angle bisectors of two${NB}crossing lines in 2D. A point lies on a bisector when it is <b>equidistant</b> from the two planes.`,
      },
      {
        t: 'p',
        html: 'Writing each distance with its sign and setting them equal (with a ± for the two bisectors) gives the bisector planes directly: you normalise each plane by the length of its normal, then equate.',
      },
      {
        t: 'p',
        html: '<b>Reflecting a line.</b> To mirror a whole line in a plane, you don’t need anything new: just reflect points. Where the line meets the plane is a fixed point (it’s already on the mirror), and reflecting any second point of the line gives a second point of the image. Two points determine the reflected line.',
      },
      {
        t: 'p',
        html: `<b>Limiting conditions & assumptions:</b><br>• ${rel(bn, '=', '0')} alone never proves a line lies in a plane: always confirm with a point.`,
      },
      {
        t: 'p',
        html: '• The “plane through two lines” only exists if the lines are <b>coplanar</b> (intersecting or parallel); skew lines do not lie in a common plane.',
      },
      {
        t: 'p',
        html: `• For bisector planes you must divide each plane by ${mn} before equating; skipping the normalisation gives a plane that is not an angle bisector.`,
      },
      {
        t: 'p',
        html: '• Reflecting a line that is parallel to the mirror has no fixed intersection point: reflect two of its points instead, or reflect one point and keep the (unchanged) direction.',
      },

      { t: 'part', title: 'Key definitions and properties' },
      {
        t: 'p',
        html: 'The constructions below look varied, but they are organised by the question being asked, not by new theory. Whenever a line and a plane meet, you substitute and solve; whenever you must produce a plane from given lines or points, you build a normal from two in-plane vectors; whenever you bisect, you normalise and equate with a ±. Keeping that three-way map in mind makes the formula table a lookup rather than a memory burden.',
      },
      {
        t: 'p',
        html: `<b>Line meeting a plane (05a).</b> Line<br>${LINE5} = ${la}<br>and plane ${PLANE5}:<br>substitute ${PARAM} into the plane and solve for ${la}.`,
      },
      {
        t: 'formula',
        kicker: 'Line meeting a plane',
        main: `Intersects: ${bn} = ${A}${a} + ${B}${b} + ${C}${c}${NB}≠${NB}0<br>${bn} = 0 ⇒ lies in plane (point satisfies plane)<br>${bn} = 0 ⇒ parallel (point does not)`,
        legend: [
          `${vb} = the line direction ${pt(a, b, c)}`,
          `${vn} = the plane normal ${pt(A, B, C)}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Plane containing given data (05b).</b> Normal ${vN}, then point–normal form ${rel(dot(`(${vr} − ${va})`, vN), '=', '0')}:`,
      },
      {
        t: 'formula',
        kicker: 'Plane containing given data',
        main: `two intersecting lines: ${N_II}<br>line & point ${P}: ${N_LP}<br>two parallel lines: ${N_PAR}`,
        legend: [
          `${vN} = the normal of the plane`,
          `${vb}, ${vb1}, ${vb2} = the line directions`,
          `${va}, ${va1}, ${va2} = points on the lines`,
          `${vP} = the position vector of ${P}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Angle-bisector planes of two planes (05c).</b> For ${P1} ≡ ${a1}${x} + ${b1}${y} + ${c1}${z} + ${d1} = 0 and ${P2} ≡ ${a2}${x} + ${b2}${y} + ${c2}${z} + ${d2} = 0:`,
      },
      {
        t: 'formula',
        kicker: 'Angle-bisector planes of two planes',
        main: `${fr(`${a1}${x} + ${b1}${y} + ${c1}${z} + ${d1}`, rt(`${sq(a1)} + ${sq(b1)} + ${sq(c1)}`))}${NB}=${NB}±<br><br>${fr(`${a2}${x} + ${b2}${y} + ${c2}${z} + ${d2}`, rt(`${sq(a2)} + ${sq(b2)} + ${sq(c2)}`))}`,
        legend: [
          `${P1}, ${P2} = the two plane expressions`,
          `${a1}, ${b1}, ${c1}, ${d1} = the coefficients of ${P1}`,
          `${a2}, ${b2}, ${c2}, ${d2} = the coefficients of ${P2}`,
        ],
        note: null,
      },
      {
        t: 'p',
        html: `<b>Reflection of a line in a plane (05d).</b> Reflect the line’s intersection point ${M} (fixed) and the image ${Qp} of any second point ${Q}; the reflected line is the line ${I('MQ′')}. (If the line is parallel to the plane, reflect two points; the image is parallel to the original.) <b>Projection of a line on a plane</b> is the line of intersection of the given plane with the plane through the line perpendicular to it.`,
      },
      {
        t: 'p',
        html: `<b>Notation key:</b> ${vb} (or ${vb1}, ${vb2}) = line direction(s); ${vn}${NB}=${NB}${pt(A, B, C)} = plane normal; ${la} = line parameter; ${va}, ${va1}, ${va2} = points on lines; ${P1}, ${P2} = plane expressions; ${M} = line–plane intersection; ${Qp} = image of point${NB}${Q}.`,
      },
      {
        t: 'table',
        title: null,
        head: ['Configuration', 'Test / construction'],
        rows: [
          ['Line ∩ plane', `substitute parametric point, solve for ${la}`],
          ['Line ∥ / in plane', `${rel(bn, '=', '0')}; then test a point`],
          ['Plane ⊃ 2 intersecting lines', N_II],
          ['Plane ⊃ line + point', N_LP],
          ['Bisector planes', BIS],
        ],
      },

      { t: 'part', title: 'Theorems and procedures' },
      {
        t: 'proc',
        title: 'Procedure: point of intersection of a line and a plane (05a)',
        steps: [
          `Write the line in parametric form ${PARAM}.`,
          `Substitute into the plane equation ${PLANE5}.`,
          `Solve the resulting linear equation for${NB}${la}.`,
          `Put that ${la} back into the parametric point.`,
        ],
      },
      {
        t: 'p',
        html: 'If step 3 yields a contradiction (0 = nonzero), the line is parallel; if it yields 0 = 0, the line lies in the plane.',
      },
      {
        t: 'p',
        html: `<b>Theorem 1 (classification of a line relative to a plane).</b> With ${bn} = ${A}${a} + ${B}${b} + ${C}${c}: the line meets the plane in one point if and only if ${rel(bn, '≠', '0')}; if ${rel(bn, '=', '0')} the line is parallel, lying in the plane exactly when one (hence every) point of it satisfies the plane.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> Substituting the parametric point${NB}gives${NB}${A}(${x1}${NB}+${NB}${a}${la})${NB}+<br>${B}(${y1} + ${b}${la}) + ${C}(${z1} + ${c}${la}) + ${D} = 0,${NB}i.e.<br>(${A}${x1} + ${B}${y1} + ${C}${z1} + ${D}) + ${la}(${A}${a} + ${B}${b} + ${C}${c}) = 0,<br>a linear equation ${K} + ${la}(${bn}) = 0 where ${K} is the plane expression at the line’s base point. If ${rel(bn, '≠', '0')} there is a unique ${la} = −${fr(K, bn)}: one intersection. If ${rel(bn, '=', '0')} the equation reduces to ${rel(K, '=', '0')}: when ${rel(K, '=', '0')} every ${la} works (line in plane); when ${rel(K, '≠', '0')} no ${la} works (parallel). ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 2 (plane through a line and an external point).</b> The plane containing the line ${LINE} and the point ${P} has normal ${N_LP} and equation<br>(${vr} − ${va})${NB}·${NB}[${vb} × (${vP} − ${va})] = 0.`,
      },
      { t: 'fig', id: 'm12-11-fig-11.6' },
      {
        t: 'p',
        html: `<b>Proof.</b> Both the direction ${vb} and the vector ${vP} − ${va} (from a point of the line to ${P}) lie in the desired plane, since the line and ${P} all belong to it. A vector perpendicular to two in-plane vectors is normal to the plane, and the cross product ${vb} × (${vP} − ${va}) is exactly such a vector. Applying the point–normal form through ${va} gives the stated equation; equivalently, a point ${vr} is coplanar with the line and ${P} precisely when the scalar triple product (${vr} − ${va})${NB}·${NB}[${vb} × (${vP} − ${va})] vanishes. ■`,
      },
      {
        t: 'p',
        html: `<b>Theorem 3 (angle-bisector planes).</b> A point is equidistant from ${rel(P1, '=', '0')} and ${rel(P2, '=', '0')} if and only if<br>${BIS},<br>which are the two bisector planes.`,
      },
      {
        t: 'p',
        html: `<b>Proof.</b> The signed distance of a point from ${rel(Pi, '=', '0')}${NB}is<br>${fr(`${sb(a, I('i'))}${x} + ${sb(b, I('i'))}${y} + ${sb(c, I('i'))}${z} + ${sb(d, I('i'))}`, md(vni))} = ${fr(Pi, md(vni))}.<br>Equidistance means the magnitudes are equal:<br>${md(fr(P1, md(vn1)))} = ${md(fr(P2, md(vn2)))}, i.e.<br><br>${BIS}.<br>Each sign gives one of the two mutually perpendicular bisector planes. ■`,
      },
      {
        t: 'proc',
        title: 'Procedure: reflecting a line in a plane (05d)',
        steps: [
          `Find ${M}, the point where the line meets the plane (Procedure 05a).`,
          `Pick any other point ${Q} on the line and find its image ${Qp} in the plane (Topic 04).`,
          `The reflected line is the line through ${M} and${NB}${Qp}.`,
        ],
      },
      {
        t: 'p',
        html: `If the line is parallel to the plane (no ${M}), reflect two points instead, or reflect one point and reuse the original direction (unchanged because ${rel(bn, '=', '0')}).`,
      },
      {
        t: 'p',
        html: `<b>Worked illustration.</b> Reflect the line ${vr} = ${pt('0', '0', '1')} + ${la}${pt('1', '0', '1')} in the plane ${rel(z, '=', '0')}. Intersection:<br>${z} = 1 + ${la} = 0 ⇒ ${la} = −1,<br>giving ${M} = ${pt('−1', '0', '0')}, which lies on the plane and is therefore fixed. Take the base point ${Q} = ${pt('0', '0', '1')}; its image in ${rel(z, '=', '0')} is ${Qp} = ${pt('0', '0', '−1')} (reflecting the ${z}-coordinate). The reflected line passes through ${M}${pt('−1', '0', '0')} and ${Qp}${pt('0', '0', '−1')}, with direction ${Qp} − ${M} = ${pt('1', '0', '−1')}: note how the ${z}-component of the direction flipped sign while the in-plane components survived, exactly as a mirror should behave. So the image line is<br>${vr} = ${pt('−1', '0', '0')} + ${mu}${pt('1', '0', '−1')}.`,
      },
      {
        t: 'p',
        html: `<b>Procedure: projecting a line onto a plane (05d).</b> The projection is the “shadow” the line casts on the plane along the normal. Construct the plane ${PI2} that contains the given line and is perpendicular to the given plane π (its normal is ${vb} × ${vn}, since ${PI2} contains both the line direction ${vb} and the normal ${vn}) (if the line is perpendicular to π, ${vb} × ${vn} = ${ZERO} and the projection is a single point, the foot). The projected line is then the intersection of π and ${PI2}. Equivalently, drop perpendiculars from two points of the line onto π (Topic 04 feet) and join the two feet.`,
      },

      { t: 'part', title: 'Worked examples' },
      {
        t: 'ex',
        tag: 'JEE Main · Foundational warm-up (Line meets plane)',
        q: `Find the point where the line ${fr(`${x} − 2`, '1')} = ${fr(`${y} + 1`, '−1')} = ${fr(`${z} − 3`, '2')} meets the plane 2${x} + ${y} − ${z} = 1.`,
        steps: [
          `Parametric point: ${glue(`(2 + ${la}, −1 − ${la}, 3 + 2${la})`)}. Substitute:<br>2(2 + ${la}) + (−1 − ${la}) − (3 + 2${la}) = 1<br>⇒ 4 + 2${la} − 1 − ${la} − 3 − 2${la} = 1<br>⇒ −${la} = 1 ⇒ ${la} = −1.`,
          `Point: (2 − 1,${NB}−1 + 1,${NB}3 − 2) = ${pt('1', '0', '1')}. (Check: 2(1) + 0 − 1 = 1 ✓.)`,
          `The whole method is “turn the line into one moving point, then ask the plane when that point arrives.” Because the plane equation is linear and the point’s coordinates are linear in ${la}, the substitution always collapses to a single linear equation in ${la}: at most one solution unless the line is special. That is why a unique intersection is the generic outcome and why a clean numerical ${la} (here −1) is expected.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'CUET / JEE Main Speed Trap (Parallel vs lies-in)',
        q: `Does the line through ${pt('1', '0', '2')} with direction ${pt('1', '2', '1')} lie in, run parallel to, or cross the plane ${x} + ${y} − 3${z} + 2 = 0?`,
        steps: [
          `First the dot product: ${bn} = (1)${WJ}(1)${NB}+ (2)${WJ}(1)${NB}+ (1)${WJ}(−3)${NB}= 1${NB}+${NB}2${NB}−${NB}3${NB}=${NB}0, so the line does <b>not</b> cross: it is parallel to the surface. Now the decisive second test, a point of the line:<br>${x} + ${y} − 3${z} + 2|<sub>${pt('1', '0', '2')}</sub> = 1 + 0 − 6 + 2${NB}= −3${NB}≠${NB}0.`,
          `The point is off the plane, so the line is <b>strictly parallel</b> (not contained). <b>The trap:</b> stopping at ${rel(bn, '=', '0')} and declaring “the line lies in the plane.” That dot product only rules out crossing; the point test is what separates “parallel” from “lies in.” A useful mental model: ${rel(bn, '=', '0')} fixes the line’s orientation relative to the surface (it runs flat, neither diving in nor climbing out), but orientation alone says nothing about position. Two lines can share the same flat orientation yet sit at different heights: one painted on the plane, one floating above it. Only evaluating an actual point pins down the height, which is why the second test is never optional.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Main · Multi-concept (Plane through a line and a point)',
        q: `Find the plane containing the line ${vr} = (${ijk('', '−', '+ 3')}) + ${la}(${ijk('2', '+ 3', '+')}) and the point ${pt('2', '1', '0')}.`,
        steps: [
          `Here ${va} = ${pt('1', '−1', '3')}, ${vb} = ${pt('2', '3', '1')}, ${P} = ${pt('2', '1', '0')}, so ${vP} − ${va} = ${pt('1', '2', '−3')}. Normal:<br>${N_LP} = ${pt('2', '3', '1')} × ${pt('1', '2', '−3')}<br>= (${glue('3(−3) − 1(2)')}, ${glue('1(1) − 2(−3)')}, ${glue('2(2) − 3(1))')}<br>= ${pt('−11', '7', '1')}.`,
          `Plane through ${va} = ${pt('1', '−1', '3')}:<br>−11(${x} − 1) + 7(${y} + 1) + 1(${z} − 3) = 0<br>⇒ −11${x} + 7${y} + ${z} + 15 = 0,<br>i.e.${NB}11${x} − 7${y} − ${z} = 15.`,
          `<b>Check:</b> at ${pt('1', '−1', '3')}, 11 + 7 − 3 = 15 ✓; at ${pt('2', '1', '0')}, 22 − 7 − 0 = 15 ✓. The multi-concept move is “two in-plane vectors, one cross product,” then point–normal. The verification at both given objects (a point of the line and the external point) is the discipline that separates a secure answer from a guessed one: a correct plane must contain every point it was built from, so checking two of them is a near-certain validation at almost no cost.`,
        ],
        ans: '',
      },
      {
        t: 'ex',
        tag: 'JEE Advanced (Angle-bisector planes)',
        q: `Find the planes bisecting the angles between 2${x} − ${y} + 2${z} + 3 = 0 and 3${x} − 2${y} + 6${z} − 8 = 0.`,
        steps: [
          `${md(vn1)}${NB}=${NB}${rt(glue('4 + 1 + 4'))}${NB}=${NB}3, ${md(vn2)}${NB}=${NB}${rt(glue('9 + 4 + 36'))}${NB}=${NB}7. The bisectors satisfy<br>${fr(`2${x} − ${y} + 2${z} + 3`, '3')} = ±${NB}${fr(`3${x} − 2${y} + 6${z} − 8`, '7')}<br>⇒ 7(2${x} − ${y} + 2${z} + 3)${NB}= ±${NB}3(3${x}${NB}−${NB}2${y}${NB}+${NB}6${z}${NB}−${NB}8).`,
          `<b>Plus sign:</b> 14${x} − 7${y} + 14${z} + 21${NB}= ${glue(`9${x} − 6${y} + 18${z} − 24`)}<br>⇒ 5${x} − ${y} − 4${z} + 45 = 0.`,
          `<b>Minus sign:</b> 14${x} − 7${y} + 14${z} + 21${NB}= ${glue(`−9${x} + 6${y} − 18${z} + 24`)}<br>⇒ 23${x} − 13${y} + 32${z} − 3 = 0.`,
          `So the two bisector planes are 5${x} − ${y} − 4${z} + 45 = 0 and 23${x} − 13${y} + 32${z} − 3 = 0. (They are mutually perpendicular; a quick check: (5)${WJ}(23) + (−1)${WJ}(−13) + (−4)${WJ}(32)${NB}= 115${NB}+${NB}13${NB}−${NB}128${NB}=${NB}0${NB}✓.)`,
          'The advanced insight: “bisector” means “equidistant,” and equidistance becomes the normalised equation with a ±. Two further points are worth carrying. First, the normalisation is what makes the result a genuine angle bisector rather than just some plane through the line of intersection: dropping the √⋯ denominators would still give a plane containing that line, but not one that splits the angle. Second, the two bisectors are always perpendicular to each other (as the check confirms), because they bisect the two supplementary angles formed by the original planes; if a problem asks for “the bisector of the acute angle,” you compute both and then test which one makes the smaller angle with either original plane.',
        ],
        ans: '',
      },

      { t: 'part', title: 'Practice exercises' },
      {
        t: 'practice',
        items: [
          {
            q: `<b>[JEE Main]</b> Find the point of intersection of the line<br>${fr(`${x} − 1`, '2')} = ${fr(`${y} − 2`, '−1')} = ${fr(`${z} + 1`, '1')} and the plane ${x} + ${y} + ${z} = 4.`,
            a: `${pt('3', '1', '0')}: parametric point (1${NB}+${NB}2${la},${NB}2${NB}−${NB}${la},${NB}−1${NB}+${NB}${la}); sum = 4 gives ${rel(la, '=', '1')}.`,
          },
          {
            q: `<b>[CUET / JEE Main]</b> Determine whether the line through ${pt('1', '1', '1')} with direction ${pt('1', '−1', '2')} is parallel to, lies in, or crosses the plane 3${x} + ${y} − ${z} = 2.`,
            a: `Parallel (since ${bn} = 3 − 1 − 2 = 0 and the point gives 3 + 1 − 1 = 3${NB}≠${NB}2)`,
          },
          {
            q: `<b>[JEE Main]</b> Find the plane containing the two parallel lines ${vr} = (${ii}${NB}+${NB}2${kk})${NB}+ ${la}(${glue(ijk('2', '+', '−'))}) and ${vr} = (3${jj}${NB}+${NB}${kk})${NB}+ ${mu}(${glue(ijk('2', '+', '−'))}).`,
            a: `2${x} + 3${y} + 7${z} = 16: parallel lines, normal ${vb} × (${va2} − ${va1}) = ${pt('2', '1', '−1')} × ${pt('−1', '3', '−1')} = ${pt('2', '3', '7')}.`,
          },
          {
            q: `<b>[JEE Main]</b> Find the plane containing the line ${fr(`${x} − 1`, '1')} = ${fr(`${y} − 2`, '2')} = ${fr(`${z} − 3`, '3')} and the point ${pt('4', '3', '2')}.`,
            a: `${x} − 2${y} + ${z} = 0: normal ${vb} × (${vP} − ${va}) = ${pt('1', '2', '3')} × ${pt('3', '1', '−1')} = ${pt('−5', '10', '−5')} ∥ ${pt('1', '−2', '1')}.`,
          },
          {
            q: `<b>[JEE Advanced]</b> Find the planes bisecting the angles between ${x} + 2${y} + 2${z} − 9 = 0 and 4${x} − 3${y} + 12${z} + 13 = 0.`,
            a: `${x} + 35${y} − 10${z} = 156 and 25${x} + 17${y} + 62${z} = 78: normalise by ${md(vn1)}${NB}=${NB}3, ${md(vn2)}${NB}=${NB}13, then take ±.`,
          },
        ],
      },

      { t: 'part', title: 'Crack the MCQ' },
      {
        t: 'mcq',
        q: `The line ${fr(`${x} − 1`, '2')} = ${fr(y, '3')} = ${fr(`${z} + 1`, '−1')} meets the plane ${x} + 2${y} + ${z} = 7 at`,
        opts: [
          { label: pt('3', '3', '−2'), nudge: null },
          { label: pt('1', '0', '−1'), nudge: `<b>(B)</b> is the base point (${rel(la, '=', '0')}): on the line but not on the plane.` },
          { label: pt('5', '6', '−3'), nudge: `<b>(C)</b> takes ${rel(la, '=', '2')}: a point of the line, but 5 + 12 − 3 = 14 ≠ 7, so it misses the plane.` },
          { label: pt('−1', '−3', '0'), nudge: `<b>(D)</b> takes ${rel(la, '=', '−1')}: a point of the line, but −1 − 6 + 0 = −7 ≠ 7, so it misses the plane.` },
        ],
        correct: 0,
        solution: `Parametric point (1 + 2${la},${NB}3${la},${NB}−1 − ${la}); substituting,<br>(1 + 2${la}) + 2(3${la}) + (−1 − ${la}) = 7<br>⇒ 7${la} = 7 ⇒ ${la} = 1,<br>giving ${pt('3', '3', '−2')}.`,
      },
      {
        t: 'mcq',
        q: `The line ${LINE} is parallel to, but not contained in, the plane ${rel(dot(vr, vn), '=', d)} if and only if`,
        opts: [
          { label: `${rel(bn, '=', '0')} and ${rel(dot(va, vn), '≠', d)}`, nudge: null },
          { label: rel(bn, '=', '0'), nudge: '<b>(B)</b> omits the point test, so it also admits a line lying in the plane.' },
          { label: rel(`${vb} × ${vn}`, '=', ZERO), nudge: '<b>(C)</b> says the direction is parallel to the normal: that’s a line perpendicular to the plane.' },
          { label: rel(bn, '=', d), nudge: `<b>(D)</b> mixes the line’s direction with the plane’s constant ${d}: rescaling ${vb} changes it, so it has no geometric meaning.` },
        ],
        correct: 0,
        solution: `Parallel needs ${rel(bn, '=', '0')} (direction perpendicular to normal); “not contained” needs a point off the plane, ${rel(dot(va, vn), '≠', d)}. The pairing of conditions in <b>(A)</b> is the whole lesson of unit 05a: one condition fixes orientation, the other fixes position, and “strictly parallel” needs both.`,
      },
      {
        t: 'mcq',
        q: `The normal to the plane containing two intersecting lines with directions ${vb1} and ${vb2} is along`,
        opts: [
          { label: `${vb1} + ${vb2}`, nudge: `<b>(A)</b> ${vb1} + ${vb2} is itself an in-plane combination, not perpendicular to the plane.` },
          { label: dot(vb1, vb2), nudge: '<b>(B)</b> is a scalar, not a direction at all.' },
          { label: `${vb1} × ${vb2}`, nudge: null },
          { label: `${vb1} − ${vb2}`, nudge: `<b>(D)</b> ${vb1} − ${vb2} is itself an in-plane combination, not perpendicular to the plane.` },
        ],
        correct: 2,
        solution: 'Both directions lie in the plane, so the normal is perpendicular to both: exactly the cross product.',
      },
      {
        t: 'mcq',
        q: `The angle-bisector planes of ${rel(P1, '=', '0')} and ${rel(P2, '=', '0')} (normals ${vn1}, ${vn2}) are`,
        opts: [
          { label: rel(P1, '=', P2), nudge: `<b>(A)</b> ignores the differing normal lengths; even when ${md(vn1)} = ${md(vn2)} it gives only one of the two bisectors.` },
          { label: `${P1} + ${P2} = 0`, nudge: `<b>(B)</b> is one specific member of the plane family; it is a bisector only when ${md(vn1)} = ${md(vn2)}, and then only one of the two.` },
          { label: BIS, nudge: null },
          { label: `${P1}${P2} = 0`, nudge: '<b>(D)</b> is the pair of the original planes themselves.' },
        ],
        correct: 2,
        solution: `A bisector is the locus equidistant from both planes; signed distances are ${fr(Pi, md(vni))}, and equating their magnitudes gives the ± pair. The single most common slip is choosing <b>(A)</b>: forgetting that “equidistant” must use normalised distances, so each plane expression has to be divided by the length of its own normal before the comparison is meaningful.`,
      },

      { t: 'part', title: 'Common pitfalls and pro-tips' },
      {
        t: 'mistakes',
        items: [
          `<b>Reading ${rel(bn, '=', '0')} as<br>“lies in the plane.”</b> It only means parallel; you must test a point to decide between parallel and contained.`,
          `<b>Using the wrong normal for “plane through lines.”</b> Intersecting lines${NB}→ ${vb1}${NB}×${NB}${vb2}; parallel lines${NB}→ ${vb}${NB}×${NB}(${va2}${NB}−${NB}${va1}); line and point${NB}→ ${vb}${NB}×${NB}(${vP}${NB}−${NB}${va}). Picking the wrong pair of in-plane vectors gives a wrong normal.`,
          `<b>Forgetting to normalise before bisecting.</b> Each plane must be divided by ${mn} before equating (unless ${md(vn1)} = ${md(vn2)}), or the result is a family member, not an angle bisector.`,
          '<b>Reporting only one bisector.</b> The ± yields two perpendicular bisector planes; both are valid answers.',
          `<b>Reflecting a line by reflecting only its direction.</b> Reflect actual points: the fixed intersection ${M} and the image of a second point.`,
        ],
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (one dot product classifies everything):</b> before any line–plane work, compute ${bn}. Nonzero → it crosses (go find ${la}). Zero → test a point: on ⇒ contained, off ⇒ parallel. That single number routes the whole problem, so make it your first move every time: it tells you in one step which of the three configurations you are in and therefore which method to deploy.`,
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (every “plane through …” is a cross product):</b> whatever the data (two lines, a line and a point), gather two vectors that lie in the target plane and cross them for the normal. Then point–normal finishes it.',
      },
      {
        t: 'protip',
        html: '<b>Pro-Tip (reflect and project share machinery):</b> both reflecting a line and projecting a line onto a plane reduce to operations you already own: find where the line meets the plane, then either reflect a second point (reflection) or drop perpendicular feet (projection). No new formula is needed; recognising the reuse turns two intimidating “advanced” topics into routine applications of Topic 04.',
      },
      {
        t: 'protip',
        html: `<b>Pro-Tip (acute vs obtuse bisector):</b> when a question specifies which bisector plane, compute both from the ±, then measure the angle each makes with one original plane; the smaller angle identifies the acute-angle bisector. Never assume the + sign gives the acute one: it depends on the signs of the constants and of ${dot(vn1, vn2)}.`,
      },

      { t: 'part', title: 'Cheat sheet' },
      {
        t: 'snapshot',
        rows: [
          { f: 'Line & plane (05a)', note: `substitute parametric point, solve for ${la}. Classify by ${bn}: ≠${NB}0 crosses; =${NB}0 then point-test for in-plane vs parallel.` },
          { f: 'Plane through … (05b)', note: `normal = cross of two in-plane vectors: ${vb1} × ${vb2} (intersecting lines), ${vb} × (${vP} − ${va}) (line + point), ${vb} × (${va2} − ${va1}) (parallel lines); then point–normal.` },
          { f: 'Bisector planes (05c)', note: `${BIS}: two perpendicular planes.` },
          { f: 'Reflect a line (05d)', note: `keep the intersection point ${M}, reflect a second point ${Q} → ${Qp}, join ${M} and ${Qp}.` },
        ],
        aids: [
          `“Dot decides”: ${bn} tells cross / parallel; a point tells parallel / contained.`,
          '“Plane through anything = a cross product.”',
          '“Bisect = normalise, then ±.”',
          '“Reflect and project reuse old tools”: intersection point plus a reflected point, or two perpendicular feet, are all you ever need.',
        ],
      },
    ],
  },
];
