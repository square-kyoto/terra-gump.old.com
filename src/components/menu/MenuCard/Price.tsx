import { createStyles, Flex, Text } from '@mantine/core';

type Props = {
  item: PizzaMenu;
};

const useStyles = createStyles((theme) => ({
  price: {
    fontSize: theme.fontSizes.xl * 1.75,
    fontWeight: 900,
  },
  yenMark: {
    fontSize: theme.fontSizes.xl * 1.5,
    fontWeight: 'bold',
  },
}));

const MenuCard = ({ item }: Props) => {
  const { classes } = useStyles();

  return (
    <Flex align="baseline" justify="space-between" mx="md">
      <Text>
        <Text className={classes.yenMark} span>
          ￥
        </Text>
        <Text className={classes.price} span>
          {item.price.toLocaleString()}
        </Text>
      </Text>
      <Text fw="bold">
        <Text fw="normal" fz="xs" span>
          (8% 税込)
        </Text>
        <Text fz="xl" span>{`￥${item.price_include_tax.toLocaleString()}`}</Text>
      </Text>
    </Flex>
  );
};

export default MenuCard;
