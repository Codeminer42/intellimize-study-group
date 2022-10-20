import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

export type Wine = {
  id: number;
  name: string;
  type: string;
  year: number;
  price: number;
  location: string;
  vineyardId: number;
  wineryId: number;
  imgUrl: string;
};

type Wineries = {
  id: number;
  name: string;
  details: string;
};

type Vineyard = {
  id: number;
  location: string;
  details: string;
};

type WineData = {
  wines: Wine[] | undefined;
  addWine: (newWine: Wine) => void;
};

export const WineContext = createContext<WineData | null>(null);

const fakeWineData: Wine[] = [
  {
    id: 1,
    name: 'Wine test',
    type: 'Tint',
    year: 1967,
    price: 120.0,
    location: 'Sicilia, Italia',
    vineyardId: 1,
    wineryId: 2,
    imgUrl: '/assets/wine.png',
  },
  {
    id: 2,
    name: 'Wine test',
    type: 'Tint',
    year: 1967,
    price: 120.0,
    location: 'Sicilia, Italia',
    vineyardId: 1,
    wineryId: 2,
    imgUrl: '/assets/wine.png',
  },
  {
    id: 3,
    name: 'Wine test',
    type: 'Tint',
    year: 1967,
    price: 120.0,
    location: 'Sicilia, Italia',
    vineyardId: 1,
    wineryId: 2,
    imgUrl: '/assets/wine.png',
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