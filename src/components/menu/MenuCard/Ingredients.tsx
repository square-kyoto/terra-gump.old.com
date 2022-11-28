import { List } from '@mantine/core';

type Props = {
  item: PizzaMenu;
};

const MenuCard = ({ item }: Props) => {
  return (
    <List center icon="●" size="xs" spacing="xs">
      {item.ingredients.map((ingredient, index) => (
        <List.Item key={index}>{ingredient}</List.Item>
      ))}
    </List>
  );
};

export default MenuCard;
