import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
    </Head>
    <MantineProvider theme={{ colorScheme: 'light' }} withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  </>
);

export default App;
