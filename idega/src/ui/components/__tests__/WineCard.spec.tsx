import { render, screen, fireEvent } from '@testing-library/react';
import { WineCard } from '../WineCard';

describe('<WineCard/>', () => {
  let WineMock = {
    name: 'afsdf',
    year: '2ewrewr7',
    locationInCellar: 'Lrewrewrwelar',
    winery: 'Pasrewrewrew',
    sellingPrice: 4300,
    buyingPrice: 1240,
    quantity: 43243,
    cardImgSrc: '/assets/wine.png',
    imgSrc: 'https://imageio.forbes.com/specials-images/imageserve//6276c7a49c222289a2752bc2/0x0.jpg',
    description: 'Tasting notes - insert here short text about wines. 2 lines of text max.',
  };

  describe('When clicked', () => {
    //todo: reset mocks after/before each
    // it.skip('calls openModal', () => {
    //   const openModal = jest.fn();
    //   // jest.spyOn(openModal)
    //   jest.mock('../../hooks/useModal', openModal);

    //   render(<WineCard wine={WineMock} />);

    //   fireEvent.click(screen.getByRole('article'));
    //   expect(openModal).toHaveBeenCalled();
    // });

    it('renders Wine Details component', async () => {
      render(<WineCard wine={WineMock} />);

      fireEvent.click(screen.getByRole('article'));
      const WineDetails = await screen.findByTestId(`wine-details-${WineMock.name}`)
      expect(WineDetails).toBeVisible();
    });
  });
});
