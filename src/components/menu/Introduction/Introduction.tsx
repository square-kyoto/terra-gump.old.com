import { Box, createStyles, Flex, Text } from '@mantine/core';
import ChoiceImage from './ChoiceImage';
import PizzaImage from './PizzaImage';

const useStyles = createStyles((theme) => ({
  choiceImage: {
    position: 'relative',
    width: 100,
    [theme.fn.largerThan('sm')]: {
      width: 150,
    },
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    [theme.fn.largerThan('md')]: {
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
  },
  message: {
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
  messageBox: {
    marginTop: theme.spacing.xs,
    [theme.fn.largerThan('md')]: {
      marginLeft: theme.spacing.md,
      marginRight: theme.spacing.md,
      marginTop: 0,
    },
  },
  pizzaImage: {
    flexGrow: 0,
    position: 'relative',
    width: 140,
  },
  subMessage: {
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
    <Flex>
      <Box sx={{ flexGrow: 1 }}>
        <Box className={classes.inner}>
          <Box className={classes.choiceImage}>
            <ChoiceImage />
          </Box>
          <Box className={classes.messageBox}>
            <Text className={classes.message}>
              <Text display="inline-block" span>
                手作りの焼きたてのピザを
              </Text>
              <Text display="inline-block" span>
                お持帰り頂けます
              </Text>
            </Text>
            <Text className={classes.subMessage}>テイクアウトの箱代は、別途申し受けます。</Text>
          </Box>
        </Box>
      </Box>
      <Box className={classes.pizzaImage}>
        <PizzaImage />
      </Box>
    </Flex>
  );
};

export default Introduction;
