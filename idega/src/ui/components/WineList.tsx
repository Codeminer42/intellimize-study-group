import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useContainer } from '../../contexts/ContainerContext';
import { Wine } from '../../domain/Wine';

import { Container as BaseContainer } from './Container';
import { WineCard } from './WineCard';

const WineList = () => {
  const [wines, setWines] = useState<Wine[] | []>([]);

  const { getWines } = useContainer();

  useEffect(() => {
    const getAllWines = async () => {
      const wine = await getWines();

      setWines(wine);
    };

    getAllWines();
  }, [getWines]);

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
