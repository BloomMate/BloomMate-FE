import { useQuery } from 'react-query';

export type QuestionDetail = {
  id: number;
  created_at: string;
  question_title: string;
  question_content: string;
  is_answered: boolean;
};
export type QuestionDetailResponse = {
  DATA: QuestionDetail[];
};
export const useGetQuestionDetailQuery = (id: number) => {
  return useQuery<QuestionDetailResponse>(`/community/?${id}`);
};
