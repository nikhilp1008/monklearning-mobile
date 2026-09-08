"""Merge the 8 slice outputs, then emit a BLIND adjudication sample.

Blind on purpose: if the adjudicator sees the agent's verdict first, the
measurement becomes agreement-with-the-agent, not accuracy. The sheet carries
the concept and its retrieved chunks and nothing else. Verdicts are held back
in a separate key file and joined only after adjudication is written down.

Sample is seeded, so the same 50 rows come back on a re-run.
"""
import json, sys, glob, random, collections, os

S = sys.argv[1]
SEED = 20260904
N = 50

merged, missing = [], []
for i in range(1, 9):
    p = f"{S}/out-{i}.json"
    if not os.path.exists(p):
        missing.append(i); continue
    merged += json.load(open(p))
if missing:
    print(f"!! slices not yet written: {missing}")

src = {o["concept"]: o for o in json.load(open(f"{S}/concept-chunks.json"))}
json.dump(merged, open(f"{S}/reclassified.json", "w"), indent=1)

print(f"merged {len(merged)} concepts from {8-len(missing)} slices")
changed = [o for o in merged if o.get("changed")]
print(f"changed: {len(changed)} ({100*len(changed)/max(len(merged),1):.0f}%)")
print("\nnew archetype distribution:")
for k, v in collections.Counter(o["new_archetype"] for o in merged).most_common():
    print(f"   {k:24} {v}")
print("\ntransitions (old -> new), top 15:")
tr = collections.Counter((o["current_archetype"], o["new_archetype"]) for o in merged if o.get("changed"))
for (a, b), v in tr.most_common(15):
    print(f"   {a:20} -> {b:22} {v}")
print("\nconfidence:", dict(collections.Counter(o.get("confidence") for o in merged)))

if len(merged) < 396:
    print("\n(sample deferred until all 8 slices are in)")
    sys.exit(0)

rng = random.Random(SEED)
sample = rng.sample(merged, N)
sheet = []
for o in sample:
    s = src.get(o["concept"], {})
    sheet.append({
        "concept": o["concept"],
        "subject": s.get("subject"), "class_level": s.get("class_level"),
        "chapter": s.get("chapter"),
        "top_similarity": s.get("top_similarity"),
        "chunks": [{"sim": c["sim"], "text": c["text"][:800]} for c in s.get("chunks", [])[:5]],
    })
json.dump(sheet, open(f"{S}/adjudication-blind.json", "w"), indent=1)
json.dump({o["concept"]: {"agent": o["new_archetype"], "was": o["current_archetype"],
                          "conf": o.get("confidence"), "evidence": o.get("evidence")}
           for o in sample},
          open(f"{S}/adjudication-key.json", "w"), indent=1)
print(f"\nBLIND SHEET  -> {S}/adjudication-blind.json   ({N} rows, seed {SEED})")
print(f"HELD-BACK KEY-> {S}/adjudication-key.json      (do not open until verdicts are written)")
