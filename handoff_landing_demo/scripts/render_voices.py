# -*- coding: utf-8 -*-
"""Renders the authored scene through the PRODUCTION voice stack.

Not a stand-in: this speaks to the same Rumik Silk endpoint, the same
`mulberry` model and the same two presets the live classroom uses --
Lucas (Drona) and Ira (Vedha) -- read from monk-learning-api's
app/drona/persona.py. So the landing page plays the voice a student
actually gets, which is the only version of this worth shipping.

Protocol, mirrored from app/drona/voice_proxy.py:
  1. POST {base}/v1/tts/ws-connect  {model, text:"Init"}  -> {ws_url, token}
  2. connect  {ws_url}?token={token}
  3. send     {"text": ..., "speaker": "Lucas"|"Ira"}
  4. receive  raw 24 kHz 16-bit mono PCM frames until a JSON {"type":"done"}

Each sentence is a separate synthesis, exactly as in a real class, which is
what makes the cue table honest: a board line appears when the teacher's
voice reaches it, not on a fixed timer.

Outputs (all under ../demo):
  audio/<teacher>-<language>.mp3    ~70s scene narration
  samples/<teacher>-<language>.mp3  ~15s standalone voice sample
  ../scene.json                     board HTML, captions, per-variant cues

Usage:
  python3 render_voices.py              # everything
  python3 render_voices.py --samples    # just the 15s samples
  python3 render_voices.py --dry-run    # print what would be spoken, no calls

The API key is read from monk-learning-api/.env (override with RUMIK_API_KEY
in the environment). It is never written to any output file.
"""

import argparse
import asyncio
import json
import os
import re
import subprocess
import sys
import time
import wave

import requests
import websockets

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import scene_script as S

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DEMO = os.path.join(ROOT, "demo")

RUMIK_BASE = "https://silk-api.rumik.ai"
RUMIK_MODEL = "mulberry"
RATE = 24000                # Hz, 16-bit mono -- TTS_SAMPLE_RATE in the app
SAMPLE_WIDTH = 2

GAP_MS = 380                # between sentences, as sentences land in a class
LEAD_IN_MS = 500            # before the first word
TAIL_MS = 900               # after the last, so the board can settle
TRIM_FLOOR = 300            # |amplitude| below this counts as silence
TRIM_KEEP_MS = 90           # breath left in place after a trim
PACE_S = 1.3                # between requests -- Rumik meters 100/min

DEFAULT_ENV = os.path.expanduser("~/Desktop/monk-learning-api/.env")


def rumik_key():
    key = os.environ.get("RUMIK_API_KEY", "").strip("\"'")
    if key:
        return key
    path = os.environ.get("MONK_API_ENV", DEFAULT_ENV)
    try:
        with open(path, encoding="utf-8") as fh:
            for line in fh:
                m = re.match(r"\s*RUMIK_API_KEY\s*=\s*(.+)", line)
                if m:
                    return m.group(1).strip().strip("\"'")
    except OSError:
        pass
    sys.exit(
        "No Rumik key. Set RUMIK_API_KEY, or point MONK_API_ENV at the "
        "monk-learning-api .env that holds it."
    )


# ── synthesis ───────────────────────────────────────────────────────────────

async def synthesize(key, text, speaker):
    """One sentence -> raw PCM bytes. Retries the handshake, not the speech."""
    for attempt in (1, 2, 3):
        try:
            hs = requests.post(
                f"{RUMIK_BASE}/v1/tts/ws-connect",
                headers={"Authorization": f"Bearer {key}",
                         "Content-Type": "application/json"},
                json={"model": RUMIK_MODEL, "text": "Init"},
                timeout=15,
            ).json()
            ws_url, token = hs.get("ws_url"), hs.get("token")
            if not (ws_url and token):
                raise RuntimeError(f"handshake gave {sorted(hs)}")

            pcm = bytearray()
            async with websockets.connect(
                f"{ws_url}?token={token}", ping_interval=None, close_timeout=5
            ) as ws:
                await ws.send(json.dumps({"text": text, "speaker": speaker}))
                while True:
                    msg = await asyncio.wait_for(ws.recv(), timeout=40)
                    if isinstance(msg, bytes):
                        pcm.extend(msg)
                        continue
                    data = json.loads(msg)
                    kind = data.get("type") or data.get("event") or data.get("status")
                    if kind in ("done", "complete", "finish", "end"):
                        break
                    if data.get("error") or data.get("code"):
                        raise RuntimeError(json.dumps(data)[:200])
            if not pcm:
                raise RuntimeError("no audio returned")
            return bytes(pcm)
        except Exception as err:
            wait = 2.0 * attempt
            print(f"    retry {attempt}/3 after {err} (sleep {wait}s)")
            if attempt == 3:
                raise
            await asyncio.sleep(wait)


def silence(ms):
    return b"\x00" * int(RATE * SAMPLE_WIDTH * ms / 1000)


def trim_tail(pcm):
    """Drops dead air off the end so sentences do not drift apart.

    Only the tail, only below TRIM_FLOOR, and TRIM_KEEP_MS of it stays --
    a hard trim to the last loud sample clips the breath and makes the
    delivery sound rushed.
    """
    step = SAMPLE_WIDTH
    end = len(pcm) - (len(pcm) % step)
    i = end
    while i >= step:
        v = int.from_bytes(pcm[i - step:i], "little", signed=True)
        if abs(v) > TRIM_FLOOR:
            break
        i -= step
    keep = int(RATE * SAMPLE_WIDTH * TRIM_KEEP_MS / 1000)
    return pcm[: min(end, i + keep)]


def write_mp3(pcm, out_path, normalize=True):
    """PCM -> mp3, loudness-levelled so switching voices is not a volume jump."""
    wav_path = out_path + ".tmp.wav"
    with wave.open(wav_path, "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(SAMPLE_WIDTH)
        w.setframerate(RATE)
        w.writeframes(pcm)
    filters = ["loudnorm=I=-16:TP=-1.5:LRA=11"] if normalize else []
    cmd = ["ffmpeg", "-y", "-loglevel", "error", "-i", wav_path]
    if filters:
        cmd += ["-af", ",".join(filters)]
    cmd += ["-codec:a", "libmp3lame", "-b:a", "128k", "-ar", "44100", out_path]
    subprocess.run(cmd, check=True)
    os.remove(wav_path)


# ── the scene ───────────────────────────────────────────────────────────────

async def render_scene(key, teacher, language, dry_run=False):
    meta = S.TEACHERS[teacher]
    lines = S.speech_for(language, meta["gender"])
    name = f"{teacher}-{language}"
    print(f"\n== scene {name}  (preset {meta['preset']}, {len(lines)} sentences)")

    if dry_run:
        for i, line in enumerate(lines):
            print(f"  {i + 1:2d}. {line}")
        return None

    track = bytearray(silence(LEAD_IN_MS))
    cues = []
    for i, line in enumerate(lines):
        cues.append(round(len(track) / (RATE * SAMPLE_WIDTH), 3))
        pcm = trim_tail(await synthesize(key, line, meta["preset"]))
        secs = len(pcm) / (RATE * SAMPLE_WIDTH)
        print(f"  {i + 1:2d}. {secs:5.2f}s  @{cues[-1]:6.2f}s  {line[:58]}…")
        track.extend(pcm)
        if i < len(lines) - 1:
            track.extend(silence(GAP_MS))
        await asyncio.sleep(PACE_S)
    track.extend(silence(TAIL_MS))

    out = os.path.join(DEMO, "audio", f"{name}.mp3")
    write_mp3(bytes(track), out)
    total = round(len(track) / (RATE * SAMPLE_WIDTH), 3)
    print(f"  -> {os.path.relpath(out, ROOT)}  {total}s")
    return {"cues": cues, "duration": total, "captions": lines}


async def render_sample(key, teacher, language, dry_run=False):
    meta = S.TEACHERS[teacher]
    text = S.SAMPLES[(teacher, language)]
    name = f"{teacher}-{language}"
    if dry_run:
        print(f"\n== sample {name}\n  {text}")
        return None

    pcm = trim_tail(await synthesize(key, text, meta["preset"]))
    out = os.path.join(DEMO, "samples", f"{name}.mp3")
    write_mp3(pcm, out)
    secs = round(len(pcm) / (RATE * SAMPLE_WIDTH), 2)
    print(f"== sample {name}: {secs}s -> {os.path.relpath(out, ROOT)}")
    await asyncio.sleep(PACE_S)
    return {"duration": secs, "text": text}


# ── driver ──────────────────────────────────────────────────────────────────

async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--samples", action="store_true", help="only the 15s samples")
    ap.add_argument("--scene", action="store_true", help="only the scene narration")
    ap.add_argument("--dry-run", action="store_true", help="print text, call nothing")
    args = ap.parse_args()

    do_scene = args.scene or not args.samples
    do_samples = args.samples or not args.scene

    key = "dry" if args.dry_run else rumik_key()
    os.makedirs(os.path.join(DEMO, "audio"), exist_ok=True)
    os.makedirs(os.path.join(DEMO, "samples"), exist_ok=True)

    started = time.time()
    variants, samples = {}, {}
    for language in S.LANGUAGES:
        for teacher in S.TEACHERS:
            name = f"{teacher}-{language}"
            if do_scene:
                got = await render_scene(key, teacher, language, args.dry_run)
                if got:
                    variants[name] = got
            if do_samples:
                got = await render_sample(key, teacher, language, args.dry_run)
                if got:
                    samples[name] = got

    if args.dry_run:
        return

    scene_path = os.path.join(ROOT, "scene.json")
    prior = {}
    if os.path.exists(scene_path):
        with open(scene_path, encoding="utf-8") as fh:
            prior = json.load(fh)

    scene = {
        "topic": S.TOPIC,
        "concept": S.CONCEPT,
        "voice": {
            "provider": "rumik silk",
            "endpoint": RUMIK_BASE,
            "model": RUMIK_MODEL,
            "sample_rate": RATE,
            "presets": {t: m["preset"] for t, m in S.TEACHERS.items()},
        },
        "teachers": {t: m["display"] for t, m in S.TEACHERS.items()},
        "languages": list(S.LANGUAGES),
        "board": [{"seq": i + 1, "type": kind, "html": html}
                  for i, (kind, html) in enumerate(S.BOARD)],
        "variants": {**prior.get("variants", {}), **variants},
        "samples": {**prior.get("samples", {}), **samples},
    }
    with open(scene_path, "w", encoding="utf-8") as fh:
        json.dump(scene, fh, ensure_ascii=False, indent=2)
    print(f"\nwrote {os.path.relpath(scene_path, ROOT)} "
          f"({len(scene['variants'])} variants, {len(scene['samples'])} samples) "
          f"in {time.time() - started:.0f}s")


if __name__ == "__main__":
    asyncio.run(main())
