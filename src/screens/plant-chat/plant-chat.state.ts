import dayjs from 'dayjs';
import isEmpty from 'lodash/isEmpty';
import { atom, selector } from 'recoil';

import { PlantChatStateType } from './plant-chat.type';

export const $plantChatState = atom<PlantChatStateType>({
  key: 'plantChatState',
  default: {
    date: dayjs(),
    contents: [],
  },
});

export const $plantChatSelector = selector({
  key: 'isTodayPlantChat',
  get: ({ get }) => {
    const { date, contents } = get($plantChatState);

    const isTodayPlantChat = date.isToday();
    const isEmptyPlantChat = isEmpty(contents);

    return {
      isTodayPlantChat,
      isEmptyPlantChat,
    };
  },
});
