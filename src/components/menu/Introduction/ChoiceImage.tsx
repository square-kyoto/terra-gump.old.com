import ResponsiveImage from 'components/ResponsiveImage';

const IMAGE_SRC = '/menu/choice.png';
const IMAGE_WIDTH = 635;
const IMAGE_HEIGHT = 6552;
const IMAGE_ALT = 'チョイス！！';

const ChoiceImage = () => {
  return (
    <ResponsiveImage
      alt={IMAGE_ALT}
      height={IMAGE_HEIGHT}
      src={IMAGE_SRC}
      width={IMAGE_WIDTH}
    />
  );
};

export default ChoiceImage;
