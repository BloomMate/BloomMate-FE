import { useResetRecoilState } from 'recoil';
import { useWillUnmount } from 'rooks';

import { $signUpState } from '../../signup.state';

export const useSignUpResetState = () => {
  const resetSignUpState = useResetRecoilState($signUpState);

  useWillUnmount(() => resetSignUpState());
};
