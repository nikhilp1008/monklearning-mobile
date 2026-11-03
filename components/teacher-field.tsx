import { Canvas, Fill, Shader, Skia, type SkRuntimeEffect } from '@shopify/react-native-skia';
import { PixelRatio, StyleSheet, View } from 'react-native';
import { useDerivedValue, useSharedValue, type SharedValue } from 'react-native-reanimated';

import { TEACHER_PALETTES } from '@/constants/teachers';
import { colors } from '@/constants/brand';

/**
 * THE LIVING FIELD AND ORB — the Select Teacher screen's whole background.
 *
 * Six soft lights in the teacher's own colours drift across the screen and
 * darken into night toward the bottom so the name and description stay
 * readable over them; a sphere turns slowly in the middle of it. Touching
 * anywhere sends a ripple through the light.
 *
 * ONE SHADER, MODE 3. The handoff's `teacher.frag.glsl` carries four different
 * backgrounds behind a `uMode` switch, because the design explored four. Only
 * mode 3 was chosen. The other three branches are left in the source rather
 * than cut out: the shader is the handoff's text, unedited, so it can be
 * diffed against the folder it came from, and a branch on a uniform that never
 * changes is resolved once by the compiler rather than per pixel.
 *
 * THIS ONE ANIMATES, AND THAT IS THE DIFFERENCE FROM THE HEADER. The header's
 * sky is a still (see components/night-sky.tsx) and costs one draw. This is a
 * full-screen per-pixel evaluation every frame, which is the most expensive
 * thing in the app. It is affordable here only because of what this screen is:
 * one decision, made in a few seconds, a handful of times in a student's life.
 * It must not become a pattern — and it must not keep running once the screen
 * is no longer being looked at, which is what `running` is for.
 *
 * `uLvl` IS PINNED AT 0. In the handoff it is a voice level: the orb swelled
 * and brightened while the teacher spoke. There are no recordings, so there is
 * nothing to drive it, and an orb that pulses to nothing is a lie about what
 * the app can do. The spec says 0 for this screen and this passes 0.
 */

export type Ripple = {
  /** Points, in the canvas's own coordinates. */
  x: number;
  y: number;
  /** The clock reading when the touch landed, in milliseconds. */
  t0: number;
  /** 1 for a touch-down, 0.55 for a drag sample. */
  w: number;
};

/** The shader keeps six alive; the seventh pushes the oldest out. */
export const MAX_RIPPLES = 6;
/** How long a ripple lives, in milliseconds. */
export const RIPPLE_LIFE = 3500;
/** A drag adds one of these at most this often, in milliseconds. */
export const RIPPLE_THROTTLE = 70;
/** A swipe of more than this, in points, switches teacher. */
export const SWIPE_THRESHOLD = 70;

/** The screen's device pixels per point. Fixed for the life of the process. */
const DPR = PixelRatio.get();

/** `uMix` closes this fraction of the remaining gap per second. */
const MIX_RATE = 3.2;

/**
 * The handoff's `shaders/teacher.sksl`, with ONE edit, on the last line.
 *
 * The dither — the fine film grain the whole picture is finished with — reads
 * `hash(floor(fragCoord))`, which gives one random value per whole unit of
 * fragCoord. In WebGL that unit is a DEVICE PIXEL, so it is a true per-pixel
 * grain. Skia hands a shader its coordinates in POINTS, so the same line
 * produced one speck per point: a 3x3 block of identical pixels on a 3x
 * screen, nine times the area per speck. That does not read as film grain, it
 * reads as a coarse pattern laid over the picture, and because it is static
 * while the field drifts underneath, it also masks the motion it sits on.
 *
 * `uPx` is the screen's pixel ratio and multiplying by it restores the
 * original frequency. Nothing else is changed.
 */
const TEACHER_SKSL = `
uniform vec2 uRes; uniform float uT,uMode,uMix,uLvl,uS,uPx; uniform vec3 uOrb; uniform vec4 uTp[6]; uniform vec3 uA[6]; uniform vec3 uB[6];
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*noise(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
half4 main(float2 fragCoord){
 vec2 px=fragCoord; float t=uT; float S=uS;
 vec2 disp=vec2(0.); float ring=0.; float glow=0.;
 for(int k=0;k<6;k++){vec4 tp=uTp[k]; if(tp.w>0.){vec2 d=px-tp.xy; float r=length(d); float age=tp.z;
  float wv=exp(-pow((r-age*380.*S)/(46.*S),2.))*exp(-age*1.4)*tp.w;
  ring+=wv; disp+=d/(r+1.)*wv*26.*S; glow+=exp(-pow(r/(120.*S),2.))*exp(-age*1.1)*tp.w;}}
 vec3 c1=mix(uA[1],uB[1],uMix), c2=mix(uA[2],uB[2],uMix), c3=mix(uA[3],uB[3],uMix), c5=mix(uA[5],uB[5],uMix);
 vec3 night=vec3(.102,.094,.078), night2=vec3(.18,.165,.141);
 vec3 col;
 if(uMode<.5){
  vec2 c=uOrb.xy; float R=uOrb.z*(1.+.06*uLvl+.015*sin(t*1.3));
  vec2 p=px+disp-c; float L=length(p); float ang=atan(p.y,p.x);
  float wob=1.+(.012+.05*uLvl)*sin(ang*3.+t*2.2)+(.008+.04*uLvl)*sin(ang*5.-t*3.1)+ring*.05;
  float Rw=R*wob; float inside=1.-smoothstep(Rw-1.5*S,Rw+1.5*S,L);
  vec2 q=p/R; float rr=clamp(L/Rw,0.,1.);
  float sw=.55*(1.-rr)*2.2+t*(.12+.3*uLvl); float cs=cos(sw),sn=sin(sw); q=mat2(cs,-sn,sn,cs)*q;
  q+=.2*(vec2(fbm(q*1.4+vec2(t*.11,0.)),fbm(q*1.4+vec2(5.2,-t*.1)))-.5);
  vec3 oc=vec3(0.); float ws=0.;
  for(int i=0;i<6;i++){float fi=float(i); vec2 cp=.62*vec2(cos(t*(.17+.03*fi)*(1.+uLvl)+fi*1.05),sin(t*(.21+.02*fi)*(1.+uLvl)+fi*2.1)); float w=1./pow(dot(q-cp,q-cp)+.08,2.); oc+=mix(uA[i],uB[i],uMix)*w; ws+=w;}
  oc/=ws;
  vec2 o=p/Rw;
  oc=mix(oc,vec3(1.),exp(-pow(length(o-vec2(-.38,-.48))/.4,2.))*.55);
  oc=mix(oc,vec3(.35,.12,.02),.32*smoothstep(.5,1.05,length(o-vec2(0.,-.3))));
  oc+=c5*ring*.25;
  float halo=exp(-max(L-Rw,0.)/(80.*S))*(.3+.45*uLvl);
  vec3 bg=mix(night,night2,.3+.7*fbm(px/(260.*S)+t*.02));
  bg+=c1*halo*.6+c3*glow*.3+c5*ring*.2;
  col=mix(bg,oc,inside);
 } else if(uMode<1.5||uMode>2.5){
  float wm=1.;
  vec2 uv=(px+disp*wm)/uRes.y; float asp=uRes.x/uRes.y;
  uv+=.08*(vec2(fbm(uv*2.+t*.05),fbm(uv*2.+5.-t*.04))-.5);
  vec3 fc=vec3(0.); float ws=0.;
  for(int i=0;i<6;i++){float fi=float(i); vec2 cp=vec2(asp*(.5+.42*sin(t*(.11+.025*fi)*(1.+.8*uLvl)+fi*1.7)),.4+.38*cos(t*(.09+.03*fi)*(1.+.8*uLvl)+fi*2.3)); float w=1./pow(dot(uv-cp,uv-cp)+.035,1.6); fc+=mix(uA[i],uB[i],uMix)*w; ws+=w;}
  fc/=ws;
  fc+=(c5*ring*.35)*wm+c3*glow*(.25-.1*(1.-wm));
  float yy=px.y/uRes.y, xx=px.x/uRes.x;
  col=mix(fc,night,uMode>2.5?smoothstep(.48,.66,yy)*.92:smoothstep(.4,.82,yy)*.8);
  float wave=(uMode>2.5?.9:.62)-.14*uLvl*step(uMode,1.5)+.02*sin(xx*9.+t*3.)+.015*sin(xx*17.-t*4.);
  col+=c5*exp(-pow((yy-wave)/.035,2.))*(.08+.55*uLvl*step(uMode,1.5));
 } else {
  vec2 uv=px/uRes; float yb=1.-uv.y, xx=uv.x;
  vec3 bg=mix(night,night2,.3+.7*fbm(px/(300.*S)+t*.02));
  float n=fbm(vec2(xx*2.2+t*.12,t*.15)), n2=fbm(vec2(xx*4.-t*.2,3.+t*.18));
  float hh=(.24+.14*n+.06*n2)*(1.+.6*uLvl)+.012*sin(t*1.4);
  float a=exp(-pow(yb/hh,2.)*1.2);
  float s=fract(xx*.9+.3*fbm(vec2(xx*2.,yb*3.+t*.1))+t*.05)*4.; float f=fract(s); f=f*f*(3.-2.*f);
  vec3 ca=s<1.?c1:s<2.?c3:s<3.?c5:c2; vec3 cb=s<1.?c3:s<2.?c5:s<3.?c2:c1; vec3 ac=mix(ca,cb,f);
  col=mix(bg,ac,a);
  col=mix(col,c3,clamp(glow,0.,1.)*.55)+c5*ring*.3;
 }
 if(uMode>2.5){
  vec2 c=uOrb.xy; float br=.5+.5*sin(t*1.2); float R=uOrb.z*(1.+.025*uLvl);
  vec2 p=px-c; float L=length(p);
  float inside=1.-smoothstep(R-1.2*S,R+1.2*S,L);
  vec2 q=p/R; float rr=clamp(L/R,0.,1.);
  float sw=.55*(1.-rr)*2.2+t*(.12+.5*uLvl); float cs=cos(sw),sn=sin(sw); q=mat2(cs,-sn,sn,cs)*q;
  q+=.2*(vec2(fbm(q*1.4+vec2(t*.11,0.)),fbm(q*1.4+vec2(5.2,-t*.1)))-.5);
  vec3 oc=vec3(0.); float ws=0.;
  for(int i=0;i<6;i++){float fi=float(i); vec2 cp=.62*vec2(cos(t*(.17+.03*fi)*(1.+1.5*uLvl)+fi*1.05),sin(t*(.21+.02*fi)*(1.+1.5*uLvl)+fi*2.1)); float w=1./pow(dot(q-cp,q-cp)+.08,2.); oc+=mix(uA[i],uB[i],uMix)*w; ws+=w;}
  oc/=ws; vec2 o=p/R;
  oc*=1.+.12*br+.35*uLvl;
  oc=mix(oc,vec3(1.),exp(-pow(length(o-vec2(-.38,-.48))/.4,2.))*(.5+.15*uLvl));
  oc=mix(oc,vec3(.35,.12,.02),.32*smoothstep(.5,1.05,length(o-vec2(0.,-.3))));
  oc=mix(oc,vec3(1.),smoothstep(R-2.*S,R-.4*S,L)*.3);
  float out1=max(L-R,0.);
  col=mix(col,col*.6,exp(-out1/(22.*S))*(1.-inside)*.65);
  col+=c5*exp(-out1/((48.+40.*uLvl)*S))*(1.-inside)*(.14+.1*br+.6*uLvl);
  col=mix(col,oc,inside);
 }
 col+=(hash(floor(fragCoord*uPx))-.5)*.07;
 return half4(clamp(col,0.,1.),1.);
}`;

/** Compiled once, failure remembered. Same reasoning as components/night-sky.tsx. */
let compiled: SkRuntimeEffect | null | undefined;

function teacherEffect(): SkRuntimeEffect | null {
  if (compiled === undefined) {
    try {
      compiled = Skia.RuntimeEffect.Make(TEACHER_SKSL) ?? null;
    } catch (e) {
      compiled = null;
      console.error('[teacher-field] the field shader threw while compiling:', e);
    }
    if (compiled === null) {
      console.error('[teacher-field] the field shader did not compile; using the flat ground.');
    }
  }
  return compiled;
}

/** The six colours of a teacher, flattened to the 18 floats the shader wants. */
function palette(id: 'drona' | 'vedha'): number[] {
  return TEACHER_PALETTES[id].flatMap((h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255));
}
const PAL_DRONA = palette('drona');
const PAL_VEDHA = palette('vedha');

export function TeacherField({
  width,
  height,
  orb,
  /** 0 for Drona, 1 for Vedha. The blend between them is eased here. */
  target,
  ripples,
  clock,
  /** False once the screen is leaving, so the shader stops being evaluated. */
  running,
}: {
  width: number;
  height: number;
  orb: { x: number; y: number; r: number };
  target: SharedValue<number>;
  ripples: SharedValue<Ripple[]>;
  clock: SharedValue<number>;
  running: boolean;
}) {
  const effect = teacherEffect();
  const mix = useSharedValue(target.value);
  const lastFrame = useSharedValue(0);

  const uniforms = useDerivedValue(() => {
    const ms = clock.value;
    const t = ms / 1000;
    // First frame has no previous one to measure against, and a dt of "all the
    // time since mount" would snap the blend instead of easing it.
    const dt = lastFrame.value === 0 ? 0 : Math.min(0.05, t - lastFrame.value);
    lastFrame.value = t;
    mix.value += (target.value - mix.value) * Math.min(1, dt * MIX_RATE);

    // Flat, not nested: `vec4 uTp[6]` is twenty-four floats in order. Dead
    // slots are all-zero, and the shader skips anything with w of 0.
    const tp: number[] = [];
    const live = ripples.value;
    for (let i = 0; i < MAX_RIPPLES; i++) {
      const r = live[i];
      const age = r ? ms - r.t0 : 0;
      if (r && age < RIPPLE_LIFE) tp.push(r.x, r.y, age / 1000, r.w);
      else tp.push(0, 0, 0, 0);
    }

    return {
      uRes: [width, height],
      // Wrapped so the shader's trigonometry never runs out of float precision
      // on a screen left open, which shows up as the motion going jerky.
      uT: t % 1000,
      uMode: 3,
      uMix: mix.value,
      uLvl: 0,
      // 1 because every coordinate here is in points, which is the space Skia
      // hands the shader. The web build passes its device-pixel ratio instead.
      uS: 1,
      // Points for everything above, device pixels for the dither alone.
      uPx: DPR,
      uOrb: [orb.x, orb.y, orb.r],
      uTp: tp,
      uA: PAL_DRONA,
      uB: PAL_VEDHA,
    };
  }, [width, height, orb.x, orb.y, orb.r]);

  /*
   * NOT RUNNING MEANS NOT MOUNTED, which is the only reliable off switch here.
   * The canvas redraws whenever a uniform changes and the clock changes one
   * every frame, so a canvas that exists is a canvas that is shading every
   * pixel sixty times a second. Taking it out of the tree while the screen is
   * closing — or before it has been measured — stops the work rather than
   * hiding it. The flat ground underneath is the same colour, so nothing
   * flickers on the way out.
   */
  if (!effect || !running || width <= 0 || height <= 0) {
    return <View pointerEvents="none" style={[StyleSheet.absoluteFillObject, styles.ground]} />;
  }

  return (
    <Canvas pointerEvents="none" style={[StyleSheet.absoluteFillObject, styles.ground]}>
      <Fill>
        <Shader source={effect} uniforms={uniforms} />
      </Fill>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  ground: { backgroundColor: colors.nightDeep },
});
