import { useMutation } from 'react-query';

import { defaultAxios, logHttpErrorMessage } from '@/utils';

type PostCommunityQnARequestProps = {
  question_title: string;
  question_content: string;
};

type PostCommunityQnAData = {
  id: number;
  question_title: string;
  question_date: string;
  question_updated_date: string;
  user: string;
  question_content: string;
};

export const usePostCommunityQnaMutation = () => {
  return useMutation(
    async ({
      question_title,
      question_content,
    }: PostCommunityQnARequestProps) => {
      try {
        const { data } = await defaultAxios.post<PostCommunityQnAData>(
          '/community/create/',
          {
            question_title: question_title,
            question_content: question_content,
          },
        );

        return data;
      } catch (error) {
        logHttpErrorMessage(error);
        throw new Error(error as string);
      }
    },
  );
};
