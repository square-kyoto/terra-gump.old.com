import { Box } from '@mantine/core';
import ResponsiveImage from 'components/ResponsiveImage';

const logoImage = {
  height: 650,
  src: '/menu/logo.png',
  width: 6650,
};

function MenuLogo() {
  return (
    <Box sx={{ position: 'relative' }}>
      <ResponsiveImage
        alt="Pizza TAKE OUT MENU"
        height={logoImage.height}
        src={logoImage.src}
        width={logoImage.width}
      />
    </Box>
  );
}

export default MenuLogo;
