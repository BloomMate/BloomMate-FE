import { Stack } from '@mobily/stacks';
import {
  TextInputProps as PaperTextInputProps,
  TextInput as PaperTextInput,
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
  Right;

export const TextInput = ({
  error,
  rightIconName,
  ...props
}: TextInputProps) => {
  const bodyLargeFontStyle = getVariantsStyle('bodyLarge');
  const bodySmallFontStyle = getVariantsStyle('bodySmall');
  const renderTextInput = () => {
    return (
      <PaperTextInput
        mode="outlined"
        style={{
          backgroundColor: palette['white'],
        }}
        theme={{
          fonts: {
            bodyLarge: {
              ...bodyLargeFontStyle,
              fontFamily: 'GmarketSansTTFMedium',
            },
            bodySmall: {
              ...bodySmallFontStyle,
              fontFamily: 'GmarketSansTTFLight',
            },
          },
          colors: {
<<<<<<< HEAD
            onSurface: palette['gray-900'],
            onSurfaceVariant: palette['gray-900'],
            primary: palette['teal-800'],
            error: palette['error'],
            outline: palette['gray-900'],
            disabled: palette['gray-400'],
=======
            onSurface: palette['black'],
            onSurfaceVariant: palette['black'],
            background: palette['white'],
            primary: palette['green-500'],
            disabled: palette['gray-500'],
            error: palette['error'],
>>>>>>> 2631a026ca2ecf8456efd55e92b00bce5a0ef97f
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
