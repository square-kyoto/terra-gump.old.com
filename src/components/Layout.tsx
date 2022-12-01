import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title?: string;
};

const siteName = 'ワインバーテラ・PUB GUMP';
const description = '手作りの焼きたてのピザをお持ち帰り頂けます！';

const Layout = ({ children, title }: Props) => {
  const actualTitle = title ? `${title} / ${siteName}` : siteName;
  return (
    <>
      <Head>
        <title>{actualTitle}</title>
        <meta content={description} name="description" />
      </Head>
      <>{children}</>
    </>
  );
};

export default Layout;
