const fontSizes = [12, 16, 20, 24, 28, 32].map((n) => `${n / 16}rem`);

const fonts = {
  body: 'Montserrat, sans-serif',
  heading: 'Montserrat, sans-serif',
  monospace: 'Montserrat, sans-serif',
};

const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  heavy: 900,
};

const lineHeight = {
  body: 1.5,
  heading: 1.9,
};

const colors = {
  black: '#1F1F1F',
  white: '#f2f2f2',
  background: '#F8F8F8',
  primary: '#4A1C1C',
  secondary: '#FFFFFF',
  accent: {
    red: '#B15757',
    purple: '#5D5177',
    green: '#889459',
  },
  muted: '#C7C7C7',
};

const space = [0, 4, 8, 16, 24, 32, 64];

export const theme = {
  fonts,
  fontWeights,
  lineHeight,
  fontSizes,
  colors,
  space,
};

export type Theme = typeof theme;
