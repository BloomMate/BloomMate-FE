import { Dayjs } from 'dayjs';

export type PlantChatStateType = {
  date: Dayjs;
  contents: { chatting_content: string; is_user_chat: boolean }[];
};
