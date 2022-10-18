import NextImage from 'next/image';
import styled from 'styled-components';

const Picture = styled.picture`
  position: relative;
  overflow: hidden;
`;

const Image = ({ src, alt, sizes, ...rest }) => {
  return (
    <Picture {...rest}>
      <NextImage
        src={src}
        alt={alt}
        sizes={sizes}
        quality={85}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        loading="lazy"
      />
    </Picture>
  );
};

export default Image;
