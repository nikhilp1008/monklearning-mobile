import { Canvas, Fill, Shader, Skia, type SkRuntimeEffect } from '@shopify/react-native-skia';
import { useCallback, useEffect } from 'react';
import { View, type ViewStyle } from 'react-native';
import {
  Easing,
  useDerivedValue,
  useFrameCallback,
  useReducedMotion,
  useSharedValue,
  withTiming,
  type FrameInfo,
  type SharedValue,
} from 'react-native-reanimated';

import { ORB_POSTERS, ORB_SEED } from '@/constants/teachers';
import type { TeacherId } from '@/lib/preferences';

/**
 * THE TEACHER'S ORB, WITH SEEDS OF LIGHT (Nikhil, 12 Nov 2026).
 *
 * The body is the orb students already know: the lit sphere from ORB_POSTERS
 * (radial gradient from the lit shoulder, the catch-light, the shaded foot and
 * the white rim), in today's colours. Nikhil tried a flat body ("F2") the same
 * day and chose to keep this one ("B · + Cleaner") because it looks like the
 * existing orb.
 *
 * What is new is inside it: 96 seeds of light on the golden spiral, the
 * pattern in a sunflower's head. They are the orb's whole way of reacting, and
 * they follow one story (the "Ask Pill Dots" page, round 2, Nikhil's pick "F"):
 *
 *   resting   still, the seeds at 30%: texture, not a signal
 *   listening rings of seeds travel in towards the centre, faster with the
 *             student's voice: their words being taken in
 *   thinking  a bright sweep turns through the seeds, clockwise
 *   answering rings of seeds ripple outward from the centre
 *
 * WHY THE SEEDS GET BRIGHTER WHEN THEY MOVE. At 40 points a seed is about a
 * point across; at rest it is only texture. Every active state lifts them two
 * to three times brighter and up to twice the size, and that jump is what
 * makes them readable on the Ask button. The ring round the pill still says
 * whether anything is happening; the seeds say what.
 *
 * LISTENING AND ANSWERING ARE ONE MOTION, MIRRORED. The same rings, on the
 * seeds' own places, travel in while the student talks and out while the
 * teacher answers. The first version streamed seeds in one at a time from
 * random points; it read as scattered, so it went.
 *
 * THE RULES IT WAS DESIGNED TO (the "Calm System" page, 12 Nov 2026): one
 * thing moves, nothing moves at rest, one response per event, and one clock
 * (start 180 ms ease-out, a colour turn 400 ms, settle 600 ms ease-in-out).
 * The timings live in AskOrb; TeacherOrbSeeds only draws the state it is given.
 *
 * STILL BY DEFAULT. With no shared values passed, every uniform is a constant
 * and Skia draws it once, so the small orbs on Home and inline cost one draw.
 * AskOrb, below, is the living one: it runs a clock only while something is
 * happening. Select Teacher does not use either (12 Nov 2026).
 */

/** The catch-light's strength (Nikhil, 12 Nov 2026: 20%). The poster's was .7; at that it hid the seeds near the top. */
const GLOW = 0.2;

const ORB_SKSL = `
uniform float2 uC; uniform float uR,uListen,uThink,uSpeak,uLevel,uT,uFlow,uSpin,uMix;
uniform float3 uA0,uACore,uADeep,uAPale,uB0,uBCore,uBDeep,uBPale; uniform float2 uAS,uBS;
float aa(float d,float w,float px){ return 1.-smoothstep(w-px,w+px,d); }
const float GLOW=${GLOW.toFixed(2)};
half4 main(float2 fc){
 float R=uR;
 float2 p=(fc-uC)/R; p.y=-p.y;
 float r=length(p);
 float px=1.2/R;
 float a=1.-smoothstep(1.-px,1.,r);
 if(a<=0.) return half4(0.);
 float3 p0=mix(uA0,uB0,uMix), core=mix(uACore,uBCore,uMix), deep=mix(uADeep,uBDeep,uMix), pale=mix(uAPale,uBPale,uMix);
 float2 st=mix(uAS,uBS,uMix);
 // the poster: radial-gradient(circle at 35% 30%, p0, core, deep) to the farthest corner
 float d=length(p-float2(-.3,.4))/1.91;
 float3 col=d<st.x?mix(p0,core,d/st.x):mix(core,deep,clamp((d-st.x)/(st.y-st.x),0.,1.));
 // The catch-light, under the seeds and softer than the poster's .7 (Nikhil,
 // 12 Nov 2026: "reduce the glow at the top so the dots look good").
 col=mix(col,float3(1.),max(0.,1.-length(p-float2(-.4,.52))/.744)*GLOW);
 float best=0.;
 for(int i=0;i<96;i++){
  float fi=float(i);
  float rr=.84*sqrt((fi+.5)/96.), an=fi*2.39996;
  float2 pR=rr*float2(cos(an),sin(an));
  // Listening: rings of seeds travel IN, the answer's ripple in reverse
  // (Nikhil, 12 Nov 2026: seeds streaming in one by one looked scattered).
  // uFlow runs faster with the student's voice.
  float wIn=pow(.5+.5*sin(rr*15.+uFlow*7.),3.);
  float lv=uListen*(.3+.7*uLevel);
  float2 pos=pR*(1.-.07*lv*wIn);
  // Resting seeds at 30% (Nikhil, 12 Nov 2026: at 10% they vanished on the 40pt Ask pill).
  float vis=mix(.3,.25+.75*wIn*(.4+.6*uLevel),uListen);
  float sz=.03+.02*lv*wIn;
  // Thinking: a bright sweep turns clockwise through the seeds.
  float ad=abs(mod(atan(pR.y,pR.x)+uSpin*4.+3.14159,6.28318)-3.14159);
  float w=exp(-ad*ad/.7);
  vis=mix(vis,.12+.88*w,uThink); sz+=.03*uThink*w;
  // Answering: rings of seeds ripple outward.
  float wave=pow(.5+.5*sin(rr*15.-uT*7.),3.);
  float sp=uSpeak*(.3+.7*uLevel);
  vis=mix(vis,.25+.75*wave*(.4+.6*uLevel),uSpeak); sz+=.02*sp*wave;
  pos*=1.+.07*sp*wave;
  vis*=1.-smoothstep(.86,.97,length(pos));
  best=max(best,aa(length(p-pos),sz,px*.9)*vis);
 }
 col=mix(col,pale,clamp(best,0.,.92));
 // the shaded foot and the white rim, as the poster has them
 col=mix(col,float3(.353,.118,.02),.3*smoothstep(-.53,.53,length(p-float2(0.,.588))-1.));
 col=mix(col,float3(1.),.5*aa(abs(r-(1.-px)),px*.5,px*.6));
 return half4(half3(col*a),half(a));
}`;

/** Compiled once, failure remembered. Same reasoning as components/night-sky.tsx. */
let compiled: SkRuntimeEffect | null | undefined;
function orbEffect(): SkRuntimeEffect | null {
  if (compiled === undefined) {
    try {
      compiled = Skia.RuntimeEffect.Make(ORB_SKSL) ?? null;
    } catch (e) {
      compiled = null;
      console.error('[teacher-orb-seeds] the orb shader threw while compiling:', e);
    }
    if (compiled === null) console.error('[teacher-orb-seeds] the orb shader did not compile; using a flat disc.');
  }
  return compiled;
}

const rgb = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const side = (t: TeacherId) => ({
  p0: rgb(ORB_POSTERS[t].body[0]),
  core: rgb(ORB_POSTERS[t].body[1]),
  deep: rgb(ORB_POSTERS[t].body[2]),
  stops: [ORB_POSTERS[t].stops[1], ORB_POSTERS[t].stops[2]],
  pale: rgb(ORB_SEED[t]),
});
const A = side('drona');
const B = side('vedha');

/** Room round the disc so its antialiased edge is never clipped by the canvas. */
const PAD = 1;

/** The live values AskOrb drives the seeds with. All optional: none means still. */
type SeedMotion = {
  listen?: SharedValue<number>;
  think?: SharedValue<number>;
  speak?: SharedValue<number>;
  /** Voice loudness, 0 to 1. */
  level?: SharedValue<number>;
  /** Seconds, for the answer's ripple. */
  clock?: SharedValue<number>;
  /** How far the listening stream has run. */
  flow?: SharedValue<number>;
  /** How far the thinking sweep has turned. */
  spin?: SharedValue<number>;
};

export function TeacherOrbSeeds({
  teacher,
  size,
  style,
  listen,
  think,
  speak,
  level,
  clock,
  flow,
  spin,
}: {
  teacher: TeacherId;
  size: number;
  style?: ViewStyle;
} & SeedMotion) {
  const effect = orbEffect();
  const box = size + PAD * 2;
  const r = size / 2;
  const still = teacher === 'vedha' ? 1 : 0;

  const uniforms = useDerivedValue(
    () => ({
      uC: [r + PAD, r + PAD],
      uR: r,
      uListen: listen ? listen.value : 0,
      uThink: think ? think.value : 0,
      uSpeak: speak ? speak.value : 0,
      uLevel: level ? level.value : 0,
      uT: clock ? clock.value : 0,
      uFlow: flow ? flow.value : 0,
      uSpin: spin ? spin.value : 0,
      uMix: still,
      uA0: A.p0,
      uACore: A.core,
      uADeep: A.deep,
      uAPale: A.pale,
      uAS: A.stops,
      uB0: B.p0,
      uBCore: B.core,
      uBDeep: B.deep,
      uBPale: B.pale,
      uBS: B.stops,
    }),
    [r, still]
  );

  if (!effect) {
    return (
      <View
        pointerEvents="none"
        style={[{ width: size, height: size, borderRadius: r, backgroundColor: ORB_POSTERS[teacher].body[1] }, style]}
      />
    );
  }

  return (
    <Canvas pointerEvents="none" style={[{ width: box, height: box, margin: -PAD }, style]}>
      <Fill>
        <Shader source={effect} uniforms={uniforms} />
      </Fill>
    </Canvas>
  );
}

/** The calm clock (the "Calm System" page, 12 Nov 2026): start 180 ms, settle 600 ms. */
const START = 180;
const SETTLE = 600;
const EASE_OUT = Easing.out(Easing.cubic);
const EASE_IN_OUT = Easing.inOut(Easing.cubic);

export type AskOrbPhase = 'idle' | 'listening' | 'thinking' | 'speaking';

/**
 * THE ASK BUTTON'S ORB, ALIVE (Nikhil, 12 Nov 2026: "F").
 *
 * Replaces what used to sit on and round the orb: the ink voice bars while the
 * student held, the marigold arc while the teacher thought, and the stop square
 * while the answer played. The seeds now do all three (see the story at the
 * top of this file); the ring round the pill is unchanged.
 *
 * `ripple` false leaves the answer still. The live class turns it off: there
 * the teacher talks through the whole lesson, and an orb rippling all class
 * would break "nothing moves at rest".
 *
 * COST. The clock runs only while a phase is on and for the 600 ms settle
 * after; at rest the orb is a still drawing like every other one. With reduced
 * motion the clock never runs: the seeds still brighten for each state, they
 * just do not travel.
 */
export function AskOrb({
  teacher,
  size,
  phase,
  level,
  ripple = true,
  style,
}: {
  teacher: TeacherId;
  size: number;
  phase: AskOrbPhase;
  /** The student's voice, 0 to 1, while they hold. */
  level?: SharedValue<number>;
  ripple?: boolean;
  style?: ViewStyle;
}) {
  const listen = useSharedValue(0);
  const think = useSharedValue(0);
  const speak = useSharedValue(0);
  const lvl = useSharedValue(0);
  const clock = useSharedValue(0);
  const flow = useSharedValue(0);
  const spin = useSharedValue(0);
  const reduced = useReducedMotion();

  const tick = useCallback(
    (frame: FrameInfo) => {
      'worklet';
      const dt = Math.min(0.05, (frame.timeSincePreviousFrame ?? 16) / 1000);
      clock.value += dt;
      // The student's real voice while they hold. The answer's loudness is not
      // measured yet, so the ripple breathes on a slow, uneven swell instead.
      const t = clock.value;
      const heard = level ? level.value : 0;
      lvl.value = listen.value >= speak.value ? heard : 0.55 + 0.25 * Math.sin(t * 2.3) * Math.sin(t * 0.9 + 1);
      flow.value += dt * listen.value * (0.45 + 0.9 * lvl.value);
      spin.value += dt * think.value;
    },
    [clock, lvl, listen, speak, level, flow, spin, think]
  );
  const frame = useFrameCallback(tick, false);

  useEffect(() => {
    const to = (v: SharedValue<number>, on: boolean) => {
      v.value = withTiming(on ? 1 : 0, { duration: on ? START : SETTLE, easing: on ? EASE_OUT : EASE_IN_OUT });
    };
    to(listen, phase === 'listening');
    to(think, phase === 'thinking');
    to(speak, ripple && phase === 'speaking');
    if (reduced) return;
    if (phase !== 'idle') {
      frame.setActive(true);
      return;
    }
    const off = setTimeout(() => frame.setActive(false), SETTLE + 50);
    return () => clearTimeout(off);
  }, [phase, ripple, reduced, frame, listen, think, speak]);

  useEffect(() => () => frame.setActive(false), [frame]);

  return (
    <TeacherOrbSeeds
      teacher={teacher}
      size={size}
      style={style}
      listen={listen}
      think={think}
      speak={speak}
      level={lvl}
      clock={clock}
      flow={flow}
      spin={spin}
    />
  );
}
