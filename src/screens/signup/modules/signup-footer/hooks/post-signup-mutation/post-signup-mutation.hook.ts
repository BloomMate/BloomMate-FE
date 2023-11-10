import { useMutation } from 'react-query';

import { defaultAxios, logHttpErrorMessage } from '@/utils';

type PostSignUpRequestProps = {
  id: string;
  pw: string;
  name: string;
  tiiun: string;
  gardensize: number;
  address: string;
};

type PostSignUpResponseData = {
  account_id: string;
  user_name: string;
  password: string;
  tiiun_number: string;
  garden_size: number;
  address: string;
};

export const usePostSignupMutation = () => {
  return useMutation(
    async ({
      id,
      pw,
      name,
      tiiun,
      gardensize,
      address,
    }: PostSignUpRequestProps) => {
      try {
        const { data } = await defaultAxios.post<PostSignUpResponseData>(
          'accounts/signup',
          {
            user_name: name,
            account_id: id,
            password: pw,
            tiiun_number: tiiun,
            garden_size: gardensize,
            address: address,
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
