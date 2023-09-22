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
}

type TextInputProps = Omit<PaperTextInputProps, 'error' | 'right'> &
  Error &
  Right;

export const TextInput = ({ error, rightIconName, rightIconColor, ...props }: TextInputProps) => {
  
const bodyLargeFontStyle = getVariantsStyle('bodyLarge');
  const renderTextInput = () => {
    return (
      <PaperTextInput
        style={{ backgroundColor: palette['white'] }}
        theme={{
          fonts: {
            bodyLarge: {
              ...bodyLargeFontStyle,
              fontFamily: 'GmarketSansTTFMedium',
            },
            bodySmall: {
              ...bodyLargeFontStyle,
              fontFamily: 'GmarketSansTTFLight',
            },
          },
          colors: {
            onSurfaceVariant: palette['black'],
            background: palette['white'],
            primary: palette['green-500'],
            disabled: palette['gray-500'],
          },
        }}
        error={error}
        right={
          rightIconName && (
            <PaperTextInput.Icon icon={rightIconName} color={rightIconColor} />
          )
        }
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
};
