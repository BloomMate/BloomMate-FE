import { Box, Stack } from '@mobily/stacks';
import { useFormContext, useController } from 'react-hook-form';
import { Pressable } from 'react-native';

import { SignUpForm } from '../../hooks';
import { ESignUpStep } from '../../signup.state';

import { Text } from '@/atoms';
import { palette } from '@/utils';

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
      <Pressable
        style={{ width: '100%' }}
        onPress={() => handlePressTurfButton(0)}>
        {({ pressed }) => (
          <Box
            style={[
              {
                height: 60,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: palette['gray-700'],
              },
              value === 1 && { backgroundColor: palette['teal-100'] },
            ]}
            alignX="center"
            alignY="center">
            <Text
              variants="labelLarge"
              fontWeight="Medium"
              color="gray-700"
              textAlignment="center">
              소형
            </Text>
          </Box>
        )}
      </Pressable>
      <Pressable
        style={{ width: '100%' }}
        onPress={() => handlePressTurfButton(1)}>
        {({ pressed }) => (
          <Box
            style={[
              {
                height: 60,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: palette['gray-700'],
              },
              value === 1 && { backgroundColor: palette['teal-100'] },
            ]}
            alignX="center"
            alignY="center">
            <Text
              variants="labelLarge"
              fontWeight="Medium"
              color="gray-700"
              textAlignment="center">
              중형
            </Text>
          </Box>
        )}
      </Pressable>
      <Pressable
        style={{ width: '100%' }}
        onPress={() => handlePressTurfButton(2)}>
        {({ pressed }) => (
          <Box
            style={[
              {
                height: 60,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: palette['gray-700'],
              },
              value === 2 && { backgroundColor: palette['teal-100'] },
            ]}
            alignX="center"
            alignY="center">
            <Text
              variants="labelLarge"
              fontWeight="Medium"
              color="gray-700"
              textAlignment="center">
              대형
            </Text>
          </Box>
        )}
      </Pressable>
    </Stack>
  );
};
