import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Wine } from '../domain/Wine';
import { useContainer } from './ContainerContext';

type WineData = {
  wines: Wine[] | undefined;
  addWine: (newWine: Wine) => void;
};

export const WineContext = createContext<WineData | null>(null);

export const WineDataProvider = ({ children }: { children: ReactNode }) => {
  const [wines, setWines] = useState<Wine[] | []>([]);

  const { getWines } = useContainer();

  useEffect(() => {
    const getAllWines = async () => {
      const wine = await getWines();

      setWines(wine);
    };

    getAllWines();
  }, [getWines]);

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
