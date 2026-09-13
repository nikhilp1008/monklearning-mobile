# hi-review.csv — read this before signing it off

**I wrote these terms. A model pipeline did not.** `api.deepseek.com` was
unreachable from this machine (TCP 443 connected, TLS reset by peer at its
CloudFront edge, every variation, while OpenAI and R2 answered normally), so
on Raasikh's instruction the Hinglish was drafted by hand and the authorship
recorded in `source`:

    claude-hinglish-drafted   29 distinct terms, 76 rows
    claude-kept-english      122 distinct terms, 301 rows

`scripts/draft_hindi_labels.py` — the DeepSeek path — is built and committed
(596c8b3) and can regenerate this file whenever the API is reachable. If it is
re-run, its `source` values are `hinglish-translated` / `kept-english`, WITHOUT
the `claude-` prefix. That difference is deliberate: a reviewer can tell at a
glance which rows came from where, and a mixed file stays readable.

## `hi` is HINGLISH, not Devanagari

`lib/widgets/labelled-figure/label-set.ts:42` — "`hi` is HINGLISH — romanised
Latin, not Devanagari" — and `toFigureRecord` maps `text.hi` onto the record's
`hinglish` field. The app ships `english | hinglish` and nothing else. So
"twacha", never "त्वचा".

## Why 301 of 377 rows are kept-english

Two reasons, and both are judgements worth disagreeing with:

**The terms are anatomical Latin.** Malpighian tubule, Haversian canal, conus
arteriosus, circum-oesophageal connective. There is no Hinglish for these; a
teacher says them in English. Inventing one produces a word no student has
heard.

**The exam is in English.** These are labels on a NEET/JEE diagram, and the
term the student must recognise in the paper is the English one. A Hinglish
label that drifts from the examinable term teaches the wrong string.

So I translated only where the Hindi word is what a teacher genuinely says
while pointing — everyday organs and body parts — and left the technical
vocabulary alone.

**A length constraint also bites.** `chrome.ts` caps a label at
`MAX_TERM_LATIN = 20` characters. Long formal Hindi ("hridaya maanspeshi
tantu" for cardiac muscle fibre) would be truncated by the layout even if it
were the right register. Every term I did translate is 11 characters or fewer.

## What I am NOT confident about, and what a reviewer should actually check

- **Register.** I chose standard Hindi biology vocabulary (yakrit, aamashay,
  agnyashay) over colloquial (jigar, pet, ...). A Hindi-medium teacher may use
  the colloquial forms with students; I do not know which this product wants.
- **`head -> sir` and `abdomen -> pet`.** Both are everyday words, but in
  INSECT anatomy "head" and "abdomen" are named body segments and a teacher
  may well keep them English. These two are my least confident translations.
- **The 122 kept-english terms are the bigger review.** Each one is a decision
  that no Hinglish form is worth having. If you disagree with even a handful,
  that is the correction that matters — not the 29 I did translate.

## What happens next

Nothing is applied. Every label set still has `hi == en`, and
`scripts/apply_review.py` REFUSES any set whose `hi` equals its `en`. So a
kept-english row is not merely a note — it actively blocks publication until
someone decides what that term should be in Hinglish, or the rule is relaxed
for exam-term labels.

**That is the open question this file raises**, and it is a product decision
rather than a data one: for an English-medium exam app, is `hi == en` a
legitimate final answer for a technical term? If yes, `apply_review.py`'s
check needs an explicit allowance — carrying the reviewer's sign-off, so that
"kept English on purpose" is recorded and not indistinguishable from
"nobody has done the Hindi yet".
