import React from 'react';
import styled from 'styled-components';
import LocationIcon from './compose/LocationIcon';
import TastingNotes from './compose/TastingNotes';

type WineDetailsProps = {
  name: string;
  locationInCellar: string;
  winery: string;
  sellingPrice: string;
  buyingPrice: string;
  quantity: number;
  description: string;
  imgSrc: string;
};

const WineDetails = ({
  name,
  locationInCellar,
  winery,
  sellingPrice,
  buyingPrice,
  quantity,
  description,
  imgSrc,
}: WineDetailsProps) => {
  return (
    <DetailsContainer data-testid={`wine-details-${name}`} >
      <ImageContainer>
        <WineImage alt={name} src={imgSrc} />
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

      <TastingNotes description={description} />

      <Wrapper>
        <Prices>
          <SellingPrice>{sellingPrice}</SellingPrice>
          <BuyingPrice>{buyingPrice}</BuyingPrice>
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
