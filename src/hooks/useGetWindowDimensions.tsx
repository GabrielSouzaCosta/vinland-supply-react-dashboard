import { useEffect, useState } from "react";

export default function() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return {innerWidth, innerHeight};
    }

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);

    return { window_width: windowSize.innerWidth, window_height: windowSize.innerHeight };
}