# MonkLearning — Home screen brief

A functional brief, not a design reference. It describes what the home screen
is for, who opens it, and everything that must live on it. It deliberately
contains **no layout** — no card shapes, no order, no spacing. Those are the
things being redesigned.

Written for someone (or something) designing the screen from scratch.

---

## 1. The product, in four lines

MonkLearning is an AI tutor for Indian students in **Class 11 and 12** preparing
for **JEE and NEET** — the engineering and medical entrance exams. Roughly a
million students a year sit each one, and the outcome decides which college
they get into.

The product's core is not a video library and not a question bank. It is a
**live voice class with a named AI teacher**. The student picks a chapter, and
**Drona** (or **Vedha** — the student chooses) teaches it out loud while writing
on a board on screen, and the student can interrupt and ask at any point. It is
the experience of a private tutor, not of a course.

Two smaller things sit beside it: **snap a doubt** (photograph a question you're
stuck on, get it solved step by step) and **practice questions**.

The app's promise is measurement you can trust. The **Monk Score** moves *only
when you prove a concept on a question you have never seen* — never for
activity, streaks or time spent.

---

## 2. Who is opening this screen

A 16–18 year old in India, on an Android or iPhone, most often **between 4pm
and 11pm** after school or coaching. They are tired, they have a syllabus that
is far too large, and they are anxious about a specific exam on a specific date.

They are not browsing. They open the app with one of four intentions:

1. **"Teach me this."** They have a chapter in mind → they want a class.
2. **"I'm stuck on this question."** A book is open in front of them → snap it.
3. **"Give me questions."** They have 20 minutes → practice.
4. **"How am I actually doing?"** Anxiety check → progress.

Everything else on the screen is secondary to getting those four started.

A session is 2–5 minutes of app before the real work starts, or one long class.
Most opens end in one tap.

---

## 3. What the home screen is for

**One job: get the student into the right thing in one tap, and tell them one
true thing about where they stand.**

It is a launchpad and a status board. It is not a feed, not a dashboard, and
not a place to spend time. Nothing on it should be designed to be scrolled for
its own sake.

Success = the student taps something within a few seconds of opening.
Failure = the student scrolls, reads, and leaves.

---

## 4. What is wrong with the current one

Useful as constraints on the new one, not as a description to iterate on:

- **It reads as dim and low-energy.** The whole page is quiet — quiet type,
  quiet greys, low contrast. Opening it does not feel like the start of
  anything. For a student who is already tired, the screen has to supply energy
  rather than ask for it.
- **It is disconnected from the navigation bar.** The nav is a floating,
  high-contrast, modern element; the page behind it is flat and papery. They
  look like two different products.
- **Everything has the same weight.** Nine things are on the page and they all
  present at roughly the same volume, so the class — the actual product — does
  not dominate the way it should.
- **It is too long.** The primary action and the last element are far apart.

---

## 5. Content inventory

Everything below currently exists and works. **Grouping, order, prominence and
form are all open.** What is not open: inventing content that isn't here, and
showing a number the backend can't supply.

Marked **[P1] / [P2] / [P3]** by importance, not by position.

### A. Start a class — **[P1]**
The primary action of the entire app.
- Names the teacher: **Drona** (or Vedha, per the student's choice in Profile).
- Explains it in a line: *the teacher teaches a chapter out loud, writing on a
  board, and you can interrupt.*
- One action → opens the **chapter selector** (a list of chapters; the student
  picks one, then a topic, then the class begins).
- Should be unmistakably the most important thing on the screen. Currently the
  only filled button on the page and the only one carrying the brand amber.

### B. Snap and Solve — **[P1]**
- Photograph a question you're stuck on; it comes back solved step by step.
- Supporting line today: *"Up to 3 questions, solved step by step"*.
- One action → opens the camera.

### C. Practice questions — **[P1]**
- Exam-style questions, one at a time, across all subjects.
- Supporting line today: *"150 a day, across all subjects"*.
- One action → opens the practice screen.

> B and C are peers. A is above both.

### D. The three numbers — **[P2]**
Real values from the backend, or absent. Never sample data.
- **Monk Score** — an integer, typically **0–1000**. New account: 0 or 1.
- **Doubts solved** — a count. Typical live value: **19**.
- **Practised** — questions attempted. Typical live value: **13**.

A brand-new student sees zeros or nothing at all. That state must look
deliberate, not broken. Do not design a state that requires impressive numbers.

### E. One observation from the teacher — **[P2]**
A single true sentence about this student's syllabus, in the teacher's voice —
the one thing no competitor can say, because it needs concept-level mastery
data. Real examples, verbatim:

- *"Motion in a Straight Line needs revising."*  ·  trailing tag: *"+10 more"*
- *"Take one class and I'll tell you exactly where you stand."*
- *"47 questions in, nothing Strong yet."*
- *"Chemistry hasn't started yet."*

Rules that are non-negotiable:
- **One line.** Never a paragraph.
- **Never encouragement** ("you're doing great!"), never prediction ("on track
  for 99 percentile"), never advice we can't support.
- **It is frequently absent.** When nothing true and useful can be said, the
  app says nothing and this element does not render. Design must survive its
  absence without leaving a hole.
- It may carry a short trailing tag (*"+10 more"*) and one action.

### F. Today's plan — **[P3]**
A short checklist the student writes themselves. Stored on the device.
- 0–6 items, each a short line of the student's own text, each tickable.
- Has a completed count (e.g. 2 of 5).
- An action to add or edit items.
- **Usually empty.** The empty state is the common state, and it has to invite
  a first entry rather than look like a failed load.

### G. Doubt of the day — **[P3]**
One hand-written conceptual question, rotating daily. Editorial, not personal.
Real examples, verbatim:

- Physics · Modern — *"Why do photoelectrons stop the moment intensity drops —
  but not when frequency drops below threshold?"*
- Chemistry · Organic — *"Why does phenol nitrate so much faster than benzene,
  when both offer the same aromatic ring?"*
- Maths · Calculus — *"Why does L'Hôpital's rule fail on (x + sin x)/x as
  x → ∞, even though it looks like ∞/∞?"*

Each carries a subject·branch tag, and one action that **starts a class on
exactly this question** — the teacher opens with it instead of asking what you
want to learn. Questions run long (up to ~110 characters) and must not be
truncated: the question is the whole point of the element.

### H. Recent notes — **[P3]**
Notes are saved automatically out of classes and solved doubts. Each shows:
- a subject (physics red · chemistry green · maths amber · biology green),
- a concept or chapter name (e.g. *"EMF vs terminal voltage"*),
- how long ago (*today · yesterday · 4 days ago · last week · 3 weeks ago*).

Show a few; an action leads to the full list. Absent on a new account.

### I. Exam scope — **[P3]**
One quiet entry point to a reference page answering *"what is actually in my
exam?"* — which chapters were removed from the syllabus and which topics are
weighted lighter. Deliberately the least prominent thing on the screen. Label
today: *"What's actually in your exam"*.

### J. Header — **[P2]**
Two persistent controls:
- **Profile** — the student's first initial in a circle. A fresh install has no
  name, so it must have a neutral state.
- **Progress** — opens the full mastery breakdown. This is the anxiety-check
  destination and it needs to be reachable without scrolling.

---

## 6. Hard constraints

**Platform.** A native mobile app (iOS + Android), portrait only. Design at
**402 × 874pt**. It must survive from a 360pt-wide budget Android up to a
430pt iPhone Pro Max. Touch targets ≥ 44pt.

**Bottom navigation.** Five destinations, always present, floating above the
content: **Home · Textbooks · Class · Doubts · Notes** — with Class in the
centre as a wider labelled pill (it starts a class). The home screen's content
must clear it and must not fight it visually. See §8.

**Brand palette** — use these, don't invent:
| | |
|---|---|
| Ink (text, borders) | `#1C1A16` |
| Paper (background) | `#FFFDF8` — warm off-white, never pure white |
| Marigold (the one accent) | `#EEA31F` |
| Slate (secondary text) | `#57534B` |
| Faint (tertiary) | `#9C988C` |
| Success / strong | `#1C9B57` |
| Red (accents, physics) | `#DD4433` |
| Warm tint (selected, pressed) | `#FCF4E0` |

**No black, no brown, no grey as a design colour.** Greys exist only as text
tiers. The palette is warm ink on warm paper with a single amber accent.

**Typeface.** Onest, weights 400–800. One handwriting face (Kalam) exists for a
red-pen accent only.

**Honesty rules — these are product rules, not style preferences:**
- Every number shown is real or absent. Never a placeholder figure.
- No streaks, no confetti for activity, no "you're on a roll". The Monk Score
  refuses to reward activity, so the home screen cannot either.
- Empty states are first-class. A brand-new account sees no score history, no
  notes, no plan and no observation — and the screen must still look complete
  and still push them toward a first class.

---

## 7. The feeling we're after

The current screen is calm to the point of being inert. The target is closer to
**a teacher's desk at the start of an evening**: warm, alert, ready, with one
obvious thing to do next.

- **Warm, not clinical.** Paper and ink, not a SaaS dashboard.
- **Confident, not loud.** No gradients competing for attention, no glow, no
  glass. One accent colour, used where it means something.
- **Personal.** A named teacher is waiting. The screen should feel addressed to
  this student, not rendered for a user.
- **Indian, without ornament.** The audience is Indian students; the design
  should not read as a Silicon Valley template, but nor should it reach for
  decorative motifs.

Reference feelings, not reference designs: a good physical notebook; the first
page of a well-set textbook; a tutor's handwritten plan for the evening.

---

## 8. The one decision to make before using this brief

The navigation bar is currently a **floating, high-contrast, modern** element:
white circular buttons with soft shadows and a dark centre pill. The page
behind it is flat, warm and papery. **They do not look like the same product.**

Pick one before generating, and say which in the prompt:

- **(a) The nav is fixed.** Design a home screen that meets the nav's energy —
  more contrast, more depth, more presence. *Recommended: the nav is new and
  liked; the page is the part that's failing.*
- **(b) Both are in scope.** Design the page and propose a nav treatment that
  belongs to it.

---

## 9. What a good answer does

- The class is unmistakably the main event; a stranger can tell in one second.
- Snap and Practice are reachable without scrolling.
- The three numbers read as fact, not as a gamification panel.
- The teacher's one-line observation feels like a person said it.
- Remove the observation, the notes, the plan and the score — and the screen
  is still coherent. (This is the first-open state and it is common.)
- It looks like it belongs to the same product as the navigation bar.
- It is short. If it needs a long scroll, the hierarchy is wrong.

## 10. What a bad answer does

- Turns it into a dashboard of metrics and charts.
- Adds streaks, badges, leaderboards, XP, or a mascot.
- Buries the class among equal-weight cards.
- Uses a dark theme, glassmorphism, neon, or a purple/blue tech palette.
- Invents content: leaderboards, friends, a feed, live class timings, teacher
  photographs, a countdown to the exam.
- Assumes a full account. Half these elements are empty on first open.
