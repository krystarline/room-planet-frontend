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
  ],
});

export const modelsAtom = atom([true, false, false]);
export const colorAtom = atomWithProxy(colorProxy, { sync: true });
