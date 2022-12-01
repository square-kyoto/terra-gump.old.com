import { ImageResponse } from '@vercel/og';
import getConfig from 'next/config';

export const config = {
  runtime: 'experimental-edge',
};

const handler: ImageResponse = () => {
  const { publicRuntimeConfig } = getConfig();

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 60,
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <img
          alt="logo -- TeRRa"
          height="316"
          src={`${publicRuntimeConfig.deployUrl}/static/og-logo.png`}
          width="275"
        />
      </div>
    )
  );
};

export default handler;
