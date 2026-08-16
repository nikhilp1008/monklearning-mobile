// Topic-selection flow screens (08a chapter page, 08b topic sheet) — merges into ML_SCREENS and survives re-execution
(function () {
  var ADD = {
    "08a Chapter selector": `<div data-screen-label="08a Chapter selector" style="width:390px;height:844px;background:#FCFAF4;display:flex;flex-direction:column;position:relative;overflow:hidden">
  <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 24px 8px;flex:none"><span style="font-weight:700;font-size:14px">9:41</span><span style="width:22px;height:11px;border:1px solid rgba(28,26,22,.4);border-radius:3px;position:relative"><span style="position:absolute;top:1px;bottom:1px;left:1px;width:14px;background:#1C1A16;border-radius:1px"></span></span></div>
  <div style="flex:none;display:flex;align-items:center;gap:12px;padding:8px 20px 0">
    <span data-go="1a Home calm" style="width:36px;height:36px;flex:none;border-radius:50%;background:#fff;border:1px solid rgba(28,26,22,.12);display:grid;place-items:center"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#1C1A16" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"></path></svg></span>
    <span style="flex:1;min-width:0"><span style="display:block;font-weight:800;font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:#9C988C">Learn with Drona</span><b style="display:block;font-weight:700;font-size:19px;letter-spacing:-.02em">What are we learning?</b></span>
  </div>
  <div style="flex:none;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:16px 20px 0">
    <span style="display:inline-flex;gap:3px;padding:3px;background:rgba(28,26,22,.055);border-radius:99px"><span style="font-weight:700;font-size:12px;padding:6px 13px;border-radius:99px;color:#57534B">Class 11</span><span style="font-weight:700;font-size:12px;padding:6px 13px;border-radius:99px;background:#fff;box-shadow:0 2px 6px rgba(28,26,22,.12)">Class 12</span></span>
    <span style="display:inline-flex;gap:14px;font-weight:700;font-size:13px"><span style="color:#1C1A16;box-shadow:inset 0 -2px #EEA31F;padding-bottom:3px">Physics</span><span style="color:#9C988C">Chemistry</span><span style="color:#9C988C">Maths</span></span>
  </div>
  <div style="flex:none;display:flex;align-items:center;gap:9px;background:#fff;border:1.4px solid rgba(28,26,22,.12);border-radius:99px;padding:10px 15px;margin:14px 20px 0">
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#9C988C" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.2-3.2"></path></svg>
    <span style="font-size:14px;color:#9C988C;flex:1">Search a chapter\u2026</span>
    <span style="font-weight:600;font-size:11px;color:#9C988C;flex:none">14 chapters</span>
  </div>
  <div style="flex:1;min-height:0;overflow:hidden;margin:14px 20px 0;display:flex;flex-direction:column;gap:7px;position:relative">
    <div data-go="08b Topic sheet" style="display:flex;align-items:center;gap:11px;background:#fff;border:1px solid rgba(28,26,22,.1);border-radius:12px;padding:13px 14px"><span style="font-family:'Kalam',cursive;font-weight:700;font-size:12px;color:#C2BCAF;width:20px">01</span><span style="flex:1;font-weight:600;font-size:14px">Electric Charges &amp; Fields</span><span style="font-weight:600;font-size:11px;color:#9C988C">6 topics</span></div>
    <div data-go="08b Topic sheet" style="display:flex;align-items:center;gap:11px;background:#fff;border:1px solid rgba(28,26,22,.1);border-radius:12px;padding:13px 14px"><span style="font-family:'Kalam',cursive;font-weight:700;font-size:12px;color:#C2BCAF;width:20px">02</span><span style="flex:1;font-weight:600;font-size:14px">Electrostatic Potential</span><span style="font-weight:600;font-size:11px;color:#9C988C">7 topics</span></div>
    <div data-go="08b Topic sheet" style="display:flex;align-items:center;gap:11px;background:#FCF4E0;border:1.6px solid #EEA31F;border-radius:12px;padding:13px 14px;box-shadow:0 8px 18px -14px rgba(238,163,31,.8)"><span style="font-family:'Kalam',cursive;font-weight:700;font-size:12px;color:#9A6A12;width:20px">03</span><span style="flex:1;font-weight:700;font-size:14px">Current Electricity</span><span style="font-weight:700;font-size:11px;color:#9A6A12">8 topics \u2192</span></div>
    <div data-go="08b Topic sheet" style="display:flex;align-items:center;gap:11px;background:#fff;border:1px solid rgba(28,26,22,.1);border-radius:12px;padding:13px 14px"><span style="font-family:'Kalam',cursive;font-weight:700;font-size:12px;color:#C2BCAF;width:20px">04</span><span style="flex:1;font-weight:600;font-size:14px">Moving Charges &amp; Magnetism</span><span style="font-weight:600;font-size:11px;color:#9C988C">7 topics</span></div>
    <div data-go="08b Topic sheet" style="display:flex;align-items:center;gap:11px;background:#fff;border:1px solid rgba(28,26,22,.1);border-radius:12px;padding:13px 14px"><span style="font-family:'Kalam',cursive;font-weight:700;font-size:12px;color:#C2BCAF;width:20px">05</span><span style="flex:1;font-weight:600;font-size:14px">Magnetism &amp; Matter</span><span style="font-weight:600;font-size:11px;color:#9C988C">5 topics</span></div>
    <div data-go="08b Topic sheet" style="display:flex;align-items:center;gap:11px;background:#fff;border:1px solid rgba(28,26,22,.1);border-radius:12px;padding:13px 14px"><span style="font-family:'Kalam',cursive;font-weight:700;font-size:12px;color:#C2BCAF;width:20px">06</span><span style="flex:1;font-weight:600;font-size:14px">EM Induction</span><span style="font-weight:600;font-size:11px;color:#9C988C">6 topics</span></div>
    <div data-go="08b Topic sheet" style="display:flex;align-items:center;gap:11px;background:#fff;border:1px solid rgba(28,26,22,.1);border-radius:12px;padding:13px 14px"><span style="font-family:'Kalam',cursive;font-weight:700;font-size:12px;color:#C2BCAF;width:20px">07</span><span style="flex:1;font-weight:600;font-size:14px">Alternating Current</span><span style="font-weight:600;font-size:11px;color:#9C988C">6 topics</span></div>
    <div data-go="08b Topic sheet" style="display:flex;align-items:center;gap:11px;background:#fff;border:1px solid rgba(28,26,22,.1);border-radius:12px;padding:13px 14px"><span style="font-family:'Kalam',cursive;font-weight:700;font-size:12px;color:#C2BCAF;width:20px">08</span><span style="flex:1;font-weight:600;font-size:14px">EM Waves</span><span style="font-weight:600;font-size:11px;color:#9C988C">4 topics</span></div>
    <div data-go="08b Topic sheet" style="display:flex;align-items:center;gap:11px;background:#fff;border:1px solid rgba(28,26,22,.1);border-radius:12px;padding:13px 14px"><span style="font-family:'Kalam',cursive;font-weight:700;font-size:12px;color:#C2BCAF;width:20px">09</span><span style="flex:1;font-weight:600;font-size:14px">Ray Optics</span><span style="font-weight:600;font-size:11px;color:#9C988C">8 topics</span></div>
    <span style="position:absolute;left:0;right:0;bottom:0;height:56px;background:linear-gradient(transparent,#FCFAF4);pointer-events:none"></span>
  </div>
  <div style="flex:none;padding:8px 20px 10px;text-align:center">
    <span style="font-size:12px;color:#9C988C">Tap a chapter to pick a topic</span>
    <div style="width:130px;height:4px;border-radius:99px;background:rgba(28,26,22,.2);margin:8px auto 0"></div>
  </div>
</div>`,
    "08b Topic sheet": `<div data-screen-label="08b Topic sheet" style="width:390px;height:844px;background:#FCFAF4;position:relative;overflow:hidden">
  <div style="display:flex;align-items:center;gap:12px;padding:52px 20px 0;opacity:.5"><span style="width:36px;height:36px;flex:none;border-radius:50%;background:#fff;border:1px solid rgba(28,26,22,.12)"></span><b style="font-weight:700;font-size:19px;letter-spacing:-.02em">What are we learning?</b></div>
  <div data-act="close" style="position:absolute;inset:0;background:rgba(28,26,22,.42);backdrop-filter:blur(2px)"></div>
  <div style="position:absolute;left:0;right:0;bottom:0;top:96px;display:flex;flex-direction:column;background:#FCFAF4;border-radius:24px 24px 0 0;box-shadow:0 -20px 50px -20px rgba(22,19,14,.5);padding:10px 20px 0">
    <div style="width:40px;height:5px;border-radius:99px;background:rgba(28,26,22,.18);margin:0 auto 14px;flex:none"></div>
    <div style="flex:none;display:flex;align-items:baseline;justify-content:space-between;gap:10px">
      <span style="min-width:0"><span style="display:block;font-weight:800;font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:#9C988C">Chapter 03 \u00B7 Physics \u00B7 Class 12</span><b style="display:block;font-weight:700;font-size:21px;letter-spacing:-.02em;margin-top:3px">Current Electricity</b></span>
      <span style="font-weight:600;font-size:11px;color:#9C988C;flex:none">pick one topic</span>
    </div>
    <div style="flex:1;min-height:0;overflow:hidden;margin-top:16px;display:flex;flex-direction:column">
      <div style="flex:none;display:grid;grid-template-columns:1fr 1fr;gap:9px">
        <span data-tsel="Drift velocity &amp; Ohm's law" style="display:flex;align-items:center;justify-content:space-between;gap:8px;background:#fff;border:1px solid rgba(28,26,22,.12);border-radius:13px;padding:12px 14px;font-weight:600;font-size:13px;line-height:1.35;min-height:58px">Drift velocity &amp; Ohm's law<span data-chk style="display:none;width:17px;height:17px;flex:none;border-radius:50%;background:#EEA31F;place-items:center"><svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#241a08" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg></span></span>
        <span data-tsel="Resistance &amp; resistivity" style="display:flex;align-items:center;justify-content:space-between;gap:8px;background:#fff;border:1px solid rgba(28,26,22,.12);border-radius:13px;padding:12px 14px;font-weight:600;font-size:13px;line-height:1.35;min-height:58px">Resistance &amp; resistivity<span data-chk style="display:none;width:17px;height:17px;flex:none;border-radius:50%;background:#EEA31F;place-items:center"><svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#241a08" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg></span></span>
        <span data-tsel="Series &amp; parallel circuits" style="display:flex;align-items:center;justify-content:space-between;gap:8px;background:#fff;border:1px solid rgba(28,26,22,.12);border-radius:13px;padding:12px 14px;font-weight:600;font-size:13px;line-height:1.35;min-height:58px">Series &amp; parallel circuits<span data-chk style="display:none;width:17px;height:17px;flex:none;border-radius:50%;background:#EEA31F;place-items:center"><svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#241a08" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg></span></span>
        <span data-tsel="Kirchhoff's laws" style="display:flex;align-items:center;justify-content:space-between;gap:8px;background:#fff;border:1px solid rgba(28,26,22,.12);border-radius:13px;padding:12px 14px;font-weight:600;font-size:13px;line-height:1.35;min-height:58px">Kirchhoff's laws<span data-chk style="display:none;width:17px;height:17px;flex:none;border-radius:50%;background:#EEA31F;place-items:center"><svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#241a08" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg></span></span>
        <span data-tsel="Wheatstone bridge" style="display:flex;align-items:center;justify-content:space-between;gap:8px;background:#fff;border:1px solid rgba(28,26,22,.12);border-radius:13px;padding:12px 14px;font-weight:600;font-size:13px;line-height:1.35;min-height:58px">Wheatstone bridge<span data-chk style="display:none;width:17px;height:17px;flex:none;border-radius:50%;background:#EEA31F;place-items:center"><svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#241a08" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg></span></span>
        <span data-tsel="Meter bridge &amp; potentiometer" style="display:flex;align-items:center;justify-content:space-between;gap:8px;background:#fff;border:1px solid rgba(28,26,22,.12);border-radius:13px;padding:12px 14px;font-weight:600;font-size:13px;line-height:1.35;min-height:58px">Meter bridge &amp; potentiometer<span data-chk style="display:none;width:17px;height:17px;flex:none;border-radius:50%;background:#EEA31F;place-items:center"><svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#241a08" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg></span></span>
        <span data-tsel="EMF &amp; internal resistance" style="display:flex;align-items:center;justify-content:space-between;gap:8px;background:#fff;border:1px solid rgba(28,26,22,.12);border-radius:13px;padding:12px 14px;font-weight:600;font-size:13px;line-height:1.35;min-height:58px">EMF &amp; internal resistance<span data-chk style="display:none;width:17px;height:17px;flex:none;border-radius:50%;background:#EEA31F;place-items:center"><svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#241a08" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg></span></span>
        <span data-tsel="Heating effects of current" style="display:flex;align-items:center;justify-content:space-between;gap:8px;background:#fff;border:1px solid rgba(28,26,22,.12);border-radius:13px;padding:12px 14px;font-weight:600;font-size:13px;line-height:1.35;min-height:58px">Heating effects of current<span data-chk style="display:none;width:17px;height:17px;flex:none;border-radius:50%;background:#EEA31F;place-items:center"><svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#241a08" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"></path></svg></span></span>
      </div>
      <div data-role="freetalk" data-act="talk" style="flex:none;display:flex;align-items:center;gap:9px;padding:13px 2px;margin-top:8px;border-top:1px solid rgba(28,26,22,.08);border-bottom:1px solid rgba(28,26,22,.08)">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#57534B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none"><path d="M12 3a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4Z"></path><path d="M5 11a7 7 0 0 0 14 0M12 18v3"></path></svg>
        <span style="font-size:13px;color:#57534B;flex:1">Can't find your topic? <b style="font-weight:700;color:#1C1A16;box-shadow:inset 0 -2px rgba(238,163,31,.6)">Just start talking</b></span>
        <svg viewBox="0 0 16 16" width="13" height="13" fill="none" style="flex:none"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="#9C988C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </div>
      <div data-role="talks" style="flex:none;margin-top:16px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin-bottom:9px"><span style="font-weight:800;font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:#9C988C">From your talks</span></div>
        <div style="display:flex;flex-direction:column;gap:7px">
          <div data-act="talk" style="display:flex;align-items:center;gap:11px;background:#fff;border:1px solid rgba(28,26,22,.08);border-radius:12px;padding:13px 15px"><span style="flex:1;min-width:0;font-weight:600;font-size:13.5px">EMF vs terminal voltage</span><span style="font-size:11px;color:#9C988C;flex:none">2d ago</span><svg viewBox="0 0 16 16" width="12" height="12" fill="none" style="flex:none"><path d="M5.5 3 10.5 8 5.5 13" stroke="#9C988C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
          <div data-act="talk" style="display:flex;align-items:center;gap:11px;background:#fff;border:1px solid rgba(28,26,22,.08);border-radius:12px;padding:13px 15px"><span style="flex:1;min-width:0;font-weight:600;font-size:13.5px">Why a fuse wire melts first</span><span style="font-size:11px;color:#9C988C;flex:none">last week</span><svg viewBox="0 0 16 16" width="12" height="12" fill="none" style="flex:none"><path d="M5.5 3 10.5 8 5.5 13" stroke="#9C988C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
        </div>
      </div>
    </div>
    <div style="flex:none;padding:12px 0 10px;background:#FCFAF4">
      <div data-role="tcta" data-act="tstart" style="display:flex;align-items:center;justify-content:center;gap:9px;width:100%;font-weight:600;font-size:16px;height:52px;border-radius:99px;color:#9C988C;background:rgba(28,26,22,.07)"><span data-ctalabel>Pick a topic to start</span><svg data-ctarrow viewBox="0 0 16 16" width="15" height="15" fill="none" style="display:none"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="#FCFAF4" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
      <div style="width:130px;height:4px;border-radius:99px;background:rgba(28,26,22,.2);margin:10px auto 0"></div>
    </div>
  </div>
</div>`
  };
  function merge(o) { if (o) for (var k in ADD) o[k] = ADD[k]; return o; }
  var d = Object.getOwnPropertyDescriptor(window, 'ML_SCREENS');
  if (d && d.get) {
    merge(d.get());
    Object.defineProperty(window, 'ML_SCREENS', {
      configurable: true,
      get: function () { return merge(d.get()); },
      set: function (v) { d.set(v); merge(d.get()); }
    });
  } else {
    var cur = merge(window.ML_SCREENS || {});
    Object.defineProperty(window, 'ML_SCREENS', {
      configurable: true,
      get: function () { return cur; },
      set: function (v) { cur = merge(v || {}); }
    });
  }
})();
