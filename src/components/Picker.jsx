import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { HexColorPicker } from "react-colorful";

import { colorAtom } from "../common/atom";

function Picker() {
  const [color, setColor] = useState("#ffffff");
  const [{ current }] = useAtom(colorAtom);

  useEffect(() => {
    console.log(color);
  });

  return (
    <>
      <h2>{current.name}</h2>
      <HexColorPicker
        className="picker"
        color={color}
        onClick={(e) => e.stopPropagation()}
        onChange={(c) => setColor(c)}
      />
    </>
  );
}

export default Picker;
