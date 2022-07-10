/* eslint-disable import/named */
import { useKeys } from "../hooks/useKeys";

function Keyboard({ handleKeyPress }) {
  useKeys(handleKeyPress);
  // return null;
}

export default Keyboard;
