import { useMutation } from 'react-query';

import { defaultAxios, logHttpErrorMessage } from '@/utils';

type PostSignUpRequestProps = {
  id: string;
  pw: string;
  name: string;
};

type PostSignUpResponseData = {
  account_id: string;
  user_name: string;
  password: string;
};

export const useSendSignupMutation = () => {
  return useMutation(async ({ id, pw, name }: PostSignUpRequestProps) => {
    try {
      const { data } = await defaultAxios.post<PostSignUpResponseData>(
        'accounts/signup/',
        {
          user_name: name,
          account_id: id,
          password: pw,
        },
      );

      return data;
    } catch (error) {
      logHttpErrorMessage(error);
      throw new Error(error as string);
    }
  });
};
