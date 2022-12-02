import { Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  span: {
    display: 'inline-block',
  },
  text: {
    color: theme.white,
    fontSize: theme.fontSizes.xl * 1,
    fontWeight: 900,
    textAlign: 'center',
    [theme.fn.largerThan('sm')]: {
      fontSize: theme.fontSizes.xl * 1.625,
    },
  },
}));

const HalfAndHalf = () => {
  const { classes } = useStyles();

  return (
    <Text className={classes.text}>
      <Text display="inline-block" span>
        全て
        <Text color="terraYellow" span>
          ハーフ＆ハーフ
        </Text>
        ができます！
      </Text>
      <Text display="inline-block" span>
        色々なピザを楽しんでね！！
      </Text>
    </Text>
  );
};

export default HalfAndHalf;
