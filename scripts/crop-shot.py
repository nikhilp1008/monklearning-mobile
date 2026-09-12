#!/usr/bin/env python3
"""Crop a simulator screenshot to the board, by finding the magenta fence.

    python3 scripts/crop-shot.py raw.png out.png --w 343 --h 236 [--scale 3]

WHY A FENCE AND NOT A NATIVE SCREENSHOT MODULE
==============================================
`react-native-view-shot` would capture the component directly, and it would
also mean a new native module and a dev-client rebuild. The simulator
screenshot already works; what it lacked was a way to say WHICH pixels are the
board. So `dev-widget-preview` draws a 2pt #FF00FF border around the frame
when SHOT_FRAME >= 0, and this finds it.

WHY IT ASSERTS THE SIZE
=======================
A capture that is cropped to the wrong rectangle still looks like a diagram,
and every previous pass of this produced exactly that: five "different" shots
that were one image, and three that were the lock screen. An image cannot say
whether it is evidence. The interior must be W x H x scale to the pixel, and
this refuses rather than writing a plausible file — which is the same rule the
render gate applies to widgets.

The fence is on a WRAPPER around the board, because React Native draws borders
INSIDE the box: bordering the board itself would shrink the frame being
evidenced by 2pt a side, and the assertion below would then be checking a
frame that was never rendered.
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

FENCE = (255, 0, 255)
#: How far a pixel may drift from pure magenta and still count. The simulator
#: screenshot is lossless, but a border lands on fractional device pixels at
#: the corners, so the edge rows blend with what is under them.
TOL = 24


def find_fence(img) -> tuple[int, int, int, int]:
    px = img.load()
    w, h = img.size
    xs: list[int] = []
    ys: list[int] = []
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y][:3]
            if abs(r - 255) <= TOL and g <= TOL and abs(b - 255) <= TOL:
                xs.append(x)
                ys.append(y)
    if not xs:
        raise SystemExit(
            "REFUSED: no #FF00FF fence in this screenshot. Either SHOT_FRAME is "
            "-1 (the rig is off), the board had not rendered when the shot was "
            "taken, or the frame is off-screen. Nothing written."
        )
    return min(xs), min(ys), max(xs), max(ys)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("src", type=Path)
    ap.add_argument("dst", type=Path)
    ap.add_argument("--w", type=int, required=True, help="frame width in points")
    ap.add_argument("--h", type=int, required=True, help="frame height in points")
    ap.add_argument("--scale", type=int, default=3, help="device pixel ratio")
    ap.add_argument("--fence-pt", type=int, default=2)
    args = ap.parse_args()

    from PIL import Image  # noqa: PLC0415

    img = Image.open(args.src).convert("RGB")
    x0, y0, x1, y1 = find_fence(img)
    band = args.fence_pt * args.scale

    # PIL crop takes right/bottom EXCLUSIVE; (x1, y1) is the last fence pixel.
    box = (x0 + band, y0 + band, x1 + 1 - band, y1 + 1 - band)
    got_w, got_h = box[2] - box[0], box[3] - box[1]
    want_w, want_h = args.w * args.scale, args.h * args.scale

    # A pixel of slack per side: the fence lands on fractional device pixels.
    slack = args.scale
    upright = abs(got_w - want_w) <= slack and abs(got_h - want_h) <= slack
    # A LANDSCAPE app is stored in the device's PORTRAIT framebuffer, so its
    # screenshot is rotated 90 degrees and the fence comes back transposed —
    # exactly the right size, on the wrong axes. That is a property of the
    # capture, not a layout fault, so it is corrected rather than accepted as
    # a failure OR waved through by loosening the size check.
    rotated = abs(got_w - want_h) <= slack and abs(got_h - want_w) <= slack

    if not upright and not rotated:
        raise SystemExit(
            f"REFUSED: the fence encloses {got_w}x{got_h}px, not the "
            f"{want_w}x{want_h}px a {args.w}x{args.h}pt frame is at {args.scale}x "
            f"(nor its transpose). The board was clipped by the viewport, or laid "
            f"out at less than 1:1. Nothing written."
        )

    crop = img.crop(box)
    if rotated and not upright:
        # Image-LEFT is app-top in this framebuffer. ROTATE_270 was tried
        # first and produced a board that was upside down — dimensionally
        # perfect and unreadable, which is the whole reason the output is
        # eyeballed once rather than trusted because the numbers matched.
        crop = crop.transpose(Image.ROTATE_90)
        got_w, got_h = crop.size

    args.dst.parent.mkdir(parents=True, exist_ok=True)
    crop.save(args.dst)
    print(f"OK  {args.dst.name}  {got_w}x{got_h}px  = {args.w}x{args.h}pt @{args.scale}x")
    return 0


if __name__ == "__main__":
    sys.exit(main())
