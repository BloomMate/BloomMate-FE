import { useResetRecoilState } from 'recoil';
import { useWillUnmount } from 'rooks';

import { $plantChatState } from '../../plant-chat.state';

export const useResetPlantChatState = () => {
  const resetPlantChatState = useResetRecoilState($plantChatState);

  useWillUnmount(() => {
    resetPlantChatState();
  });
};
