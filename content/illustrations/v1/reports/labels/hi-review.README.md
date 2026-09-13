# Label language: English, in both languages

**Decision — Raasikh, 2026-09-12: "lets keep the labels in english strictly".**

So every diagram label reads the same in `english` and `hinglish` mode:
`term_hi == term_en` on all 377 rows, `source = en-final-raasikh`.

This is not a placeholder and not an unfinished translation pass. It is the
answer.

## Why it is the right answer, not a shortcut

The terms are anatomical Latin — *conus arteriosus*, *Malpighian tubule*,
*circum-oesophageal connective*. Three things line up behind leaving them:

- **There is no Hinglish for most of them.** A teacher pointing at the plate
  says the English word. Inventing a Hindi rendering produces a term no
  student has heard.
- **The exam prints them in English.** A label that drifts from the examinable
  string teaches the student the wrong string.
- **The layout cannot hold the long ones anyway.** `chrome.ts` caps a label at
  `MAX_TERM_LATIN = 20` characters, and formal Hindi like "hridaya maanspeshi
  tantu" for *cardiac muscle fibre* would be truncated by the renderer even
  where the register was right.

## What this replaced, so the history is legible

This file went through three states in one day, and the middle one was wrong:

1. **`hi != en` was REQUIRED.** `apply_review.py` refused any set whose `hi`
   copied its `en`, reasoning that an untranslated set is indistinguishable
   from a translated one and would ship half-done. Sound reasoning, wrong
   premise for this product.
2. **A per-term `en_is_final` allowance was built**, so a reviewer could sign
   off individual terms as deliberately English. It worked, and it was the
   wrong shape: an exception mechanism implies a rule, and the rule was the
   part that was wrong.
3. **The policy replaced both.** `en_is_final` was REMOVED rather than left
   in — a second way to express the same thing is a thing the next reader has
   to work out the precedence of.

`apply_review.py` now refuses a label whose `hi` DIFFERS from its `en`: the
inverse check. What it guards against is a half-applied translation pass
showing two registers on one plate.

## What was dropped

29 Hinglish terms I had hand-drafted (DeepSeek was unreachable) are discarded
by this decision — `heart -> hriday`, `skin -> twacha`, `liver -> yakrit` and
26 others. They are in git history at `c8eed91` if the policy is ever revisited.

`scripts/draft_hindi_labels.py` is kept. If labels are ever wanted in Hinglish
— for a Hindi-medium product, say — it regenerates this file, and its `source`
values carry no `claude-` prefix so hand-written and model-drafted rows stay
distinguishable.

## Scope

bio11 ch7 only, because that is the chapter drafted so far. The policy is
product-wide; the file is not. Later chapters get the same treatment when
their sets are drafted.
