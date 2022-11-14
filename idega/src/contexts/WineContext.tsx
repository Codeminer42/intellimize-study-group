import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Wine } from '../domain/Wine';
import { useContainer } from './ContainerContext';

type WineData = {
  wines: Wine.Type[] | undefined;
  addWine: (newWine: Omit<Wine.Type, 'id'>) => void;
};

export const WineContext = createContext<WineData | null>(null);

export const WineDataProvider = ({ children }: { children: ReactNode }) => {
  const [wines, setWines] = useState<Wine.Type[]>([]);
  const [selectedWine, setSelectedWine] = useState<Wine.Type | undefined>();

  const { getWines, createWine, getWineById } = useContainer();

  const getById = useCallback(
    async (id: number) => {
      const wine = await getWineById(id);
      setSelectedWine(wine);
    },
    [getWineById]
  );

  const getAllWines = useCallback(async () => {
    const fetchedWines = await getWines();
    setWines(fetchedWines);
  }, [getWines]);

  const addWine = useCallback(
    async (newWineData: Omit<Wine.Type, 'id'>) => {
      const newWine = await createWine(newWineData);
      setWines((oldWinesList) => [...oldWinesList, newWine]);
    },
    [setWines, createWine]
  );

  useEffect(() => {
    getAllWines();
  }, [getAllWines]);

  const value = useMemo(
    () => ({
      wines,
      selectedWine,
      addWine,
      getById,
    }),
    [wines, addWine, getById, selectedWine]
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
