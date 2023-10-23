import { Stack } from '@mobily/stacks';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';

import { $signUpState, ESignUpStep } from '../../signup.state';

import { SignUpContentInfoComponent } from './components';
import { getInfoByScreenStep } from './signup-content.util';
import { SignUpIdInputModule } from './signup-id-input.module';
import { SignUpNameInputModule } from './signup-name-input.module';

type SignUpContentModuleProps = {};

export const SignUpContentModule = memo<SignUpContentModuleProps>(() => {
  const { screenStep } = useRecoilValue($signUpState);
  const info = getInfoByScreenStep(screenStep);

  const renderInputs = () => {
    switch (screenStep) {
      case ESignUpStep.NAME_INPUT:
        return <SignUpNameInputModule />;
      case ESignUpStep.ID_INPUT:
        return <SignUpIdInputModule />;
      default:
        return null;
    }
  };

  return (
    <Stack space={24}>
      <SignUpContentInfoComponent info={info} />
      {renderInputs()}
    </Stack>
  );
});
