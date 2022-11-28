import { CSSObject } from '@mantine/core';

const globalStyles: () => CSSObject = () => ({
  '#root, #__next': {
    isolation: 'isolate',
    minHeight: '100%',
  },
  body: {
    WebkitFontSmoothing: 'antialiased',
  },
  'html, body': {
    minHeight: '100%',
  },
});

export default globalStyles;
