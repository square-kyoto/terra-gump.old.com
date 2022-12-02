import { createStyles, Text } from '@mantine/core';

const MAIN_MESSAGE = '手作りの焼きたてのピザを|お持帰り頂けます';
const SUB_MESSAGE = 'テイクアウトの箱代は、別途申し受けます。';

const useStyles = createStyles((theme) => ({
  main: {
    color: theme.white,
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
    [theme.fn.largerThan('sm')]: {
      fontSize: theme.fontSizes.xl * 1.25,
    },
    [theme.fn.largerThan('md')]: {
      fontSize: theme.fontSizes.xl * 1.5,
    },
  },
  sub: {
    color: theme.white,
    fontSize: theme.fontSizes.xs,
    marginTop: theme.spacing.xs,
    [theme.fn.largerThan('md')]: {
      marginTop: 0,
      textAlign: 'center',
    },
  },
}));

const Introduction = () => {
  const { classes } = useStyles();

  return (
    <>
      <Text className={classes.main}>
        {MAIN_MESSAGE.split('|').map((msg, index) => (
          <Text display="inline-block" key={index} span>
            {msg}
          </Text>
        ))}
      </Text>
      <Text className={classes.sub}>{SUB_MESSAGE}</Text>
    </>
  );
};

export default Introduction;
