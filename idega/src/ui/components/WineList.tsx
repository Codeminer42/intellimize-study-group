import styled from 'styled-components';

import { Container as BaseContainer } from './Container';
import { useWines } from '../../contexts/WineContext';
import { WineCard } from './WineCard';

const WineList = () => {
  const { wines, addWine } = useWines();

  const newWine = {
    name: 'Vinho',
    year: 2017,
    wineryOfOrigin: 'Bertoletti',
    mainImage: 'https://imageio.forbes.com/specials-images/imageserve//6276c7a49c222289a2752bc2/0x0.jpg?format=jpg',
    sellingPrice: 300,
    quantity: 10,
    moreDetails: {
      description: 'bla bla bla',
      tags: ['fruity', 'sweet', 'citric'],
      alcohol_content: 14.3,
      buying_price: 180,
      location_in_cellar: {
        section: 'A',
        position: '3',
      },
      color: 'rosé',
    },
  };

  return (
    <Container bgColor='transparent'>
      <button onClick={() => addWine(newWine)}>ASD</button>
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
