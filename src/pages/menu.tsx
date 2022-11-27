import { Box, Container, Divider } from '@mantine/core';
import Introduction from 'components/menu/Introduction';
import MenuLogo from 'components/menu/Logo';

const MenuPage = () => {
  return (
    <Box bg="terraRed" h="100%">
      <Container size="lg">
        <Box py="md">
          <MenuLogo />
        </Box>
        <Divider color="white" mb="md" size="xl" />
        <Introduction />
      </Container>
    </Box>
  );
};

export default MenuPage;
