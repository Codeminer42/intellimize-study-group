import styled from 'styled-components';

type WineImageProps = {
  alt: string;
  src: string;
};

const WineImage = ({ alt, src }: WineImageProps) => {
  return (
    <ImageContainer>
      <Image alt={alt} src={src} />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  width: 100%;
`;

const Image = styled.img`
  max-height: 356px;
  border-radius: 20px;
`;

export default WineImage;
