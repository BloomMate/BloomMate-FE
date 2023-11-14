import { useResetRecoilState } from 'recoil';
import { useWillUnmount } from 'rooks';

import { $plantAddState } from '../../plant-add.state';

export const useResetPlantState = () => {
  const resetState = useResetRecoilState($plantAddState);

  useWillUnmount(() => {
    resetState();
  });
};
