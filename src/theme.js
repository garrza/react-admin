import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// Setup to get colors and typography of site
// Establishing our theme setup for entire website

// COLOR DESIGN TOKENS

// Dark mode background
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        black: {
          100: "#d2d2d2",
          200: "#a5a5a5",
          300: "#797979",
          400: "#4c4c4c",
          500: "#1f1f1f",
          600: "#191919",
          700: "#131313",
          800: "#0c0c0c",
          900: "#060606",
        },
        purple: {
          100: "#ffddd6",
          200: "#ffbcad",
          300: "#ff9a85",
          400: "#ff795c",
          500: "#ff5733",
          600: "#cc4629",
          700: "#99341f",
          800: "#662314",
          900: "#33110a",
        },
        blue: {
          100: "#d7ccf0",
          200: "#af99e1",
          300: "#8766d1",
          400: "#5f33c2",
          500: "#3700b3",
          600: "#2c008f",
          700: "#21006b",
          800: "#160048",
          900: "#0b0024",
        },
        yellow: {
          100: "#fffce5",
          200: "#fff9cb",
          300: "#fff6b0",
          400: "#fff396",
          500: "#fff07c",
          600: "#ccc063",
          700: "#99904a",
          800: "#666032",
          900: "#333019",
        },
        red: {
          100: "#f8dddf",
          200: "#f1bbc0",
          300: "#e998a0",
          400: "#e27681",
          500: "#db5461",
          600: "#af434e",
          700: "#83323a",
          800: "#582227",
          900: "#2c1113",
        },
      }
    : {
        black: {
          100: "#060606",
          200: "#0c0c0c",
          300: "#131313",
          400: "#191919",
          500: "#1f1f1f",
          600: "#4c4c4c",
          700: "#797979",
          800: "#a5a5a5",
          900: "#d2d2d2",
        },
        purple: {
          100: "#33110a",
          200: "#662314",
          300: "#99341f",
          400: "#cc4629",
          500: "#ff5733",
          600: "#ff795c",
          700: "#ff9a85",
          800: "#ffbcad",
          900: "#ffddd6",
        },
        blue: {
          100: "#0b0024",
          200: "#160048",
          300: "#21006b",
          400: "#2c008f",
          500: "#3700b3",
          600: "#5f33c2",
          700: "#8766d1",
          800: "#af99e1",
          900: "#d7ccf0",
        },
        yellow: {
          100: "#333019",
          200: "#666032",
          300: "#99904a",
          400: "#ccc063",
          500: "#fff07c",
          600: "#fff396",
          700: "#fff6b0",
          800: "#fff9cb",
          900: "#fffce5",
        },
        red: {
          100: "#2c1113",
          200: "#582227",
          300: "#83323a",
          400: "#af434e",
          500: "#db5461",
          600: "#e27681",
          700: "#e998a0",
          800: "#f1bbc0",
          900: "#f8dddf",
        },
      }),
});

// Material UI theme settings
// Material UI components
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.purple[500],
            },
            secondary: {
              main: colors.blue[500],
            },
            neutral: {
              dark: colors.black[700],
              main: colors.black[500],
              light: colors.black[100],
            },
            background: {
              default: colors.black[500],
            },
          }
        : {
            primary: {
              main: colors.purple[100],
            },
            secondary: {
              main: colors.blue[500],
            },
            neutral: {
              dark: colors.black[700],
              main: colors.black[500],
              light: colors.black[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// React context for color mode
// Function allows us to provide entire function through the app
export const colorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  // Creating the theme with MUI passing in mode with object of settings
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  // Allows us to create a context in which we can have easy access to condition of light or dark, as well as behavior functions
  return [theme, colorMode];
};
