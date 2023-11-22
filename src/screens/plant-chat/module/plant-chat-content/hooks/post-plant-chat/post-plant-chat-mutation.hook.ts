import { useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';

import { PlantChatScreenNavigationRouteProps } from '../../../../plant-chat.screen';
import { $plantChatState } from '../../../../plant-chat.state';

import { defaultAxios } from '@/utils';

export type PostPlantChatResponseType = {
  chatting_content: string;
  is_user_chat: boolean;
  plant_id: number;
};

export const usePostPlantChat = () => {
  const {
    params: { id },
  } = useRoute<PlantChatScreenNavigationRouteProps>();
  const setPlantChat = useSetRecoilState($plantChatState);

  return useMutation(
    async ({ chatting_content }: { chatting_content: string }) => {
      const { data } = await defaultAxios.post<PostPlantChatResponseType>(
        'chatGPT/chat',
        { chatting_content },
        { params: { plant_id: id, date: dayjs().format('YYYY-MM-DD') } },
      );

      setPlantChat(prev => ({
        ...prev,
        contents: [
          ...prev.contents,
          { is_user_chat: false, chatting_content: data.chatting_content },
        ],
      }));

      return;
    },
  );
};
