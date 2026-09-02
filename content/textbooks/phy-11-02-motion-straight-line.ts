/**
 * SCAFFOLD, not the finished chapter.
 *
 * This file exists to exercise every new figure primitive on a real device at
 * the real 316pt card width before 28 chapters are authored against them. The
 * arrowhead length, the glyph radii and the hatch spacing are all guesses
 * until they have been seen on a phone, and the scene kit's own head length is
 * tuned for a 1080-wide board, which is about three times too big here.
 *
 * It is replaced wholesale by the real Motion in a Straight Line.
 */
import type { Chapter } from '@/lib/textbooks';

export const phy11MotionStraightLine: Chapter = {
  "chapter": "02",
  "title": "Motion in a Straight Line",
  "subject": "Physics",
  "klass": "Class 11",
  "topics": [
    {
      "n": "01",
      "title": "Arrows, Angles and Tones",
      "blocks": [
        { "t": "hook", "html": "<b>Scaffold.</b> Every block below is a renderer test." },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "Arrows",
          "chips": ["heads", "tones", "labels"],
          "captions": [
            "One arrow per head mode: end, start, both, none.",
            "The five tone roles, on identical arrows.",
            "Labels above, below, and at the tip."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 6], "axes": "none",
              "arrows": [
                { "from": [1, 5], "to": [5, 5], "head": "end", "label": "end" },
                { "from": [1, 3.6], "to": [5, 3.6], "head": "start", "label": "start" },
                { "from": [1, 2.2], "to": [5, 2.2], "head": "both", "label": "both" },
                { "from": [1, 0.8], "to": [5, 0.8], "head": "none", "label": "none" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 6], "axes": "none",
              "arrows": [
                { "from": [1, 5], "to": [6, 5], "tone": "ink", "label": "ink" },
                { "from": [1, 4], "to": [6, 4], "tone": "amber", "label": "amber" },
                { "from": [1, 3], "to": [6, 3], "tone": "soft", "label": "soft" },
                { "from": [1, 2], "to": [6, 2], "tone": "green", "label": "green" },
                { "from": [1, 1], "to": [6, 1], "tone": "red", "label": "red" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 6], "axes": "none",
              "arrows": [
                { "from": [1, 4.5], "to": [8, 4.5], "at": "above", "label": "above" },
                { "from": [1, 3], "to": [8, 3], "at": "below", "label": "below" },
                { "from": [1, 1.5], "to": [8, 1.5], "at": "end", "label": "at the tip", "math": true }
              ]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "Angle marks",
          "chips": ["arcs", "right angle"],
          "captions": [
            "Arcs at three radii, with labels placed on the bisector.",
            "A square corner, which is what a right angle should look like."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 6], "axes": "none",
              "arrows": [
                { "from": [1, 1], "to": [9, 1], "tone": "ink", "head": "none" },
                { "from": [1, 1], "to": [7, 5], "tone": "ink", "head": "none" }
              ],
              "arcs": [
                { "at": [1, 1], "r": 1.4, "from": 0, "to": 34, "label": "θ" },
                { "at": [1, 1], "r": 2.4, "from": 0, "to": 34, "dash": true }
              ]
            },
            {
              "x": [0, 10], "y": [0, 6], "axes": "none",
              "arrows": [
                { "from": [2, 1], "to": [8, 1], "tone": "ink", "head": "none" },
                { "from": [2, 1], "to": [2, 5], "tone": "ink", "head": "none" }
              ],
              "arcs": [{ "at": [2, 1], "r": 0.9, "from": 0, "to": 90, "right": true }]
            }
          ]
        },
        { "t": "snapshot", "rows": [{ "f": "arrows", "note": "head, tone, label placement" }], "aids": ["scaffold"] }
      ]
    },
    {
      "n": "02",
      "title": "Bodies and Regions",
      "blocks": [
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "Mechanics furniture",
          "chips": ["incline", "pulley", "spring"],
          "captions": [
            "A block on a hatched incline, with the weight resolved.",
            "A pulley with a rope over it.",
            "A spring between a wall and a block."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 6], "axes": "none",
              "bodies": [
                { "kind": "incline", "at": [1, 0.6], "w": 7, "h": 4 },
                { "kind": "block", "at": [4.4, 2.4], "w": 1.1, "h": 0.7, "rot": 30, "label": "m" }
              ],
              "arrows": [
                { "from": [4.4, 2.4], "to": [4.4, 1.0], "tone": "red", "label": "mg", "at": "end" },
                { "from": [4.4, 2.4], "to": [3.6, 3.4], "tone": "green", "label": "N", "at": "end" }
              ],
              "arcs": [{ "at": [1, 0.6], "r": 1.5, "from": 0, "to": 30, "label": "θ" }]
            },
            {
              "x": [0, 10], "y": [0, 6], "axes": "none",
              "bodies": [
                { "kind": "pulley", "at": [5, 4.4], "w": 1.6 },
                { "kind": "rope", "at": [4.2, 4.4], "to": [4.2, 1.6] },
                { "kind": "rope", "at": [5.8, 4.4], "to": [5.8, 2.4] },
                { "kind": "block", "at": [4.2, 1.2], "w": 1.1, "h": 0.7, "label": "2" },
                { "kind": "block", "at": [5.8, 2.0], "w": 1.1, "h": 0.7, "label": "3" }
              ]
            },
            {
              "x": [0, 10], "y": [0, 6], "axes": "none",
              "bodies": [
                { "kind": "wall", "at": [1.2, 3], "w": 0.4, "h": 3 },
                { "kind": "spring", "at": [1.4, 3], "to": [5, 3] },
                { "kind": "block", "at": [5.7, 3], "w": 1.3, "h": 1, "label": "m" },
                { "kind": "ground", "at": [5, 2.2], "w": 8, "h": 0.2 }
              ],
              "arrows": [{ "from": [5.7, 3], "to": [7.6, 3], "tone": "amber", "label": "x" }]
            }
          ]
        },
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "Regions",
          "chips": ["wash", "hatch", "smooth"],
          "captions": [
            "A filled polygon.",
            "Hatching, which is how a fixed support reads without a grey wash.",
            "A smoothed polyline through six points."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 6], "axes": "none",
              "polys": [{ "pts": [[2, 1], [8, 1], [6, 5], [3, 4]], "close": true, "fill": "wash" }]
            },
            {
              "x": [0, 10], "y": [0, 6], "axes": "none",
              "polys": [{ "pts": [[2, 2], [8, 2], [8, 4], [2, 4]], "close": true, "fill": "hatch" }]
            },
            {
              "x": [0, 10], "y": [0, 6], "axes": "none",
              "polys": [
                {
                  "pts": [[1, 1], [3, 4.4], [5, 2], [6.5, 4.8], [8, 1.6], [9, 3]],
                  "smooth": true, "tone": "ink"
                }
              ]
            }
          ]
        },
        { "t": "snapshot", "rows": [{ "f": "bodies", "note": "block, incline, pulley, spring, rope" }], "aids": ["scaffold"] }
      ]
    },
    {
      "n": "03",
      "title": "Glyphs",
      "blocks": [
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "Marks",
          "chips": ["all nine"],
          "captions": ["Every glyph, at one size. Meaning is carried by shape, not colour."],
          "frames": [
            {
              "x": [0, 10], "y": [0, 6], "axes": "none",
              "marks": [
                { "x": 1, "y": 4, "glyph": "plus", "label": "plus" },
                { "x": 3, "y": 4, "glyph": "minus", "label": "minus" },
                { "x": 5, "y": 4, "glyph": "into", "label": "into" },
                { "x": 7, "y": 4, "glyph": "outof", "label": "outof" },
                { "x": 1, "y": 1.6, "glyph": "dot", "label": "dot" },
                { "x": 3, "y": 1.6, "glyph": "open", "label": "open" },
                { "x": 5, "y": 1.6, "glyph": "cross", "label": "cross" },
                { "x": 7, "y": 1.6, "glyph": "square", "label": "square" },
                { "x": 9, "y": 1.6, "glyph": "tick", "label": "tick" }
              ]
            }
          ]
        },
        { "t": "snapshot", "rows": [{ "f": "marks", "note": "nine glyphs" }], "aids": ["scaffold"] }
      ]
    },
    {
      "n": "04",
      "title": "Plots",
      "blocks": [
        {
          "t": "diagram",
          "kind": "plot",
          "kicker": "Real plotting",
          "chips": ["v-t with ticks", "stress-strain", "cooling"],
          "captions": [
            "A piecewise v-t graph with numeric ticks and axis titles.",
            "A stress-strain curve, which is no named function.",
            "Newton cooling: 25 + 75e^(-0.5t), which needed the offset."
          ],
          "frames": [
            {
              "x": [0, 10], "y": [0, 25],
              "axisX": "t (s)", "axisY": "v (m/s)",
              "ticksX": { "every": 2 },
              "ticksY": { "at": [0, 10, 20] },
              "curves": [{ "c": "pts", "pts": [[0, 0], [3, 18], [6, 18], [9, 4]] }]
            },
            {
              "x": [0, 10], "y": [0, 10],
              "axisX": "strain", "axisY": "stress",
              "ticksX": { "every": 2 },
              "curves": [
                {
                  "c": "pts", "smooth": true,
                  "pts": [[0, 0], [2, 4], [3.5, 6], [5, 8.4], [7, 9.2], [8.5, 8.6]]
                }
              ]
            },
            {
              "x": [0, 10], "y": [0, 110],
              "axisX": "t (min)", "axisY": "θ (°C)",
              "ticksX": { "every": 2 },
              "ticksY": { "at": [25, 100], "labels": ["25", "100"] },
              "curves": [{ "c": "exp", "a": 75, "k": -0.5, "d": 25 }]
            }
          ]
        },
        { "t": "snapshot", "rows": [{ "f": "plots", "note": "pts, ticks, axis titles, exp offset" }], "aids": ["scaffold"] }
      ]
    }
  ]
};

export default phy11MotionStraightLine;
