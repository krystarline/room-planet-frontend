/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import { atom, unstable_createStore } from "jotai";

export const store = unstable_createStore();
export const modelsAtom = atom([false, false, false, false, false]);
export const colorAtom = atom({
  current: null,
  items: [
    {
      "Ottoman wood": "#ffffff",
      "Ottoman fabric": "#ffffff",
    },
  ],
});
