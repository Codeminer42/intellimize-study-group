import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

export type Wine = {
  id: number;
  name: string;
  year: number;
  wineryOfOrigin: string;
  mainImage: string;
  sellingPrice: number;
  quantity: number;
  moreDetails: WineMoreDetails;
};

type WineMoreDetails = {
  description: string;
  tags: string[];
  alcohol_content: number;
  buying_price: number;
  location_in_cellar: {
    section: string;
    position: string;
  };
  color: string;
};

type WineData = {
  wines: Wine[] | undefined;
  addWine: (newWine: Wine) => void;
};

export const WineContext = createContext<WineData | null>(null);

const fakeWineData: Wine[] = [
  {
    id: 1,
    name: 'Vinho',
    year: 2017,
    wineryOfOrigin: 'Bertoletti',
    mainImage: 'https://imageio.forbes.com/specials-images/imageserve//6276c7a49c222289a2752bc2/0x0.jpg?format=jpg',
    sellingPrice: 300.0,
    quantity: 10,
    moreDetails: {
      description: 'bla bla bla',
      tags: ['fruity', 'sweet', 'citric'],
      alcohol_content: 14.3,
      buying_price: 180.0,
      location_in_cellar: {
        section: 'A',
        position: '3',
      },
      color: 'rosé',
    },
  },
  {
    id: 2,
    name: 'Vinho',
    year: 2017,
    wineryOfOrigin: 'Bertoletti',
    mainImage: 'https://imageio.forbes.com/specials-images/imageserve//6276c7a49c222289a2752bc2/0x0.jpg?format=jpg',
    sellingPrice: 300.0,
    quantity: 10,
    moreDetails: {
      description: 'bla bla bla',
      tags: ['fruity', 'sweet', 'citric'],
      alcohol_content: 14.3,
      buying_price: 180.0,
      location_in_cellar: {
        section: 'A',
        position: '3',
      },
      color: 'rosé',
    },
  },
  {
    id: 3,
    name: 'Vinho',
    year: 2017,
    wineryOfOrigin: 'Bertoletti',
    mainImage: 'https://imageio.forbes.com/specials-images/imageserve//6276c7a49c222289a2752bc2/0x0.jpg?format=jpg',
    sellingPrice: 300.0,
    quantity: 10,
    moreDetails: {
      description: 'bla bla bla',
      tags: ['fruity', 'sweet', 'citric'],
      alcohol_content: 14.3,
      buying_price: 180.0,
      location_in_cellar: {
        section: 'A',
        position: '3',
      },
      color: 'rosé',
    },
  },
];

export const WineDataProvider = ({ children }: { children: ReactNode }) => {
  const [wines, setWines] = useState<Wine[] | []>(fakeWineData);

  const addWine = useCallback(
    (newWine: Wine) => {
      setWines((oldWinesList) => [...oldWinesList, newWine]);
    },
    [setWines]
  );

  const value = useMemo(
    () => ({
      wines,
      addWine,
    }),
    [wines, addWine]
  );

  return <WineContext.Provider value={value}>{children}</WineContext.Provider>;
};

const useWines = () => {
  const winesContext = useContext(WineContext);

  if (!winesContext) {
    throw new Error('useWines hook needs to be inside a WinesContext');
  }

  return winesContext;
};

export { useWines };
