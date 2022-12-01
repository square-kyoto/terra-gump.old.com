import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title?: string;
};

const siteName = 'ワインバーテラ・PUB GUMP';
const description = '手作りの焼きたてのピザをお持ち帰り頂けます！';
const twitter = '@wine_terra2009';

const Layout = ({ children, title }: Props) => {
  const actualTitle = title ? `${title} / ${siteName}` : siteName;
  const imageUrl = 'http://sirius.beehive-dev.com:58007/api/og';

  return (
    <>
      <Head>
        <title>{actualTitle}</title>
        <meta content={description} name="description" />
        <meta content={siteName} property="og:title" />
        <meta content={siteName} property="og:site_name" />
        <meta content={description} property="og:description" />
        <meta content={imageUrl} property="og:image" />
        <meta content="summary_large_image" property="twitter:card" />
        <meta content={twitter} property="twitter:site" />
        <meta content={twitter} property="twitter:creator" />
      </Head>
      <>{children}</>
    </>
  );
};

export default Layout;
