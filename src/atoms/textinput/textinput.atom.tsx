import { Stack } from '@mobily/stacks';
import { memo } from 'react';
import {
  TextInputProps as PaperTextInputProps,
  TextInput as PaperTextInput,
} from 'react-native-paper';

import { Text } from '../text/text.atom';

import { palette } from '@/utils';



type ErrorProps = {
  error: true;
  errorMsg: string;
};

type NonErrorProps = {
  error?: false;
};

type Error = ErrorProps | NonErrorProps;

type TextInputProps = Omit<PaperTextInputProps, 'error'> & Error;

export const TextInput = memo(({ error, ...props }: TextInputProps) => {
  

  const renderTextInput = () => {
    return (
      <PaperTextInput
        theme={{
          fonts: {
            bodyLarge: {
              fontFamily: 'GmarketSansTTFMedium',
              fontSize: 24,
              lineHeight: 32,
            },
            bodySmall: {
              fontFamily: 'GmarketSansTTFLight',
              fontSize: 14,
              lineHeight: 20,
            },
          },
        }}
        outlineStyle={{ borderWidth: 0, backgroundColor: palette['gray-100'] }}
        placeholderTextColor={palette['gray-500']}
        textColor={palette['gray-900']}
        error={error}
        {...props}
      />
    );
  };

  props = props as ErrorProps;

  return (
    <Stack space={8}>
      {renderTextInput()}
      {error === true && (
        <Text color="error" fontWeight="Bold" variants={'bodyLarge'}>
          {props.errorMsg}
        </Text>
      )}
    </Stack>
  );
});
