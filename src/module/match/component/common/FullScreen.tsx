"use client"

import { useFullscreen } from "ahooks";
import { useEffect, useRef } from "react";

const FullScreen = ({ children }: { children: React.ReactNode }) => {

  const ref = useRef(null);
  const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] = useFullscreen(ref);

  useEffect(() => {
    // enterFullscreen()

    window.oncontextmenu = function () {
      return false;
    };

    document.addEventListener("keydown", function (event) {
      var key = event.key || event.keyCode;

      if (key == 123) {
        return false;
      } else if ((event.ctrlKey && event.shiftKey && key == 73) || (event.ctrlKey && event.shiftKey && key == 74)) {
        return false;
      }
    }, false);
  }, [])

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}

export default FullScreen;