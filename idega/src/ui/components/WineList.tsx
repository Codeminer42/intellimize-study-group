import styled from 'styled-components';
import { Container as BaseContainer } from './Container';
import { WineCard } from './WineCard';

const fakeArr = Array.from(Array(20).keys());

const WineList = () => {
  return (
    <Container bgColor='transparent'>
      {fakeArr.map((i) => (
        <WineCard key={i} />
      ))}
    </Container>
  );
};

const Container = styled(BaseContainer)`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 22px 25px;
`;

export { WineList };
