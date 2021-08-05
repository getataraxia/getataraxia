import { DefaultTheme } from 'styled-components';

// TODO: color names could use some more refactoring.
export const colors = {
  colorPrimary1: '#23286b', // alternatives: rgb(41, 41, 41), #444

  colorSuccess: '#6ab750',
  mainRed: '#D94D3A',
  lightRed: '#FDF3F2',

  colorTitle: '#23286b', // same as colorPrimary1
  colorText: '#222222',
  colorTextWhite: '#ffffff',
  silverGrey: '#C8C8C8',

  colorTextDisabled: 'rgba(30, 44, 70, 0.4)',
};

//   Use the original colorPrimary
export const darkModeColors = {
  ...colors,

  colorTitle: '#ffffff',
  colorText: '#F2F5FD',
};

export const dimModeColors = {
  ...darkModeColors,
  colorPrimary4: '#2d426a',

  colorText: '#c8d5e2',
};

export const dark2ModeColors = {
  ...darkModeColors,
  colorPrimary4: '#353e47',


  // colorInputBg: '#303840',
};

export const lightTheme: DefaultTheme = {
  colors,
};

export const darkTheme: DefaultTheme = {
  colors: darkModeColors,
};
export const dark2Theme: DefaultTheme = {
  colors: dark2ModeColors,
};

export const dimTheme: DefaultTheme = {
  colors: dimModeColors,
};

export const setPosition = {
  absolute: 'absolute',
  relative: 'relative',
  fixed: 'fixed',
};

export const setFont = {
  main: "'DM Sans', sans-serif",
  headings:
    "'Times New Roman', TimesNewRoman, Times, Baskerville, Georgia, serif",
};

export const setFlex = ({ x = 'center', y = 'center' } = {}) =>
  `display: flex; align-items: ${y}; justify-content: ${x};`;

export const setZindex = {
  none: undefined,
  low: 1000,
  medium: 2000,
  high: 3000,
  critical: 10000,
};

export const setBackground = ({
  img = 'https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  color = 'rgba(0,0,0,0)',
} = {}) => `background: linear-gradient(${color}, ${color}),
    url(${img}) center/cover fixed no-repeat`;

export const setLetterSpacing = (number = 2) => `letter-spacing: ${number}px`;

export const setShadow = {
  light: 'box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)',
  dark: 'box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);',
  darkest: 'box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);',
};

export const setBorder = ({
  width = '1px',
  style = 'solid',
  color = 'black',
} = {}) => `border: ${width} ${style} ${color}`;

export const setTransition = ({
  property = 'all',
  time = '0.3s',
  timing = 'ease-in-out',
} = {}) => `transition:${property} ${time} ${timing}`;

export const setPageWidth = (width = '55%') => `width: ${width}`;
