import { css } from 'styled-components';

// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
};

export const color = {
  // Palette
  primary: '#E6007A', // polkapink
  secondary: '#1EA7FD', // ocean
  tertiary: '#DDDDDD',

  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',
  black: '#000000',

  // Grey Hues
  grey01: '#F7F8FC',
  grey02: '#F5F6FA',
  grey03: '#EBF0F5',
  grey04: '#DDE4ED',
  grey05: '#A6ACB3',
  grey06: '#777B80',
  grey07: '#53595C',
  grey08: '#3C4042',
  grey09: '#2E2F30',

  border: 'rgba(0,0,0,.1)',

  // Status
  positive: '#4DD18F',
  negative: '#FF4400',
  warning: '#E69D00',
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
  // TODO: should be a VW-based layout tachyons extension
  max1000: 'calc(50vw - 500px)',
};

export const typography = {
  type: {
    primary: '"Heebo", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    s1: '9',
    s2: '12',
    s3: '14',
    m1: '16',
    m2: '18',
    m3: '22',
    l1: '28',
    l2: '32',
    l3: '48',
    code: '90',
  },
};

export const breakpoint = 600;
export const pageMargin = '5.55555';

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;
