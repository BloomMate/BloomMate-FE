import dayjs from 'dayjs';
import { atom } from 'recoil';

import { PlantChatStateType } from './plant-chat.type';

export const $plantChatState = atom<PlantChatStateType>({
  key: 'plantChatState',
  default: {
    date: dayjs(),
    contents: [],
  },
});
