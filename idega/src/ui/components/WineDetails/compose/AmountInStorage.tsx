import styled from 'styled-components';

const AmountInStorage = ({ quantity }: { quantity: number }) => {
  return <Container>{quantity} un</Container>;
};

const Container = styled.h3`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 34px;

  color: #1f1f1f;
`;

export default AmountInStorage;
