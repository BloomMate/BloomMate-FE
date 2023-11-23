import { useRoute } from '@react-navigation/native';
import isUndefined from 'lodash/isUndefined';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { PlantChatScreenNavigationRouteProps } from '../../../../plant-chat.screen';
import { $plantChatState } from '../../../../plant-chat.state';

import { useGetPlantChattingQuery } from '@/hooks';

export const useGetChattingContentsByDate = () => {
  const {
    params: { id },
  } = useRoute<PlantChatScreenNavigationRouteProps>();

  const [plantChat, setPlantChat] = useRecoilState($plantChatState);
  const { date } = plantChat;

  const { data } = useGetPlantChattingQuery({
    plant_id: id,
    date: date.format('YYYY-MM-DD'),
  });

  useEffect(() => {
    if (isUndefined(data)) {
      return;
    }

    setPlantChat(prev => ({ ...prev, contents: [...data.DATA] }));
  }, [data]);
};
