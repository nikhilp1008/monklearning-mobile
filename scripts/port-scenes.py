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
POST_FIXES = [
    # react-native-svg's <Text> tree accepts text, not arbitrary ReactNode, so
    # the subscript/superscript helpers have to say what they really take.
    ("({ children }: { children: React.ReactNode })",
     "({ children }: { children: string | number | (string | number)[] })"),
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


def apply_post_fixes(text, name):
    """Corrections that survive a re-run. Returns (text, still_unfixed)."""
    for old, new in POST_FIXES:
        text = text.replace(old, new)
    if name == "math-kit":
        for old, new in MATH_KIT_FIXES:
            text = text.replace(old, new)
        text = re.sub(r"\bCircle\[\]", "CircleSpec[]", text)
    for old, new in STYLE_FIXES.get(name, []):
        text = text.replace(old, new)
    # Report only styles this script does not already know how to convert.
    return text, bool(re.search(r"\bstyle=\{\{", text))


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
        if unfixed_style:
            problems.append("inline style={{...}} this script cannot convert — "
                            "add it to STYLE_FIXES")
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
