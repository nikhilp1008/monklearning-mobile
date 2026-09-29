import { createFollowTracker, isFling } from '@/lib/board-follow';

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
