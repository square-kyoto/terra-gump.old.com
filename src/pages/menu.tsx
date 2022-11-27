import { Box, Container, Divider } from '@mantine/core';
import MenuLogo from 'components/menu/Logo';

const MenuPage = () => {
  return (
    <Box bg="terraRed" h="100%">
      <Container size="lg">
        <Box py="xl">
          <MenuLogo />
        </Box>
        <Divider mb="xl" size="xl" />
      </Container>
    </Box>
  );
};

export default MenuPage;
