import { useQuery } from 'react-query';

export type QuestionDetail = {
  id: number;
  question_title: string;
  created_at: string;
  question_content: string;
  is_answered: boolean;
};

export type QuestionDetailComment = {
  id: number;
  created_at: string;
  comment_content: string;
};

export type QuestionDetailResponse = {
  question: QuestionDetail;
  comment: QuestionDetailComment;
};

export const useGetQuestionDetailQuery = (id: number) => {
  return useQuery<QuestionDetailResponse>([
    `/community/question_detail`,
    { question_id: id },
  ]);
};
