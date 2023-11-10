import { useMutation } from 'react-query';

import { defaultAxios, logHttpErrorMessage } from '@/utils';

type PostLoginRequestProps = {
  id: string;
  pw: string;
};

type PostLoginResponseData = {
  account_id: string;
  user_name: string;
  password: string;
  tiiun_number: string;
  garden_size: string;
  address: string;
  token: object;
};

export const usePostLoginMutation = () => {
  return useMutation(async ({ id, pw }: PostLoginRequestProps) => {
    try {
      const { data } = await defaultAxios.post<PostLoginResponseData>(
        'accounts/login',
        {
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
