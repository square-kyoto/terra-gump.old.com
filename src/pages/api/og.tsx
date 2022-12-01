import { ImageResponse } from '@vercel/og';
import metadata from 'libs/metadata';

export const config = {
  runtime: 'experimental-edge',
};

const handler: ImageResponse = () => {
  const { deployUrl } = metadata;

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
          src={`${deployUrl}/static/og-logo.png`}
          width="275"
        />
      </div>
    )
  );
};

export default handler;
// src={`${deployUrl}/static/og-logo.png`}
