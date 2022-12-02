import { Box, Container, Divider, Grid } from '@mantine/core';
import HalfAndHalf from 'components/menu/HalfAndHalf';
import Introduction from 'components/menu/Introduction';
import MenuLogo from 'components/menu/Logo';
import MenuCard from 'components/menu/MenuCard';
import pizzaMenu from 'libs/pizzaMenu';
import Layout from 'components/Layout';

const pageTitle = 'Pizza TAKE OUT MENU';

const MenuPage = () => {
  return (
    <Layout title={pageTitle}>
      <Box bg="terraRed">
        <Container size="lg">
          <Box py="md">
            <MenuLogo />
          </Box>
          <Divider color="white" mb="md" size="xl" />
          <Introduction />
          <Box my="xl">
            <HalfAndHalf />
          </Box>
          <Box pb={80} pt="xl">
            <Grid>
              {pizzaMenu.map((menu) => (
                <Grid.Col key={menu.id} md={4} sm={6}>
                  <MenuCard item={menu} />
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default MenuPage;
