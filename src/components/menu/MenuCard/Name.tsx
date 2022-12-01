import { Box, Flex, Text, ThemeIcon } from '@mantine/core';

type Props = {
  item: PizzaMenu;
};

const Name = ({ item }: Props) => {
  return (
    <Flex align="flex-start">
      <ThemeIcon fw="bold" radius="xl" size="lg">
        {item.id}
      </ThemeIcon>
      <Box ml="xs">
        <Text fw="bold" fz="lg">
          {item.name}
        </Text>
        <Text fz="xs" sx={{ textShadow: '1px 1px #fff' }}>
          {item.summary}
        </Text>
      </Box>
    </Flex>
  );
};

export default Name;
