import React from 'react';
import styled from 'styled-components';
import LocationIcon from './compose/LocationIcon';
import TastingNotes from './compose/TastingNotes';

type WineDetailsProps = {
  name: string;
  locationInCellar: string;
  winery: string;
  sellingPrice: number;
  buyingPrice: number;
  quantity: number;
};

//todo: add buttons
const WineDetails = ({ name, locationInCellar, winery, sellingPrice, buyingPrice, quantity }: WineDetailsProps) => {
  return (
    <DetailsContainer>
      <ImageContainer>
        <WineImage
          alt='wine-image'
          src='https://imageio.forbes.com/specials-images/imageserve//6276c7a49c222289a2752bc2/0x0.jpg?format=jpg'
        ></WineImage>
      </ImageContainer>

      <Name>{name}</Name>
      <LocationsWrapper>
        <Locations>
          <LocationIcon />
          {locationInCellar}
        </Locations>
        <Locations>
          <LocationIcon />
          {winery}
        </Locations>
      </LocationsWrapper>

      <TastingNotes />

      <Wrapper>
        <Prices>
          <SellingPrice>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(sellingPrice)}
          </SellingPrice>
          <BuyingPrice>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(buyingPrice)}
          </BuyingPrice>
        </Prices>
        <Quantity>{quantity} un</Quantity>
      </Wrapper>
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div``;

const Name = styled.h1`
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 32px;
  color: #1f1f1f;

  padding-top: 30px;
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const WineImage = styled.img`
  max-height: 356px;
  border-radius: 20px;
`;

const LocationsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 30px 60px;
`;

const Locations = styled.a`
  display: flex;
  align-items: center;

  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 18px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
  padding: 30px;
`;

const Prices = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
`;

const SellingPrice = styled.h3`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 34px;
  color: #1f1f1f;
`;

const BuyingPrice = styled.h4`
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 20px;
  color: #1f1f1f;
`;

const Quantity = styled.h3`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 34px;

  color: #1f1f1f;
`;

export default WineDetails;
