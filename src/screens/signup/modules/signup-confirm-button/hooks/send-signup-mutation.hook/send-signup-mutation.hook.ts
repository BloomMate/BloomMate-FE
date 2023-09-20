import { useMutation } from 'react-query';

import { useMutationIndicator } from '@/providers';
import { defaultAxios, logHttpErrorMessage } from '@/utils';

type Newperson = {
  account_id: string;
  user_name: string;
  password: string;
};

export const useSendSignupMutation = () => {
  const { isLoading, mutateAsync } = useMutation(
    async ({ id, pw, name }: { id: string; pw: string; name: string }) => {
      try {
        const { data } = await defaultAxios.post('accounts/signup/', {
          user_name: name,
          account_id: id,
          password: pw,
        });
      } catch (error) {
        logHttpErrorMessage(error);
        throw new Error(error as string);
      }
    },
  );

  useMutationIndicator([isLoading]);
  return { mutateAsync };
};
