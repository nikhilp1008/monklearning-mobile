# Biology 11 and 12: decisions

Calls marked **coordinator** were made by Raasikh's session by precedent while building and wait for the founder (Nikhil) to confirm or change them. Nothing here has been shown to him yet.

## Standing rules carried over (founder)
1. **House style for every new subject** (Mathematics 11, 2026-11-10; the README extends it to Biology): every fraction stacked (`<frac><num>…</num><den>…</den></frac>`), no em dashes in the text. The checks (`book-rules.test.ts`) now apply both to Biology.
2. Word for word from the book; the book's mistakes are fixed in our copy only, after the expert review and the founder's call; the founder has so far always said "everything, optional included".
3. Exam citations carry no years, and a share the book gives is labelled "the book's estimate from past papers, not official figures" (the Maths rule).

## Biology 11 Chapter 1, The Living World (coordinator, 2026-11-16)
4. **Sub-topic numbers stay as the book prints them**: Sub-topic 00 is Topic 00 ("Start here"), then Topics 01 and 02. Precedent: Chemistry 11 Chapter 8 (n `'00'`), Mathematics 11 Chapter 9. This keeps every "Sub-topic 01" cross-reference a plain renumbering to "Topic 01".
   (The other way, Physics 12 Chapter 7, shifted every number by one and rewrote each reference.)
5. **"Addendum P, What NEET Actually Asks"** is kept as the LAST Additional topic, lettered after the real addenda (here E), as Chemistry did (Chemistry 11 decision 1). Mathematics 12 keeps the letter P instead; Biology follows Chemistry, the closer subject.
6. **Scientific names in italics** (`<i>Homo sapiens</i>`), as the book and every botany and zoology text print them. This is the only use of `<i>` that is not maths. The reader sets `<i>` in STIX Two Text italic; a "g" in an italic run is drawn as the single-storey g (shared reader behaviour, not a Biology change).
   If the founder prefers roman names, it is one search and replace.
7. MCQ and worked-example options are numbered (1) to (4) in this book; the app keeps the book's numerals.
8. Chapter shelf keys follow the catalogue names in `constants/onboarding-chapters.ts` (the same names the server's `/drona/catalogue` sends), lower case: `biology|11|the living world`. A name the server spells differently will not open its chapter; check each against the live catalogue before pushing.

## Biology 11 Chapters 2 to 5, layout calls (coordinator, 2026-11-16; to confirm with the founder)
9. **Chapter 1's review (Nov 16): every flag applied, optional included** (this session's owner said "Apply all"). The wording we wrote is listed in reports-01/new-text-b11-01-F1.md and -F2.md for Nikhil.
10. **Chapter 2 (Biological Classification).** The book prints its sub-topics in the order 00, 01, 02, 03, 05, 04 and the errata says the two last numbers are swapped. We keep page order and use the errata's numbers: Topic 04 = Kingdoms Plantae & Animalia, Topic 05 = Viruses, Viroids, Prions & Lichens. Every printed cross-reference to "Sub-topic 04" or "05" is renumbered by what it refers to, and each is listed. Sub-topic 00 stays Topic 00 ("Start here").
11. **Chapters 3, 4 and 7 print unnumbered sections** ("Classification Systems", "Algae", …). Each is an ordinary Topic 01, 02, … in page order with the book's own title. Chapter 7's contents shows one entry, but the pages hold Animal Tissues, Organ and Organ System, Earthworm, Cockroach and Frog, each with its own eight sections: five topics (confirm on the pages).
12. **Chapter 4's "Master Revision: Complete Reference"** is kept as an ordinary last topic (as Amines' Master Revision, Chemistry 12 decision 35). **Chapter 3's "Practice Exercise: Full Addendum Review"** and **Chapter 5's "Practice Exercise: All Addenda Combined"** and the Summary Checklist of Chapter 7 are each their own Additional topic, as Chemistry's Summary Checklist.
13. **"Addendum P, What NEET Actually Asks"** is the last Additional topic in every chapter, lettered after the real addenda (decision 5).
14. **Shelf wiring** (`CHAPTERS` in lib/textbooks.ts and `OPENS_ON_CHOICE`) is added only when a chapter is finished and checked, so an unfinished chapter never reaches the shelf. The test lists, diagram and key-point registries are wired from the start.
