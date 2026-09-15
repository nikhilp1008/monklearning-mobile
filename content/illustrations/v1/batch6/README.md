# drona-batch6

Five Gemini plates, checked by Raasikh and the reviewer against the anatomy reject rules in DIRECTIVE.md. All 896x500, white corners, clear of edges after normalize (dry-run confirmed: every bbox >= 28 px from every edge on a 896x560 canvas).

| file | sha256 (12) | check |
|---|---|---|
| raw/bio11-ch7-earthworm--morphology-and-digestive-system--a.png | 463e25474e97 | REPLACES existing master. Clitellum in the anterior third, prostomium lobe at the left tip; both ends distinct. Pass. |
| raw/bio11-ch7-cockroach--nervous-system-and-reproduction--b.png | 126ebfc53525 | Male. Two testes, vasa deferentia join, mushroom gland, phallic glands (two small projections beside the lower duct), hooked genitalia. Pass. |
| raw/bio11-ch7-cockroach--nervous-system-and-reproduction--c.png | e8811744ad57 | Female. Two ovaries of ~8 tubules, oviducts join, paired spermathecae (yellow), collateral glands (green), genital chamber. Pass. |
| raw/bio11-ch7-frog--external-morphology-and-digestive-system--b.png | 210ceb875077 | Digestive. Buccal cavity, oesophagus, stomach, coiled small intestine, rectum, cloaca, gall bladder, bile duct, pancreas, spleen all present and placed correctly. Liver reads as two lobes rather than three — accepted because lobe count is not a labelled term on this plate; label `liver` only, never add lobe terms. |
| raw/bio11-ch4-phylum-platyhelminthes--c.png | 2681ebb988ea | Taenia. Scolex with suckers and hooks, neck, segmented ribbon body widening posteriorly, whole animal inside the frame. Pass. |

Rejected alternates (not included): a labelled frog digestive plate (baked text), a Taenia plate cut off at the frame edge, second cockroach male/female renders (equivalent; the cleaner one of each pair is included).
