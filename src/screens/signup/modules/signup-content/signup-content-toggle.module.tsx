import { Stack } from '@mobily/stacks';
import { useFormContext, useController } from 'react-hook-form';

import { SignUpForm } from '../../hooks';
import { ESignUpStep } from '../../signup.state';

import { SignUpContentToggleButtonComponent } from './components';

export const SignUpTurfModule = () => {
  const { control } = useFormContext<SignUpForm>();
  const { field, fieldState } = useController({
    control,
    name: ESignUpStep.TURF_INPUT,
  });
  const { onChange, value } = field;

  const handlePressTurfButton = (testID: number) => {
    onChange(testID);
  };

  return (
    <Stack space={24} align="center">
      {[0, 1, 2].map(v => (
        <SignUpContentToggleButtonComponent
          key={v}
          value={v as 0 | 1 | 2}
          onPress={() => handlePressTurfButton(v)}
          selected={v === value}
        />
      ))}
    </Stack>
  );
};
