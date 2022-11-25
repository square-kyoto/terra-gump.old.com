import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from 'styles';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
    </Head>
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  </>
);

export default App;
