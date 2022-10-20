import Image from 'next/image';
import styled from 'styled-components';

type WineCardProps = {
  id: number;
  name: string;
  year: number;
  price: number;
  location: string;
  imgUrl: string;
};

const WineCard = ({ name, year, price, location, imgUrl }: WineCardProps) => {
  return (
    <Container>
      <ImageContainer>
      <Image src={imgUrl} alt={`${year} ${name}`} layout='fill' />
      </ImageContainer>
      <DescriptionContainer>
        <Heading>
        <span>{year}</span>
          <span>{name}</span>
          <Vineyard>{location}</Vineyard>
        </Heading>
        <span>{price}</span>
      </DescriptionContainer>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  width: 100%;
  max-width: 200px;

  background: #ffffff;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  padding: 10px 8px;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 175px;
  width: 75px;

  margin-right: 8px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 12px 0;
`;

const Heading = styled.h1`
  display: flex;
  flex-direction: column;

  font-weight: 300;
  font-size: 20px;
  line-height: 1.2;
`;

const Vineyard = styled.span`
  font-size: 12px;
  line-height: 1.25;
`;

export { WineCard };
