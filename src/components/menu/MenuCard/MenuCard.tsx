import { Flex, Paper } from '@mantine/core';
import Sauce from './Sauce';
import Name from './Name';
import Ingredients from './Ingredients';
import Price from './Price';

type Props = {
  item: PizzaMenu;
};

const MenuCard = ({ item }: Props) => {
  return (
    <Paper h={450} pb="xl" pt="sm" px="sm">
      <Flex direction="column" h="100%" justify="space-between">
        <div>
          <Sauce sauce={item.sauce} />
          <Name item={item} />
        </div>
        <div>
          <Ingredients item={item} />
          <Price item={item} />
        </div>
      </Flex>
    </Paper>
  );
};

export default MenuCard;
