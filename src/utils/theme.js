import { createTheme } from "@mui/material";

export const mainPadding = 16;

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#301934" },
    success: { main: "#9F2B68" },
    secondary: { main: "#E0B0FF" },
    text: { primary: "#301934", secondary: "#C3B1E1" },
    background: { default: "#ffffff" },
  },

  typography: {
    fontFamily: "Nexa-Bold",
  },

  components: {
    MuiButton: {
      styleOverrides: {
        textPrimary: { color: "#301934" },
        outlinedPrimary: {
          color: "#301934",
          borderColor: "#301934",
          "&:hover": { borderColor: "#301934" },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: { color: "#301934", "&.Mui-focused": { color: "#301934" } },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#301934",
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#301934" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#301934",
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ffffff" },
    success: { main: "#CCCCFF" },
    secondary: { main: "#C3B1E1" },
    text: { primary: "#ffffff", secondary: "#C3B1E1" },
    background: { default: "#301934" },
  },

  typography: {
    fontFamily: "Nexa-Bold",
    h1: { color: "red" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        textPrimary: { color: "#ffffff" },
        outlinedPrimary: {
          color: "#ffffff",
          borderColor: "#ffffff",
          "&:hover": { borderColor: "#ffffff" },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { color: "#ffffff", "&.Mui-focused": { color: "#ffffff" } },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ffffff" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff",
          },
        },
      },
    },
  },
});
