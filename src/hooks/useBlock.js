/* eslint-disable consistent-return */
import { useContext, useEffect } from "react";
import { UNSAFE_NavigationContext as NavigationContext } from "react-router-dom";

function useBlock(block, when = true) {
  const { navigator } = useContext(NavigationContext);

  useEffect(() => {
    if (!when) return;

    const unblock = navigator.block((text) => {
      const autoUnblockingText = {
        ...text,
        retry() {
          unblock();
          text.retry();
        },
      };

      block(autoUnblockingText);
    });

    return unblock;
  }, [navigator, block, when]);
}

export default useBlock;
