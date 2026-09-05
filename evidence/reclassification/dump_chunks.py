"""Dump, per in-scope concept, the top-8 pdf_chunks by cosine similarity.

Mirrors app/drona/retrieval.py exactly: text-embedding-3-small, in-memory
cosine over the concept's own chapter (the match_pdf_chunks RPC is absent in
this project, so retrieval.py's fallback IS the production path).

Read-only. Nothing is written to the database.
"""
import os, sys, json, math, csv, collections
from supabase import create_client
from openai import OpenAI

SCRATCH = sys.argv[1]
CSV = "/Users/raasikhnaveed/Desktop/monk-learning-mobile/monklearning-mobile/content/concept-archetypes.csv"
IN_SCOPE = {"process_cycle","reaction_mechanism","molecule_struct","circuit",
            "labelled_figure","apparatus"}
TOP_K = 8

sb = create_client(os.environ["SUPABASE_URL"], os.environ["SUPABASE_SECRET_KEY"])
oa = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

rows = [r for r in csv.DictReader(open(CSV)) if r["archetype"] in IN_SCOPE]
print(f"in-scope concepts from CSV: {len(rows)}", flush=True)

chapters = {c["id"]: c for c in sb.table("chapters").select("id,subject,class_level,chapter_order,name").execute().data}
concepts = []
start = 0
while True:
    r = sb.table("concepts").select("id,name,chapter_id,active").range(start, start+999).execute()
    if not r.data: break
    concepts += r.data; start += 1000
by_name = collections.defaultdict(list)
for c in concepts:
    by_name[c["name"].strip().lower()].append(c)

def cos(a, b):
    d = sum(x*y for x, y in zip(a, b))
    na = math.sqrt(sum(x*x for x in a)); nb = math.sqrt(sum(y*y for y in b))
    return d/(na*nb) if na and nb else 0.0

chunk_cache = {}
def chunks_for(chapter_id):
    if chapter_id not in chunk_cache:
        got, s = [], 0
        while True:
            r = sb.table("pdf_chunks").select("id,content,embedding,page_start,page_end,chunk_index").eq("chapter_id", chapter_id).range(s, s+499).execute()
            if not r.data: break
            got += r.data; s += 500
        for c in got:
            if isinstance(c.get("embedding"), str):
                c["embedding"] = json.loads(c["embedding"])
        chunk_cache[chapter_id] = got
    return chunk_cache[chapter_id]

out, unmatched = [], []
names = [r["concept"] for r in rows]
embs = {}
B = 128
for i in range(0, len(names), B):
    batch = names[i:i+B]
    res = oa.embeddings.create(model="text-embedding-3-small", input=batch)
    for n, d in zip(batch, res.data):
        embs[n] = d.embedding
    print(f"  embedded {min(i+B,len(names))}/{len(names)}", flush=True)

for idx, r in enumerate(rows):
    cands = by_name.get(r["concept"].strip().lower(), [])
    if not cands:
        unmatched.append(r["concept"]); continue
    c = cands[0]
    ch = chapters.get(c["chapter_id"])
    cks = chunks_for(c["chapter_id"])
    if not cks:
        unmatched.append(r["concept"] + "  [chapter has no chunks]"); continue
    qe = embs[r["concept"]]
    scored = sorted(((cos(qe, k["embedding"]), k) for k in cks if k.get("embedding")),
                    key=lambda t: -t[0])[:TOP_K]
    out.append({
        "concept": r["concept"],
        "subject": r["subject"], "class_level": r["class_level"],
        "chapter": ch["name"] if ch else None,
        "chapter_order": r["chapter_order"],
        "current_archetype": r["archetype"],
        "current_build_class": r["build_class"],
        "exams": r["exams"],
        "top_similarity": round(scored[0][0], 4) if scored else 0,
        "chunks": [{"sim": round(s, 4), "pages": f'{k.get("page_start")}-{k.get("page_end")}',
                    "text": (k.get("content") or "")[:1400]} for s, k in scored],
    })
    if (idx+1) % 50 == 0: print(f"  retrieved {idx+1}/{len(rows)}", flush=True)

json.dump(out, open(f"{SCRATCH}/concept-chunks.json","w"), indent=1)
print(f"\nWROTE {len(out)} concepts -> {SCRATCH}/concept-chunks.json")
print(f"UNMATCHED ({len(unmatched)}):")
for u in unmatched[:40]: print("   ", u)
sims = sorted(o["top_similarity"] for o in out)
if sims:
    print(f"top-similarity  min {sims[0]}  median {sims[len(sims)//2]}  max {sims[-1]}")
