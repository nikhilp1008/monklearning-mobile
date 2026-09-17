import { parseNotePage, sentenceCase } from '@/lib/note-page-model';

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
