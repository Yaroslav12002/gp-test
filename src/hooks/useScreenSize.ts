import { useState, useLayoutEffect } from "react";
import { SCREEN_NAMES } from "../constants/screenNames";
import { SCREEN_SIZES } from "../constants/screenSizes";

export const useScreenSize = () => {
  const [width, setWidth] = useState(0);
  const { tablet, laptop, desktop, desktopXl } = SCREEN_SIZES;
  const { mobileName, tabletName, laptopName, desktopName, desktopXlName } =
    SCREEN_NAMES;

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window?.innerWidth);
    };

    handleResize();
    window?.addEventListener("resize", handleResize);

    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  let screenSizeName = mobileName;

  switch (true) {
    case width >= tablet && width < laptop: {
      screenSizeName = tabletName;
      break;
    }
    case width >= laptop && width < desktop: {
      screenSizeName = laptopName;
      break;
    }
    case width >= desktop && width < desktopXl: {
      screenSizeName = desktopName;
      break;
    }
    case width >= desktopXl: {
      screenSizeName = desktopXlName;
      break;
    }
  }

  return screenSizeName;
};
