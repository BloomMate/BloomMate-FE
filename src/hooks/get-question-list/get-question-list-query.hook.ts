import { useQuery } from 'react-query';

export type QuestionListResponse = [
  {
    id: string;
    created_at: string;
    question_title: string;
    question_content: string;
    is_answered: boolean;
  },
];

export const useGetQuestionListQuery = () => {
  return useQuery<QuestionListResponse>('/community/?page_size=10');
};
