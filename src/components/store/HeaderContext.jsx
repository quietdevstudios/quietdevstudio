import { createContext, useEffect, useState, useRef } from "react";

export const HeaderContext = createContext({
  headerHeight: 0,
  headerRef: null,
  isXtraLargeScreen: false,
});

export const HeaderProvider = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isXtraLargeScreen, setIsXtraLargeScreen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef?.current) {
        console.log(headerRef?.current?.offsetHeight);
        setHeaderHeight(headerRef?.current?.offsetHeight);
      }
      setIsXtraLargeScreen(window.innerWidth >= 1280); // Tailwind's `xl` breakpoint
    };
    updateHeaderHeight();

    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  const headerContextValue = {
    headerHeight: headerHeight,
    headerRef: headerRef,
    isXtraLargeScreen: isXtraLargeScreen,
  };

  return (
    <HeaderContext.Provider value={headerContextValue}>
      {children}
    </HeaderContext.Provider>
  );
};
