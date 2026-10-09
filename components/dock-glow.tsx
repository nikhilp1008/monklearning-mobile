import { Canvas, Fill, Group, Shader, Skia, type SkRuntimeEffect } from '@shopify/react-native-skia';
import { useEffect, useMemo, useState } from 'react';
import { PixelRatio, StyleSheet } from 'react-native';
import { runOnJS, useAnimatedReaction, useDerivedValue, useSharedValue, type SharedValue } from 'react-native-reanimated';

import { DOCK_PAL } from '@/components/dock-light';
import type { DockMotion } from '@/components/dock-motion';

/**
 * THE FOLLOW-UP'S LIGHT, KEPT INSIDE THE CLASSROOM DOCK.
 *
 * The Ask follow-up bar lights the bottom of the screen while a student holds
 * it (components/dock-light.tsx). The live classroom's dock wears the same
 * light — the same four colours, mixed and drifting by the same noise, with
 * the same grain — but only inside its own pill. Nothing reaches the board:
 * in class the board is the subject, and light spilling over it competes with
 * the teacher's writing.
 *
 * WHAT DIFFERS FROM THE FOOTER, AND WHY. The footer's sweep of colour runs
 * across the screen's width; a pill is a fifth of that, and would only ever
 * show one colour of it. So here the sweep runs the length of the pill — its
 * width when it lies along the bottom, its height when it stands at the side —
 * and the pill always shows the gold-to-ember range the footer shows. And the
 * footer's light rises from the bottom edge; here it fills the plate, still
 * strongest toward its lower edge.
 *
 * It reads the same motion the follow-up bar reads (components/dock-motion.ts):
 * on as a finger lands, brighter and quicker with the student's voice, slower
 * and breathing while the teacher thinks. Paused is the classroom's own: the
 * light stops where it is and dims, in its own colours.
 */
const GLOW_SKSL = `
uniform float2 uRes; uniform float uT,uFoot,uLevel,uThink,uTeach,uGrain,uPx,uAlong;
uniform float3 uC0,uC1,uC2,uC3;
float hash(float2 p){return fract(sin(dot(p,float2(127.1,311.7)))*43758.5453);}
float noise(float2 p){float2 i=floor(p),f=fract(p);float2 u=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+float2(1.,0.)),u.x),mix(hash(i+float2(0.,1.)),hash(i+float2(1.,1.)),u.x),u.y);}
float fbm(float2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*noise(p);p=p*2.03+float2(1.7,9.2);a*=.5;}return v;}
float3 pal(float s){s=fract(s)*4.;float f=fract(s);f=f*f*(3.-2.*f);float3 a=s<1.?uC0:s<2.?uC1:s<3.?uC2:uC3;float3 b=s<1.?uC1:s<2.?uC2:s<3.?uC3:uC0;return mix(a,b,f);}
half4 main(float2 fc){
 float2 p=float2(fc.x,uRes.y-fc.y); float t=uT;
 float X=uAlong<.5?fc.x/uRes.x:fc.y/uRes.y;
 float fq=mix(2.4,1.4,uTeach), sp=mix(1.,.6,uTeach);
 float n=fbm(float2(X*fq+t*.176*sp,t*.22*sp)), n2=fbm(float2(X*fq*2.1-t*.33*sp,3.1+t*.297*sp));
 float br=.5+.5*sin(t*2.64);
 float y=uAlong<.5?p.y/uRes.y:abs(fc.x/uRes.x-.5)*2.;
 float body=(.9+.12*n+.08*n2*(1.-uTeach))*(.86+.2*uLevel);
 body=mix(body,.78+.14*br+.06*n,uThink);
 float A=clamp(body*(1.-.22*y)*min(uFoot*1.6,1.),0.,1.);
 float s=X*.8+.33*fbm(float2(X*2.-t*.11,p.y*.02+t*.088))+t*.044;
 float3 col=pal(s)*A*.92; float a=A*.92;
 col=max(col+(hash(floor(fc*uPx))-.5)*uGrain*2.*a,0.);
 return half4(min(col,float3(a)),a);
}`;

let compiled: SkRuntimeEffect | null | undefined;
function glowEffect(): SkRuntimeEffect | null {
  if (compiled === undefined) {
    try {
      compiled = Skia.RuntimeEffect.Make(GLOW_SKSL) ?? null;
    } catch (e) {
      compiled = null;
      console.error('[dock-glow] the dock light threw while compiling:', e);
    }
    if (compiled === null) console.error('[dock-glow] the dock light did not compile; the dock stays white.');
  }
  return compiled;
}

const hex3 = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const C = DOCK_PAL.map(hex3);
const DPR = PixelRatio.get();

export function DockGlow({
  width,
  height,
  motion,
  along,
  hold,
  frozen,
}: {
  /** The pill's inner box, in points. */
  width: number;
  height: number;
  motion: SharedValue<DockMotion>;
  /** Which way the colour sweep runs: the pill's length. */
  along: 'x' | 'y';
  /** 0..1 of a still, dim light — paused, while the dock is awake. */
  hold: SharedValue<number>;
  /** True while the teacher is paused: the light stops where it is. */
  frozen: boolean;
}) {
  const effect = glowEffect();
  const frozenSV = useSharedValue(frozen);
  useEffect(() => {
    frozenSV.value = frozen;
  }, [frozen, frozenSV]);

  /** The light's own clock: the motion's, except it stands still when paused. */
  const own = useSharedValue(0);
  const last = useSharedValue(-1);

  const uniforms = useDerivedValue(() => {
    const m = motion.value;
    const dt = last.value < 0 ? 0 : Math.max(0, Math.min(0.05, m.t - last.value));
    last.value = m.t;
    if (!frozenSV.value) own.value += dt;
    return {
      uRes: [width, height],
      uT: (own.value + 3) % 1000,
      uFoot: Math.max(m.foot, hold.value),
      uLevel: m.lvl,
      uThink: m.think,
      uTeach: m.teach,
      uGrain: 0.07,
      uPx: DPR,
      uAlong: along === 'y' ? 1 : 0,
      uC0: C[0],
      uC1: C[1],
      uC2: C[2],
      uC3: C[3],
    };
  }, [width, height, along]);

  /** Drawn only while there is light to draw — a full-rate shader over a
   *  white pill that shows nothing is battery for nothing. */
  const [lit, setLit] = useState(false);
  useAnimatedReaction(
    () => motion.value.live || hold.value > 0.005,
    (on, prev) => {
      if (on !== prev) runOnJS(setLit)(on);
    }
  );

  const clip = useMemo(() => {
    const r = Math.min(width, height) / 2;
    return Skia.RRectXY(Skia.XYWHRect(0, 0, width, height), r, r);
  }, [width, height]);

  if (!effect || !lit || width <= 0 || height <= 0) return null;
  return (
    <Canvas pointerEvents="none" style={[StyleSheet.absoluteFill, { width, height }]}>
      <Group clip={clip}>
        <Fill>
          <Shader source={effect} uniforms={uniforms} />
        </Fill>
      </Group>
    </Canvas>
  );
}
