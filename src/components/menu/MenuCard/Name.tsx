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
        <Box display="inline-block">
          <Text
            bg="rgba(255, 255, 255, 0.4)"
            fz="xs"
            p="xs"
            sx={{ textShadow: '1px 1px #fff' }}
          >
            {item.summary}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Name;
