import { Box, createStyles, Flex, Text } from '@mantine/core';

type Props = {
  sauce: Sauce | null;
};

const useStyles = createStyles((theme) => ({
  text: {
    borderRadius: theme.radius.xl,
    fontSize: 10,
    fontWeight: 'bold',
    height: 18,
    padding: '0 8px',
  },
}));

const Sauce = ({ sauce }: Props) => {
  const { classes } = useStyles();

  return sauce ? (
    <Flex justify="end">
      <Text bg={sauce.bg} className={classes.text}>
        <Text color={sauce.fg} mx={2} span>
          {sauce.name}
        </Text>
      </Text>
    </Flex>
  ) : (
    <Box h={18} />
  );
};

export default Sauce;
