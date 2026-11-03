import type { Sketch } from '@/lib/diagrams/kit';

/**
 * A REDRAWN DIAGRAM: its cases (the chips), a caption for each, a `draw` that
 * returns a Sketch, and a `check` that recomputes the numbers behind the
 * drawing. `id` is unique across the app ("p11-02-fig-2.3"): the reader's
 * `fig` block finds a diagram by it.
 */
export type Check = [string, boolean];
export type DiagramCase = { chip: string; cap: string } & Record<string, unknown>;
export type Diagram = {
  id: string;
  /** The topic it belongs to, by its index in the chapter's `topics`. */
  topic: number;
  name: string;
  cases: DiagramCase[];
  draw: (c: any) => Sketch;
  check: (c: any) => Check[];
};
