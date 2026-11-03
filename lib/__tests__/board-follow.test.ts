import { createFollowTracker, isFling, pageTarget } from '@/lib/board-follow';

describe('board follow: a drag decides, a glide does not', () => {
  it("the board's own glide ending short of a grown board leaves following alone (X1)", () => {
    const t = createFollowTracker();
    t.programmaticScroll(); // a new line: glide to the end
    // the board grew during the glide (a widget laid out), so the glide ends
    // short of the new bottom, and iOS reports it as a momentum end
    expect(t.momentumEnded(false)).toBeNull();
  });

  it("a student's fling that comes to rest away from the bottom stops following", () => {
    const t = createFollowTracker();
    t.dragBegan();
    expect(t.dragEnded(false, true)).toBe(false);
    expect(t.momentumEnded(false)).toBe(false);
  });

  it("a student's fling that comes back to the bottom resumes following", () => {
    const t = createFollowTracker();
    t.dragBegan();
    t.dragEnded(false, true);
    expect(t.momentumEnded(true)).toBe(true);
  });

  it('a drag that stops dead decides at once, and a later glide does not undo it', () => {
    const t = createFollowTracker();
    t.dragBegan();
    expect(t.dragEnded(true, false)).toBe(true);
    t.programmaticScroll();
    expect(t.momentumEnded(false)).toBeNull();
  });

  it("Jump to live makes the next glide the board's again", () => {
    const t = createFollowTracker();
    t.dragBegan();
    t.dragEnded(false, true); // student flung up, still moving
    t.programmaticScroll(); // then tapped Jump to live
    expect(t.momentumEnded(false)).toBeNull();
  });

  it('only one momentum end per fling is read as the student', () => {
    const t = createFollowTracker();
    t.dragBegan();
    t.dragEnded(false, true);
    expect(t.momentumEnded(false)).toBe(false);
    expect(t.momentumEnded(false)).toBeNull();
  });

  it('isFling: iOS lift velocity decides; no velocity means maybe', () => {
    expect(isFling(0)).toBe(false);
    expect(isFling(0.01)).toBe(false);
    expect(isFling(-1.2)).toBe(true);
    expect(isFling(undefined)).toBe(true);
  });
});

describe('the board turns a page at 80% full', () => {
  const H = 1000;
  const at = (current: number, writingBottom: number, headingY = 0) =>
    pageTarget({ current, writingBottom, boardHeight: H, readLine: 0.45, headingY });

  it('stays still while the writing fills the board up to 80%', () => {
    for (const bottom of [100, 400, 700, 800]) expect(at(0, bottom)).toBe(0);
  });

  it('moves once past 80%, putting the newest line back at 45%', () => {
    expect(at(0, 820)).toBe(370);
    // and is still again while the next stretch is written
    for (const bottom of [900, 1000, 1170]) expect(at(370, bottom)).toBe(370);
    expect(at(370, 1180)).toBe(730);
  });

  it('a new heading still turns the page to itself', () => {
    expect(at(370, 1000, 900)).toBe(900);
  });

  it('writing above the top of the board is brought back into view', () => {
    expect(at(2000, 900)).toBe(450);
  });
});
