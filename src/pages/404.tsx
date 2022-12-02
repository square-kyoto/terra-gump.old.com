import { Box, Button, Container, Flex, Text } from '@mantine/core';
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
          <Text mb="lg" ta="center">
            指定されたページは見つかりませんでした。
          </Text>
          <Box ta="center">
            <Button component={Link} href="/" size="md">
              トップページに戻る
            </Button>
          </Box>
        </Box>
      </Container>
    </Flex>
  </Layout>
);

export default IndexPage;
