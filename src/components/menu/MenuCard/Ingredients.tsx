import { List, Text, Box } from '@mantine/core';

type Props = {
  item: PizzaMenu;
};

const MenuCard = ({ item }: Props) => {
  return (
    <Box display="inline-block">
      <List bg="rgba(255, 255, 255, 0.4)" center icon="●" p="xs" size="xs" spacing="xs">
        {item.ingredients.map((ingredient, index) => (
          <List.Item
            key={index}
            sx={{
              ':not(:first-of-type)': {
                marginTop: 4,
              },
            }}
          >
            <Text span sx={{ textShadow: '1px 1px #fff' }}>
              {ingredient}
            </Text>
          </List.Item>
        ))}
      </List>
    </Box>
  );
};

export default MenuCard;
