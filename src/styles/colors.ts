import { Tuple } from '@mantine/core';

type ExtendedCustomColors = Record<CustomColorNames, Tuple<string, 10>>;

const colors: ExtendedCustomColors = {
  terraRed: [
    '#F5939B',
    '#F27983',
    '#F0606C',
    '#ED4755',
    '#EB2F3F',
    '#E81729',
    '#E60013',
    '#CF0011',
    '#B8000F',
    '#A1000D',
  ],
  terraYellow: [
    '#FFFA99',
    '#FFF980',
    '#FFF766',
    '#FFF64D',
    '#FFF533',
    '#FFF419',
    '#FFF100',
    '#E6DA00',
    '#CCC200',
    '#B3AA00',
  ],
};

export default colors;
