export const theme = {
  colors: {
    primary: "#3442B5",
    darkDefault: '#271C47',
    dark: "#3F3F40",
    white: "#FFFFFF",
    light: "#F4F4F4",
    accent: "#F7CA11",
    muted: "rgba(0, 0, 0, 0.54)",
    border: "#DEDEDE",
  },
  fonts: {
    main: "'Poppins', sans-serif",
    alt: "'Work Sans', sans-serif",
  },
  container: "var(--container)",
  transition: "0.25s ease",
};

export type Theme = typeof theme;
