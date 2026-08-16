// Landscape classroom + lesson screens.
// prototype-screens.js OVERWRITES window.ML_SCREENS and helmet scripts run in
// completion order, so we buffer locally and merge once the base set exists.
(function () {
var L = {};

L['10L Live classroom'] = `<div data-screen-label="10L Live classroom" style="width:844px;height:390px;background:#FCFAF4;border:1px solid rgba(28,26,22,.12);border-radius:28px;overflow:hidden;box-shadow:0 24px 50px -30px rgba(28,26,22,.5);display:flex;flex-direction:column;position:relative;cursor:pointer">
  <div style="flex:1;min-height:0;margin:10px 10px 0;position:relative">
    <div data-role="board" data-noscroll="1" style="position:absolute;inset:0;background:#fff;background-image:repeating-linear-gradient(transparent 0 26px,rgba(28,26,22,.055) 26px 27px);border:1.5px solid #1C1A16;border-radius:18px;padding:46px 26px 20px 58px;overflow-y:auto;overflow-x:hidden">
      <h5 style="font-family:'Kalam',cursive;font-weight:700;font-size:17px;color:#DD4433;margin-bottom:11px;transform:rotate(-.4deg)">torque — the turning power of a force</h5>
      <p style="font-weight:800;font-size:17px;margin-bottom:9px">τ = r × F&nbsp;&nbsp;⇒&nbsp;&nbsp;|τ| = r F sin θ</p>
      <p style="font-size:13.5px;line-height:1.6;color:#57534B;max-width:560px;margin-bottom:10px">A door turns easily when you push its <b style="color:#1C1A16">far edge</b> — and barely moves when you push near the hinge.</p>
      <svg viewBox="0 0 340 170" width="330" height="160" fill="none" style="display:block;margin-bottom:10px">
        <text x="10" y="16" font-family="Kalam" font-size="11" fill="#9C988C">door · top view</text>
        <line x1="30" y1="120" x2="300" y2="120" stroke="#1C1A16" stroke-width="4" stroke-linecap="round"></line>
        <circle cx="30" cy="120" r="8" fill="#EEA31F" stroke="#1C1A16" stroke-width="2"></circle>
        <text x="12" y="146" font-family="Kalam" font-size="11" fill="#9C988C">hinge</text>
        <line x1="255" y1="114" x2="255" y2="50" stroke="#DD4433" stroke-width="2.6" stroke-linecap="round"></line>
        <path d="M246 62 255 48 264 62" stroke="#DD4433" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
        <text x="266" y="60" font-family="Kalam" font-size="15" font-weight="700" fill="#DD4433">F</text>
        <path d="M255 98 A22 22 0 0 1 234 116" stroke="#DD4433" stroke-width="1.6" stroke-dasharray="3 4" fill="none"></path>
        <text x="224" y="102" font-family="Kalam" font-size="12" fill="#DD4433">θ</text>
        <path d="M42 134 Q150 150 250 134" stroke="#1C9B57" stroke-width="1.8" stroke-dasharray="4 5" fill="none"></path>
        <text x="142" y="162" font-family="Kalam" font-size="14" font-weight="700" fill="#1C9B57">r</text>
      </svg>
      <p style="font-size:13.5px;line-height:1.6;color:#57534B;max-width:560px;margin-bottom:10px">At the handle θ = 90°, so sin θ = 1 → <b style="color:#1C1A16">τ max = rF</b>. Push at the hinge: r = 0 → τ = 0, no turn at all.</p>
      <p style="font-family:'Kalam',cursive;font-weight:700;font-size:15px;color:#157A45;margin-bottom:9px;transform:rotate(-.3deg)">chalo, ek number lagate hain:</p>
      <p style="font-weight:800;font-size:15.5px;margin-bottom:10px">r = 0.9 m, F = 20 N&nbsp;&nbsp;→&nbsp;&nbsp;τ = 0.9 × 20 = 18 N·m</p>
      <p style="font-size:13.5px;line-height:1.6;color:#57534B;max-width:560px;margin-bottom:10px">Now two equal, opposite forces — a <b style="color:#1C1A16">couple</b>. No net push, pure turn.</p>
      <p style="font-weight:800;font-size:15.5px;margin-bottom:10px">τ couple = F · d</p>
      <p style="font-size:13.5px;line-height:1.6;color:#57534B;max-width:560px;margin-bottom:10px">A steering wheel: both hands push opposite ways — the car turns, the wheel goes nowhere.</p>
      <p style="font-family:'Kalam',cursive;font-weight:700;font-size:14.5px;color:#DD4433;max-width:560px;margin-bottom:8px;transform:rotate(-.4deg)">remember: torque is about WHERE you push, not just how hard.</p>
      <div style="display:flex;align-items:center;gap:8px;padding-bottom:4px"><span style="width:8px;height:14px;background:#EEA31F;border-radius:2px;animation:mlBlink 1s steps(1) infinite"></span><span style="font-family:'Kalam',cursive;font-weight:700;font-size:12px;color:#9C988C">Drona is writing…</span></div>
    </div>
    <span style="position:absolute;top:14px;bottom:14px;left:40px;width:1.4px;background:rgba(221,68,51,.35);pointer-events:none"></span>
    <span data-role="ind" style="position:absolute;right:5px;top:0;width:3px;border-radius:99px;background:rgba(28,26,22,.3);opacity:0;transition:opacity .3s ease;pointer-events:none"></span>
    <div data-role="livechip" data-act="jump" style="position:absolute;left:50%;bottom:12px;transform:translateX(-50%);display:flex;align-items:center;gap:8px;background:#221D16;color:#EFEBDD;border-radius:99px;padding:8px 16px;font-weight:700;font-size:12px;cursor:pointer;box-shadow:0 14px 30px -16px rgba(28,26,22,.7);transition:opacity .25s ease;white-space:nowrap;opacity:0;pointer-events:none"><span style="color:#EEA31F">↓</span>Drona is writing — jump to live</div>
    <div data-role="listen" style="position:absolute;left:50%;bottom:12px;transform:translateX(-50%);display:flex;align-items:center;gap:14px;background:#221D16;color:#EFEBDD;border-radius:99px;padding:8px 9px 8px 18px;box-shadow:0 16px 34px -18px rgba(28,26,22,.7);transition:opacity .25s ease;white-space:nowrap;opacity:0;pointer-events:none">
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#EEA31F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z"></path><path d="M6 11a6 6 0 0 0 12 0"></path><path d="M12 17v4"></path></svg>
      <span style="font-weight:600;font-size:13px">Listening — poochho, main sun raha hoon</span>
      <span data-act="done" style="font-weight:700;font-size:12px;color:#1C1A16;background:#EEA31F;border-radius:99px;padding:7px 14px;cursor:pointer">Done — continue class</span>
    </div>
  </div>
  <div data-role="capwrap" style="flex:none;overflow:hidden;max-height:60px;opacity:1;transition:max-height .35s ease,opacity .3s ease">
    <div style="margin:8px 10px 10px;display:flex;align-items:center;gap:10px;background:#211C15;color:#EFEBDD;border-radius:12px;padding:8px 16px">
      <span style="flex:none;font-weight:800;font-size:9px;letter-spacing:.12em;color:#EEA31F;border:1px solid rgba(238,163,31,.45);border-radius:5px;padding:2px 5px">CC</span>
      <span style="min-width:0;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:'Anek Devanagari',sans-serif;font-size:13.5px">…handle door ke kinare isliye hota hai, kyunki r bada — same force, zyada torque<span style="display:inline-block;width:2px;height:13px;background:#EEA31F;margin-left:2px;vertical-align:-2px;animation:mlBlink 1s steps(1) infinite"></span></span>
    </div>
  </div>
  <div data-role="top" style="position:absolute;top:18px;left:26px;right:26px;display:flex;align-items:center;gap:8px;transition:transform .35s ease,opacity .3s ease;transform:translateY(0);opacity:1">
    <span style="font-weight:700;font-size:12px;padding-right:4px">9:41</span>
    <span style="display:inline-flex;align-items:center;gap:7px;font-weight:700;font-size:12px;border:1px solid rgba(28,26,22,.14);border-radius:99px;padding:6px 12px;background:rgba(252,250,244,.94);backdrop-filter:blur(8px)"><span style="width:6px;height:6px;border-radius:50%;background:#EEA31F"></span>Rotational Motion</span>
    <span style="display:inline-flex;align-items:center;gap:6px;font-weight:800;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#157A45"><span style="width:6px;height:6px;border-radius:50%;background:#1C9B57;animation:mlBlink 1.8s infinite"></span>Live</span>
    <span style="flex:1"></span>
    <span data-act="ropen" style="display:inline-flex;align-items:center;gap:6px;font-weight:700;font-size:12px;padding:7px 12px;border-radius:99px;border:1px solid rgba(28,26,22,.14);background:rgba(252,250,244,.94);backdrop-filter:blur(8px);color:#57534B;cursor:pointer"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4"></path><path d="M5 4c4.2-2 8.8 2 14 0v10c-5.2 2-9.8-2-14 0"></path></svg>Report</span>
    <span data-go="11 Session summary" style="display:inline-flex;align-items:center;gap:6px;font-weight:700;font-size:12px;padding:7px 13px;border-radius:99px;border:1.4px solid rgba(221,68,51,.4);background:rgba(252,247,243,.94);backdrop-filter:blur(8px);color:#C53A2B;cursor:pointer"><svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2.5"></rect></svg>End</span>
  </div>
  <div data-role="dock" style="position:absolute;right:16px;top:50%;display:flex;flex-direction:column;align-items:center;gap:8px;padding:11px 8px 12px;background:rgba(252,250,244,.95);border:1px solid rgba(28,26,22,.14);border-radius:99px;box-shadow:0 14px 30px -18px rgba(28,26,22,.45);backdrop-filter:blur(8px);transition:transform .35s ease,opacity .3s ease;transform:translate(0,-50%);opacity:1">
    <span style="width:32px;height:32px;border-radius:50%;background:#F4EFE3;border:1px solid rgba(28,26,22,.1);display:grid;place-items:center"><svg viewBox="0 0 120 120" width="18" height="18" fill="none"><circle cx="60" cy="60" r="36" stroke="#1C1A16" stroke-width="11" stroke-linecap="round" stroke-dasharray="52 23.4" transform="rotate(-90 60 60)"></circle><circle cx="60" cy="60" r="19" stroke="#1C1A16" stroke-width="9" stroke-linecap="round" stroke-dasharray="21.8 18" transform="rotate(-30 60 60)"></circle><circle cx="60" cy="60" r="6" fill="#EEA31F"></circle></svg></span>
    <span style="display:flex;align-items:flex-end;gap:2px;height:12px"><i style="width:2.5px;height:12px;background:#EEA31F;border-radius:2px;transform-origin:bottom;animation:mlWave 1s ease infinite"></i><i style="width:2.5px;height:12px;background:#EEA31F;border-radius:2px;transform-origin:bottom;animation:mlWave 1s ease .18s infinite"></i><i style="width:2.5px;height:12px;background:#EEA31F;border-radius:2px;transform-origin:bottom;animation:mlWave 1s ease .36s infinite"></i><i style="width:2.5px;height:12px;background:#EEA31F;border-radius:2px;transform-origin:bottom;animation:mlWave 1s ease .54s infinite"></i></span>
    <span style="width:26px;height:1px;background:rgba(28,26,22,.14)"></span>
    <span data-act="hand" style="width:46px;height:46px;border-radius:50%;background:#1C1A16;color:#FCFAF4;display:grid;place-items:center;cursor:pointer"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-4 0v5"></path><path d="M14 10V4a2 2 0 0 0-4 0v2"></path><path d="M10 10.5V6a2 2 0 0 0-4 0v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg></span>
    <span style="font-weight:800;font-size:8.5px;letter-spacing:.1em;text-transform:uppercase;color:#57534B;margin-top:-3px">Hand</span>
    <span data-act="pause" style="width:38px;height:38px;border-radius:50%;border:1.4px solid rgba(28,26,22,.16);background:#fff;display:grid;place-items:center;cursor:pointer"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#1C1A16" stroke-width="2" stroke-linecap="round"><path d="M9 5v14M15 5v14"></path></svg></span>
    <span data-act="cc" style="width:30px;height:30px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:9.5px;letter-spacing:.06em;cursor:pointer;background:#FCF4E0;border:1.4px solid rgba(238,163,31,.65);color:#9A6A12">CC</span>
    <span style="width:26px;height:26px;border-radius:50%;display:grid;place-items:center;color:#9C988C;cursor:pointer"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"></path></svg></span>
  </div>
  <div data-role="handle" style="position:absolute;right:0;top:50%;transform:translateY(-50%);width:20px;height:86px;border-radius:12px 0 0 12px;background:rgba(28,26,22,.88);display:grid;place-items:center;transition:opacity .3s ease .12s;opacity:0;pointer-events:none">
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#EEA31F" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"></path></svg>
  </div>
  <div data-role="rtoast" style="position:absolute;left:50%;bottom:70px;transform:translateX(-50%);background:#221D16;color:#EFEBDD;border-radius:99px;padding:9px 18px;font-weight:600;font-size:12.5px;white-space:nowrap;box-shadow:0 14px 30px -16px rgba(28,26,22,.7);transition:opacity .3s ease;opacity:0;pointer-events:none"><span style="color:#EEA31F;font-weight:800">✓</span> Report sent — Drona's team will check this class.</div>
  <div data-role="rscrim" data-act="rclose" style="position:absolute;inset:0;background:rgba(22,19,14,.35);transition:opacity .3s ease;opacity:0;pointer-events:none"></div>
  <div data-role="rdrawer" style="position:absolute;top:0;right:0;bottom:0;width:400px;background:#FCFAF4;border-left:1px solid rgba(28,26,22,.12);box-shadow:-18px 0 40px -24px rgba(28,26,22,.5);transition:transform .35s cubic-bezier(.25,.75,.3,1);transform:translateX(105%);display:flex;flex-direction:column;gap:9px;padding:14px 18px 12px;cursor:default">
    <div style="display:flex;align-items:center;gap:10px"><span style="width:30px;height:30px;flex:none;border-radius:10px;background:rgba(221,68,51,.07);border:1px solid rgba(221,68,51,.25);display:grid;place-items:center"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#C53A2B" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4"></path><path d="M5 4c4.2-2 8.8 2 14 0v10c-5.2 2-9.8-2-14 0"></path></svg></span><b style="font-weight:700;font-size:15.5px;flex:1">Report a mistake</b><span data-act="rclose" style="width:28px;height:28px;border-radius:50%;border:1.4px solid rgba(28,26,22,.14);background:#fff;display:grid;place-items:center;font-weight:700;font-size:12px;color:#57534B;cursor:pointer">✕</span></div>
    <div style="position:relative;background:#FFFEFB;background-image:repeating-linear-gradient(transparent 0 20px,rgba(28,26,22,.06) 20px 21px);border:1px solid rgba(28,26,22,.1);border-radius:12px;padding:9px 12px 8px 28px">
      <span style="position:absolute;top:8px;bottom:8px;left:18px;width:1.4px;background:rgba(221,68,51,.4)"></span>
      <span style="font-weight:800;font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:#C53A2B">From this class · Rotational Motion</span>
      <p style="margin-top:3px;line-height:1.45;font-size:11.5px;color:#1C1A16;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">"Same force, bigger r → bigger turn. That's why the handle is far from the hinge."</p>
    </div>
    <span style="display:block;font-weight:800;font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:#9C988C">What's wrong?</span>
    <div style="display:flex;flex-wrap:wrap;gap:6px">
      <span data-ropt style="font-weight:700;font-size:11.5px;padding:8px 13px;border-radius:99px;background:#1C1A16;color:#FCFAF4;border:1px solid #1C1A16;cursor:pointer">Wrong answer</span>
      <span data-ropt style="font-weight:600;font-size:11.5px;padding:8px 13px;border-radius:99px;border:1px solid rgba(28,26,22,.14);background:#fff;color:#57534B;cursor:pointer">Confusing step</span>
      <span data-ropt style="font-weight:600;font-size:11.5px;padding:8px 13px;border-radius:99px;border:1px solid rgba(28,26,22,.14);background:#fff;color:#57534B;cursor:pointer">Audio glitch</span>
      <span data-ropt style="font-weight:600;font-size:11.5px;padding:8px 13px;border-radius:99px;border:1px solid rgba(28,26,22,.14);background:#fff;color:#57534B;cursor:pointer">Wrong language</span>
      <span data-ropt style="font-weight:600;font-size:11.5px;padding:8px 13px;border-radius:99px;border:1px solid rgba(28,26,22,.14);background:#fff;color:#57534B;cursor:pointer">Something else</span>
    </div>
    <div style="display:flex;gap:8px">
      <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px;font-weight:600;font-size:12px;padding:10px;border-radius:12px;border:1.6px dashed rgba(28,26,22,.22);background:#fff;color:#57534B"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"></rect><circle cx="9" cy="10" r="1.6"></circle><path d="m21 16-4.5-4.5L7 21"></path></svg>Screenshot <span style="font-size:10.5px;color:#9C988C">optional</span></div>
      <div style="flex:1.4;background:#fff;border:1.4px solid rgba(28,26,22,.14);border-radius:12px;padding:10px 12px;font-size:12px;color:#9C988C">Anything else? (optional)</div>
    </div>
    <div style="display:flex;align-items:center;gap:12px;margin-top:auto">
      <span style="font-size:10.5px;color:#9C988C;flex:1;line-height:1.4">Reporting won't interrupt your class.</span>
      <span data-act="rsend" style="display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;height:42px;padding:0 22px;border-radius:99px;background:#1C1A16;color:#FCFAF4;box-shadow:0 10px 24px -12px rgba(28,26,22,.7);cursor:pointer">Send report</span>
    </div>
  </div>
</div>`;

L['09L Entering lesson'] = `<div data-screen-label="09L Entering lesson" style="width:390px;height:844px;background:#16130E;border:1px solid rgba(28,26,22,.3);border-radius:28px;overflow:hidden;box-shadow:0 24px 50px -30px rgba(28,26,22,.6);display:flex;flex-direction:column;position:relative;color:#EFEBDD">
  <span style="position:absolute;inset:0;background:radial-gradient(70% 90% at 50% 32%,rgba(238,163,31,.12),transparent 62%);pointer-events:none"></span>
  <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 24px 8px;flex:none;position:relative"><span style="font-weight:700;font-size:14px;color:#fff">9:41</span><span style="width:22px;height:11px;border:1px solid rgba(239,235,221,.45);border-radius:3px;position:relative"><span style="position:absolute;top:1px;bottom:1px;left:1px;width:14px;background:#EFEBDD;border-radius:1px"></span></span></div>
  <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;padding:0 32px">
    <svg viewBox="0 0 120 120" width="130" height="130" fill="none" style="overflow:visible">
      <circle cx="60" cy="60" r="36" stroke="#FCFAF4" stroke-width="11" stroke-linecap="round" stroke-dasharray="52 23.4" transform="rotate(-90 60 60)"></circle>
      <circle cx="60" cy="60" r="19" stroke="#FCFAF4" stroke-width="9" stroke-linecap="round" stroke-dasharray="21.8 18" transform="rotate(-30 60 60)"></circle>
      <path d="M112,60 A52,52 0 0 0 60,8" fill="none" stroke="#DD4433" stroke-width="1.4"></path>
      <text x="102" y="22" style="font-family:'Kalam',cursive;font-size:9px;fill:#EEA31F">−90°</text>
      <circle cx="60" cy="60" r="6" fill="#EEA31F"></circle>
    </svg>
    <span style="display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:13px;border:1px solid rgba(255,255,255,.16);border-radius:99px;padding:8px 16px;background:rgba(255,255,255,.05);margin-top:34px"><span style="width:7px;height:7px;border-radius:50%;background:#EEA31F"></span>Kinematics · Relative velocity</span>
    <h2 style="font-weight:700;font-size:24px;letter-spacing:-.02em;color:#fff;margin-top:14px">Opening your lesson</h2>
    <span style="display:inline-flex;align-items:center;gap:7px;margin-top:14px">
      <span style="width:8px;height:8px;border-radius:50%;background:#EEA31F;animation:mlBlink 1.2s ease infinite"></span>
      <span style="width:8px;height:8px;border-radius:50%;background:#EEA31F;animation:mlBlink 1.2s ease .25s infinite"></span>
      <span style="width:8px;height:8px;border-radius:50%;background:#EEA31F;animation:mlBlink 1.2s ease .5s infinite"></span>
    </span>
    <p style="font-size:14px;font-weight:600;color:#C7C1B3;margin-top:12px">Drona is queuing the board…</p>
  </div>
  <div style="flex:none;text-align:center;padding-bottom:14px;position:relative"><span style="font-weight:600;font-size:12px;color:#938d80">Lessons play in landscape — turn your phone.</span><div style="width:130px;height:4px;border-radius:99px;background:rgba(239,235,221,.25);margin:12px auto 0"></div></div>
</div>`;

L['19L Lesson landscape'] = `<div data-screen-label="19L Lesson landscape" style="width:844px;height:390px;background:#FCFAF4;border:1px solid rgba(28,26,22,.12);border-radius:28px;overflow:hidden;box-shadow:0 24px 50px -30px rgba(28,26,22,.5);display:flex;flex-direction:column;position:relative;cursor:pointer">
  <div style="flex:1;min-height:0;margin:10px 10px 0;position:relative">
    <div data-role="board" data-noscroll="1" style="position:absolute;inset:0;background:#fff;background-image:repeating-linear-gradient(transparent 0 26px,rgba(28,26,22,.055) 26px 27px);border:1.5px solid #1C1A16;border-radius:18px;padding:46px 26px 56px 58px;overflow-y:auto;overflow-x:hidden">
      <h5 style="font-family:'Kalam',cursive;font-weight:700;font-size:17px;color:#DD4433;margin-bottom:11px;transform:rotate(-.4deg)">two trains, one platform</h5>
      <p style="font-weight:800;font-size:17px;margin-bottom:9px">v(A rel B) = v(A) − v(B)</p>
      <p style="font-size:13.5px;line-height:1.6;color:#57534B;max-width:560px;margin-bottom:10px">Velocity is always measured <b style="color:#1C1A16">relative to something</b>. Change the observer, change the answer.</p>
      <svg viewBox="0 0 340 150" width="330" height="142" fill="none" style="display:block;margin-bottom:10px">
        <text x="10" y="14" font-family="Kalam" font-size="11" fill="#9C988C">same direction · same speed</text>
        <line x1="20" y1="66" x2="320" y2="66" stroke="rgba(28,26,22,.22)" stroke-width="1.5" stroke-dasharray="2 6"></line>
        <rect x="46" y="38" width="96" height="26" rx="7" fill="#FCF4E0" stroke="#1C1A16" stroke-width="2"></rect>
        <text x="82" y="56" font-family="Kalam" font-size="14" font-weight="700" fill="#1C1A16">A</text>
        <line x1="150" y1="51" x2="192" y2="51" stroke="#DD4433" stroke-width="2.4" stroke-linecap="round"></line>
        <path d="M184 44 194 51 184 58" stroke="#DD4433" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
        <text x="200" y="56" font-family="Kalam" font-size="11" fill="#57534B">60 km/h</text>
        <line x1="20" y1="120" x2="320" y2="120" stroke="rgba(28,26,22,.22)" stroke-width="1.5" stroke-dasharray="2 6"></line>
        <rect x="104" y="92" width="96" height="26" rx="7" fill="#FCF4E0" stroke="#1C1A16" stroke-width="2"></rect>
        <text x="142" y="110" font-family="Kalam" font-size="14" font-weight="700" fill="#1C1A16">B</text>
        <line x1="208" y1="105" x2="250" y2="105" stroke="#DD4433" stroke-width="2.4" stroke-linecap="round"></line>
        <path d="M242 98 252 105 242 112" stroke="#DD4433" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
        <text x="258" y="110" font-family="Kalam" font-size="11" fill="#57534B">60 km/h</text>
        <text x="118" y="144" font-family="Kalam" font-size="13" font-weight="700" fill="#1C9B57">v(A rel B) = 60 − 60 = 0</text>
      </svg>
      <p style="font-size:13.5px;line-height:1.6;color:#57534B;max-width:560px;margin-bottom:10px">Same direction, same speed → they see each other <b style="color:#1C1A16">standing still</b>.</p>
      <p style="font-family:'Kalam',cursive;font-weight:700;font-size:15px;color:#157A45;margin-bottom:9px;transform:rotate(-.3deg)">aur opposite direction?</p>
      <p style="font-weight:800;font-size:15.5px;margin-bottom:10px">|v(A rel B)| = 60 + 60 = 120 km/h</p>
      <p style="font-size:13.5px;line-height:1.6;color:#57534B;max-width:560px;margin-bottom:10px">Crossing trains flash past each other — the speeds <b style="color:#1C1A16">add</b>. That's why the other train is gone in two seconds.</p>
      <p style="font-family:'Kalam',cursive;font-weight:700;font-size:14.5px;color:#DD4433;max-width:560px;margin-bottom:8px;transform:rotate(-.4deg)">same idea powers river–boat problems — up next.</p>
      <div style="display:flex;align-items:center;gap:8px;padding-bottom:4px"><span style="width:8px;height:14px;background:#EEA31F;border-radius:2px;animation:mlBlink 1s steps(1) infinite"></span><span style="font-family:'Kalam',cursive;font-weight:700;font-size:12px;color:#9C988C">Drona is writing…</span></div>
    </div>
    <span style="position:absolute;top:14px;bottom:14px;left:40px;width:1.4px;background:rgba(221,68,51,.35);pointer-events:none"></span>
    <span data-role="ind" style="position:absolute;right:5px;top:0;width:3px;border-radius:99px;background:rgba(28,26,22,.3);opacity:0;transition:opacity .3s ease;pointer-events:none"></span>
    <div data-role="backnow" data-act="jump" style="position:absolute;left:50%;bottom:64px;transform:translateX(-50%);display:flex;align-items:center;gap:8px;background:#221D16;color:#EFEBDD;border-radius:99px;padding:8px 16px;font-weight:700;font-size:12px;cursor:pointer;box-shadow:0 14px 30px -16px rgba(28,26,22,.7);transition:opacity .25s ease;white-space:nowrap;opacity:0;pointer-events:none"><span style="color:#EEA31F">↓</span>Back to now</div>
    <div data-role="dock" style="position:absolute;left:50%;bottom:12px;display:flex;align-items:center;gap:10px;padding:5px 6px;background:rgba(252,250,244,.95);border:1px solid rgba(28,26,22,.14);border-radius:99px;backdrop-filter:blur(8px);box-shadow:0 14px 30px -18px rgba(28,26,22,.45);transition:transform .35s ease,opacity .3s ease;white-space:nowrap;transform:translate(-50%,0);opacity:1">
      <span data-act="play" style="width:32px;height:32px;flex:none;border-radius:50%;background:#1C1A16;color:#FCFAF4;display:grid;place-items:center;cursor:pointer">
        <svg data-ic="pause" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" style="display:block"><path d="M9 5v14M15 5v14"></path></svg>
        <svg data-ic="play" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="display:none"><path d="M8 6.2l10.5 5.8L8 17.8z"></path></svg>
      </span>
      <span style="width:1px;height:16px;background:rgba(28,26,22,.14)"></span>
      <span data-act="topics" style="display:inline-flex;align-items:center;gap:6px;font-weight:700;font-size:11px;padding:5px 11px;border-radius:99px;border:1px solid rgba(28,26,22,.14);background:#fff;color:#57534B;cursor:pointer"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h10"></path></svg>Topics</span>
      <span data-act="cc" style="width:26px;height:26px;border-radius:50%;display:grid;place-items:center;font-weight:800;font-size:8.5px;letter-spacing:.06em;cursor:pointer;background:#FCF4E0;border:1.4px solid rgba(238,163,31,.65);color:#9A6A12">CC</span>
    </div>
    <div data-role="segbar" style="position:absolute;left:24px;right:24px;bottom:6px;display:flex;gap:4px;transition:opacity .3s ease;opacity:1;pointer-events:none">
      <span style="flex:1;height:2.5px;border-radius:99px;background:rgba(28,26,22,.08);overflow:hidden"><span data-seg="0" style="display:block;height:100%;border-radius:99px;width:100%;background:rgba(28,26,22,.3)"></span></span>
      <span style="flex:1;height:2.5px;border-radius:99px;background:rgba(28,26,22,.08);overflow:hidden"><span data-seg="1" style="display:block;height:100%;border-radius:99px;width:100%;background:rgba(28,26,22,.3)"></span></span>
      <span style="flex:1;height:2.5px;border-radius:99px;background:rgba(28,26,22,.08);overflow:hidden"><span data-seg="2" style="display:block;height:100%;border-radius:99px;width:56%;background:#EEA31F;animation:mlProg 80s linear forwards"></span></span>
      <span style="flex:1;height:2.5px;border-radius:99px;background:rgba(28,26,22,.08);overflow:hidden"><span data-seg="3" style="display:block;height:100%;border-radius:99px;width:0;background:#EEA31F"></span></span>
      <span style="flex:1;height:2.5px;border-radius:99px;background:rgba(28,26,22,.08);overflow:hidden"><span data-seg="4" style="display:block;height:100%;border-radius:99px;width:0;background:#EEA31F"></span></span>
    </div>
  </div>
  <div data-role="capwrap" style="flex:none;overflow:hidden;max-height:60px;opacity:1;transition:max-height .35s ease,opacity .3s ease">
    <div style="margin:8px 10px 10px;display:flex;align-items:center;gap:10px;background:#211C15;color:#EFEBDD;border-radius:12px;padding:8px 16px">
      <span style="flex:none;font-weight:800;font-size:9px;letter-spacing:.12em;color:#EEA31F;border:1px solid rgba(238,163,31,.45);border-radius:5px;padding:2px 5px">CC</span>
      <span style="min-width:0;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:'Anek Devanagari',sans-serif;font-size:13.5px">…dono train same speed pe hain, toh ek dusre ke liye ruki hui<span style="display:inline-block;width:2px;height:13px;background:#EEA31F;margin-left:2px;vertical-align:-2px;animation:mlBlink 1s steps(1) infinite"></span></span>
    </div>
  </div>
  <div data-role="top" style="position:absolute;top:18px;left:26px;right:26px;display:flex;align-items:center;gap:10px;transition:transform .35s ease,opacity .3s ease;transform:translateY(0);opacity:1">
    <span data-go="18 Lessons" style="width:34px;height:34px;flex:none;border-radius:50%;border:1.4px solid rgba(28,26,22,.14);background:rgba(252,250,244,.94);backdrop-filter:blur(8px);display:grid;place-items:center;cursor:pointer"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#1C1A16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"></path></svg></span>
    <span style="display:inline-flex;align-items:baseline;gap:8px;font-weight:700;font-size:13px;border:1px solid rgba(28,26,22,.14);border-radius:99px;padding:7px 14px;background:rgba(252,250,244,.94);backdrop-filter:blur(8px)">Kinematics<span style="font-weight:600;font-size:11px;color:#9C988C">Physics · Class 11</span></span>
  </div>
  <div data-role="scrim" data-act="closedrawer" style="position:absolute;inset:0;background:rgba(22,19,14,.3);transition:opacity .3s ease;opacity:0;pointer-events:none"></div>
  <div data-role="drawer" style="position:absolute;top:0;right:0;bottom:0;width:272px;background:rgba(252,250,244,.98);border-left:1px solid rgba(28,26,22,.12);box-shadow:-18px 0 40px -24px rgba(28,26,22,.5);transition:transform .35s cubic-bezier(.25,.75,.3,1);display:flex;flex-direction:column;cursor:default;transform:translateX(105%)">
    <div style="display:flex;align-items:center;gap:10px;padding:16px 16px 10px">
      <span style="flex:1;min-width:0"><span style="display:block;font-weight:800;font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:#9C988C">In this chapter</span><b style="font-size:15px">Kinematics</b></span>
      <span data-act="closedrawer" style="width:28px;height:28px;border-radius:50%;border:1.4px solid rgba(28,26,22,.14);background:#fff;display:grid;place-items:center;cursor:pointer;font-weight:700;font-size:12px;color:#57534B">✕</span>
    </div>
    <div style="flex:1;overflow-y:auto;padding:2px 10px 8px;display:flex;flex-direction:column;gap:3px">
      <div data-topic="0" style="display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:12px;cursor:pointer;background:transparent;border:1.4px solid transparent"><span data-mark style="width:18px;flex:none;text-align:center;font-weight:800;font-size:12px;color:#1C9B57">✓</span><span style="flex:1;min-width:0"><span data-name style="display:block;font-weight:600;font-size:12.5px;color:#57534B;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Displacement &amp; distance</span><span data-sub style="display:block;font-weight:700;font-size:10px;color:#9A6A12"></span></span></div>
      <div data-topic="1" style="display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:12px;cursor:pointer;background:transparent;border:1.4px solid transparent"><span data-mark style="width:18px;flex:none;text-align:center;font-weight:800;font-size:12px;color:#1C9B57">✓</span><span style="flex:1;min-width:0"><span data-name style="display:block;font-weight:600;font-size:12.5px;color:#57534B;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Average &amp; instantaneous velocity</span><span data-sub style="display:block;font-weight:700;font-size:10px;color:#9A6A12"></span></span></div>
      <div data-topic="2" style="display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:12px;cursor:pointer;background:#FCF4E0;border:1.4px solid rgba(238,163,31,.55)"><span data-mark style="width:18px;flex:none;text-align:center;font-weight:800;font-size:12px;color:#EEA31F">●</span><span style="flex:1;min-width:0"><span data-name style="display:block;font-weight:800;font-size:12.5px;color:#1C1A16;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Relative velocity</span><span data-sub style="display:block;font-weight:700;font-size:10px;color:#9A6A12">Now playing</span></span></div>
      <div data-topic="3" style="display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:12px;cursor:pointer;background:transparent;border:1.4px solid transparent"><span data-mark style="width:18px;flex:none;text-align:center;font-weight:800;font-size:12px;color:#C0BBAD">○</span><span style="flex:1;min-width:0"><span data-name style="display:block;font-weight:600;font-size:12.5px;color:#9C988C;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Projectile basics</span><span data-sub style="display:block;font-weight:700;font-size:10px;color:#9A6A12"></span></span></div>
      <div data-topic="4" style="display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:12px;cursor:pointer;background:transparent;border:1.4px solid transparent"><span data-mark style="width:18px;flex:none;text-align:center;font-weight:800;font-size:12px;color:#C0BBAD">○</span><span style="flex:1;min-width:0"><span data-name style="display:block;font-weight:600;font-size:12.5px;color:#9C988C;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">River–boat problems</span><span data-sub style="display:block;font-weight:700;font-size:10px;color:#9A6A12"></span></span></div>
    </div>
    <div style="padding:8px 16px 14px;font-size:11px;color:#9C988C;font-weight:600;border-top:1px dashed rgba(28,26,22,.12)">Tap a topic to jump — your progress is saved.</div>
  </div>
</div>`;

// Landscape entering moments — the rotation happens at the button tap, so the
// loading beat itself is already landscape; the class then just fades in.
L['09 Entering classroom'] = `<div data-screen-label="09 Entering classroom" style="width:844px;height:390px;background:#16130E;border:1px solid rgba(28,26,22,.3);border-radius:28px;overflow:hidden;box-shadow:0 24px 50px -30px rgba(28,26,22,.6);display:flex;flex-direction:column;position:relative;color:#EFEBDD">
  <span style="position:absolute;inset:0;background:radial-gradient(70% 110% at 50% 30%,rgba(238,163,31,.12),transparent 62%);pointer-events:none"></span>
  <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 26px 6px;flex:none;position:relative"><span style="font-weight:700;font-size:13px;color:#fff">9:41</span><span style="width:22px;height:11px;border:1px solid rgba(239,235,221,.45);border-radius:3px;position:relative"><span style="position:absolute;top:1px;bottom:1px;left:1px;width:14px;background:#EFEBDD;border-radius:1px"></span></span></div>
  <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;gap:48px;position:relative;padding:0 56px">
    <svg viewBox="0 0 120 120" width="118" height="118" fill="none" style="overflow:visible;flex:none">
      <circle cx="60" cy="60" r="36" stroke="#FCFAF4" stroke-width="11" stroke-linecap="round" stroke-dasharray="52 23.4" transform="rotate(-90 60 60)"></circle>
      <circle cx="60" cy="60" r="19" stroke="#FCFAF4" stroke-width="9" stroke-linecap="round" stroke-dasharray="21.8 18" transform="rotate(-30 60 60)"></circle>
      <path d="M112,60 A52,52 0 0 0 60,8" fill="none" stroke="#DD4433" stroke-width="1.4"></path>
      <text x="102" y="22" style="font-family:'Kalam',cursive;font-size:9px;fill:#EEA31F">−90°</text>
      <circle cx="60" cy="60" r="6" fill="#EEA31F"></circle>
    </svg>
    <div style="display:flex;flex-direction:column;align-items:flex-start;gap:13px;min-width:0">
      <span style="display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:13px;border:1px solid rgba(255,255,255,.16);border-radius:99px;padding:8px 16px;background:rgba(255,255,255,.05)"><span style="width:7px;height:7px;border-radius:50%;background:#EEA31F"></span>Current Electricity</span>
      <h2 style="font-weight:700;font-size:27px;letter-spacing:-.02em;color:#fff">Entering your classroom</h2>
      <span style="display:inline-flex;align-items:center;gap:12px">
        <span style="display:inline-flex;align-items:center;gap:7px">
          <span style="width:8px;height:8px;border-radius:50%;background:#EEA31F;animation:mlBlink 1.2s ease infinite"></span>
          <span style="width:8px;height:8px;border-radius:50%;background:#EEA31F;animation:mlBlink 1.2s ease .25s infinite"></span>
          <span style="width:8px;height:8px;border-radius:50%;background:#EEA31F;animation:mlBlink 1.2s ease .5s infinite"></span>
        </span>
        <span style="font-size:14px;font-weight:600;color:#C7C1B3">Drona is picking up the chalk…</span>
      </span>
    </div>
  </div>
  <div style="flex:none;text-align:center;padding-bottom:12px;position:relative"><span style="font-weight:600;font-size:12px;color:#938d80">Tip: you can interrupt Drona any time — just tap raise hand.</span><div style="width:110px;height:4px;border-radius:99px;background:rgba(239,235,221,.25);margin:10px auto 0"></div></div>
</div>`;

L['09L Entering lesson'] = `<div data-screen-label="09L Entering lesson" style="width:844px;height:390px;background:#16130E;border:1px solid rgba(28,26,22,.3);border-radius:28px;overflow:hidden;box-shadow:0 24px 50px -30px rgba(28,26,22,.6);display:flex;flex-direction:column;position:relative;color:#EFEBDD">
  <span style="position:absolute;inset:0;background:radial-gradient(70% 110% at 50% 30%,rgba(238,163,31,.12),transparent 62%);pointer-events:none"></span>
  <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 26px 6px;flex:none;position:relative"><span style="font-weight:700;font-size:13px;color:#fff">9:41</span><span style="width:22px;height:11px;border:1px solid rgba(239,235,221,.45);border-radius:3px;position:relative"><span style="position:absolute;top:1px;bottom:1px;left:1px;width:14px;background:#EFEBDD;border-radius:1px"></span></span></div>
  <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;gap:48px;position:relative;padding:0 56px">
    <svg viewBox="0 0 120 120" width="118" height="118" fill="none" style="overflow:visible;flex:none">
      <circle cx="60" cy="60" r="36" stroke="#FCFAF4" stroke-width="11" stroke-linecap="round" stroke-dasharray="52 23.4" transform="rotate(-90 60 60)"></circle>
      <circle cx="60" cy="60" r="19" stroke="#FCFAF4" stroke-width="9" stroke-linecap="round" stroke-dasharray="21.8 18" transform="rotate(-30 60 60)"></circle>
      <path d="M112,60 A52,52 0 0 0 60,8" fill="none" stroke="#DD4433" stroke-width="1.4"></path>
      <text x="102" y="22" style="font-family:'Kalam',cursive;font-size:9px;fill:#EEA31F">−90°</text>
      <circle cx="60" cy="60" r="6" fill="#EEA31F"></circle>
    </svg>
    <div style="display:flex;flex-direction:column;align-items:flex-start;gap:13px;min-width:0">
      <span style="display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:13px;border:1px solid rgba(255,255,255,.16);border-radius:99px;padding:8px 16px;background:rgba(255,255,255,.05)"><span style="width:7px;height:7px;border-radius:50%;background:#EEA31F"></span>Kinematics · Relative velocity</span>
      <h2 style="font-weight:700;font-size:27px;letter-spacing:-.02em;color:#fff">Opening your lesson</h2>
      <span style="display:inline-flex;align-items:center;gap:12px">
        <span style="display:inline-flex;align-items:center;gap:7px">
          <span style="width:8px;height:8px;border-radius:50%;background:#EEA31F;animation:mlBlink 1.2s ease infinite"></span>
          <span style="width:8px;height:8px;border-radius:50%;background:#EEA31F;animation:mlBlink 1.2s ease .25s infinite"></span>
          <span style="width:8px;height:8px;border-radius:50%;background:#EEA31F;animation:mlBlink 1.2s ease .5s infinite"></span>
        </span>
        <span style="font-size:14px;font-weight:600;color:#C7C1B3">Drona is queuing the board…</span>
      </span>
    </div>
  </div>
  <div style="flex:none;text-align:center;padding-bottom:12px;position:relative"><span style="font-weight:600;font-size:12px;color:#938d80">Jump between topics anytime — open Topics in the dock.</span><div style="width:110px;height:4px;border-radius:99px;background:rgba(239,235,221,.25);margin:10px auto 0"></div></div>
</div>`;

// Overwrite-proof: prototype-screens.js does `window.ML_SCREENS = {...}` and may
// execute after us (or re-execute). Intercept the property so every assignment re-merges.
var current = window.ML_SCREENS;
if (current) Object.assign(current, L);
try {
  Object.defineProperty(window, 'ML_SCREENS', {
    configurable: true,
    get: function () { return current; },
    set: function (v) { current = v || {}; Object.assign(current, L); }
  });
} catch (e) {
  setInterval(function () { if (window.ML_SCREENS && !window.ML_SCREENS['10L Live classroom']) Object.assign(window.ML_SCREENS, L); }, 100);
}
})();
