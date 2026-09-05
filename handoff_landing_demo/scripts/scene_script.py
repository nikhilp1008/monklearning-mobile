# -*- coding: utf-8 -*-
"""The authored scene: Rotational Motion -> Conservation of Angular Momentum.

One 60-70s segment of a real class, written to the same shape the production
planner emits (prompts/planner_segment.md: 9-12 `board_content` items typed
heading | text | formula | note), so this is a faithful sample rather than a
mock-up.

Eleven board items pair 1:1 with eleven spoken sentences. Each sentence is
synthesized separately -- the same sentence-at-a-time streaming the live
classroom uses -- so a board line can be revealed at the exact moment the
teacher starts saying it, instead of on a fixed timer.

Speech text is written for TTS, not for the eye: every symbol is spelled the
way it is said ("eye one omega one"), because Rumik reads raw notation badly
(see monk-learning-api app/drona/voice_proxy.py). The board carries the real
notation; the voice carries the words.

Language rules follow prompts/tutor.md:
  - hinglish -> Roman letters only, never Devanagari, technical terms in English
  - english  -> zero Hindi words, not even as filler
  - Hinglish verb forms agree with tutor gender (Rule 12 / persona.py):
    Drona (male) "padhata hoon", Veda (female) "padhati hoon"
"""

TOPIC = "Rotational Motion"
CONCEPT = "Conservation of Angular Momentum"

# ── Board ───────────────────────────────────────────────────────────────────
# One board serves all four teacher/language variants, so nothing on it is
# language-specific -- notation and English prose only. Hinglish lives in the
# voice and the caption strip. (The torque board in the original handoff wrote
# Hinglish asides in Kalam; that file only ever showed one session, this one
# switches language under the same paper.)
#
# HTML fragments in the handoff's own tokens (handoff_landscape_classroom/
# design/2a-live-class.html). The rendering is not being redesigned here --
# only the content inside it changes -- so every style string below is lifted
# from that file verbatim.

H = ("font-family:'Kalam',cursive;font-weight:700;font-size:17px;line-height:26px;"
     "color:#DD4433;margin-bottom:0;transform:rotate(-.4deg)")
FORMULA = "font-weight:800;font-size:17px;line-height:26px;margin-bottom:0"
FORMULA_SM = "font-weight:800;font-size:15.5px;line-height:26px;margin-bottom:0"
PROSE = ("font-size:13.5px;line-height:26px;color:#57534B;max-width:560px;"
         "margin-bottom:0")
ASIDE = ("font-family:'Kalam',cursive;font-weight:700;font-size:15px;line-height:26px;"
         "color:#157A45;margin-bottom:0;transform:rotate(-.3deg)")
NOTE = ("font-family:'Kalam',cursive;font-weight:700;font-size:14.5px;line-height:26px;"
        "color:#DD4433;max-width:560px;margin-bottom:0;transform:rotate(-.4deg)")
INK = 'color:#1C1A16'
MARK = "background:rgba(238,163,31,.28);border-radius:4px;padding:0 5px"

# The figure. Two skaters seen from above: arms out (r long, omega small) and
# arms in (r short, omega large). Same palette and Kalam annotations as the
# door/torque diagram it replaces.
DIAGRAM = '''<svg viewBox="0 0 340 170" width="330" height="156" fill="none" style="display:block;margin-bottom:0">
  <text x="8" y="14" font-family="Kalam" font-size="11" fill="#9C988C">skater · top view</text>

  <path d="M63 48 A24 24 0 0 1 107 48" stroke="#DD4433" stroke-width="2" stroke-linecap="round"></path>
  <path d="M101 41 L108 48 L101 55" stroke="#DD4433" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  <text x="113" y="45" font-family="Kalam" font-size="14" font-weight="700" fill="#DD4433">ω</text>
  <line x1="45" y1="76" x2="125" y2="76" stroke="#1C1A16" stroke-width="3.5" stroke-linecap="round"></line>
  <circle cx="45" cy="76" r="4.5" fill="#1C1A16"></circle>
  <circle cx="125" cy="76" r="4.5" fill="#1C1A16"></circle>
  <circle cx="85" cy="76" r="10" fill="#EEA31F" stroke="#1C1A16" stroke-width="2"></circle>
  <text x="105" y="95" text-anchor="middle" font-family="Kalam" font-size="13" font-weight="700" fill="#1C9B57">r</text>
  <line x1="85" y1="101" x2="125" y2="101" stroke="#1C9B57" stroke-width="1.6" stroke-dasharray="4 5"></line>
  <line x1="85" y1="97" x2="85" y2="105" stroke="#1C9B57" stroke-width="1.4"></line>
  <line x1="125" y1="97" x2="125" y2="105" stroke="#1C9B57" stroke-width="1.4"></line>
  <text x="85" y="126" text-anchor="middle" font-family="Kalam" font-size="11" fill="#9C988C">arms out</text>
  <text x="85" y="141" text-anchor="middle" font-family="Kalam" font-size="11.5" font-weight="700" fill="#57534B">I big · ω small</text>

  <line x1="152" y1="76" x2="196" y2="76" stroke="#9C988C" stroke-width="1.4" stroke-dasharray="4 5"></line>
  <path d="M190 71 L197 76 L190 81" stroke="#9C988C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
  <text x="174" y="66" text-anchor="middle" font-family="Kalam" font-size="10.5" fill="#9C988C">pull arms in</text>

  <path d="M226 52 A26 26 0 0 1 278 52" stroke="#DD4433" stroke-width="1.2" stroke-dasharray="3 4" opacity=".6"></path>
  <path d="M234 50 A17 17 0 0 1 268 50" stroke="#DD4433" stroke-width="2.6" stroke-linecap="round"></path>
  <path d="M262 42 L269 49 L262 56" stroke="#DD4433" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path>
  <text x="284" y="45" font-family="Kalam" font-size="14" font-weight="700" fill="#DD4433">ω</text>
  <line x1="233" y1="76" x2="267" y2="76" stroke="#1C1A16" stroke-width="3.5" stroke-linecap="round"></line>
  <circle cx="233" cy="76" r="4.5" fill="#1C1A16"></circle>
  <circle cx="267" cy="76" r="4.5" fill="#1C1A16"></circle>
  <circle cx="250" cy="76" r="10" fill="#EEA31F" stroke="#1C1A16" stroke-width="2"></circle>
  <text x="258" y="95" text-anchor="middle" font-family="Kalam" font-size="13" font-weight="700" fill="#1C9B57">r</text>
  <line x1="250" y1="101" x2="267" y2="101" stroke="#1C9B57" stroke-width="1.6" stroke-dasharray="4 5"></line>
  <line x1="250" y1="97" x2="250" y2="105" stroke="#1C9B57" stroke-width="1.4"></line>
  <line x1="267" y1="97" x2="267" y2="105" stroke="#1C9B57" stroke-width="1.4"></line>
  <text x="250" y="126" text-anchor="middle" font-family="Kalam" font-size="11" fill="#9C988C">arms in</text>
  <text x="250" y="141" text-anchor="middle" font-family="Kalam" font-size="11.5" font-weight="700" fill="#57534B">I small · ω big</text>
</svg>'''

BOARD = [
    ("heading", f'<h5 style="{H}">angular momentum — why the skater speeds up</h5>'),
    ("text",    f'<p style="{PROSE}">Arms stretched out, she spins slowly. She pulls them in and speeds up — and <b style="{INK}">nobody pushed her</b>.</p>'),
    ("formula", f'<p style="{FORMULA}">L = I ω</p>'),
    ("diagram", DIAGRAM),
    ("formula", f'<p style="{FORMULA_SM}">I = Σ m r<sup>2</sup></p>'),
    ("text",    f'<p style="{PROSE}">Bring the mass inward and r drops. It is <b style="{INK}">squared</b>, so I drops much faster than r does.</p>'),
    ("note",    f'<p style="{ASIDE}">no torque from outside ⇒ L cannot change:</p>'),
    ("formula", f'<p style="{FORMULA}">I<sub>1</sub>ω<sub>1</sub> = I<sub>2</sub>ω<sub>2</sub></p>'),
    ("text",    f'<p style="{PROSE}">Arms out: I<sub>1</sub> = 4 kg·m<sup>2</sup>, ω<sub>1</sub> = 2 rev/s. Arms in: I<sub>2</sub> = 1.2 kg·m<sup>2</sup>.</p>'),
    ("formula", f'<p style="{FORMULA_SM}">ω<sub>2</sub> = (4 × 2) / 1.2 = <span style="{MARK}">6.7 rev/s</span></p>'),
    ("note",    f'<p style="{NOTE}">remember: L needs an outside torque to change — but K = L²/2I goes UP. Her muscles did that work.</p>'),
    ("note",    f'<p style="{ASIDE}">that\'s the whole concept — skater, diver, or a collapsing star: same equation.</p>'),
]

# ── Speech ──────────────────────────────────────────────────────────────────
# One entry per board item, in order. `caption` is what the CC strip shows;
# it is the spoken line as written, which is what a caption is.

HINGLISH = [
    "Dekho, ek ice skater. Arms faila ke ghoom rahi hai — dheere dheere. Main isse hi shuru {karta} hoon.",
    "Ab woh arms andar kheenchti hai, aur speed apne aap badh jaati hai. Koi push nahi kiya.",
    "Iske peeche jo quantity hai, uska naam hai angular momentum. L equals eye omega.",
    "Eye hai moment of inertia, aur omega hai spinning speed.",
    "Aur ab main board pe {likhta} hoon: eye equals summation em ar squared.",
    "Mass ko andar laao, ar chhota ho jaata hai. Aur woh squared hai, isliye eye bahut tezi se girta hai.",
    "Ab dhyaan do — bahar se koi torque nahi lag raha. Toh L badal hi nahi sakta.",
    "Matlab eye one omega one equals eye two omega two.",
    "Chalo ek number lagate hain. Arms out pe eye one hai chaar, aur omega one hai do revolutions per second.",
    "Arms andar, eye two ho gaya one point two. Toh omega two equals chaar into do, divided by one point two — six point seven revolutions per second.",
    "Aur yeh yaad rakhna — L badalne ke liye bahar se torque chahiye. Arms andar kheenchna torque nahi hai. Lekin kinetic energy badh jaati hai, kyunki woh kaam uske muscles ne kiya.",
    "Aur bas, yeh poora concept hai. Angular momentum conserved rehta hai, toh omega ko badalna hi padta hai. Ab iska koi bhi version aa jaye — skater, diver, ya collapsing star — aap solve kar loge.",
]

ENGLISH = [
    "Look at an ice skater, spinning with her arms stretched out — slowly.",
    "Now she pulls her arms in, and she speeds up on her own. Nobody pushed her.",
    "The quantity behind this is called angular momentum. L equals eye omega.",
    "Eye is the moment of inertia, and omega is how fast she is spinning.",
    "And eye equals the sum of em ar squared.",
    "Bring the mass inward and ar gets smaller. And it is squared, so eye falls much faster than ar does.",
    "Now pay attention — there is no torque acting from outside. So L simply cannot change.",
    "Which means eye one omega one equals eye two omega two.",
    "Let us put a number on it. Arms out, eye one is four, and omega one is two revolutions per second.",
    "Arms in, and eye two becomes one point two. So omega two equals four times two, divided by one point two — six point seven revolutions per second.",
    "And remember this — changing L needs a torque from outside. Pulling your arms in is not a torque. But the kinetic energy does go up, because her muscles did that work.",
    "And that is the whole concept. Angular momentum is conserved, so omega has no choice but to obey. Whichever version they give you — a skater, a diver, or a collapsing star — you can solve it now.",
]

# Hinglish verb agreement, filled per teacher.
GENDERED = {
    "male":   {"karta": "karta", "likhta": "likhta"},
    "female": {"karta": "karti", "likhta": "likhti"},
}


def speech_for(language, gender):
    """The eleven spoken lines for one teacher/language pair."""
    if language == "english":
        return list(ENGLISH)
    forms = GENDERED[gender]
    return [line.format(**forms) for line in HINGLISH]


# ── Standalone 15s voice samples ────────────────────────────────────────────
# "JEE" is written "J E E" on purpose. voice_proxy.py's phonetics layer
# only spells SINGLE letters in variable contexts -- its all-caps rule runs
# only inside square brackets -- so a bare acronym in prose reaches Rumik raw
# and is read as the word "jee". Spaced capitals -- "J E E" -- is the form that
# actually recites correctly; chosen by ear against "Jay Ee Ee", "J.E.E." and the
# raw acronym. (Clip length is a bad proxy here: the spaced form is SHORTER than
# the mispronounced one, so do not re-pick this by measuring.) The real fix is an
# acronym rule server-side; until then, spell it here.
#
# Hinglish closes on a tukbandi couplet (aaj ki mushkil / kal ki manzil) rather
# than the internal near-rhyme English uses (NEET/need, teacher/teach you) --
# end-rhyme is the device Hindi actually carries.
#
# For a "hear the voice" control on the landing page. Each teacher introduces
# themselves by name, names the exam, and says what the class is like -- so a
# visitor who plays one meets a teacher, rather than hearing a fragment cut
# out of a lesson. Register follows the personas in the app's own About copy
# (app/about-us.tsx): Drona methodical and exacting, Vedha encouraging and
# energetic. Hinglish keeps the gendered verb forms (samjha rahe / rahi).

SAMPLES = {
    ("drona", "hinglish"): (
        "Hello! Main Drona hoon, aapka teacher. "
        "J E E ho ya NEET — jo aapko chahiye, wahi main padhaunga: "
        "basics se, board pe, step by step. "
        "Aur mujhe intezaar nahi ho raha. Kyunki aaj ki mushkil, kal ki manzil hai."
    ),
    ("veda", "hinglish"): (
        "Hi! Main Vedha hoon, aapki teacher. "
        "J E E ho ya NEET — jo aapko chahiye, wahi main padhaungi: "
        "basics se, board pe, step by step. "
        "Aur mujhe intezaar nahi ho raha. Kyunki aaj ki mushkil, kal ki manzil hai."
    ),
    ("drona", "english"): (
        "Hey! I am Drona, your teacher. "
        "J E E or NEET — whichever you need, that is what I teach you. "
        "Basics first, on the board, step by step. "
        "And what looks impossible today? Soon you will be explaining it back to me."
    ),
    ("veda", "english"): (
        "Hi! I am Vedha, your teacher. "
        "J E E or NEET — whichever you need, that is what I teach you. "
        "Basics first, on the board, step by step. "
        "And what feels impossible today? Soon you will be explaining it back to me."
    ),
}

# ── Who is who ──────────────────────────────────────────────────────────────
# voice_preset and display names are the production values, read from
# monk-learning-api app/drona/persona.py -- not invented here.
TEACHERS = {
    "drona": {"preset": "Lucas", "gender": "male",   "display": "Drona"},
    "veda":  {"preset": "Ira",   "gender": "female", "display": "Vedha"},
}
LANGUAGES = ("hinglish", "english")
