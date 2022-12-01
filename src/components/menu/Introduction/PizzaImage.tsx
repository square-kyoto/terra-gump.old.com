import ResponsiveImage from 'components/ResponsiveImage';

const IMAGE_SRC = '/menu/pizza.png';
const IMAGE_WIDTH = 652;
const IMAGE_HEIGHT = 630;
const IMAGE_ALT = 'ピザの直径は 25cm';

const Introduction = () => {
  return (
    <ResponsiveImage
      alt={IMAGE_ALT}
      height={IMAGE_HEIGHT}
      src={IMAGE_SRC}
      width={IMAGE_WIDTH}
    />
  );
};

export default Introduction;
