/* eslint-disable no-unused-vars */
import React from "react";
import { HexColorPicker } from "react-colorful";
import { useAtom } from "jotai";

import { colorAtom } from "../common/atom";

function Picker() {
  const [{ current, items }, setColor] = useAtom(colorAtom);

  const handleColorChange = (c) => {
    setColor(({ current: prevCurrent, items: prevItems }) => {
      const { index, name } = prevCurrent;
      const newItems = prevItems.map((item, i) => {
        if (index === i) {
          return {
            ...prevItems[index],
            [name]: c,
          };
        }

        return item;
      });
      return {
        current: prevCurrent,
        items: newItems,
      };
    });
  };

  return (
    <>
      <h2>{current?.name}</h2>
      <HexColorPicker
        className="picker"
        color={items?.[current?.index]?.[current?.name]}
        onChange={handleColorChange}
      />
    </>
  );
}

export default Picker;
