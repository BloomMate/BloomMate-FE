import { Stack } from '@mobily/stacks';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';

import { $signUpState } from '../../signup.state';

import {
  SignUpContentIdComponent,
  SignUpContentInfoComponent,
  SignUpContentNameComponent,
} from './components';
import { getInfoByScreenStep } from './signup-content.util';

type SignUpContentModuleProps = {};

export const SignUpContentModule = memo<SignUpContentModuleProps>(() => {
  const { screenStep } = useRecoilValue($signUpState);
  const info = getInfoByScreenStep(screenStep);

  return (
    <Stack space={24}>
      <SignUpContentInfoComponent info={info} />
      <SignUpContentNameComponent screenStep={screenStep} />
      <SignUpContentIdComponent screenStep={screenStep} />
    </Stack>
  );
});
