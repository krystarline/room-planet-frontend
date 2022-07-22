/* eslint-disable no-unused-vars */
import { useAtom } from "jotai";
import React from "react";
import { HexColorPicker } from "react-colorful";
import styled from "styled-components";

import { colorAtom } from "../atoms";

const PickerLayout = styled.div`
  position: absolute;
  left: 100%;
  z-index: 999;
  transform: translate(-200%, 0);
`;

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
    <PickerLayout>
      <HexColorPicker
        className="picker"
        color={items?.[current?.index]?.[current?.name]}
        onChange={handleColorChange}
      />
      <h2>{current?.name}</h2>
    </PickerLayout>
  );
}

export default Picker;
