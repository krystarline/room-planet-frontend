/* eslint-disable no-alert */
import { useCallback } from "react";
import useBlock from "./useBlock";

function usePrompt(message, when = true) {
  const block = useCallback(
    (text) => {
      if (window.confirm(message)) {
        text.retry();
      }
    },
    [message]
  );

  useBlock(block, when);
}

export default usePrompt;
