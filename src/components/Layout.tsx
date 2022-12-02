import Head from 'next/head';
import { ReactNode } from 'react';
import metadata from 'libs/metadata';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  const actualTitle = title ? `${title} / ${metadata.siteName}` : metadata.siteName;

  return (
    <>
      <Head>
        <title>{actualTitle}</title>
        <meta content={metadata.description} name="description" />
        <meta content={metadata.siteName} property="og:title" />
        <meta content={metadata.siteName} property="og:site_name" />
        <meta content={metadata.description} property="og:description" />
        <meta content={`${metadata.deployUrl}/api/og`} property="og:image" />
        <meta content="summary_large_image" property="twitter:card" />
        <meta content={metadata.twitter} property="twitter:site" />
        <meta content={metadata.twitter} property="twitter:creator" />
      </Head>
      <>{children}</>
    </>
  );
};

export default Layout;
