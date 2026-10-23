import { parseNotePage, placeFigures, sentenceCase } from '@/lib/note-page-model';

/**
 * The server's note vocabulary, read as a page.
 *
 * The cases here are the ones that were actually wrong on a real note rather
 * than invented: a page that began at "2.", and a class-end marker that never
 * matched because the client's copy of the string had a colon where the server
 * writes an em dash.
 */

describe('parseNotePage', () => {
  it('numbers sections from 1 even when a heading came back empty', () => {
    // The first heading has nothing under it, which a real note does produce.
    const out = parseNotePage(
      ['INTRODUCTION', '', 'WHY COMPLEXES HAVE COLOUR', '• Same metal, different colour'].join(
        '\n'
      )
    );
    expect(out).toHaveLength(1);
    expect(out[0].n).toBe(1);
    expect(out[0].title).toBe('Why complexes have colour');
  });

  it('numbers only the lesson sections, never the named ones', () => {
    const out = parseNotePage(
      ['THE IDEA', '• one', 'QUICK REVISION', '• two', 'SECOND IDEA', '• three'].join('\n')
    );
    expect(out.map((s) => [s.kind, s.n])).toEqual([
      ['normal', 1],
      ['revision', null],
      ['normal', 2],
    ]);
  });

  it('separates the self-study half on the marker the server actually writes', () => {
    const marker =
      '——— class ended here — everything below is the rest of the lesson, for self-study ———';
    const out = parseNotePage(['COVERED', '• done in class', marker, '• the rest'].join('\n'));
    expect(out.map((s) => s.kind)).toEqual(['normal', 'selfstudy']);
    // The marker itself must never survive as a line of the note.
    expect(JSON.stringify(out)).not.toContain('class ended here');
  });

  it('also matches the older colon spelling of that marker', () => {
    const marker =
      '——— class ended here: everything below is the rest of the lesson, for self-study ———';
    const out = parseNotePage(['COVERED', '• a', marker, '• b'].join('\n'));
    expect(out.map((s) => s.kind)).toEqual(['normal', 'selfstudy']);
  });

  it('treats everything after the marker as self-study, heading or not', () => {
    const marker = '——— class ended here — everything below ———';
    const out = parseNotePage(['COVERED', '• a', marker, 'LATER TOPIC', '• b'].join('\n'));
    // The marker's own placeholder section carries no lines and is dropped, so
    // the heading that follows it is the one that reads as self-study.
    expect(out.map((s) => s.kind)).toEqual(['normal', 'selfstudy']);
    expect(out[1].title).toBe('Later topic');
  });

  it('marks every section past the marker, not just the first', () => {
    const marker = '——— class ended here — everything below ———';
    const out = parseNotePage(
      ['COVERED', '• a', marker, 'ONE MORE', '• b', 'AND ANOTHER', '• c'].join('\n')
    );
    expect(out.map((s) => s.kind)).toEqual(['normal', 'selfstudy', 'selfstudy']);
  });

  it('reads the named sections by what they say, not by position', () => {
    const out = parseNotePage(
      ['FROM YOUR CLASS — WHAT TO REWORK', '• you mixed up the sign', 'QUICK REVISION', '• τ = rF'].join(
        '\n'
      )
    );
    expect(out.map((s) => s.kind)).toEqual(['rework', 'revision']);
  });

  it('sorts a line into bullet, formula, sub-heading or prose', () => {
    const out = parseNotePage(
      [
        'THE IDEA',
        '• a bullet',
        '$\\tau = r F \\sin \\theta$',
        'Split the force',
        'The component along the rod pushes into the hinge, so it does no turning at all.',
      ].join('\n')
    );
    expect(out[0].lines.map((l) => l.k)).toEqual(['bullet', 'formula', 'sub', 'body']);
  });

  it('drops a heading with nothing under it', () => {
    expect(parseNotePage(['EMPTY SECTION', '', 'ANOTHER'].join('\n'))).toEqual([]);
  });

  it('keeps loose lines that arrive before any heading', () => {
    const out = parseNotePage('a line with no heading above it at all, which is long prose');
    expect(out).toHaveLength(1);
    expect(out[0].title).toBe('Class notes');
  });
});

describe('sentenceCase', () => {
  it('reads like a hand wrote it, not like a title', () => {
    expect(sentenceCase('WHY COMPLEXES HAVE COLOUR')).toBe('Why complexes have colour');
  });

  it('keeps acronyms, which lowercasing everything destroyed', () => {
    expect(sentenceCase('LIMITATIONS OF CFT AND EXAM STRATEGY')).toBe(
      'Limitations of CFT and exam strategy'
    );
    expect(sentenceCase('CRYSTAL FIELD THEORY (CFT)')).toBe('Crystal field theory (CFT)');
    expect(sentenceCase('SI UNITS AND MO THEORY')).toBe('SI units and MO theory');
    expect(sentenceCase('KE AND PE IN SHM')).toBe('KE and PE in SHM');
  });

  it('lowercases a long acronym, which is the known cost of the narrow rule', () => {
    expect(sentenceCase('NCERT COLOUR TABLE')).toBe('Ncert colour table');
  });
});

describe('the handwritten-notes marks', () => {
  // From a real gpt-6-luna page (Wave Optics, 6 parts).
  const PAGE = [
    'SINGLE-SLIT MINIMA CONDITION',
    'Condition',
    '• m = 0 is excluded: θ = 0 is the central maximum.',
    '★ Shrinking the opening to light’s wavelength makes light spread dramatically.',
    '⚠ Never swap a, slit width, with d, slit separation.',
    '⚠️ Light does diffract; its bending is microscopic.',
    '✎ a is single-slit width; d is YDSE slit separation.',
    'Quick check',
    '→ λ = 600 nm and a = 0.2 mm',
    '→ First minimum: sin θ = 3 × 10⁻³',
    '$a \\sin \\theta = m\\lambda$',
  ].join('\n');

  it('reads each mark as its own kind, without the mark', () => {
    const [sec] = parseNotePage(PAGE);
    expect(sec.lines.map((l) => l.k)).toEqual([
      'sub', 'bullet', 'key', 'trap', 'trap', 'tip', 'sub', 'step', 'step', 'formula',
    ]);
    const trap = sec.lines[4];
    expect(trap.t).toBe('Light does diffract; its bending is microscopic.');
    expect(sec.lines[7].t).toBe('λ = 600 nm and a = 0.2 mm');
  });

  it('a bare mark with nothing after it is not a mark', () => {
    const [sec] = parseNotePage('HEADING\n★\n→');
    expect(sec.lines.every((l) => l.k !== 'key' && l.k !== 'step')).toBe(true);
  });
});

describe('placeFigures', () => {
  const PAGE = [
    'SPANNER EXAMPLE',
    '• Torque turns the nut.',
    'Worked example',
    '→ F = 40 N at r = 0.25 m',
    '→ τ = 10 N m',
    '• Longer spanner, less force.',
    'QUICK REVISION',
    '• τ = r F sin θ',
  ].join('\n');
  const fig = (numbers: string[], caption = 'Part 2') => ({ svg: '<svg/>', numbers, caption });

  it('goes after the line sharing its numbers, and after the steps that follow it', () => {
    const [sec] = placeFigures(parseNotePage(PAGE), [fig(['0.25', '30', '40'])]);
    expect(sec.lines.map((l) => l.k)).toEqual(['bullet', 'sub', 'step', 'step', 'figure', 'bullet']);
  });

  it('one shared number, or only small ones, is not a match', () => {
    const out = placeFigures(parseNotePage(PAGE), [fig(['40', '99']), fig(['3', '4'])]);
    const board = out.find((s) => s.title === 'From the board')!;
    expect(board.lines).toHaveLength(2);
    // before QUICK REVISION, which stays last
    expect(out[out.length - 1].kind).toBe('revision');
  });

  it('no figures leaves the page alone', () => {
    const page = parseNotePage(PAGE);
    expect(placeFigures(page, [])).toBe(page);
  });
});

describe('placeFigures: a figure the writer asked for', () => {
  it('goes after the line it was asked for, whatever its numbers', () => {
    const page = parseNotePage('LEVERS\n• A lever turns about a pivot.\n• Effort far from the pivot helps.');
    const [sec] = placeFigures(page, [
      { svg: '<svg/>', numbers: [], caption: 'Drawn for your notes', after: 'A lever turns about a pivot.' },
    ]);
    expect(sec.lines.map((l) => l.k)).toEqual(['bullet', 'figure', 'bullet']);
  });
});

describe('placeFigures: a figure of an idea, with no numbers', () => {
  it('ends the section about the same thing as its class part', () => {
    const page = parseNotePage(
      'WHY SOUND BENDS\n• Sound wavelength is comparable to a doorway.\n' +
        'HUYGENS PRINCIPLE\n• Every point on the wavefront is a source of secondary wavelets.\n' +
        'QUICK REVISION\n• a sin θ = mλ'
    );
    const out = placeFigures(page, [
      {
        svg: '<svg/>',
        numbers: [],
        caption: 'Huygens',
        context: 'Huygens construction: secondary wavelets from every point of the wavefront',
      },
    ]);
    expect(out[1].lines.map((l) => l.k)).toEqual(['bullet', 'figure']);
    expect(out.some((s) => s.title === 'From the board')).toBe(false);
  });
});

describe('placeFigures: the line that IS the example', () => {
  it('beats an earlier line repeating two of its numbers', () => {
    const page = parseNotePage(
      'MINIMA\n• Quick check: λ = 600 nm, a = 0.2 mm.\n' +
        'CENTRAL MAXIMUM\nWorked example\n→ λ = 600 nm, a = 0.2 mm, D = 1.5 m\n→ w = 9 mm'
    );
    const out = placeFigures(page, [{ svg: '<svg/>', numbers: ['0.2', '1.5', '600', '9'], caption: 'Width' }]);
    expect(out[0].lines.map((l) => l.k)).toEqual(['bullet']);
    expect(out[1].lines.map((l) => l.k)).toEqual(['sub', 'step', 'step', 'figure']);
  });
});
