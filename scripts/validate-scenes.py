#!/usr/bin/env python3
"""
Check that every ported scene's reveal gates can actually fire.

    python3 scripts/validate-scenes.py

`useBeat` returns the index of the latest reveal whose time has passed, so the
only beats that ever exist are 0 .. reveals.length - 1. A block gated on
`beat >= reveals.length` therefore NEVER renders, and nothing says so: the
board simply teaches less than was authored, in production, silently. That is
the defect the webpage found in nineteen Class 12 Physics scenes.

Reveal counts live in Supabase, not in the repo, so this cannot be folded into
`port-scenes.py` without giving a codemod a network dependency. Run it after a
port instead.

Only VISIBILITY gates count. A scene may legitimately write `beat > 7` inside
an animation duration to mean "snap rather than draw once we are past this" —
an expression that is always false is a cosmetic default there, not hidden
content.
"""
import json, os, re, sys, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCENES = os.path.join(ROOT, "components", "scenes")

# `on={...}` is the kit's visibility prop (Fade, Draw); `{cond && <...>}` is the
# other way a scene hides a block.
GATE = re.compile(r'on=\{([^}]*)\}|\{\s*(beat\s*[<>=]=?\s*\d+[^}]*?)\s*&&')
BEAT = re.compile(r'beat\s*(>=|>|===|==)\s*(\d+)')


def strip_comments(text):
    text = re.sub(r"/\*.*?\*/", "", text, flags=re.S)
    return re.sub(r"^\s*//.*$", "", text, flags=re.M)


def highest_gate(path):
    """The largest beat this scene needs before something becomes visible."""
    text = strip_comments(open(path, encoding="utf-8").read())
    best = -1
    for m in GATE.finditer(text):
        expr = m.group(1) or m.group(2) or ""
        for op, n in BEAT.findall(expr):
            n = int(n)
            best = max(best, n + 1 if op == ">" else n)
    return best


def env(name):
    src = open(os.path.join(ROOT, ".env.local"), encoding="utf-8").read()
    m = re.search(rf'^{name}=["\']?([^"\'\n]+)', src, re.M)
    return m.group(1) if m else ""


def fetch(path):
    url, key = env("EXPO_PUBLIC_SUPABASE_URL").rstrip("/"), env("EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY")
    out, frm = [], 0
    while True:
        req = urllib.request.Request(
            f"{url}/rest/v1/{path}&offset={frm}&limit=1000",
            headers={"apikey": key, "Authorization": f"Bearer {key}"})
        with urllib.request.urlopen(req, timeout=90) as r:
            part = json.loads(r.read())
        out += part
        if len(part) < 1000:
            return out
        frm += 1000


def main():
    index = open(os.path.join(SCENES, "index.ts"), encoding="utf-8").read()
    consts = dict(re.findall(r'^const ([A-Z0-9_]+) = "([0-9a-f-]{36})";', index, re.M))
    entries = re.findall(r"\[`\$\{([A-Z0-9_]+)\}:(\d+)`\]:\s*([A-Za-z0-9_]+)", index)

    reveals = {}
    for row in fetch("lesson_sections?select=chapter_id,position,"
                     "board_reveal_at_english,board_reveal_at_hinglish&order=id"):
        reveals[(row["chapter_id"], row["position"])] = (
            len(row.get("board_reveal_at_english") or []),
            len(row.get("board_reveal_at_hinglish") or []))

    unreachable, orphan = [], []
    for const, pos, scene in entries:
        path = os.path.join(SCENES, scene + ".tsx")
        if not os.path.exists(path):
            orphan.append(f"{scene}: registered but no file")
            continue
        key = (consts[const], int(pos))
        if key not in reveals:
            orphan.append(f"{scene}: no lesson_sections row at position {pos}")
            continue
        gate, (en, hi) = highest_gate(path), reveals[key]
        if gate >= min(en, hi):
            unreachable.append(f"{scene}: needs beat {gate}, reveals en={en} hi={hi}")

    print(f"checked {len(entries)} registered scenes against {len(reveals)} sections")
    for label, rows in (("unreachable gate", unreachable), ("registry orphan", orphan)):
        print(f"  {label}: {len(rows)}")
        for r in rows[:20]:
            print(f"    {r}")
    return 1 if unreachable or orphan else 0


if __name__ == "__main__":
    sys.exit(main())
