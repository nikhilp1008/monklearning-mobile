/**
 * HOW FAR A LABEL IN A FIXED-SIZE CONTROL MAY GROW WITH THE PHONE'S TEXT SIZE.
 *
 * Text follows the system's font size everywhere, which is right for reading.
 * But buttons, chips, the tab bar and the code boxes have fixed heights, and
 * many Android phones (Samsung especially) ship with a large default size: an
 * unlimited label spilled out of its button. Inside those controls a label
 * still grows, up to this much, and then stops.
 */
export const CONTROL_LABEL_MAX_SCALE = 1.2;
