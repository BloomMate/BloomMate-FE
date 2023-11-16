import { useQuery } from 'react-query';

export type Question = {
  id: number;
  created_at: string;
  question_title: string;
  question_content: string;
  is_answered: boolean;
};

export type QuestionListResponse = {
  DATA: Question[];
};
export const useGetQuestionListQuery = () => {
  return useQuery<QuestionListResponse>('/community/?page_size=10');
};
