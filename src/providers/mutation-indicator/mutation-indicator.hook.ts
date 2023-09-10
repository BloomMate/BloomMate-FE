import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

import { useMutationIndicatorContext } from './mutation-indicator.provider';

export const useMutationIndicator = (dependencyArray: Array<boolean>) => {
  const { setDependencyArray } = useMutationIndicatorContext();

  useFocusEffect(
    useCallback(() => {
      setDependencyArray(dependencyArray);
      return () => setDependencyArray([false]);
    }, [JSON.stringify(dependencyArray)]),
  );
};
