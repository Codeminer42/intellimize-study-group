import React from 'react';
import styled from 'styled-components';

import Prices from './compose/Prices';
import AmountInStorage from './compose/AmountInStorage';
import TastingNotes from './compose/TastingNotes';
import WineImage from './compose/WineImage';
import WineLocations from './compose/WineLocations';

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
    <DetailsContainer data-testid={`wine-details-${name}`}>
      <WineImage alt={name} src={imgSrc} />

      <Name>{name}</Name>
      <WineLocations locationInCellar={locationInCellar} winery={winery} />

      <TastingNotes description={description} />

      <Wrapper>
        <Prices sellingPrice={sellingPrice} buyingPrice={buyingPrice} />
        <AmountInStorage quantity={quantity} />
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
  padding: 30px;
`;

export default WineDetails;
