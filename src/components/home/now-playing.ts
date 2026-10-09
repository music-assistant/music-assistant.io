/*
 * Which shelf cover is "now playing". The shelf picks one at random and
 * changes it when a cover is clicked; the hero takes its colours from it.
 */

type Listener = (colors: string[]) => void;

let current: string[] | null = null;
const listeners = new Set<Listener>();

export function setNowPlaying(colors: string[]) {
  current = colors;
  listeners.forEach((listener) => listener(colors));
}

/** Calls back with the current colours straight away if there are any. */
export function onNowPlaying(listener: Listener) {
  listeners.add(listener);
  if (current) listener(current);
}
