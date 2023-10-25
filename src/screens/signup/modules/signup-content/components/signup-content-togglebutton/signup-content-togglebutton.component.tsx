import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import { Pressable } from 'react-native';

import { SignUpForm } from '../../../../hooks';
import { ESignUpStep } from '../../../../signup.state';

import { Text } from '@/atoms';

type SignUpContentTogglebuttonComponentProps = {
  screenStep: ESignUpStep;
  field: ControllerRenderProps<SignUpForm, ESignUpStep.TURF_INPUT>;
  fieldState: ControllerFieldState;
};

export const SignUpContentTogglebuttonComponent =
  memo<SignUpContentTogglebuttonComponentProps>(({}) => {
    return (
      <Stack space={24}>
        <Pressable>
          {({ pressed }) => (
            <Stack space={20}>
              <Box
                style={[
                  pressed && {
                    backgroundColor: 'green',
                  },
                ]}>
                <Text variants="bodyMedium" fontWeight="Light" color="black">
                  5평
                </Text>
              </Box>
            </Stack>
          )}
        </Pressable>
      </Stack>
    );
  });
