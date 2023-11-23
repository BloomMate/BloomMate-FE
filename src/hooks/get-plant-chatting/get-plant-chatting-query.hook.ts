import { useQuery } from 'react-query';

export type PlantChattingResponse = {
  DATA: {
    id: number;
    chatting_content: string;
    is_user_chat: boolean;
    created_at: string;
  }[];
  plant_nickname: string;
};

export type PlantChattingResponseParams = {
  plant_id: number;
  date: string;
};

export const useGetPlantChattingQuery = ({
  plant_id,
  date,
}: PlantChattingResponseParams) => {
  return useQuery<PlantChattingResponse>(['chatGPT/chat', { plant_id, date }]);
};
