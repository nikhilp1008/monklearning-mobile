#!/usr/bin/env python3
"""
Port the webpage's hand-authored board scenes into this app.

    python3 scripts/port-scenes.py [--web PATH_TO_monk-learning-web]

Run this whenever scenes are added or changed on the webpage. It rewrites
`components/scenes/` from scratch — those files are GENERATED, so never edit
them by hand; a re-run will overwrite the edit. Change `components/scenes/kit.tsx`
(which every scene draws through) or `app/lesson-player.tsx` instead.

Why a codemod rather than a rewrite: a scene is authored as a React component
over a 1080x620 canvas, and is built almost entirely from the kit primitives
(Fade / Draw / T / Chip). Only a handful of raw SVG tags appear, and
react-native-svg exposes all of them, so the conversion is mechanical:

  * drop the "use client" directive (Next.js only)
  * point kit imports at this app's copy
  * swap the root <svg> for the kit's <Scene>, keeping a non-default viewBox
  * capitalise raw SVG tags and import exactly the ones each file uses
  * drop className (react-native-svg has no CSS)

Anything it cannot convert is reported instead of half-written, so a bad file
is visible rather than silently broken. The two known cases are inline
`style={{...}}` objects — CSS on the web, props here — which are listed at the
end for manual fixing.

The registry is regenerated too, keyed `chapterId:position` exactly as the
webpage keys it, so a section with a ported scene shows it and every other
section falls back to its `board_content` events. That fallback is the
webpage's own behaviour, not a mobile compromise: roughly two thirds of all
sections have no authored scene on either client.
"""
import argparse
import os
import re
import sys

DEFAULT_WEB = os.path.expanduser("~/Desktop/monk-learning-web")
APP_SCENES = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                          "components", "scenes")

# Raw SVG elements a scene may use -> their react-native-svg component.
TAGS = {
    "g": "G", "rect": "Rect", "circle": "Circle", "line": "Line", "path": "Path",
    "text": "SvgText", "tspan": "TSpan", "ellipse": "Ellipse", "polygon": "Polygon",
    "polyline": "Polyline", "defs": "Defs", "clipPath": "ClipPath", "marker": "Marker",
    "linearGradient": "LinearGradient", "radialGradient": "RadialGradient", "stop": "Stop",
    "mask": "Mask", "pattern": "Pattern", "use": "Use", "symbol": "Symbol",
}
IMPORT_NAME = {v: ("Text as SvgText" if v == "SvgText" else v) for v in TAGS.values()}

# `math-kit` and `chem-kit` are subject-specific component libraries. They have
# no root <svg>, so that particular complaint is expected of them.
#
# `kit` is deliberately NOT in this list. It is the one file that is not a port
# at all but a hand-written React Native rewrite: the webpage animates through
# CSS transitions and normalises stroke length with `pathLength`, neither of
# which exists here, so its Fade/Draw are built on Reanimated and measure their
# own paths. Regenerating it from the web copy silently replaces working native
# code with DOM code that cannot run — which is exactly what happened the first
# time this script was run from the repo.
KIT_FILES = {"math-kit", "chem-kit"}

# Fixes applied after conversion, so a re-run lands on the same working tree
# rather than undoing hand corrections. Each is a genuine web/native
# difference, not a preference.
# What react-native-svg's <Text> tree accepts, versus the web's ReactNode.
TEXT_CHILD = "string | number | (string | number)[]"

POST_FIXES = [
    # react-native-svg's <Text> tree accepts text, not arbitrary ReactNode, so
    # the subscript/superscript helpers have to say what they really take.
    ("({ children }: { children: React.ReactNode })",
     f"({{ children }}: {{ children: {TEXT_CHILD} }})"),
    # `baselineShift` is CSS and unimplemented on native; a <TSpan> shifts with
    # `dy`. The em values match what the browser renders for sub and super.
    ('baselineShift="sub" fontSize="0.7em"', 'dy="0.32em" fontSize="0.7em"'),
    ('baselineShift="super" fontSize="0.7em"', 'dy="-0.5em" fontSize="0.7em"'),
    ('baselineShift="sub"', 'dy="0.32em"'),
    ('baselineShift="super"', 'dy="-0.5em"'),
]

# `math-kit` declares a `Circle` shape type alongside the imported <Circle>
# component; on the web there was no component to collide with.
MATH_KIT_FIXES = [
    ("type Circle = { cx: number; cy: number; r: number };",
     "/** Renamed from `Circle`: that name is now the imported component. */\n"
     "type CircleSpec = { cx: number; cy: number; r: number };"),
]

# Inline CSS objects, expressed as react-native-svg props. `x` is the group's
# translate shorthand; there is no transition property, so the end state is
# applied directly.
STYLE_FIXES = {
    # Two scenes drove a beat with CSS keyframes rather than through the kit,
    # so conversion dropped the motion and left the beat inert. Both are
    # restored with kit primitives written for them (StepAcross, Bob).
    "Ch01Sec1_anim": [(
        """      <G opacity={beat < 3 ? 0 : beat > 3 ? 0.25 : 1} x={beat > 3 ? 480 : 0}>
        <G>""",
        """      <G opacity={beat < 3 ? 0 : beat > 3 ? 0.25 : 1}>
        {/* The web walks the stick with the `sc-stick` keyframes: four stops
            over 3.8s, laid down and picked up again. This is that walk. */}
        <StepAcross
          elapsed={beat === 3 ? currentTime - (reveals[3] ?? 0) : -1}
          stops={[0, 160, 320, 480]}>""",
    ), (
        """        </G>
      </G>
      <Fade on={beat >= 3} delay={dl(3, 1)}>""",
        """        </StepAcross>
      </G>
      <Fade on={beat >= 3} delay={dl(3, 1)}>""",
    )],
    "Ch14Sec1_anim": [(
        """            <Circle
              key={i}
              cx={x}
              cy={400}
              r={6}
              fill={INK}
              y={beat > 0 ? SETTLED[i] : 0}
            />""",
        """            // Each particle only bobs in place; the per-dot stagger is what
            // makes a ripple appear to travel, which is the scene's whole point.
            <Bob
              key={i}
              active={beat === 0}
              elapsed={currentTime - (reveals[0] ?? 0)}
              delay={i * 0.09}
              settled={beat > 0 ? SETTLED[i] : 0}>
              <Circle cx={x} cy={400} r={6} fill={INK} />
            </Bob>""",
    )],
    "Ch01Sec1": [(
        """      <G
        style={{
          opacity: beat < 3 ? 0 : beat > 3 ? 0.25 : undefined,
          transform: beat > 3 ? "translateX(480px)" : undefined,
        }}
      >""",
        """      {/* CSS opacity/transform on the web; react-native-svg takes opacity
          as a prop and `x` as its translate shorthand. */}
      <G opacity={beat < 3 ? 0 : beat > 3 ? 0.25 : 1} x={beat > 3 ? 480 : 0}>""",
    )],
    "C11Ch06Sec1": [(
        """      <G style={{ opacity: coachOn ? 1 : 0, transition: "opacity 0.6s ease" }}>""",
        """      {/* The web fades this group with a CSS transition; react-native-svg
          has no transition property, so the opacity is applied directly. */}
      <G opacity={coachOn ? 1 : 0}>""",
    )],
}



def _split_top_level(body):
    """Split `a: 1, b: f(x, y)` on commas that are not nested."""
    out, depth, cur = [], 0, ""
    for ch in body:
        if ch in "([{": depth += 1
        elif ch in ")]}": depth -= 1
        if ch == "," and depth == 0:
            out.append(cur); cur = ""
        else:
            cur += ch
    if cur.strip():
        out.append(cur)
    return [x.strip() for x in out if x.strip()]


# CSS declarations with no react-native-svg equivalent. The kit's Fade and Draw
# own animation here, so a transition is not a missing feature, it is the web's
# way of doing what Reanimated already does.
DROPPED_CSS = ("transition", "transitionDelay", "animation", "animationDelay",
               "willChange", "transformOrigin", "transformBox")



def _translate_prop(value):
    """A CSS translate -> react-native-svg's `x` / `y` translate shorthand.

    Handles the literal (`"translateX(480px)"`), the interpolated
    (`` `translateY(${EXPR}px)` ``), and the conditional form the scenes use to
    gate a move on a beat, where the web's `undefined` means "stay put" and the
    native equivalent is an explicit 0.
    """
    value = value.strip()
    m = re.fullmatch(r'(.+?)\s*\?\s*(.+?)\s*:\s*undefined', value, re.S)
    cond, inner = (m.group(1), m.group(2)) if m else (None, value)

    t = re.fullmatch(r'[`"]translate([XY])\((?:\$\{)?(.+?)(?:\})?px\)[`"]',
                     inner.strip(), re.S)
    if not t:
        return None
    axis, expr = t.group(1).lower(), t.group(2).strip()
    return f"{axis}={{{cond.strip()} ? {expr} : 0}}" if cond else f"{axis}={{{expr}}}"


def convert_inline_style(text):
    """Rewrite `style={{...}}` into react-native-svg props.

    Scenes carry their reveal state as inline CSS on the web: an opacity driven
    by `beat`, plus a transition that eases it. react-native-svg takes opacity
    as a prop and has no transition property at all, so the opacity survives and
    the easing is dropped.

    Returns (text, unconverted) where `unconverted` lists declarations this does
    not understand, so a shape nobody anticipated is reported rather than
    silently discarded.
    """
    unconverted = []
    while True:
        i = text.find("style={{")
        if i == -1:
            break
        j, depth = i + len("style={{"), 1  # just past the inner {
        while j < len(text) and depth:
            if text[j] == "{": depth += 1
            elif text[j] == "}": depth -= 1
            j += 1
        body = text[i + len("style={{"): j - 1]
        props = []
        for decl in _split_top_level(body):
            key, _, value = decl.partition(":")
            key, value = key.strip(), value.strip()
            if key in DROPPED_CSS:
                continue
            if key == "opacity":
                props.append(f"opacity={{{value}}}")
            elif key == "transform":
                prop = _translate_prop(value)
                if prop:
                    props.append(prop)
                else:
                    unconverted.append(decl)
            else:
                unconverted.append(decl)
        # `}}` closes the expression; step past the outer brace too.
        end = j + 1 if j < len(text) and text[j] == "}" else j
        text = text[:i] + " ".join(props) + text[end:]
    return text, unconverted


def narrow_text_children(text):
    """Narrow `children: React.ReactNode` where the children are text.

    Only when the component actually puts them inside a <TSpan>. Some helpers
    take React elements and render them straight into the SVG tree, where
    ReactNode is the correct type; narrowing those broke a working scene.
    """
    if re.search(r"<TSpan[^>]*>\{children\}</TSpan>", text):
        text = text.replace("children: React.ReactNode;", f"children: {TEXT_CHILD};")
    return text


# `em` is a CSS unit and react-native-svg has no notion of one: `fontSize` is
# typed as string-or-number and handed to the platform, which reads
# `"0.62em"` as the number 0.62. An exponent authored at 62% of its line
# therefore renders at two thirds of a point — present in the tree, invisible
# on the board. Every formula with a superscript or subscript is affected
# (`Kc = [NH₃]²`, `e^−ΔG°/RT`), which is most of Equilibrium.
#
# `em` means "relative to this element's font size", so it is resolved against
# the enclosing <SvgText>'s own size, which is the value the author was scaling.
RELATIVE_UNIT = re.compile(r'\b(fontSize|dy|dx)="([\d.]+)em"')
# A superscript's base size can come from a raw <SvgText fontSize={n}> or, just
# as often, from one of the kit's wrappers — <T size={n}> and <Chip size={n}>
# both render an <SvgText fontSize={size}> that never appears in the scene file.
# Resolving only the literal case silently fell back to 14 and sized those
# exponents against the wrong parent.
TEXT_BLOCKS = (
    (re.compile(r'<SvgText\b.*?</SvgText>', re.S), r'fontSize=\{([\d.]+)\}'),
    (re.compile(r'<T\b[^>]*>.*?</T>', re.S), r'size=\{([\d.]+)\}'),
    (re.compile(r'<Chip\b[^>]*>.*?</Chip>', re.S), r'size=\{([\d.]+)\}'),
)
FALLBACK_EM_BASE = 14.0


def resolve_relative_units(text):
    for block_re, size_re in TEXT_BLOCKS:
        def within(match, size_re=size_re):
            block = match.group(0)
            base = re.search(size_re, block)
            if not base:
                return block
            size = float(base.group(1))
            return RELATIVE_UNIT.sub(
                lambda a: f'{a.group(1)}={{{round(size * float(a.group(2)), 1)}}}', block)
        text = block_re.sub(within, text)
    # Outside a <SvgText> there is no font size to be relative to; a fallback
    # beats leaving a string the platform will read as a fraction of a point.
    return RELATIVE_UNIT.sub(
        lambda a: f'{a.group(1)}={{{round(FALLBACK_EM_BASE * float(a.group(2)), 1)}}}', text)


# The webpage names its fonts through CSS custom properties. React Native has
# no cascade to read them from, so the family silently falls back to the system
# face instead of the app's Anek/Kalam — a quiet mismatch rather than an error.
CSS_FONT_VARS = [
    (re.compile(r'"var\(--font-anek-latin\)[^"]*"'), "'AnekLatin_600SemiBold'"),
    (re.compile(r'"var\(--font-kalam\)[^"]*"'), "'Kalam_700Bold'"),
]


# React Native picks a face by NAME and ignores fontWeight, so a headline
# authored at weight 800 alongside the CSS var would quietly render SemiBold.
# This mirrors kit.tsx's own fontFor().
WEIGHT_FACE = [(800, "AnekLatin_800ExtraBold"), (700, "AnekLatin_700Bold"),
               (600, "AnekLatin_600SemiBold"), (500, "AnekLatin_500Medium"),
               (0, "AnekLatin_400Regular")]
SVGTEXT_OPEN = re.compile(r'<SvgText\b[^>]*>', re.S)


def resolve_css_font_families(text):
    for pattern, family in CSS_FONT_VARS:
        text = pattern.sub(family, text)

    def by_weight(match):
        tag = match.group(0)
        w = re.search(r'fontWeight=\{(\d+)\}', tag)
        if not w or "'AnekLatin_600SemiBold'" not in tag:
            return tag
        weight = int(w.group(1))
        face = next(f for lo, f in WEIGHT_FACE if weight >= lo)
        return tag.replace("'AnekLatin_600SemiBold'", f"'{face}'")

    return SVGTEXT_OPEN.sub(by_weight, text)


def ensure_kit_imports(text):
    """Import any kit primitive a substitution introduced."""
    for symbol in ("StepAcross", "Bob"):
        if f"<{symbol}" not in text:
            continue
        km = re.search(r"import\s*\{([^}]*)\}\s*from '@/components/scenes/kit';",
                       text, re.S)
        if km and not re.search(rf"\b{symbol}\b", km.group(1)):
            inner = km.group(1)
            sep = "" if inner.rstrip().endswith(",") else ","
            text = (text[: km.start(1)] + inner.rstrip() + sep +
                    f"\n  {symbol},\n" + text[km.end(1):])
    return text


def apply_post_fixes(text, name):
    """Corrections that survive a re-run.

    Returns (text, unconverted_style_declarations).
    """
    for old, new in POST_FIXES:
        text = text.replace(old, new)
    if name == "math-kit":
        for old, new in MATH_KIT_FIXES:
            text = text.replace(old, new)
        text = re.sub(r"\bCircle\[\]", "CircleSpec[]", text)
    for old, new in STYLE_FIXES.get(name, []):
        text = text.replace(old, new)
    text = narrow_text_children(text)
    text = resolve_relative_units(text)
    text = resolve_css_font_families(text)
    text, unconverted = convert_inline_style(text)

    # The animation restorations match the CONVERTED shape — props, not CSS —
    # so they have to run after convert_inline_style, and the imports they need
    # after that again.
    for old, new in STYLE_FIXES.get(name + "_anim", []):
        text = text.replace(old, new)
    text = ensure_kit_imports(text)
    return text, unconverted


def convert(text, name):
    problems = []

    text = re.sub(r'^\s*"use client";\s*\n', "", text)
    text = text.replace('from "./kit"', "from '@/components/scenes/kit'")
    text = text.replace("from './kit'", "from '@/components/scenes/kit'")

    m = re.search(r"<svg\b([^>]*)>", text, re.S)
    if not m:
        if name not in KIT_FILES:
            problems.append("no root <svg>")
    else:
        vb = re.search(r'viewBox\s*=\s*"([^"]+)"', m.group(1))
        opening = "<Scene>" if not vb or vb.group(1).strip() == "0 0 1080 620" \
            else f'<Scene viewBox="{vb.group(1)}">'
        text = text[: m.start()] + opening + text[m.end():]
        text = re.sub(r"</svg>", "</Scene>", text)

    # `<style>` has no react-native-svg counterpart and TypeScript does not
    # catch it (@types/react declares it on JSX.IntrinsicElements), so it slips
    # through to render as `undefined` and blanks the entire scene. Removing it
    # loses whatever CSS animation it declared, which is reported below.
    if re.search(r'<style\b', text):
        text = re.sub(r'<style\b[^>]*>.*?</style>', "", text, flags=re.S)
        problems.append("dropped a <style> block — any CSS animation in it is gone")

    # A className can carry a keyframe animation from the webpage's global CSS
    # (e.g. `sc-stick-go`), and dropping it silently loses a whole beat's
    # movement. The root <svg>'s own layout classes are absorbed by <Scene>.
    # Both spellings matter. The literal form is easy to read; the conditional
    # form (`className={beat === 3 ? "sc-stick-go" : undefined}`) is the one the
    # scenes actually use to gate an animation on a beat, and it was the form
    # being dropped without a word — costing a whole beat's movement.
    named = re.findall(r'className="([^"]*)"', text)
    named += re.findall(r'className=\{[^{}]*?"([^"]*)"[^{}]*\}', text)
    carried = [c for c in named if c and not c.startswith("w-full")]
    if carried:
        problems.append("dropped className(s) that may carry a CSS animation: "
                        + ", ".join(sorted(set(carried))[:4]))
    text = re.sub(r'\s+className=(?:"[^"]*"|\{[^{}]*\})', "", text)

    used = set()
    for tag in sorted(TAGS, key=len, reverse=True):  # clipPath before path
        comp = TAGS[tag]
        open_pat = re.compile(r"<" + tag + r"(?=[\s/>])")
        close_pat = re.compile(r"</" + tag + r"\s*>")
        if open_pat.search(text) or close_pat.search(text):
            used.add(comp)
            text = open_pat.sub("<" + comp, text)
            text = close_pat.sub("</" + comp + ">", text)

    if used:
        line = "import { " + ", ".join(sorted({IMPORT_NAME[c] for c in used})) + \
               " } from 'react-native-svg';\n"
        after_react = re.search(r"^import React[^\n]*\n", text, re.M)
        text = (text[: after_react.end()] + line + text[after_react.end():]) if after_react \
            else line + text

    for symbol in ("StepAcross", "Bob"):
        if f"<{symbol}" in text:
            km = re.search(r"import\s*\{([^}]*)\}\s*from '@/components/scenes/kit';",
                           text, re.S)
            if km and not re.search(rf"\b{symbol}\b", km.group(1)):
                inner = km.group(1)
                sep = "" if inner.rstrip().endswith(",") else ","
                text = (text[: km.start(1)] + inner.rstrip() + sep +
                        f"\n  {symbol},\n" + text[km.end(1):])

    if "<Scene" in text:
        km = re.search(r"import\s*\{([^}]*)\}\s*from '@/components/scenes/kit';", text, re.S)
        if km:
            inner = km.group(1)
            if not re.search(r"\bScene\b", inner):
                sep = "" if inner.rstrip().endswith(",") else ","
                text = text[: km.start(1)] + inner.rstrip() + sep + "\n  Scene,\n" + text[km.end(1):]
        else:
            problems.append("no kit import to add Scene to")

    return text, problems


def build_registry(entries, consts, imports):
    comps = sorted({c for _, _, c in entries})
    chapters = sorted({v for v, _, _ in entries})
    L = ["import type { ComponentType } from 'react';", "",
         "import type { SceneProps } from '@/components/scenes/kit';"]
    L += [f"import {c} from '@/components/scenes/{imports.get(c, c)}';" for c in comps]
    L += ["",
          "/**",
          " * GENERATED by scripts/port-scenes.py — do not edit by hand.",
          " *",
          " * The hand-authored scenes, keyed `chapterId:position` exactly as the webpage",
          " * keys them, so a scene is found by the same lookup on both clients. A section",
          " * with no entry renders from its `board_content` events instead, which is the",
          " * webpage's own fallback rather than a mobile compromise.",
          " */"]
    L += [f'const {v} = "{consts[v]}";' for v in chapters]
    L += ["", "const REGISTRY: Record<string, ComponentType<SceneProps>> = {"]
    L += [f"  [`${{{v}}}:{n}`]: {c}," for v, n, c in entries]
    L += ["};", "",
          "export function getScene(",
          "  chapterId: string | undefined,",
          "  position: number | null | undefined",
          "): ComponentType<SceneProps> | null {",
          "  if (!chapterId || position == null) return null;",
          "  return REGISTRY[`${chapterId}:${position}`] ?? null;",
          "}"]
    return "\n".join(L) + "\n"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--web", default=DEFAULT_WEB, help="path to the monk-learning-web checkout")
    args = ap.parse_args()

    src_dir = os.path.join(args.web, "src", "components", "scenes")
    index = os.path.join(src_dir, "index.ts")
    if not os.path.exists(index):
        sys.exit(f"no scene registry at {index} — pass --web with the webpage checkout")

    src = open(index).read()
    imports = dict(re.findall(r'import\s+(\w+)\s+from\s+"\./(\w+)"', src))
    consts = dict(re.findall(r'const\s+(\w+)\s*=\s*"([0-9a-f-]{36})"', src))
    # Both spellings the registry uses: object-literal entries and assignments.
    entries = re.findall(r'\[`\$\{(\w+)\}:(\d+)`\]\s*(?::|=)\s*(\w+)', src)
    entries = [e for e in entries if e[0] in consts]

    names = sorted({imports.get(c, c) for _, _, c in entries}) + sorted(KIT_FILES)
    os.makedirs(APP_SCENES, exist_ok=True)

    converted, failed = 0, []
    for n in names:
        path = os.path.join(src_dir, n + ".tsx")
        if not os.path.exists(path):
            failed.append((n, ["source missing"]))
            continue
        out, problems = convert(open(path).read(), n)
        out, unfixed_style = apply_post_fixes(out, n)
        for decl in unfixed_style:
            problems.append(f"inline style declaration not understood: {decl}")
        open(os.path.join(APP_SCENES, n + ".tsx"), "w").write(out)
        converted += 1
        if problems:
            failed.append((n, problems))

    open(os.path.join(APP_SCENES, "index.ts"), "w").write(
        build_registry(entries, consts, imports))

    print(f"ported {converted} file(s); registry has {len(entries)} scene(s) "
          f"across {len({v for v, _, _ in entries})} chapter(s)")
    if failed:
        print(f"\n{len(failed)} need a look:")
        for n, p in failed:
            print(f"  {n}: {', '.join(p)}")
    print("\nNow run:  npx tsc --noEmit   (scene text may need the lint override "
          "already in eslint.config.js)")


if __name__ == "__main__":
    main()
