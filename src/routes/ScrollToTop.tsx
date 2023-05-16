import { useStateContext } from "@/context/ContextProvider";
import useGetWindowDimensions from "@/hooks/useGetWindowDimensions";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { window_width } = useGetWindowDimensions();
  const { setIsSidebarVisible } = useStateContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window_width < 968) {
      setIsSidebarVisible(false);
    }
  }, [pathname]);

  return null;
}