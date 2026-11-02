import { boardRows, equationChain, isGivenValue, solutionRows, splitFoot } from '@/lib/solution-rows';
import { parseSolutionStep } from '@/lib/solution-steps';

// Real solver text from a live doubt and two live follow-ups, 2 Nov 2026.
const ELASTIC = [
  'From the straight-line stress–strain graph through the origin, the slope is Young’s modulus: $E=\\Delta\\sigma/\\Delta\\varepsilon$. Reading a point: at $\\sigma=20\\,\\text{N m}^{-2}$, $\\varepsilon=1\\times10^{-4}$, so $E=20/(1\\times10^{-4})=2\\times10^{5}\\,\\text{Pa}$.',
  'For a strain $\\varepsilon=5\\times10^{-4}$, the stress is $\\sigma=E\\varepsilon=2\\times10^{5}\\times5\\times10^{-4}=100\\,\\text{N m}^{-2}$.',
];
const raws = (rows: { raw: string }[]) => rows.map((r) => r.raw);

describe('isGivenValue', () => {
  it('knows a value from the question', () => {
    expect(isGivenValue('$\\varepsilon=1\\times10^{-4}$')).toBe(true);
    expect(isGivenValue('at $\\sigma=20\\,\\text{N m}^{-2}$')).toBe(true);
    expect(isGivenValue('$(\\varepsilon,\\sigma)=(1\\times10^{-4},20\\,\\text{N m}^{-2})$')).toBe(true);
  });

  it('knows working', () => {
    expect(isGivenValue('$E=20/(1\\times10^{-4})=2\\times10^{5}$')).toBe(false);
    expect(isGivenValue('$E=\\Delta\\sigma/\\Delta\\varepsilon$')).toBe(false);
    expect(isGivenValue('$\\text{carbolic acid} = C_6H_5OH$')).toBe(false);
  });
});

describe('solutionRows', () => {
  it('keeps given values in the sentence and the working on its own line', () => {
    const rows = solutionRows(parseSolutionStep(ELASTIC[1]));
    expect(rows.map((r) => r.kind)).toEqual(['text', 'display']);
    expect(rows[0].raw).toBe('For a strain $\\varepsilon=5\\times10^{-4}$, the stress is');
    expect(rows[1].raw).toMatch(/^\$\\sigma=E/);
  });

  it('drops a bare "so" in front of an equation', () => {
    const rows = solutionRows(parseSolutionStep(ELASTIC[0]));
    const reading = rows.find((r) => r.raw.startsWith('Reading a point'));
    expect(reading?.raw).toBe('Reading a point: at $\\sigma=20\\,\\text{N m}^{-2}$, $\\varepsilon=1\\times10^{-4}$');
    expect(raws(rows).some((raw) => raw.startsWith('so'))).toBe(false);
  });

  it('never takes the last equation off its line, however plain', () => {
    const rows = solutionRows(parseSolutionStep('The speed is\n$v=24$'));
    expect(rows[rows.length - 1]).toEqual({ kind: 'display', raw: '$v=24$' });
  });

  it('sets the first sentence in full ink only when the step has no title', () => {
    expect(solutionRows(parseSolutionStep(ELASTIC[1]))[0].lead).toBe(true);
    const headed = solutionRows(parseSolutionStep('Find the ratio.\nSubstitute and solve.\n$p=2$'));
    expect(headed[0].kind).toBe('title');
    expect(headed[1].lead).toBeUndefined();
  });
});

describe('splitFoot', () => {
  it('moves only the equations that end the step', () => {
    const { body, foot } = splitFoot([
      { kind: 'text', raw: 'is' },
      { kind: 'display', raw: '$a$' },
      { kind: 'text', raw: 'Thus' },
      { kind: 'display', raw: '$b$' },
    ]);
    expect(raws(body)).toEqual(['is', '$a$', 'Thus']);
    expect(raws(foot)).toEqual(['$b$']);
  });

  it('leaves a step with no closing equation alone', () => {
    const { foot } = splitFoot([{ kind: 'text', raw: 'Only words.' }]);
    expect(foot).toEqual([]);
  });
});

describe('a multi-line $$ equation', () => {
  it('reads as one equation with no stray $$', () => {
    const step = parseSolutionStep('The question gives\n$$\n\\mu = \\cot\\frac{A}{2}\n$$');
    expect(step.title).toBe('The question gives');
    expect(step.lines).toHaveLength(1);
    expect(step.lines[0].kind).toBe('math');
    expect(step.lines[0].raw).toBe('$\\mu = \\cot\\frac{A}{2}$');
  });

  it('survives a full stop after it', () => {
    const step = parseSolutionStep('So\n$$\nx = 1\n$$.');
    expect(step.lines.map((l) => l.raw)).toEqual(['$x = 1$']);
  });

  it('reaches the board clean too', () => {
    expect(boardRows('Cancelling \\(\\sin A\\),\n$$\n\\sin B = \\cos A\n$$').some((r) => r.raw.includes('$$'))).toBe(false);
  });
});

describe('equationChain', () => {
  it('stacks a long equation at its equals signs, with the unit on the last line', () => {
    const chain = equationChain('$\\sigma=E\\varepsilon=(2\\times10^{5})(5\\times10^{-4})=100\\,\\text{N m}^{-2}$');
    expect(chain?.lhs).toBe('$\\sigma$');
    expect(chain?.parts).toEqual([
      '$= E\\varepsilon$',
      '$= (2\\times10^{5})(5\\times10^{-4})$',
      '$= 100\\,\\text{N m}^{-2}$',
    ]);
  });

  it('keeps a short or two-sided equation whole', () => {
    expect(equationChain('$a=b=c$')).toBeUndefined();
    expect(equationChain('$E=\\frac{\\Delta\\sigma\\Delta\\sigma\\Delta\\sigma}{\\Delta\\varepsilon\\Delta\\varepsilon}$')).toBeUndefined();
  });

  it('is not fooled by an equals sign inside brackets', () => {
    const chain = equationChain('$f(x=1)=2\\times10^{5}\\times3\\times10^{4}\\times2=1.2\\times10^{10}$');
    expect(chain?.lhs).toBe('$f(x=1)$');
  });
});

describe('boardRows', () => {
  it('lays out a real follow-up step', () => {
    const rows = boardRows('Using the graph point $(\\varepsilon,\\sigma)=(1\\times10^{-4},20\\,\\text{N m}^{-2})$:\n$E=\\dfrac{20}{1\\times10^{-4}}=2\\times10^{5}\\,\\text{Pa}$.');
    expect(rows.map((r) => r.kind)).toEqual(['text', 'math']);
    expect(rows[0].lead).toBe(true);
    expect(rows[1].result).toBe(true);
    expect(rows[1].raw.endsWith('.')).toBe(false);
  });

  it('keeps an equation that opens on "=" with the words before it', () => {
    const rows = boardRows('Linear graph: average stress $=\\frac{0+\\sigma}{2}=\\frac{\\sigma}{2}$');
    expect(rows).toHaveLength(1);
    expect(rows[0].kind).toBe('text');
  });

  it('keeps a sentence and its follower on one row, with no guessed heading', () => {
    const rows = boardRows('Energy density is the area under the graph. The area is triangular:\n$u=\\frac12\\sigma\\varepsilon$.');
    expect(rows[0].raw).toBe('Energy density is the area under the graph. The area is triangular:');
    expect(rows[1].kind).toBe('math');
  });

  it('marks only the last equation as the result', () => {
    const rows = boardRows('First $x=\\frac{1}{2}+\\frac{1}{3}$ then\n$y=\\frac{1}{4}+\\frac{1}{5}$');
    expect(rows.filter((r) => r.result).map((r) => r.raw)).toEqual(['$y=\\frac{1}{4}+\\frac{1}{5}$']);
  });
});
