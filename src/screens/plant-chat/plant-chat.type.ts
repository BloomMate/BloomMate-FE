import { Dayjs } from 'dayjs';

type ChattingContent = {
  chatting_content: string;
  is_user_chat: boolean;
  soil_condition?: '좋음' | '나쁨';
  isLoading?: boolean;
};

export type PlantChatStateType = {
  date: Dayjs;
  contents: ChattingContent[];
};
