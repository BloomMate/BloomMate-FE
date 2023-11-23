import { useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import { useMutation } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useDidUpdate } from 'rooks';

import { PlantChatScreenNavigationRouteProps } from '../../../../plant-chat.screen';
import {
  $plantChatSelector,
  $plantChatState,
} from '../../../../plant-chat.state';

import { defaultAxios } from '@/utils';

export type PostPlantChatResponseType = {
  chatting_content: string;
  soil_condition: '좋음' | '나쁨';
  is_user_chat: boolean;
  plant_id: number;
};

export const usePostPlantChat = () => {
  const {
    params: { id },
  } = useRoute<PlantChatScreenNavigationRouteProps>();

  const [plantChat, setPlantChat] = useRecoilState($plantChatState);

  const { isTodayPlantChat, isEmptyPlantChat } =
    useRecoilValue($plantChatSelector);
  const { contents, date } = plantChat;

  const { mutate } = useMutation(
    async ({ chatting_content }: { chatting_content: string }) => {
      const { data } = await defaultAxios.post<PostPlantChatResponseType>(
        'chatGPT/chat',
        { chatting_content },
        { params: { plant_id: id, date: dayjs().format('YYYY-MM-DD') } },
      );

      setPlantChat(prev => ({
        ...prev,
        contents: [
          ...prev.contents.slice(0, -1),
          {
            is_user_chat: false,
            chatting_content: data.chatting_content,
            soil_condition: data.soil_condition,
            isLoading: false,
          },
        ],
      }));

      return;
    },
  );

  useDidUpdate(() => {
    if (!isTodayPlantChat) {
      return;
    }
    const lastChatting = contents[contents.length - 1];
    const { chatting_content, is_user_chat } = lastChatting;

    if (!is_user_chat) {
      return;
    }

    mutate({
      chatting_content,
    });
  }, [contents]);

  return {
    contents,
    date,
    isTodayPlantChat,
    isEmptyPlantChat,
  };
};
