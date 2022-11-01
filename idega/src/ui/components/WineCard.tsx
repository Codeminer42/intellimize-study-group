import Image from 'next/image';
import styled from 'styled-components';
import WineDetails from './WineDetails/WineDetails';
import { useModal } from '../../hooks/useModal';
import formatNumberToCurrency from '../../utils/formatNumberToCurrency';

const WineMock = {
  name: 'Saxum Gratias',
  year: '2017',
  locationInCellar: 'Location in Cellar',
  winery: 'Paso Robles, CA',
  sellingPrice: 300,
  buyingPrice: 180,
  quantity: 5,
  cardImgSrc: '/assets/wine.png',
  imgSrc: 'https://imageio.forbes.com/specials-images/imageserve//6276c7a49c222289a2752bc2/0x0.jpg',
  description: 'Tasting notes - insert here short text about wines. 2 lines of text max.',
};

//todo: add type to wine
const WineCard = ({ wine = WineMock }) => {
  const { name, year, locationInCellar, winery, sellingPrice, buyingPrice, quantity, cardImgSrc, imgSrc, description } =
    wine;
  const sellingPriceFormated = formatNumberToCurrency(sellingPrice);
  const buyingPriceFormated = formatNumberToCurrency(buyingPrice);
  //todo: test if values are formatted
  
  const openModal = useModal({
    content: (
      <WineDetails
        name={name}
        locationInCellar={locationInCellar}
        winery={winery}
        sellingPrice={sellingPriceFormated}
        buyingPrice={buyingPriceFormated}
        quantity={quantity}
        description={description}
        imgSrc={imgSrc}
      />
    ),
  });

  return (
    <Container onClick={openModal}>
      <ImageContainer>
        <Image src={cardImgSrc} alt={name} layout='fill' />
      </ImageContainer>
      <DescriptionContainer>
        <Heading>
          <span>{year}</span>
          <span>{name}</span>
          <Vineyard>{winery}</Vineyard>
        </Heading>
        <span>{sellingPriceFormated}</span>
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

  :hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
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
