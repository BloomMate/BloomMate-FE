import { Text as RNText, TextProps as RNTextProps } from 'react-native';

import { getColorStyle, getTextAlignStyle, getTextStyle } from './text.util';

export type textAligns = 'auto' | 'left' | 'right' | 'center' | 'justify';
export type fontWeightType = '600' | '500' | '400';
export type fontSizeType = '8' | '12' | '14' | '16' | '18' | '20' | '24' | '28';
export type fontColorType =
  | 'gray-1000'
  | 'gray-900'
  | 'gray-800'
  | 'gray-700'
  | 'gray-600'
  | 'gray-500'
  | 'gray-400'
  | 'primary'
  | 'error'
  | 'white'
  | 'black'
  | 'green';

type TextProps = RNTextProps & {
  fontWeight: fontWeightType;
  fontSize: fontSizeType;
  color: fontColorType;
  textAlignment?: textAligns;
};

export const Text = ({
  children,
  fontWeight,
  fontSize,
  color,
  textAlignment,
  style,
  ...props
}: TextProps) => {
  const categoryStyle = getTextStyle(fontWeight, fontSize);
  const colorStyle = getColorStyle(color);
  const textAlignmentStyle = getTextAlignStyle(textAlignment);

  return (
    <RNText
      style={[categoryStyle, colorStyle, textAlignmentStyle, style]}
      {...props}>
      {children}
    </RNText>
  );
};
