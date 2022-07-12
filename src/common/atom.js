import { atom } from "jotai";
import { atomWithProxy } from "jotai/valtio";
import { proxy } from "valtio/vanilla";

const colorProxy = proxy({
  current: null,
  items: [
    {
      "Ottoman wood": "#ffffff",
      "Ottoman fabric": "#ffffff",
    },
    {
      Frame: "#acd",
      White: "#eec",
      Pillow: "#ffa",
      Blanket: "#ffd",
    },
  ],
});

export const modelsAtom = atom([false, false, false, false]);
export const colorAtom = atomWithProxy(colorProxy, { sync: true });
