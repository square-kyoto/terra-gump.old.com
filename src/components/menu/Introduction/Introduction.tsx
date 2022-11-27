import { Box, createStyles, Flex } from '@mantine/core';
import ChoiceImage from './ChoiceImage';
import PizzaImage from './PizzaImage';
import Message from './Message';

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
            <Message />
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
