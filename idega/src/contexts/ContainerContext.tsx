import { createContext, ReactNode, useContext } from 'react';
import { container } from '../container';

const ContainerContext = createContext(container);

type ContainerProviderProps = { children: ReactNode };

export const ContainerProvider = ({ children }: ContainerProviderProps) => (
  <ContainerContext.Provider value={container}>{children}</ContainerContext.Provider>
);

export const useContainer = () => {
  const containerContext = useContext(ContainerContext);

  return containerContext;
};
