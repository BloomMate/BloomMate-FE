import { Box, Stack } from '@mobily/stacks';
import { useState } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import { Pressable } from 'react-native';

import { SignUpForm } from '../../hooks';
import { ESignUpStep } from '../../signup.state';

import { Text } from '@/atoms';

export const SignUpTurfModule = () => {
  const { control } = useFormContext<SignUpForm>();
  const { field, fieldState } = useController({
    control,
    name: ESignUpStep.TURF_INPUT,
  });
  const { onChange, value } = field;
  const [selected, setSelected] = useState(value);
  const handlePressTurfButton = (testID: number) => {
    setSelected(testID);
    onChange(testID);
  };

  return (
    <Stack space={24} align={'center'}>
      <Pressable onPress={() => handlePressTurfButton(0)}>
        {({ pressed }) =>
          selected === 0 ? (
            <Box
              style={[
                {
                  height: 60,
                  width: 310,
                  borderRadius: 12,
                  borderWidth: 1,
                  backgroundColor: '#B2DFDB',
                  justifyContent: 'center',
                },
              ]}>
              <Text
                variants="labelLarge"
                fontWeight="Medium"
                color="gray-700"
                textAlignment="center">
                소형
              </Text>
            </Box>
          ) : (
            <Box
              style={[
                {
                  height: 60,
                  width: 310,
                  borderRadius: 12,
                  borderWidth: 1,
                  justifyContent: 'center',
                },
              ]}>
              <Text
                variants="labelLarge"
                fontWeight="Medium"
                color="gray-700"
                textAlignment="center">
                소형
              </Text>
            </Box>
          )
        }
      </Pressable>
      <Pressable onPress={() => handlePressTurfButton(1)}>
        {({ pressed }) =>
          selected === 1 ? (
            <Box
              style={[
                {
                  height: 60,
                  width: 310,
                  borderRadius: 12,
                  borderWidth: 1,
                  backgroundColor: '#B2DFDB',
                  justifyContent: 'center',
                },
              ]}>
              <Text
                variants="labelLarge"
                fontWeight="Medium"
                color="gray-700"
                textAlignment="center">
                중형
              </Text>
            </Box>
          ) : (
            <Box
              style={[
                {
                  height: 60,
                  width: 310,
                  borderRadius: 12,
                  borderWidth: 1,
                  justifyContent: 'center',
                },
              ]}>
              <Text
                variants="labelLarge"
                fontWeight="Medium"
                color="gray-700"
                textAlignment="center">
                중형
              </Text>
            </Box>
          )
        }
      </Pressable>
      <Pressable onPress={() => handlePressTurfButton(2)}>
        {({ pressed }) =>
          selected === 2 ? (
            <Box
              style={[
                {
                  height: 60,
                  width: 310,
                  borderRadius: 12,
                  borderWidth: 1,
                  backgroundColor: '#B2DFDB',
                  justifyContent: 'center',
                },
              ]}>
              <Text
                variants="labelLarge"
                fontWeight="Medium"
                color="gray-700"
                textAlignment="center">
                대형
              </Text>
            </Box>
          ) : (
            <Box
              style={[
                {
                  height: 60,
                  width: 310,
                  borderRadius: 12,
                  borderWidth: 1,
                  justifyContent: 'center',
                },
              ]}>
              <Text
                variants="labelLarge"
                fontWeight="Medium"
                color="gray-700"
                textAlignment="center">
                대형
              </Text>
            </Box>
          )
        }
      </Pressable>
    </Stack>
  );
};
