import Image from 'next/image';

type Props = {
  alt: string;
  height: number;
  src: string;
  width: number;
};

const ResponsiveImage = ({ src, height, width, alt }: Props) => {
  return (
    <Image
      alt={alt}
      height={height}
      sizes="100vw"
      src={src}
      style={{
        height: 'auto',
        width: '100%',
      }}
      width={width}
    />
  );
};

export default ResponsiveImage;
