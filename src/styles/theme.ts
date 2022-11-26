import { MantineThemeOverride } from '@mantine/core';
import colors from './colors';
import globalStyles from './globalStyles';

const theme: MantineThemeOverride = {
  colorScheme: 'light',
  colors: colors,
  globalStyles: globalStyles,
  primaryColor: 'terraRed',
};

export default theme;
