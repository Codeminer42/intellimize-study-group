import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { WineCard } from '../WineCard';
import { useModal } from '../../../hooks/useModal';

jest.mock('../../../hooks/useModal');

describe('<WineCard/>', () => {
  let WineMock = {
    name: 'Wine',
    year: '1999',
    locationInCellar: 'Somewhere',
    winery: 'Winery',
    sellingPrice: 200,
    buyingPrice: 100,
    quantity: 10,
    cardImgSrc: '/assets/wine.png',
    imgSrc: 'https://imageio.forbes.com/specials-images/imageserve//6276c7a49c222289a2752bc2/0x0.jpg',
    description: 'Tasting notes - insert here short text about wines. 2 lines of text max.',
  };

  describe('When clicked', () => {
    afterEach(cleanup);
    it('calls openModal', () => {
      const openModal = jest.fn();
      (useModal as any).mockImplementation(() => openModal);

      render(<WineCard wine={WineMock} />);
      fireEvent.click(screen.getByRole('article'));
      expect(openModal).toHaveBeenCalled();
    });
  });
});
