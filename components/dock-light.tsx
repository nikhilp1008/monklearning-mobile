import { Canvas, Fill, Shader, Skia, type SkRuntimeEffect } from '@shopify/react-native-skia';
import { PixelRatio, Platform, StyleSheet, useWindowDimensions, View } from 'react-native';
import { useDerivedValue, type SharedValue } from 'react-native-reanimated';

import { DOCK_H0, type DockMotion } from '@/components/dock-motion';

/**
 * THE DOCK'S FOOTER LIGHT — the Ask follow-up dock on a doubt, from the "20a"
 * handoff in `export 8/ask-follow-up-dock`.
 *
 * The dock used to show a ring and nothing else: a bright hairline hugging the
 * pill while a student was touching it. This is that ring plus a wash of light
 * rising off the bottom edge of the screen, both drawn by one shader, in the
 * brand's four warm colours drifting across the width.
 *
 * WHAT THE LIGHT IS SAYING, which is why it is worth a shader rather than a
 * gradient. Its height follows the student's own voice while they hold the
 * bar, so speaking louder lifts it; it changes character the moment they let
 * go — slower, breathing, a held note rather than a reaction — and changes
 * again while the teacher answers, where it widens and calms. The ring around
 * the pill brightens on touch. One field, four moods, no cross-fades between
 * separate assets.
 *
 * DOUBTS AND PRACTICE. Practice's bar does not stretch — Next shares its row
 * — so there the light is centred on the pill rather than the row. The live
 * classroom shares only the older `DockRing` and is not changing. See
 * `components/ask-follow-up.tsx`.
 */

/** The four colours the light cycles through. The handoff's `PAL`. */
export const DOCK_PAL = ['#EEA31F', '#F2B23A', '#FBDDA0', '#EC7A3A'];

/** How tall the lit strip is, in points. The handoff's canvas height. */
export const DOCK_LIGHT_HEIGHT = 180;

const DPR = PixelRatio.get();

/**
 * The handoff's fragment shader, with the two changes every one of these ports
 * has needed.
 *
 * ONE: Y IS FLIPPED. WebGL counts `gl_FragCoord.y` up from the bottom and Skia
 * counts down from the top, and this shader is built entirely around distance
 * from the bottom edge — the whole effect is a glow rising off the floor. Left
 * unflipped it hangs from the ceiling.
 *
 * TWO: THE DITHER IS PER PIXEL, NOT PER POINT. The grain on the last line uses
 * raw `fragCoord`, which is device pixels in WebGL and points in Skia — nine
 * device pixels per speck on a 3x screen instead of one. `uPx` restores the
 * frequency it was written at. Same fix as components/night-sky.tsx and
 * components/teacher-field.tsx; third time, so it is in from the start here.
 */
const DOCK_SKSL = `
uniform float2 uRes; uniform float uT,uRing,uFoot,uLevel,uThink,uTeach,uGrain,uPx;
uniform float4 uBar; uniform float3 uC0,uC1,uC2,uC3;
float hash(float2 p){return fract(sin(dot(p,float2(127.1,311.7)))*43758.5453);}
float noise(float2 p){float2 i=floor(p),f=fract(p);float2 u=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+float2(1.,0.)),u.x),mix(hash(i+float2(0.,1.)),hash(i+float2(1.,1.)),u.x),u.y);}
float fbm(float2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*noise(p);p=p*2.03+float2(1.7,9.2);a*=.5;}return v;}
float3 pal(float s){s=fract(s)*4.;float f=fract(s);f=f*f*(3.-2.*f);float3 a=s<1.?uC0:s<2.?uC1:s<3.?uC2:uC3;float3 b=s<1.?uC1:s<2.?uC2:s<3.?uC3:uC0;return mix(a,b,f);}
float sdRR(float2 p,float2 b,float r){float2 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
half4 main(float2 fragCoord){
 float2 p=float2(fragCoord.x, uRes.y-fragCoord.y); float t=uT; float X=p.x/uRes.x;
 float fq=mix(2.4,1.4,uTeach), sp=mix(1.,.6,uTeach);
 float n=fbm(float2(X*fq+t*.176*sp,t*.22*sp)), n2=fbm(float2(X*fq*2.1-t*.33*sp,3.1+t*.297*sp));
 float hp=(14.+42.*(.55+.5*n+.22*n2*(1.-uTeach))*(.45+.83*uLevel))*uFoot;
 float br=.5+.5*sin(t*2.64);
 float hT=(18.+15.5*br+6.6*n)*uFoot;
 hp=mix(hp,hT,uThink);
 float spread=exp(-pow((X-.5)/1.2,2.));
 float gF=exp(-pow(p.y/max(hp,1.),2.)*1.3)*min(uFoot*2.,1.)*(.5+.5*spread)*mix(1.,.82+.18*br,uThink);
 float2 bc=uBar.xy, bh=uBar.zw*.5; float db=sdRR(p-bc,bh,bh.y);
 float inBar=1.-smoothstep(-.6,.6,db);
 float ring=(exp(-abs(db)/1.4)*.9+exp(-max(db,0.)/9.)*.35)*(1.-inBar)*uRing;
 float A=clamp(gF+ring,0.,1.);
 float s=X*.8+.33*fbm(float2(X*2.-t*.11,p.y*.02+t*.088))+t*.044;
 float3 col=pal(s)*A*.92; float a=A*.92;
 col=max(col+(hash(floor(fragCoord*uPx))-.5)*uGrain*2.*a,0.);
 return half4(min(col,float3(a)),a);
}`;

let compiled: SkRuntimeEffect | null | undefined;
function dockEffect(): SkRuntimeEffect | null {
  if (compiled === undefined) {
    try {
      compiled = Skia.RuntimeEffect.Make(DOCK_SKSL) ?? null;
    } catch (e) {
      compiled = null;
      console.error('[dock-light] the footer light threw while compiling:', e);
    }
    if (compiled === null) console.error('[dock-light] the footer light did not compile; the dock keeps its plain face.');
  }
  return compiled;
}

const hex3 = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const C = DOCK_PAL.map(hex3);

/**
 * THE PHONE'S OWN SCREEN CORNER, so the light stops exactly where the glass does.
 *
 * The light is brightest at the very bottom edge, which means it is brightest
 * IN the two bottom corners -- the one place a rectangle and a phone screen
 * disagree. Drawn square, it spilled past the screen's rounded corners: on a
 * device the glass hides that, but in the simulator, in a screen recording and
 * in every App Store screenshot the warm corners stuck out past the phone.
 *
 * The reference clips its dock with `border-radius: 0 0 48px 48px`, and 48 is
 * not a design choice -- it is the screen corner of the iPhone the reference was
 * drawn on (a 390x844 iPhone 14, 47.33pt). On a different phone the right
 * number is THAT phone's corner, or the light either pokes out (radius too
 * small) or leaves a white wedge in the corner (too large).
 *
 * There is no public API for a display's corner radius, so these are the
 * published values keyed by screen size in points. Anything unlisted -- Android
 * included, where corners vary by maker -- falls back to the reference's 48.
 */
const IOS_CORNERS: Record<string, number> = {
  '375x812': 39, // X, XS, 11 Pro, 12 mini, 13 mini
  '414x896': 41.5, // XR, 11, XS Max, 11 Pro Max
  '390x844': 47.33, // 12, 12 Pro, 13, 13 Pro, 14 -- the reference's phone
  '428x926': 53.33, // 12 Pro Max, 13 Pro Max, 14 Plus
  '393x852': 55, // 14 Pro, 15, 15 Pro, 16
  '430x932': 55, // 14 Pro Max, 15 Plus, 15 Pro Max, 16 Plus
  '402x874': 62, // 16 Pro, 17, 17 Pro
  '440x956': 62, // 16 Pro Max, 17 Pro Max
};
const DESIGN_CORNER = 48;

function screenCorner(w: number, h: number): number {
  if (Platform.OS !== 'ios') return DESIGN_CORNER;
  const key = `${Math.round(Math.min(w, h))}x${Math.round(Math.max(w, h))}`;
  return IOS_CORNERS[key] ?? DESIGN_CORNER;
}

/**
 * WHERE THE LIGHT SITS, AND THE BUG THAT MADE IT LOOK WRONG.
 *
 * The first version anchored the canvas to the bar's own block. That block
 * sits inside the page's 24pt gutter and above the safe-area padding, so the
 * whole light was drawn 24pt to the right of the screen's left edge and about
 * 18pt above its bottom edge. Two visible results: the left of the screen had
 * no light at all, and the ring — computed as if the canvas started at the
 * screen edge — was drawn 24pt to the right of the pill it is meant to hug,
 * half under the flag, so it never appeared to be there.
 *
 * The reference's canvas IS the bottom of the screen: 390 wide, 180 tall,
 * flush with both edges. So this is placed by the screen's own geometry, which
 * the bar measures in window coordinates and passes in as offsets.
 */
export type DockLightGeometry = {
  /** Distance from the block's left edge to the screen's left edge. */
  left: number;
  /** Distance from the block's bottom edge to the screen's bottom edge. */
  bottom: number;
  /** In screen x: the row's centre where the bar+flag pair is centred (a
   *  doubt), or the pill's own centre where it is not (Practice). */
  rowCentreX: number;
  /** The pill's vertical centre, in points up from the screen's bottom edge. */
  cyFromBottom: number;
  /** 62 when the flag shares the row, 0 when it does not. */
  flagSlot: number;
};

export function DockLight({
  width,
  motion,
  geometry,
}: {
  width: number;
  motion: SharedValue<DockMotion>;
  geometry: DockLightGeometry;
}) {
  const effect = dockEffect();
  const g = geometry;
  const screen = useWindowDimensions();
  const corner = screenCorner(screen.width, screen.height);

  const uniforms = useDerivedValue(() => {
    const m = motion.value;
    // The pair centres as one, and the flag's share of the row shrinks to
    // nothing as the bar stretches — so the pill drifts right to the centre
    // of the screen while it grows. The handoff's
    // `L = 195 - (W + 62*(1-ex))/2`, solved for the pill's centre.
    const W = m.w - 6 * m.pr;
    const H = DOCK_H0 - 2 * m.pr;
    const cx = g.rowCentreX - (g.flagSlot / 2) * (1 - m.ex);
    return {
      uRes: [width, DOCK_LIGHT_HEIGHT],
      uT: m.t % 1000,
      uRing: m.ring,
      uFoot: m.foot,
      uLevel: m.lvl,
      uThink: m.think,
      uTeach: m.teach,
      uGrain: 0.07,
      uPx: DPR,
      uBar: [cx, g.cyFromBottom, W, H],
      uC0: C[0],
      uC1: C[1],
      uC2: C[2],
      uC3: C[3],
    };
  }, [width, g.rowCentreX, g.cyFromBottom, g.flagSlot]);

  if (!effect || width <= 0) return null;

  return (
    <View
      pointerEvents="none"
      style={[
        styles.wrap,
        {
          left: -g.left,
          bottom: -g.bottom,
          width,
          height: DOCK_LIGHT_HEIGHT,
          borderBottomLeftRadius: corner,
          borderBottomRightRadius: corner,
        },
      ]}>
      <Canvas style={StyleSheet.absoluteFill}>
        <Fill>
          <Shader source={effect} uniforms={uniforms} />
        </Fill>
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  /** Clips the canvas to the screen's own bottom corners. */
  wrap: { position: 'absolute', overflow: 'hidden' },
});
