import { Stack } from '@mobily/stacks';
import {
  TextInputProps as PaperTextInputProps,
  TextInput as PaperTextInput,
  DefaultTheme,
} from 'react-native-paper';

import { getVariantsStyle } from '../text';
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

type Right = {
  rightIconName?: string;
  rightIconColor?: string;
};

type TextInputProps = Omit<PaperTextInputProps, 'error' | 'right' | 'mode'> &
  Error &
  Right & { disabled?: boolean };

export const TextInput = ({
  error,
  rightIconName,
  disabled = false,
  ...props
}: TextInputProps) => {
  const bodyLargeFontStyle = getVariantsStyle('bodyLarge');
  const bodySmallFontStyle = getVariantsStyle('bodySmall');

  const renderTextInput = () => {
    return (
      <PaperTextInput
        mode="outlined"
        contentStyle={{ height: 48 }}
        style={{
          backgroundColor: palette['white'],
          borderRadius: 8,
        }}
        theme={{
          ...DefaultTheme,
          roundness: 8,
          colors: {
            ...DefaultTheme.colors,
            primary: palette['primary'],
            outline: palette['gray-900'],
            onSurface: palette['gray-900'],
            onSurfaceVariant: palette['gray-900'],
            error: palette['error'],
          },
          fonts: {
            bodyLarge: {
              ...bodyLargeFontStyle,
              fontFamily: 'SUITE-SemiBold',
            },
            bodySmall: {
              ...bodySmallFontStyle,
              fontFamily: 'SUITE-Regular',
            },
          },
        }}
        placeholderTextColor={palette['gray-400']}
        error={error}
        right={
          rightIconName && (
            <PaperTextInput.Icon
              color={palette['gray-400']}
              icon={rightIconName}
            />
          )
        }
        editable={!disabled} // 이 부분을 수정했습니다.
        {...props}
      />
    );
  };

  props = props as ErrorProps;

  return (
    <Stack space={8} style={{}}>
      {renderTextInput()}
      {error === true && (
        <Text color="error" fontWeight="Medium" variants="bodySmall" style={{}}>
          {props.errorMsg}
        </Text>
      )}
    </Stack>
  );
};
