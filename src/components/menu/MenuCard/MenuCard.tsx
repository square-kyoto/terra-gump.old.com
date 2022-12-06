import { Box, Flex, Paper } from '@mantine/core';
import Sauce from './Sauce';
import Name from './Name';
import Ingredients from './Ingredients';
import Price from './Price';

const CARD_HEIGHT = 544;

type Props = {
  item: PizzaMenu;
};

const MenuCard = ({ item }: Props) => {
  return (
    <Paper h={CARD_HEIGHT} pb="xl" pos="relative" pt="sm" px="sm">
      <Box
        h="60%"
        left="10%"
        pos="absolute"
        sx={{
          backgroundImage: `url("/menu/${item.image}")`,
          backgroundPositionX: '50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          zIndex: 10,
        }}
        top="20%"
        w="80%"
      />
      <Flex
        direction="column"
        h="100%"
        justify="space-between"
        pos="relative"
        sx={{ zIndex: 20 }}
      >
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
