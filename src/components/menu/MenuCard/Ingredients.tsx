import { List, Text } from '@mantine/core';

type Props = {
  item: PizzaMenu;
};

const MenuCard = ({ item }: Props) => {
  return (
    <List center icon="●" size="xs" spacing="xs">
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
  );
};

export default MenuCard;
