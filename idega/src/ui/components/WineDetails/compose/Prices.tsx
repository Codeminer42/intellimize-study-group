import styled from 'styled-components';

type PricesProps = {
  sellingPrice: string;
  buyingPrice: string;
};

const Prices = ({ sellingPrice, buyingPrice }: PricesProps) => {
  return (
    <PricesContainer>
      <SellingPrice>{sellingPrice}</SellingPrice>
      <BuyingPrice>{buyingPrice}</BuyingPrice>
    </PricesContainer>
  );
};

const PricesContainer = styled.div`
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

export default Prices;
