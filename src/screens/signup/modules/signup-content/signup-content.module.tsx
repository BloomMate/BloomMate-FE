import { Stack } from '@mobily/stacks';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';

import { $signUpState, ESignUpStep } from '../../signup.state';

import { SignUpContentInfoComponent } from './components';
import {
  SignUpIdInputModule,
  SignUpNameInputModule,
  SignUpPasswordInputModule,
  SignUpTiiunInputModule,
} from './signup-content-input.module';
import { SignUpTurfModule } from './signup-content-toggle.module';
import { getInfoByScreenStep } from './signup-content.util';

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
      case ESignUpStep.PW_INPUT:
        return <SignUpPasswordInputModule />;
      case ESignUpStep.TIIUN_INPUT:
        return <SignUpTiiunInputModule />;
      case ESignUpStep.TURF_INPUT:
        return <SignUpTurfModule />;
      // TODO: 주소 모달 만들기
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
