# -*- coding: utf-8 -*-
"""Builds demo/classroom-demo.html from scene.json.

The device frame inside this page is the handoff's own screen -- markup, ids
and every inline style come from handoff_landscape_classroom/design/
2a-live-class.html unchanged. Only the board's CONTENT is new, plus the
timing engine that drives it from the audio. Nothing about the rendering is
redesigned here; the landing-page chrome (play button, teacher and language
pills, voice samples) lives outside the 844x390 frame, in the page around it.

Everything is inlined so the file opens by double-click, with no server and
no build step -- the same rule the rest of the design handoffs follow.
"""

import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SCENE = os.path.join(ROOT, "scene.json")
OUT = os.path.join(ROOT, "demo", "classroom-demo.html")


def board_html(board):
    """The eleven board items, each hidden until its cue fires.

    `data-line` is the cue index; `data-type` lets the engine treat the
    diagram differently from text (it fades in rather than being written).
    """
    out = []
    for item in board:
        kind = item["type"]
        html = item["html"]
        attrs = f' data-line="{item["seq"] - 1}" data-type="{kind}"'
        # Inject the attributes into the element's own opening tag so the
        # design's inline styles stay exactly where they were authored.
        cut = html.index(">")
        out.append(html[:cut] + attrs + ' data-hidden="1"' + html[cut:])
    return "\n            ".join(out)


TEMPLATE = r"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>MonkLearning · Live class · __CONCEPT__</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@400;500;600;700;800&family=Anek+Devanagari:wght@500;600&family=Kalam:wght@400;700&display=swap" rel="stylesheet">
<style>
/* ── page shell. Everything here is scoped to #mld so this whole section can
      be lifted into the marketing site without colliding with its styles. ── */
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Anek Latin',system-ui,sans-serif;color:#1C1A16;background:#EFE9DA;-webkit-font-smoothing:antialiased;min-height:100vh;padding:48px 24px 72px}

#mld{max-width:900px;margin:0 auto;font-family:'Anek Latin',system-ui,sans-serif;color:#1C1A16}
#mld .mld-eyebrow{display:flex;align-items:center;gap:8px;font-weight:800;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#9A6A12;margin-bottom:10px}
#mld .mld-eyebrow i{width:6px;height:6px;border-radius:50%;background:#EEA31F;display:inline-block}
#mld h1{font-weight:700;font-size:30px;line-height:1.18;letter-spacing:-.01em;margin-bottom:8px}
#mld h1 em{font-style:normal;font-family:'Kalam',cursive;color:#DD4433}
#mld .mld-sub{font-size:14.5px;line-height:1.55;color:#57534B;max-width:560px;margin-bottom:26px}

/* The frame is pixel-authored at 844x390, so it is scaled as a whole rather
   than reflowed — the design's 26px writing rhythm and 56pt margin gutter
   only hold at their authored sizes. */
#mld .mld-stage{position:relative;margin-bottom:18px}
#mld .mld-scaler{width:844px;transform-origin:top left;will-change:transform}

#mld .mld-veil{position:absolute;inset:0;border-radius:28px;display:grid;place-items:center;background:rgba(252,250,244,.72);backdrop-filter:blur(3px);cursor:pointer;transition:opacity .34s ease,visibility .34s ease;z-index:6}
#mld .mld-veil[data-off]{opacity:0;visibility:hidden}
#mld .mld-play{display:flex;align-items:center;gap:13px;padding:13px 24px 13px 18px;border-radius:99px;background:#1C1A16;color:#FCFAF4;box-shadow:0 20px 44px -22px rgba(28,26,22,.8);transition:transform .22s cubic-bezier(.3,.8,.3,1)}
#mld .mld-veil:hover .mld-play{transform:translateY(-2px)}
#mld .mld-play svg{flex:none}
#mld .mld-play b{font-weight:700;font-size:14px;letter-spacing:.01em}
#mld .mld-play span{display:block;font-weight:600;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:#9C988C;margin-top:1px}

/* ── controls, below the device ── */
#mld .mld-bar{display:flex;flex-wrap:wrap;align-items:center;gap:10px 18px;padding:14px 4px 0;border-top:1px solid rgba(28,26,22,.12)}
#mld .mld-group{display:flex;align-items:center;gap:9px}
#mld .mld-lbl{font-weight:800;font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:#9C988C}
#mld .mld-pills{display:flex;gap:5px;padding:3px;border-radius:99px;background:rgba(28,26,22,.055)}
#mld .mld-pill{border:0;font-family:inherit;font-weight:700;font-size:12.5px;padding:6px 15px;border-radius:99px;background:transparent;color:#57534B;cursor:pointer;transition:background .22s ease,color .22s ease,box-shadow .22s ease}
#mld .mld-pill:hover{color:#1C1A16}
#mld .mld-pill[aria-pressed="true"]{background:#FCFAF4;color:#1C1A16;box-shadow:0 4px 12px -6px rgba(28,26,22,.5)}
#mld .mld-spacer{flex:1;min-width:12px}
#mld .mld-ghost{display:inline-flex;align-items:center;gap:7px;border:1px solid rgba(28,26,22,.16);font-family:inherit;font-weight:700;font-size:12px;padding:7px 14px;border-radius:99px;background:transparent;color:#57534B;cursor:pointer;transition:background .2s ease,color .2s ease}
#mld .mld-ghost:hover{background:rgba(28,26,22,.05);color:#1C1A16}
#mld .mld-elapsed{font-variant-numeric:tabular-nums;font-weight:700;font-size:12px;color:#9C988C;min-width:74px;text-align:right}

/* ── voice samples ── */
#mld .mld-voices{margin-top:34px;padding-top:26px;border-top:1px solid rgba(28,26,22,.12)}
#mld .mld-voices h2{font-weight:700;font-size:17px;margin-bottom:3px}
#mld .mld-voices p.mld-note{font-size:13px;line-height:1.5;color:#57534B;margin-bottom:16px}
#mld .mld-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(212px,1fr));gap:10px}
#mld .mld-card{display:flex;align-items:center;gap:12px;padding:13px 15px;border-radius:16px;background:#FCFAF4;border:1px solid rgba(28,26,22,.1);cursor:pointer;text-align:left;font-family:inherit;transition:border-color .22s ease,box-shadow .22s ease,transform .22s ease}
#mld .mld-card:hover{border-color:rgba(28,26,22,.24);box-shadow:0 12px 26px -20px rgba(28,26,22,.7);transform:translateY(-1px)}
#mld .mld-card[data-on]{border-color:#EEA31F;box-shadow:0 12px 26px -18px rgba(238,163,31,.8)}
#mld .mld-disc{flex:none;width:38px;height:38px;border-radius:50%;background:#1C1A16;color:#FCFAF4;display:grid;place-items:center;position:relative}
#mld .mld-card[data-on] .mld-disc{background:#EEA31F;color:#1C1A16}
#mld .mld-disc .mld-eq{display:none;align-items:flex-end;gap:2.5px;height:14px}
#mld .mld-card[data-on] .mld-disc .mld-eq{display:flex}
#mld .mld-card[data-on] .mld-disc svg{display:none}
#mld .mld-eq i{width:2.5px;height:14px;background:currentColor;border-radius:99px;transform-origin:bottom;animation:mlLevel .95s ease-in-out infinite}
#mld .mld-eq i:nth-child(2){animation-delay:.16s}
#mld .mld-eq i:nth-child(3){animation-delay:.32s}
#mld .mld-who{min-width:0}
#mld .mld-who b{display:block;font-weight:700;font-size:14px;line-height:1.25}
#mld .mld-who span{display:block;font-weight:600;font-size:11px;color:#9C988C;letter-spacing:.02em}

#mld .mld-foot{margin-top:28px;font-size:12px;line-height:1.6;color:#9C988C}
#mld .mld-foot code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11.5px;color:#57534B}

a{color:#9A6A12}a:hover{color:#DD4433}

/* ── the design's own animations, verbatim ── */
@keyframes mlBlink{50%{opacity:.2}}
@keyframes mlWave{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}
@keyframes mlPulse{0%,100%{opacity:.15}50%{opacity:.7}}
@keyframes mlLevel{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}
@keyframes mlIdleWave{0%,100%{transform:scaleY(.16)}50%{transform:scaleY(.34)}}
[data-noscroll]{scrollbar-width:none}[data-noscroll]::-webkit-scrollbar{display:none}

/* Written characters and diagram parts arrive one at a time. */
#mld [data-hidden]{display:none!important}
#mld .mld-ch{display:none}
#mld .mld-ch[data-in]{display:inline}
#mld [data-type="diagram"] > *{opacity:0;transition:opacity .5s ease}
#mld [data-type="diagram"][data-drawn] > *{opacity:1}

@media (prefers-reduced-motion:reduce){
  #mld .mld-eq i,#mld [id="waveA"] i{animation:none!important}
}
</style>
</head>
<body>
<section id="mld">

  <div class="mld-eyebrow"><i></i>Live class · sample</div>
  <h1>__TOPIC__ — <em>__CONCEPT_LOWER__</em></h1>
  <p class="mld-sub">One concept, taught start to finish — the board a student actually sees, and the teacher they actually hear. Switch teacher or language mid-class and it picks up from the same sentence in the other voice.</p>

  <div class="mld-stage">
    <div class="mld-scaler" id="mldScaler">
      <div style="position:relative">
      <div onclick="mldTapBoard()" data-screen-label="2a Live class · full bleed" style="position:relative;width:844px;height:390px;border-radius:28px;overflow:hidden;background:#fff;cursor:pointer;display:flex;flex-direction:column;box-shadow:0 26px 54px -36px rgba(28,26,22,.5)">

        <div style="flex:1;min-height:0;position:relative">
          <div data-noscroll="1" id="boardA" onscroll="onBoardScroll(event)" style="position:absolute;inset:0;background:#fff;background-image:repeating-linear-gradient(transparent 0 26px,rgba(28,26,22,.055) 26px 27px);padding:52px 116px 52px 56px;overflow-y:auto;overflow-x:hidden">
            __BOARD__
            <div style="display:flex;align-items:center;gap:8px;height:26px"><span id="wIndA" style="width:8px;height:14px;background:#EEA31F;border-radius:2px;animation:mlBlink 1s steps(1) infinite"></span><span id="wLblA" style="font-family:'Kalam',cursive;font-weight:700;font-size:12px;color:#9C988C">Writing…</span></div>
          </div>

          <span style="position:absolute;top:0;bottom:0;left:44px;width:1.4px;background:rgba(221,68,51,.32);pointer-events:none"></span>
          <span id="indA" style="position:absolute;right:6px;top:0;width:3px;border-radius:99px;background:rgba(28,26,22,.28);opacity:0;transition:opacity .3s ease;pointer-events:none"></span>

          <div id="topA" style="position:absolute;top:14px;left:56px;right:26px;display:flex;align-items:center;gap:12px;transition:transform .35s ease,opacity .3s ease">
            <span style="display:inline-flex;align-items:center;gap:7px;font-weight:700;font-size:13px"><span style="width:6px;height:6px;border-radius:50%;background:#EEA31F"></span>__TOPIC__</span>
            <span style="display:inline-flex;align-items:center;gap:6px;font-weight:800;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#157A45"><span style="width:6px;height:6px;border-radius:50%;background:#1C9B57;animation:mlBlink 1.8s infinite"></span>Live</span>
            <span style="flex:1"></span>
            <span onclick="ev(event)" style="display:inline-flex;align-items:center;gap:6px;font-weight:700;font-size:12px;color:#57534B;cursor:pointer"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4"></path><path d="M5 4c4.2-2 8.8 2 14 0v10c-5.2 2-9.8-2-14 0"></path></svg>Report</span>
            <span onclick="ev(event)" style="display:inline-flex;align-items:center;gap:6px;font-weight:700;font-size:12px;padding:6px 13px;border-radius:99px;background:#DD4433;color:#fff;cursor:pointer"><svg viewBox="0 0 24 24" width="9" height="9" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2.5"></rect></svg>End</span>
          </div>

          <div onclick="jumpLive(event)" id="liveA" style="position:absolute;left:50%;bottom:14px;transform:translateX(-50%);display:flex;align-items:center;gap:8px;background:#211C15;color:#EFEBDD;border-radius:99px;padding:8px 16px;font-weight:700;font-size:12px;cursor:pointer;box-shadow:0 14px 30px -16px rgba(28,26,22,.7);transition:opacity .25s ease;white-space:nowrap;opacity:0;pointer-events:none"><span style="color:#EEA31F">↓</span>Jump to live</div>
        </div>

        <div id="dockA" style="position:absolute;right:12px;top:50%;display:flex;flex-direction:column;align-items:center;gap:12px;padding:13px 9px;border-radius:99px;background:rgba(252,250,244,.94);border:1px solid rgba(28,26,22,.14);box-shadow:0 16px 34px -22px rgba(28,26,22,.5);backdrop-filter:blur(10px);transition:transform .35s ease,opacity .3s ease;transform:translate(0,-50%)">
          <span id="waveA" style="display:flex;align-items:flex-end;gap:2px;height:12px"><i style="width:2.5px;height:12px;background:#EEA31F;border-radius:2px;transform-origin:bottom;transition:transform .3s cubic-bezier(.3,.8,.3,1),background .3s ease;animation:mlWave 1s ease 0s infinite"></i><i style="width:2.5px;height:12px;background:#EEA31F;border-radius:2px;transform-origin:bottom;transition:transform .3s cubic-bezier(.3,.8,.3,1),background .3s ease;animation:mlWave 1s ease .18s infinite"></i><i style="width:2.5px;height:12px;background:#EEA31F;border-radius:2px;transform-origin:bottom;transition:transform .3s cubic-bezier(.3,.8,.3,1),background .3s ease;animation:mlWave 1s ease .36s infinite"></i><i style="width:2.5px;height:12px;background:#EEA31F;border-radius:2px;transform-origin:bottom;transition:transform .3s cubic-bezier(.3,.8,.3,1),background .3s ease;animation:mlWave 1s ease .54s infinite"></i></span>
          <span style="width:22px;height:1px;background:rgba(28,26,22,.12)"></span>
          <span id="talkBtn" onpointerdown="talkStart(event)" onpointerup="talkEnd(event)" onpointerleave="talkEnd(event)" onpointercancel="talkEnd(event)" onclick="ev(event)" style="position:relative;width:46px;height:46px;border-radius:50%;background:#1C1A16;color:#FCFAF4;display:grid;place-items:center;cursor:pointer;box-shadow:0 12px 26px -14px rgba(28,26,22,.7);transition:background .3s cubic-bezier(.3,.8,.3,1),color .3s ease;touch-action:none;user-select:none;overflow:hidden">
            <span id="talkGlow" style="position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 50% 118%,rgba(238,163,31,.95),rgba(238,163,31,0) 62%);opacity:0;transition:opacity .3s ease;pointer-events:none"></span>
            <span id="talkPulse" style="position:absolute;inset:5px;border-radius:50%;border:1.5px solid rgba(252,250,244,.75);opacity:0;pointer-events:none"></span>
            <svg id="micIco" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="position:relative;transition:opacity .18s ease,transform .26s cubic-bezier(.3,.8,.3,1)"><path d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z"></path><path d="M6 11a6 6 0 0 0 12 0"></path><path d="M12 17v4"></path></svg>
            <span id="talkBars" style="position:absolute;display:flex;align-items:center;gap:3px;height:18px;opacity:0;transform:scale(.86);transition:opacity .18s ease,transform .26s cubic-bezier(.3,.8,.3,1)"><i style="width:3px;height:9px;background:#1C1A16;border-radius:99px;animation:mlLevel 1.05s ease-in-out infinite"></i><i style="width:3px;height:17px;background:#1C1A16;border-radius:99px;animation:mlLevel 1.05s ease-in-out .18s infinite"></i><i style="width:3px;height:12px;background:#1C1A16;border-radius:99px;animation:mlLevel 1.05s ease-in-out .36s infinite"></i></span>
          </span>
          <span id="talkLbl" style="width:54px;text-align:center;font-weight:800;font-size:8.5px;letter-spacing:.1em;text-transform:uppercase;color:#57534B;transition:color .24s ease;margin-top:-4px">Interrupt</span>
          <span style="width:22px;height:1px;background:rgba(28,26,22,.12)"></span>
          <span onclick="ev(event)" style="width:30px;height:30px;border-radius:50%;display:grid;place-items:center;cursor:pointer"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#1C1A16" stroke-width="2" stroke-linecap="round"><path d="M9 5v14M15 5v14"></path></svg></span>
          <span onclick="toggleCc(event)" id="ccABtn" style="width:30px;height:30px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:9.5px;letter-spacing:.06em;cursor:pointer;background:#FCF4E0;color:#9A6A12">CC</span>
        </div>

        <div id="capA" style="flex:none;overflow:hidden;transition:max-height .38s cubic-bezier(.25,.75,.3,1),opacity .3s ease;max-height:54px;opacity:1">
          <div id="capInnerA" style="position:relative;height:54px;display:flex;align-items:center;gap:12px;background:#fff;color:#1C1A16;padding:0 28px 10px 56px;box-shadow:0 -14px 22px -16px rgba(28,26,22,.18)">
            <span id="listenRow" style="position:absolute;left:56px;right:28px;top:0;bottom:10px;display:flex;align-items:center;gap:10px;opacity:0;pointer-events:none;transition:opacity .26s ease">
              <span style="display:flex;align-items:center;gap:2.5px;height:14px"><i style="width:2.5px;height:14px;background:#EEA31F;border-radius:99px;animation:mlLevel .95s ease-in-out infinite"></i><i style="width:2.5px;height:14px;background:#EEA31F;border-radius:99px;animation:mlLevel .95s ease-in-out .16s infinite"></i><i style="width:2.5px;height:14px;background:#EEA31F;border-radius:99px;animation:mlLevel .95s ease-in-out .32s infinite"></i></span>
              <span style="font-weight:700;font-size:13.5px;color:#1C1A16">Listening</span>
            </span>
            <span id="capContentA" style="display:flex;align-items:center;gap:12px;min-width:0;flex:1;transition:opacity .22s ease">
              <span id="capBadgeA" style="flex:none;font-weight:800;font-size:9.5px;letter-spacing:.14em;color:#9A6A12">CC</span>
              <span id="capClipA" style="position:relative;min-width:0;flex:1;white-space:nowrap;overflow:hidden;font-family:'Anek Devanagari',sans-serif;font-size:14.5px;line-height:1.2">
                <span id="capScrollA" style="display:inline-block;transition:transform .16s linear;will-change:transform"><span id="capTextA"></span><span id="capCaretA" style="display:inline-block;width:2px;height:14px;background:#9A6A12;margin-left:3px;vertical-align:-2px;animation:mlBlink 1s steps(1) infinite"></span></span>
                <span id="capEllA" style="position:absolute;left:0;top:0;bottom:0;display:flex;align-items:center;padding-right:3px;background:#fff;color:#9C988C;opacity:0;transition:opacity .2s ease;pointer-events:none">…</span>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div onclick="showChrome(event)" id="handleA" style="position:absolute;right:0;top:50%;transform:translateY(-50%);width:19px;height:74px;border-radius:12px 0 0 12px;background:rgba(252,250,244,.96);border:1px solid rgba(28,26,22,.14);border-right:none;display:grid;place-items:center;cursor:pointer;transition:opacity .3s ease .1s;opacity:0;pointer-events:none;z-index:5">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#9A6A12" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"></path></svg>
      </div>

      <div class="mld-veil" id="mldVeil" onclick="mldStart()">
        <span class="mld-play">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M8 5.6a1 1 0 0 1 1.5-.87l8.2 5.4a1 1 0 0 1 0 1.74l-8.2 5.4A1 1 0 0 1 8 16.4z"></path></svg>
          <span style="text-align:left"><b id="mldPlayName">Play the class</b><span id="mldPlayMeta">Drona · Hinglish · 85s</span></span>
        </span>
      </div>
      </div>
    </div>
  </div>

  <div class="mld-bar">
    <div class="mld-group">
      <span class="mld-lbl">Teacher</span>
      <div class="mld-pills" id="mldTeachers"></div>
    </div>
    <div class="mld-group">
      <span class="mld-lbl">Language</span>
      <div class="mld-pills" id="mldLangs"></div>
    </div>
    <span class="mld-spacer"></span>
    <span class="mld-elapsed" id="mldClock">0:00 / 0:00</span>
    <button class="mld-ghost" id="mldToggle" onclick="mldToggle()">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M8 5.6a1 1 0 0 1 1.5-.87l8.2 5.4a1 1 0 0 1 0 1.74l-8.2 5.4A1 1 0 0 1 8 16.4z"></path></svg><span id="mldToggleLbl">Play</span>
    </button>
    <button class="mld-ghost" onclick="mldRestart()">
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"></path><path d="M3 4v5h5"></path></svg>Restart
    </button>
  </div>

  <div class="mld-voices">
    <h2>Hear the teachers</h2>
    <p class="mld-note">A short introduction from each — the same two voices that teach the class, in both languages.</p>
    <div class="mld-grid" id="mldSamples"></div>
  </div>

  <p class="mld-foot">
    Board and screen: <code>handoff_landscape_classroom/design/2a-live-class.html</code>, unchanged.
    Voices: production Rumik <code>mulberry</code>, presets <code>Lucas</code> (Drona) and <code>Ira</code> (Vedha) — the same stack a live class uses.
    Board timings come from the real per-sentence audio lengths, not a fixed timer.
  </p>

</section>

<audio id="mldAudio" preload="none"></audio>
<audio id="mldSample" preload="none"></audio>

<script>
var SCENE = __SCENE_JSON__;

/* ── the design's own interaction model, from 2a-live-class.html ─────────── */
var chrome=true, cc=true, follow=true, talking=false, fadeT;
var $=function(i){return document.getElementById(i)};
function ev(e){e.stopPropagation()}
function applyChrome(){
  $('topA').style.transform = chrome?'translateY(0)':'translateY(-74px)';
  $('topA').style.opacity = chrome?1:0;
  $('dockA').style.transform = chrome?'translate(0,-50%)':'translate(96px,-50%)';
  $('dockA').style.opacity = chrome?1:0;
  $('handleA').style.opacity = chrome?0:1;
  $('handleA').style.pointerEvents = chrome?'none':'auto';
}
function applyLive(){
  var show = !follow && !talking;
  $('liveA').style.opacity = show?1:0;
  $('liveA').style.pointerEvents = show?'auto':'none';
}
function applyCc(){
  var open = cc || talking;
  $('capA').style.maxHeight = open?'54px':'0';
  $('capA').style.opacity = open?1:0;
  var btn=$('ccABtn');
  btn.style.background = cc?'#FCF4E0':'transparent';
  btn.style.color = cc?'#9A6A12':'#9C988C';
}
function toggleChrome(){chrome=!chrome;applyChrome();clearTimeout(tuckT)}
function showChrome(e){e.stopPropagation();chrome=true;applyChrome();clearTimeout(tuckT)}
function toggleCc(e){e.stopPropagation();cc=!cc;applyCc()}
function jumpLive(e){e.stopPropagation();var b=$('boardA');b.scrollTo({top:b.scrollHeight,behavior:'smooth'})}
/* hold-to-speak: press and hold Interrupt, release to hand the board back.
   In the real classroom this cuts the teacher off mid-sentence, so the demo
   pauses the audio for exactly as long as the button is held. */
function talkStart(e){e.stopPropagation();setTalking(true)}
function talkEnd(e){e.stopPropagation();setTalking(false)}
function setTalking(on){
  if(talking===on)return;
  talking=on;
  var b=$('talkBtn'),l=$('talkLbl'),p=$('talkPulse'),g=$('talkGlow'),m=$('micIco'),bars=$('talkBars'),
      row=$('listenRow'),content=$('capContentA'),w=$('waveA');
  b.style.background = on?'#EEA31F':'#1C1A16';
  b.style.color = on?'#1C1A16':'#FCFAF4';
  g.style.opacity = on?'1':'0';
  p.style.borderColor = on?'rgba(28,26,22,.5)':'rgba(252,250,244,.75)';
  p.style.animation = on?'mlPulse 1.5s ease-in-out infinite':'none';
  p.style.opacity = on?'':'0';
  m.style.opacity = on?'0':'1'; m.style.transform = on?'scale(.8)':'scale(1)';
  bars.style.opacity = on?'1':'0'; bars.style.transform = on?'scale(1)':'scale(.86)';
  l.textContent = on?'Speaking':'Interrupt'; l.style.color = on?'#9A6A12':'#57534B';
  [].forEach.call(w.children,function(i,k){
    i.style.animationName = on?'mlIdleWave':'mlWave';
    i.style.animationDuration = on?'2.6s':'1s';
    i.style.animationTimingFunction = on?'ease-in-out':'ease';
    i.style.animationDelay = (on?k*0.16:k*0.18)+'s';
    i.style.background = on?'#C7C1B2':'#EEA31F';
  });
  row.style.opacity = on?'1':'0';
  content.style.opacity = on?'0':'1';
  applyCc(); applyLive();
  if(on){ if(!audio.paused) audio.pause(); } else if(started && !ended){ audio.play().catch(noop) }
}
function onBoardScroll(e){
  var el=e.currentTarget, ind=$('indA');
  ind.style.height = Math.max(28, el.clientHeight*el.clientHeight/el.scrollHeight)+'px';
  ind.style.top = (el.scrollTop/el.scrollHeight*el.clientHeight)+'px';
  ind.style.opacity = 1;
  clearTimeout(fadeT);
  fadeT = setTimeout(function(){ ind.style.opacity = 0 },900);
  var atB = el.scrollTop + el.clientHeight >= el.scrollHeight - 40;
  if(atB!==follow){follow=atB;applyLive()}
}

/* ── the demo layer ─────────────────────────────────────────────────────── */
function noop(){}
var audio=$('mldAudio'), sampler=$('mldSample');
var teacher='drona', language='hinglish';
var started=false, ended=false, idx=-1, typer=null, capTyper=null, tuckT=null;
var TUCK_AFTER=5200;
var lines=[].slice.call(document.querySelectorAll('#boardA [data-line]'));

function variantKey(){return teacher+'-'+language}
function variant(){return SCENE.variants[variantKey()]}
function fmt(s){s=Math.max(0,Math.round(s||0));return Math.floor(s/60)+':'+('0'+(s%60)).slice(-2)}

/* Characters are split once, lazily, so a line can be written out one letter
   at a time without disturbing how it wraps or which 26px rule it sits on. */
function splitChars(el){
  if(el.dataset.split)return;
  el.dataset.split='1';
  var walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null);
  var texts=[],n;
  while((n=walk.nextNode()))texts.push(n);
  texts.forEach(function(node){
    var frag=document.createDocumentFragment();
    node.nodeValue.split('').forEach(function(ch){
      var s=document.createElement('span');
      s.className='mld-ch';
      s.textContent=ch;
      frag.appendChild(s);
    });
    node.parentNode.replaceChild(frag,node);
  });
}
function charsOf(el){return [].slice.call(el.querySelectorAll('.mld-ch'))}

function writeLine(i,secs,instant){
  var el=lines[i];
  if(!el)return;
  delete el.dataset.hidden;
  if(el.dataset.type==='diagram'){
    var kids=[].slice.call(el.children);
    kids.forEach(function(k,j){k.style.transitionDelay=(instant?0:j*0.045)+'s'});
    requestAnimationFrame(function(){el.dataset.drawn='1'});
    return;
  }
  splitChars(el);
  var chars=charsOf(el);
  if(instant){chars.forEach(function(c){c.dataset.in='1'});return}
  /* Writing is paced to this sentence's own audio so the hand and the voice
     stay together: the line lands at ~62% of the way through what is being
     said about it, the way a teacher writes and then talks it over. */
  var per=Math.min(55,Math.max(16,(secs*0.62*1000)/Math.max(1,chars.length)));
  var k=0;
  clearInterval(typer);
  typer=setInterval(function(){
    if(k>=chars.length){clearInterval(typer);typer=null;return}
    chars[k++].dataset.in='1';
    if(follow)$('boardA').scrollTo({top:$('boardA').scrollHeight,behavior:'auto'});
  },per);
}

function typeCaption(text,secs,instant){
  var t=$('capTextA'), scroller=$('capScrollA'), clip=$('capClipA'), ell=$('capEllA');
  clearInterval(capTyper);
  function nudge(){
    var over=scroller.scrollWidth-clip.clientWidth+14;
    scroller.style.transform='translateX('+(over>0?-over:0)+'px)';
    ell.style.opacity=over>0?1:0;
  }
  if(instant){t.textContent=text;nudge();return}
  t.textContent='';
  var k=0, per=Math.max(12,(secs*1000)/Math.max(1,text.length));
  capTyper=setInterval(function(){
    if(k>=text.length){clearInterval(capTyper);capTyper=null;return}
    t.textContent+=text[k++];
    nudge();
  },per);
}

function sentenceDur(v,i){
  var next=(i+1<v.cues.length)?v.cues[i+1]:v.duration;
  return Math.max(1.2,next-v.cues[i]);
}

function resetBoard(){
  clearInterval(typer);typer=null;
  clearInterval(capTyper);capTyper=null;
  idx=-1;
  lines.forEach(function(el){
    el.dataset.hidden='1';
    delete el.dataset.drawn;
    charsOf(el).forEach(function(c){delete c.dataset.in});
    [].slice.call(el.children).forEach(function(k){k.style.transitionDelay=''});
  });
  $('capTextA').textContent='';
  $('capScrollA').style.transform='translateX(0)';
  $('capEllA').style.opacity=0;
  $('boardA').scrollTop=0;
  follow=true;applyLive();
}

/* Reveals every line up to `to`. Lines before the current one are written
   out instantly — they were already said. */
function seekBoard(to){
  var v=variant();
  for(var i=0;i<=to;i++)writeLine(i,sentenceDur(v,i),i<to);
  if(to>=0)typeCaption(v.captions[to],sentenceDur(v,to),false);
  idx=to;
}

function onTime(){
  var v=variant();if(!v)return;
  var t=audio.currentTime, at=-1;
  for(var i=0;i<v.cues.length;i++){if(v.cues[i]<=t+0.02)at=i;else break}
  if(at!==idx&&at>=0){
    for(var j=idx+1;j<at;j++)writeLine(j,sentenceDur(v,j),true);
    writeLine(at,sentenceDur(v,at),false);
    typeCaption(v.captions[at],sentenceDur(v,at),false);
    idx=at;
  }
  $('mldClock').textContent=fmt(t)+' / '+fmt(v.duration);
}

function loadVariant(seekTo){
  var v=variant();
  audio.src='audio/'+variantKey()+'.mp3';
  $('mldPlayMeta').textContent=SCENE.teachers[teacher]+' · '+cap1(language)+' · '+Math.round(v.duration)+'s';
  $('mldClock').textContent=fmt(seekTo||0)+' / '+fmt(v.duration);
  if(seekTo!=null){
    audio.currentTime=seekTo;
    audio.addEventListener('loadedmetadata',function once(){audio.currentTime=seekTo;audio.removeEventListener('loadedmetadata',once)});
  }
}
function cap1(s){return s[0].toUpperCase()+s.slice(1)}

function scheduleTuck(){
  clearTimeout(tuckT);
  tuckT=setTimeout(function(){
    if(!audio.paused&&!ended){chrome=false;applyChrome()}
  },TUCK_AFTER);
}
function mldStart(){
  $('mldVeil').dataset.off='1';
  started=true;ended=false;
  scheduleTuck();
  audio.play().catch(function(){delete $('mldVeil').dataset.off});
}
function mldToggle(){
  if(!started)return mldStart();
  if(audio.paused){audio.play().catch(noop)}else{audio.pause()}
}
function mldRestart(){
  resetBoard();
  audio.currentTime=0;
  started=true;ended=false;
  chrome=true;applyChrome();
  scheduleTuck();
  $('mldVeil').dataset.off='1';
  audio.play().catch(noop);
}
/* Tapping the board is the design's own chrome toggle. It stays that, but a
   tap before the class has started reads as "play" — so that comes first. */
function mldTapBoard(){ if(!started){mldStart();return} toggleChrome() }

function setVariant(nextTeacher,nextLang){
  var wasPlaying=started&&!audio.paused;
  var at=idx;
  teacher=nextTeacher;language=nextLang;
  paintPills();
  var v=variant();
  var resume=(at>=0)?v.cues[at]:0;
  resetBoard();
  loadVariant(resume);
  if(at>=0)seekBoard(at);
  idx=at;
  if(wasPlaying)audio.play().catch(noop);
}

function paintPills(){
  [].forEach.call(document.querySelectorAll('#mldTeachers .mld-pill'),function(b){
    b.setAttribute('aria-pressed',b.dataset.v===teacher)});
  [].forEach.call(document.querySelectorAll('#mldLangs .mld-pill'),function(b){
    b.setAttribute('aria-pressed',b.dataset.v===language)});
  $('mldPlayName').textContent='Play the class';
}

function buildControls(){
  var tw=$('mldTeachers');
  Object.keys(SCENE.teachers).forEach(function(t){
    var b=document.createElement('button');
    b.className='mld-pill';b.dataset.v=t;b.textContent=SCENE.teachers[t];
    b.onclick=function(){setVariant(t,language)};
    tw.appendChild(b);
  });
  var lw=$('mldLangs');
  SCENE.languages.forEach(function(l){
    var b=document.createElement('button');
    b.className='mld-pill';b.dataset.v=l;b.textContent=cap1(l);
    b.onclick=function(){setVariant(teacher,l)};
    lw.appendChild(b);
  });

  var grid=$('mldSamples');
  SCENE.languages.forEach(function(l){
    Object.keys(SCENE.teachers).forEach(function(t){
      var key=t+'-'+l, s=SCENE.samples[key];
      if(!s)return;
      var card=document.createElement('button');
      card.className='mld-card';card.dataset.k=key;
      card.innerHTML='<span class="mld-disc">'+
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5.6a1 1 0 0 1 1.5-.87l8.2 5.4a1 1 0 0 1 0 1.74l-8.2 5.4A1 1 0 0 1 8 16.4z"></path></svg>'+
        '<span class="mld-eq"><i></i><i></i><i></i></span></span>'+
        '<span class="mld-who"><b>'+SCENE.teachers[t]+'</b><span>'+cap1(l)+' · '+Math.round(s.duration)+' sec</span></span>';
      card.onclick=function(){playSample(key)};
      grid.appendChild(card);
    });
  });
}

function playSample(key){
  var on=sampler.dataset.k===key&&!sampler.paused;
  [].forEach.call(document.querySelectorAll('.mld-card'),function(c){delete c.dataset.on});
  if(on){sampler.pause();return}
  if(started&&!audio.paused)audio.pause();
  sampler.dataset.k=key;
  sampler.src='samples/'+key+'.mp3';
  sampler.play().then(function(){
    document.querySelector('.mld-card[data-k="'+key+'"]').dataset.on='1';
  }).catch(noop);
}
sampler.addEventListener('ended',function(){
  [].forEach.call(document.querySelectorAll('.mld-card'),function(c){delete c.dataset.on})});
sampler.addEventListener('pause',function(){
  [].forEach.call(document.querySelectorAll('.mld-card'),function(c){delete c.dataset.on})});

audio.addEventListener('timeupdate',onTime);
audio.addEventListener('play',function(){$('mldToggleLbl').textContent='Pause'});
audio.addEventListener('pause',function(){$('mldToggleLbl').textContent='Play'});
audio.addEventListener('ended',function(){
  /* Chrome stays tucked. The board is scrolled to the last line by now, so
     bringing the header back would drop it on top of a formula -- and the
     finished notes are the thing worth looking at. The right-edge handle is
     still there for anyone who wants the header back. */
  ended=true;
  clearTimeout(tuckT);
  $('mldToggleLbl').textContent='Play';
  $('wLblA').textContent='Concept complete';
  $('wIndA').style.animation='none';$('wIndA').style.opacity=.3;
  $('capCaretA').style.opacity=0;
});
audio.addEventListener('playing',function(){
  $('wLblA').textContent='Writing…';
  $('wIndA').style.animation='mlBlink 1s steps(1) infinite';$('wIndA').style.opacity=1;
  $('capCaretA').style.opacity=1;
});

/* Scaled rather than reflowed — see .mld-scaler. */
function fit(){
  var stage=document.querySelector('.mld-stage');
  var s=Math.min(1,stage.clientWidth/844);
  var sc=$('mldScaler');
  sc.style.transform='scale('+s+')';
  stage.style.height=(390*s)+'px';
}
window.addEventListener('resize',fit);

/* Out of sight, out of earshot. */
if('IntersectionObserver' in window){
  new IntersectionObserver(function(es){
    es.forEach(function(e){if(!e.isIntersecting&&!audio.paused)audio.pause()});
  },{threshold:0.25}).observe(document.querySelector('.mld-stage'));
}

buildControls();
paintPills();
loadVariant(0);
resetBoard();
applyChrome();applyCc();applyLive();
fit();
</script>
</body>
</html>
"""


def main():
    with open(SCENE, encoding="utf-8") as fh:
        scene = json.load(fh)

    html = (TEMPLATE
            .replace("__SCENE_JSON__", json.dumps({
                "teachers": scene["teachers"],
                "languages": scene["languages"],
                "variants": scene["variants"],
                "samples": {k: {"duration": v["duration"]}
                            for k, v in scene["samples"].items()},
            }, ensure_ascii=False))
            .replace("__BOARD__", board_html(scene["board"]))
            .replace("__CONCEPT_LOWER__", scene["concept"].lower())
            .replace("__CONCEPT__", scene["concept"])
            .replace("__TOPIC__", scene["topic"]))

    with open(OUT, "w", encoding="utf-8") as fh:
        fh.write(html)
    print(f"wrote {os.path.relpath(OUT, ROOT)}  ({len(html) / 1024:.0f} KB)")
    missing = [k for k in scene["variants"]
               if not os.path.exists(os.path.join(ROOT, "demo", "audio", k + ".mp3"))]
    if missing:
        print("  missing audio:", ", ".join(missing))


if __name__ == "__main__":
    main()
