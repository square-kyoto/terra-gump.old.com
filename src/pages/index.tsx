import { Box, Button, Container, Flex } from '@mantine/core';
import Link from 'next/link';
import Layout from 'components/Layout';
import ResponsiveImage from 'components/ResponsiveImage';

const IndexPage = () => (
  <Layout>
    <Flex align="center" h="100%" justify="center">
      <Container>
        <Box>
          <Box my="xl">
            <ResponsiveImage
              alt="Pizza & Wine ワインバーテラ"
              height={380}
              src="/banner.jpg"
              width={1700}
            />
          </Box>
          <Box ta="center">
            <Button component={Link} href="/menu" size="md">
              ピザのメニューはこちら
            </Button>
          </Box>
        </Box>
      </Container>
    </Flex>
  </Layout>
);

export default IndexPage;
