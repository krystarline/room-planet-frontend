import { atom } from "jotai";
import { atomWithProxy } from "jotai/valtio";
import { proxy } from "valtio/vanilla";

const toolProxy = proxy({ type: null });
const dragProxy = proxy({ activated: false });
const colorProxy = proxy({
  current: null,
  items: [
    {
      "Ottoman wood": "#ffffff",
      "Ottoman fabric": "#ffffff",
    },
    {
      "Table black": "#ffffff",
      "Table top": "#ffffff",
    },
    {
      "Bed Frame": "#ffffff",
      "Bed Pillow": "#ffffff",
      "Bed Mattress": "#ffffff",
    },
    {
      Material: "#ffffff",
    },
    {
      "Pouf fabric": "#ffffff",
    },
    {
      chair: "#ffffff",
    },
  ],
});

export const modelsAtom = atom([false, false, false, false, false, false]);

export const toolAtom = atomWithProxy(toolProxy, { sync: true });
export const toolTypeAtom = atom((get) => get(toolAtom).type);

export const colorAtom = atomWithProxy(colorProxy, { sync: true });
export const colorItemsAtom = atom((get) => get(colorAtom).items);

export const dragAtom = atomWithProxy(dragProxy, { sync: true });
