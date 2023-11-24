import { useKeyboard } from '@react-native-community/hooks';
import { useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import { useRef } from 'react';
import { FlatList } from 'react-native';
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
  const flatListRef = useRef<FlatList | null>(null);
  const keyboard = useKeyboard();

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
    flatListRef?.current?.scrollToEnd();

    if (!isTodayPlantChat || isEmptyPlantChat) {
      return;
    }

    const lastChatting = contents[contents.length - 1];
    const { is_user_chat, isLoading, soil_condition } = lastChatting;

    if (isLoading) {
      const userLastChatting = contents[contents.length - 2];
      const { chatting_content } = userLastChatting;

      mutate({
        chatting_content,
      });
    }

    const shouldAddSoilCheck =
      contents.length === 2 && !is_user_chat && soil_condition === '좋음';

    if (shouldAddSoilCheck) {
      // TODO : soil 이 엉망진창일때 넣기
      return;
    }
  }, [contents]);

  return {
    flatListRef,
    contents,
    date,
    isTodayPlantChat,
    isEmptyPlantChat,
  };
};
