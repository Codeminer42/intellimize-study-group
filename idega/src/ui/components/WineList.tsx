import styled from 'styled-components';

import { useWines } from '../../contexts/WineContext';
import { Container as BaseContainer } from './Container';
import { WineCard } from './WineCard';

const WineList = () => {
  const { wines } = useWines();

  return (
    <Container bgColor='transparent'>
      {wines && wines.map(({ id, ...wineData }) => <WineCard key={id} id={id} {...wineData} />)}
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
