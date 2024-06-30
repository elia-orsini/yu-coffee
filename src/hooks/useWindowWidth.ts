import { useCallback, useState } from "react";

import useEventListener from "./useEventListener";

const isBrowser = typeof document !== "undefined";

/**
 * @description Returns the interior width of the window in pixels.
 * @returns {number | null} Width of the window in pixels
 * @see https://github.com/wojtekmaj/react-hooks/blob/main/src/useWindowWidth.ts
 */
export default function useWindowWidth(): number | null {
  const [windowWidth, setWindowWidth] = useState(
    isBrowser ? window.innerWidth : null
  );

  const getWindowWidth = useCallback(
    () => setWindowWidth(window.innerWidth),
    []
  );

  useEventListener(isBrowser ? window : null, "resize", getWindowWidth);

  return windowWidth;
}
