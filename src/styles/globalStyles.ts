import { CSSObject } from '@mantine/core';

const globalStyles: () => CSSObject = () => ({
  '#root, #__next': {
    height: '100%',
    isolation: 'isolate',
  },
  body: {
    WebkitFontSmoothing: 'antialiased',
  },
  'html, body': {
    height: '100%',
  },
});

export default globalStyles;
