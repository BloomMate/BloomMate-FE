import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { MutationIndicator } from './mutation-indicator.component';

export type MutationIndicatorContextType = {
  setDependencyArray: Dispatch<SetStateAction<boolean[]>>;
};
export type MutationIndicatorProviderProps = PropsWithChildren<{}>;

export const MutationIndicatorContext =
  createContext<MutationIndicatorContextType | null>(null);

export const MutationIndicatorProvider = ({
  children,
}: MutationIndicatorProviderProps) => {
  const [isMutating, setIsMutating] = useState<boolean>(false);
  const [dependencyArray, setDependencyArray] = useState<boolean[]>([false]);

  useEffect(() => {
    const isTrue = (value: boolean) => value;
    const isOneOfDependencyTrue = dependencyArray.some(isTrue);
    setIsMutating(isOneOfDependencyTrue);
  }, [dependencyArray]);

  return (
    <MutationIndicatorContext.Provider value={{ setDependencyArray }}>
      <MutationIndicator isMutating={isMutating} />
      {children}
    </MutationIndicatorContext.Provider>
  );
};

export const useMutationIndicatorContext = () => {
  const context = useContext(MutationIndicatorContext);

  if (!context) {
    throw new Error(
      'useLoadingModal must be used within a LoadingModalProvider',
    );
  }
  return context;
};
