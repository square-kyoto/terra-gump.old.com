import Image from 'next/image';
import { Box } from '@mantine/core';

const logoImage = {
  height: 650,
  src: '/menu/logo.png',
  width: 6650,
};

function MenuLogo() {
  return (
    <Box sx={{ position: 'relative' }}>
      <Image
        alt="Pizza TAKE OUT MENU"
        height={logoImage.height}
        sizes="100vw"
        src={logoImage.src}
        style={{
          height: 'auto',
          width: '100%',
        }}
        width={logoImage.width}
      />
    </Box>
  );
}

export default MenuLogo;
