export default {
  breakpoint: {
    phone: "0rem",
    tabletPortrait: "37.5rem",
    tabletLandscape: "56.25rem",
    desktopM: "75rem",
    desktopL: "93.75rem",
    desktopXL: "112.5rem",
    desktopXXL: "125rem",
  },
  font: {
    sansSerif: "Open Sans, sans-serif",
    serif: "Faustina, serif",
  },
  color: {
    primary: {
      main: "#00873A",
      dark: "#005A27",
    },
    seconday: {
      main: "#D48E15",
    },
    tertiary: {
      main: "",
      light: "",
      dark: "",
    },
    white: "#FFFFFF",
    black: "#000000",
    grey: {
      800: "#424242",
      500: "#9E9E9E",
    },
    pink: "#E91E63",
    blue: "#2196F3",
  },
  size: {
    2: "0.125rem",
    4: "0.25rem",
    8: "0.5rem",
    12: "0.75rem",
    16: "1rem",
    24: "1.5rem",
    32: "2rem",
    48: "3rem",
    64: "4rem",
    96: "6rem",
    pixelToRem: (pixel) => `${pixel / 16}rem`,
  },
  shadow: [],
};
