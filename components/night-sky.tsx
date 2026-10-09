import {
  Blur,
  Canvas,
  Fill,
  Group,
  Image,
  LinearGradient,
  Mask,
  Paint,
  Rect,
  Shader,
  Skia,
  vec,
  type SkImage,
  type SkRuntimeEffect,
} from '@shopify/react-native-skia';
import { useMemo } from 'react';
import { PixelRatio, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useDerivedValue, type SharedValue } from 'react-native-reanimated';

/**
 * THE NIGHT SKY BEHIND HOME'S HEADER.
 *
 * "5b, night with the lamp below" in the handoff: a dark field with a warm
 * light rising from under the bottom edge, a soft horizon band where the two
 * meet, and a little noise so neither reads as a flat gradient. It is a
 * fragment shader, ported from the design's GLSL to Skia's SkSL, and the port
 * is in `shaders/sky.sksl` in the handoff folder — this file is that text,
 * unaltered.
 *
 * IT IS A STILL, NOT AN ANIMATION, and that is the whole reason this is
 * affordable. `uT` — the shader's clock — is pinned at 12. Nothing in the
 * uniforms changes after the first layout, so Skia draws the picture once and
 * every later frame is a cached texture. The same shader animated would be a
 * full-screen per-pixel evaluation sixty times a second, which is a battery
 * decision, not a drawing one. We are not making that trade for a backdrop.
 *
 * WHY A SHADER AT ALL, when the card this replaces got its warmth from two
 * stacked gradients. Because the horizon is not a gradient: it is a soft
 * boundary that wanders across the width, lit from one side, with an ember
 * band along it. Layered gradients can fake a glow; they cannot fake an
 * irregular edge, and an irregular edge is what stops the header looking like
 * a template.
 *
 * `blur` EXISTS FOR THE CONSOLE'S GLASS. See `components/home-header.tsx` —
 * CSS gets its frosted panel from `backdrop-filter`, which React Native has no
 * equivalent for. Since this backdrop is a still that WE draw, the panel can
 * simply be handed a second, blurred copy of the same sky, aligned to the same
 * origin. That is what `backdrop-filter` computes, computed once instead of
 * every frame, with no native blur library involved and therefore no
 * difference between iOS and Android.
 */

/**
 * THE SKY'S FILM GRAIN, as a fraction of what the design specifies.
 *
 * This used to be the strength of a separate `<Grain>` layer over the sky,
 * and that layer turned out to do almost nothing here. Measured on device:
 * switching it off entirely moved the sky's grain from 8.10 to 8.07 in the
 * dark upper band, 9.76 to 9.67 mid-gradient, 5.57 to 5.48 on the bright
 * edge — about one per cent, three times over. It blends in `overlay`, and
 * overlay with mid-grey is close to the identity function at these
 * luminances, so it was a Skia canvas rendering for no visible result.
 *
 * ALL OF THE TEXTURE IS THE SHADER'S OWN DITHER, so that is where the control
 * belongs, and `grain` on NightSky now scales it. Removing the dead layer also
 * removes a platform risk worth more than the layer: a blend mode that does
 * nothing on iOS might not do nothing on Android, and a header that is grainier
 * on one platform than the other is a worse outcome than no layer at all.
 *
 * 0.9 is ten per cent off the design's amount — the sky read a touch heavy
 * against the rest of the page at full strength.
 *
 * IT IS THE DEFAULT RATHER THAN A PROP THE HEADER PASSES, because this sky is
 * drawn three times on Home: the header itself, the strip pinned behind the
 * status bar, and the blurred copy inside the console's glass. Those three
 * have to be the same picture — a seam appears the moment one is grainier
 * than another — so the amount belongs to the sky, not to any one caller.
 */
export const SKY_GRAIN = 0.9;

/** What shows if the shader will not compile. Named in the handoff's spec. */
export const SKY_FALLBACK = '#2E2A24';

/**
 * The handoff's `shaders/sky.sksl`, with the same one edit as the teacher
 * field: the two dither lines multiply `fragCoord` by `uPx`.
 *
 * WebGL gives a shader device pixels and Skia gives it points, so the grain
 * these lines add was landing at one speck per point — nine device pixels per
 * speck on a 3x screen instead of one. See components/teacher-field.tsx for
 * the full reasoning. Nothing else differs from the file in the handoff.
 */
const SKY_SKSL = `
uniform vec2 uRes; uniform float uT,uB,uSoft,uDark,uHotA,uWarp,uPx,uGrain,uLift; uniform vec2 uDir,uHot; uniform vec3 uGold,uMari,uPale,uEmber,uRust,uBronze;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
half4 main(float2 fragCoord){
 vec2 uv=fragCoord/uRes;
 float asp=uRes.x/uRes.y; vec2 p=vec2(uv.x*asp,uv.y); float t=uT;
 vec2 q=vec2(fbm(p*1.5+vec2(t*.05,t*.03)),fbm(p*1.5+vec2(5.2-t*.04,1.3+t*.02)));
 vec2 r=vec2(fbm(p*2.1+q*1.8+vec2(1.7,9.2)+t*.03),fbm(p*2.1+q*1.8+vec2(8.3,2.8)-t*.025));
 float w=fbm(p*1.3+r*1.6);
 float s=dot(uv-.5,uDir)+.5;
 w=mix(.5,w,uWarp); q=mix(vec2(.5),q,uWarp); r=mix(vec2(.5),r,uWarp);
 float b=uB+(w-.5)*.42+(r.x-.5)*.16+(uv.x-.5)*.04*(1.-uWarp);
 float m=smoothstep(b-uSoft,b+uSoft,s);
 vec3 gold=uGold, mari=uMari, pale=uPale, ember=uEmber, rust=uRust, red=vec3(.867,.267,.2);
 vec3 n0=vec3(.29,.227,.133), n1=vec3(.18,.165,.141), n2=vec3(.102,.094,.078), bronze=uBronze;
 vec3 day=mix(mari,gold,smoothstep(.3,.8,q.x));
 day=mix(day,pale,smoothstep(.6,.9,w)*.4*(1.-m));
 vec3 night=mix(n0,n1,smoothstep(.25,.75,r.y));
 night=mix(night,n2,smoothstep(.45,1.15,s)*uDark);
 night+=bronze*exp(-pow((w-.56)/.03,2.))*.26*m*uWarp;
 night+=bronze*exp(-pow((s-b-uSoft*1.6)/.05,2.))*.12*(1.-uWarp);
 vec3 col=mix(day,night,m);
 float band=exp(-pow((s-b)/(uSoft*1.15),2.));
 col=mix(col,mix(ember,rust,smoothstep(.4,.7,r.x)),band*.5);
 col=mix(col,red,band*smoothstep(.6,.8,q.y)*.16);
 float hd=length((uv-uHot)*vec2(asp,1.));
 col=mix(col,ember,exp(-pow(hd/.34,2.))*uHotA);
 col=mix(col,vec3(.50,.36,.19),uLift);
 col+=(hash(floor(fragCoord*uPx))-.5)*.075*uGrain;
 col+=(hash(floor(fragCoord*uPx*.5)+3.1)-.5)*.04*uGrain;
 return half4(clamp(col,0.,1.),1.);
}`;

/**
 * Every uniform but the resolution, from the handoff's `tokens.json`.
 *
 * `uT` 12 is the frame of the animation the design was approved on. `uWarp` 0
 * switches off the day half of the shader — this header is only ever night.
 * `uDir` (0,-1) with `uHot` (0.5, 1.1) is what puts the lamp below the bottom
 * edge rather than in the picture: the light source is off-canvas, so the
 * header catches the top of a glow instead of containing a bright blob.
 */
/**
 * THE SKY'S WARM COLOURS, as a theme. The night is the same for everyone; the
 * light along its foot is not. Home takes the chosen teacher's (see
 * SKY_THEMES in constants/teachers.ts); everything else — onboarding, the
 * class ticket, the pass screen — keeps the brand's own, which is this.
 */
export type SkyTheme = {
  gold: string;
  mari: string;
  pale: string;
  ember: string;
  rust: string;
  bronze: string;
};
export const BRAND_SKY: SkyTheme = {
  gold: '#F2B23A',
  mari: '#EEA31F',
  pale: '#FBDDA0',
  ember: '#EE9622',
  rust: '#D6642E',
  bronze: '#8A6418',
};
const rgb = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
function themeUniforms(t: SkyTheme) {
  return {
    uGold: rgb(t.gold),
    uMari: rgb(t.mari),
    uPale: rgb(t.pale),
    uEmber: rgb(t.ember),
    uRust: rgb(t.rust),
    uBronze: rgb(t.bronze),
  };
}

const SKY_UNIFORMS = {
  // Points for everything else, device pixels for the dither alone.
  uPx: PixelRatio.get(),
  uT: 12,
  uWarp: 0,
  // 0 everywhere but the class ticket; see NightSky's `lift`.
  uLift: 0,
  uB: 0.3,
  uSoft: 0.2,
  uDark: 0.9,
  uHotA: 0.25,
  uDir: [0, -1],
  uHot: [0.5, 1.1],
};

/**
 * Compiled once, on first use, and remembered — including the failure.
 *
 * NOT AT MODULE SCOPE. `Skia.RuntimeEffect.Make` reaches into the native
 * renderer, and a throw at import time takes the whole JavaScript bundle with
 * it rather than one view. Compiling on first render puts any failure inside a
 * component that already knows how to fall back to a flat colour. `undefined`
 * means "not tried yet"; `null` means "tried, and it will not work".
 */
let compiled: SkRuntimeEffect | null | undefined;

function skyEffect(): SkRuntimeEffect | null {
  if (compiled === undefined) {
    try {
      compiled = Skia.RuntimeEffect.Make(SKY_SKSL) ?? null;
    } catch (e) {
      compiled = null;
      console.error('[night-sky] the sky shader threw while compiling:', e);
    }
    if (compiled === null) {
      console.error('[night-sky] the sky shader did not compile; using the flat fallback.');
    }
  }
  return compiled;
}

export function NightSky({
  width,
  height,
  /** Scales the shader's film grain. 1 is the design's amount; see SKY_GRAIN. */
  grain = SKY_GRAIN,
  /** Gaussian sigma, in points. 0 draws the sky sharp. */
  blur = 0,
  /**
   * 0 to 1: pulls every colour toward a warm bronze, evening the sky out —
   * its near-black top lifts and its bright amber foot calms. 0 is the
   * header's sky. The class ticket on Class Dismissed uses it so a small card
   * of sky reads as warm rather than as a dark slab, while white text on it
   * keeps its contrast.
   */
  lift = 0,
  theme = BRAND_SKY,
  style,
}: {
  width: number;
  height: number;
  grain?: number;
  blur?: number;
  lift?: number;
  /** Whose light warms the foot of the sky. The brand's unless given. */
  theme?: SkyTheme;
  style?: StyleProp<ViewStyle>;
}) {
  const effect = skyEffect();
  const uniforms = useMemo(
    () => ({ uRes: [width, height], uGrain: grain, ...SKY_UNIFORMS, uLift: lift, ...themeUniforms(theme) }),
    [width, height, grain, lift, theme]
  );

  // Before the first layout there is nothing to draw into, and a zero-sized
  // Skia canvas is a wasted native view rather than a harmless no-op.
  if (!effect || width <= 0 || height <= 0) {
    return <View pointerEvents="none" style={[styles.fallback, { width, height }, style]} />;
  }

  const sky = (
    <Fill>
      <Shader source={effect} uniforms={uniforms} />
    </Fill>
  );

  return (
    <Canvas pointerEvents="none" style={[{ width, height }, style]}>
      {blur > 0 ? (
        /* `clamp` repeats the edge pixel outward, so the blur has something to
           average at the canvas boundary instead of transparent black — which
           is what would otherwise leave a dark rim along the edges. */
        <Group layer={<Paint><Blur blur={blur} mode="clamp" /></Paint>}>{sky}</Group>
      ) : (
        sky
      )}
    </Canvas>
  );
}

/**
 * TWO SKIES, ONE SHOWING: the sky in two teachers' light, faded between.
 *
 * Each is a still, drawn once, so the change of teacher costs a fade of two
 * pictures rather than redrawing the shader every frame of it. `mix` runs
 * from 0 (the first theme) to 1 (the second); the caller animates it.
 */
export function ThemedSky({
  width,
  height,
  themes,
  mix,
  blur = 0,
  style,
}: {
  width: number;
  height: number;
  themes: readonly [SkyTheme, SkyTheme];
  mix: SharedValue<number>;
  blur?: number;
  style?: StyleProp<ViewStyle>;
}) {
  const top = useAnimatedStyle(() => ({ opacity: mix.value }));
  return (
    <View pointerEvents="none" style={[{ width, height }, style]}>
      <NightSky width={width} height={height} blur={blur} theme={themes[0]} style={StyleSheet.absoluteFillObject} />
      <Animated.View style={[StyleSheet.absoluteFill, top]}>
        <NightSky width={width} height={height} blur={blur} theme={themes[1]} />
      </Animated.View>
    </View>
  );
}

/**
 * THE SKY ABOVE THE SKY: the header's top edge, continued upward.
 *
 * Pulling Home down past its top opens a space above the header. Filled with
 * a flat colour it matched the sky's top edge but not its texture — the sky
 * carries a fine film grain and a flat fill does not, so the join showed as a
 * line. This is the top edge's own colour with the shader's own two grain
 * layers, at the same strength and frequency: nothing else, so it is cheap,
 * and it is still, so Skia draws it once.
 */
const SKY_EDGE_SKSL = `
uniform float3 uCol; uniform float uPx,uGrain;
float hash(float2 p){return fract(sin(dot(p,float2(127.1,311.7)))*43758.5453);}
half4 main(float2 fragCoord){
 float3 col=uCol;
 col+=(hash(floor(fragCoord*uPx))-.5)*.075*uGrain;
 col+=(hash(floor(fragCoord*uPx*.5)+3.1)-.5)*.04*uGrain;
 return half4(clamp(col,0.,1.),1.);
}`;
let edgeCompiled: SkRuntimeEffect | null | undefined;
function edgeEffect(): SkRuntimeEffect | null {
  if (edgeCompiled === undefined) {
    try {
      edgeCompiled = Skia.RuntimeEffect.Make(SKY_EDGE_SKSL) ?? null;
    } catch {
      edgeCompiled = null;
    }
  }
  return edgeCompiled;
}

/** The sky's colour along its top edge, measured off the rendered header. */
export const SKY_TOP_EDGE = '#221E18';
const EDGE_RGB = [0x22 / 255, 0x1e / 255, 0x18 / 255];

export function NightSkyAbove({
  width,
  height,
  style,
}: {
  width: number;
  height: number;
  style?: StyleProp<ViewStyle>;
}) {
  const effect = edgeEffect();
  const uniforms = useMemo(() => ({ uCol: EDGE_RGB, uPx: PixelRatio.get(), uGrain: SKY_GRAIN }), []);
  if (!effect || width <= 0 || height <= 0) {
    return <View pointerEvents="none" style={[{ width, height, backgroundColor: SKY_TOP_EDGE }, style]} />;
  }
  return (
    <Canvas pointerEvents="none" style={[{ width, height }, style]}>
      <Fill>
        <Shader source={effect} uniforms={uniforms} />
      </Fill>
    </Canvas>
  );
}

/**
 * The sky painted ONCE into a picture, at the screen's own resolution.
 *
 * The shader is expensive per pixel — several layers of noise for every point
 * — which is affordable for a still that Skia draws once and caches, and not
 * for anything redrawn as the page scrolls. The strip behind the clock moves
 * every frame, and drawing it with the live shader re-ran all of that noise
 * for the whole strip sixty times a second: scrolling Home visibly stuttered.
 * A picture of the same sky costs nothing to slide.
 *
 * null until there is a size, or where an offscreen surface cannot be made —
 * the caller then draws nothing rather than the expensive path.
 */
function useSkyImage(width: number, height: number, theme: SkyTheme = BRAND_SKY): SkImage | null {
  return useMemo(() => {
    const effect = skyEffect();
    if (!effect || width <= 0 || height <= 0) return null;
    const dpr = PixelRatio.get();
    const surface = Skia.Surface.MakeOffscreen(Math.round(width * dpr), Math.round(height * dpr));
    if (!surface) return null;
    const values: Record<string, number | number[]> = {
      uRes: [width, height],
      uGrain: SKY_GRAIN,
      ...SKY_UNIFORMS,
      ...themeUniforms(theme),
    };
    // The shader takes its uniforms as one flat list, in declaration order.
    const flat: number[] = [];
    for (let i = 0; i < effect.getUniformCount(); i++) {
      const v = values[effect.getUniformName(i)];
      if (Array.isArray(v)) flat.push(...v);
      else flat.push(v ?? 0);
    }
    const paint = Skia.Paint();
    paint.setShader(effect.makeShader(flat));
    const canvas = surface.getCanvas();
    canvas.scale(dpr, dpr);
    canvas.drawRect(Skia.XYWHRect(0, 0, width, height), paint);
    surface.flush();
    // A GPU snapshot belongs to the context it was drawn in, and the strip is
    // drawn on the UI thread, not this one — handed over as is, it drew
    // nothing. Copied to plain pixels it can be drawn anywhere.
    return surface.makeImageSnapshot().makeNonTextureImage();
  }, [width, height, theme]);
}

/**
 * THE SKY BEHIND THE CLOCK, AS A STRIP THAT SCROLLS WITH THE HEADER.
 *
 * Home pins a strip of this sky over the status bar so the header's words and
 * buttons pass out of sight under the clock instead of colliding with it. It
 * draws the header's own sky — same shader, same size, same grain — slid up by
 * however far the page has scrolled, so the strip always shows exactly the
 * slice of sky that is beneath it and the two read as one sky.
 *
 * Two things a plain clipped view could not do, which is why it is drawn here:
 *
 * ITS LOWER EDGE IS SOFT. A solid strip cut whatever passed under it with a
 * hard line — a button sliced in half under the clock. The last `feather`
 * points dissolve instead. They sit INSIDE the status bar's own height, below
 * the clock: reaching lower would lay a haze over the logo and buttons while
 * the page is at rest, when the strip is meant to be invisible.
 *
 * IT KEEPS THE HEADER'S CORNERS. The header ends in two rounded corners, and
 * the sky in the strip is clipped to the same shape, so as the header's
 * bottom passes under the clock the strip's sky ends where the header's does.
 */
export function NightSkyStrip({
  width,
  skyHeight,
  height,
  feather,
  corner,
  offset,
  fade,
  themes,
  mix,
  style,
}: {
  width: number;
  /** The header's height — the full sky the strip is a window onto. */
  skyHeight: number;
  /** The strip's own height: the status bar's. */
  height: number;
  feather: number;
  /** The header's bottom corner radius. */
  corner: number;
  /** How far the header has scrolled up, clamped to its travel. */
  offset: SharedValue<number>;
  /** 1 while the header is under the clock, easing to 0 as it leaves. */
  fade: SharedValue<number>;
  /** With `mix`, the strip is drawn in both themes and faded between, the
   *  way ThemedSky is — so it always matches the header beneath it. */
  themes?: readonly [SkyTheme, SkyTheme];
  mix?: SharedValue<number>;
  style?: StyleProp<ViewStyle>;
}) {
  const sky = useSkyImage(width, skyHeight, themes?.[0]);
  const skyB = useSkyImage(width, themes ? skyHeight : 0, themes?.[1]);
  const mixOpacity = useDerivedValue(() => mix?.value ?? 0);
  const slide = useDerivedValue(() => [{ translateY: -offset.value }]);
  const shape = useMemo(() => {
    const p = Skia.Path.Make();
    const r = Math.min(corner, width / 2, skyHeight / 2);
    p.moveTo(0, 0);
    p.lineTo(width, 0);
    p.lineTo(width, skyHeight - r);
    p.arcToTangent(width, skyHeight, width - r, skyHeight, r);
    p.lineTo(r, skyHeight);
    p.arcToTangent(0, skyHeight, 0, skyHeight - r, r);
    p.close();
    return p;
  }, [width, skyHeight, corner]);

  if (!sky || height <= 0) return null;
  const solid = Math.max(0, (height - feather) / height);

  return (
    <Canvas pointerEvents="none" style={[{ width, height }, style]}>
      <Mask
        mask={
          <Rect x={0} y={0} width={width} height={height}>
            <LinearGradient
              start={vec(0, 0)}
              end={vec(0, height)}
              colors={['white', 'white', 'transparent']}
              positions={[0, solid, 1]}
            />
          </Rect>
        }>
        <Group opacity={fade}>
          <Group transform={slide} clip={shape}>
            <Image image={sky} x={0} y={0} width={width} height={skyHeight} fit="fill" />
            {skyB ? (
              <Group opacity={mixOpacity}>
                <Image image={skyB} x={0} y={0} width={width} height={skyHeight} fit="fill" />
              </Group>
            ) : null}
          </Group>
        </Group>
      </Mask>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  fallback: { backgroundColor: SKY_FALLBACK },
});
