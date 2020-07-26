export default {
  breakpoint: {
    phone: "0rem",
    tabletPortrait: "37.5rem", // 600px
    tabletLandscape: "56.25rem", // 900px
    desktopM: "75rem", // 1200px
    desktopL: "93.75rem", // 1500px
    desktopXL: "112.5rem", // 1800px
    desktopXXL: "125rem", // 2000px
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
      100: "#F5F5F5",
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
    pixel: (pixel) => `${pixel / 16}rem`,
  },
  shadow: {
    small: "0px 4px 4px rgba(0, 0, 0, 0.2);",
    big: "0px 8px 8px rgba(0, 0, 0, 0.2);",
  },
};
