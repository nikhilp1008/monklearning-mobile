"""Tag the three semiconductor experiments of Physics 12 "Experimental Skills" JEE only.

NEET (UG) 2026 Unit 20 lists 15 experiments; p-n junction characteristics, Zener characteristics
and identifying a diode, LED, resistor and capacitor are in JEE Main's list and not NEET's, but the
database tags them ["jee", "neet"]. Everything else in Experimental Skills and all of Practical
Chemistry is on the NEET list and stays ["jee", "neet"].

    python3 apply-jee-only-tags.py              # shows what would change; writes nothing
    python3 apply-jee-only-tags.py --execute    # PATCH concepts.exams for these three rows

Needs SUPABASE_URL and SUPABASE_SECRET_KEY in the environment (source the API's .env).
The /drona/catalogue response is cached on the API for a while; a student sees the change after it refreshes.
"""
import json, os, sys, urllib.request

IDS = [
 [
  "c4d537a3-d9c9-4c25-a9f2-636b1590ad8b",
  "Characteristic Curves of a p-n Junction Diode in Forward and"
 ],
 [
  "7ca7b77b-5d4c-4292-aa9d-138a944385b8",
  "Characteristic Curves of a Zener Diode and Reverse Breakdown"
 ],
 [
  "d555719d-70e5-45ae-9aeb-23a815206e0b",
  "Identification of a Diode, LED, Resistor and Capacitor from "
 ]
]
url, key = os.environ["SUPABASE_URL"], os.environ["SUPABASE_SECRET_KEY"]
H = {"apikey": key, "Authorization": "Bearer " + key, "Content-Type": "application/json", "Prefer": "return=representation"}


def call(method, path, body=None):
    req = urllib.request.Request(url + "/rest/v1/" + path, data=json.dumps(body).encode() if body is not None else None, headers=H, method=method)
    return json.load(urllib.request.urlopen(req))


execute = "--execute" in sys.argv
for cid, name in IDS:
    now = call("GET", f"concepts?select=id,name,exams&id=eq.{cid}")
    print(name, "now:", now[0]["exams"] if now else "MISSING")
    if execute and now and now[0]["exams"] != ["jee"]:
        print("  ->", call("PATCH", f"concepts?id=eq.{cid}", {"exams": ["jee"]})[0]["exams"])
print("done" if execute else "dry run: nothing written")
