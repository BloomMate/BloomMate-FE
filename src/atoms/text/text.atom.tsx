import { Text as RNText, TextProps as RNTextProps } from 'react-native';

import { getColorStyle, getFontFamilyByFontWeight, getTextAlignStyle, getVariantsStyle } from './text.util';

export type textAligns = 'auto' | 'left' | 'right' | 'center' | 'justify';
export type fontWeightType = 'Light' | 'Medium' | 'Bold' ;
export type fontColorType =
  | 'gray-900'
  | 'gray-800'
  | 'gray-700'
  | 'gray-600'
  | 'error'
  | 'white'
  | 'black'

export type textVariants = 'displayLarge' | 'displayMedium' | 'displaySmall' | 'headlineLarge' | 'headlineMedium' | 
'headlineSmall' | 'titleLarge' | 'titleMedium' | 'titleSmall' | 'labelLarge' | 'labelMedium' | 'labelSmall' | 'bodyLarge' | 
'bodyMedium' | 'bodySmall'

type TextProps = RNTextProps & {
  variants: textVariants;
  fontWeight: fontWeightType;
  color: fontColorType;
  textAlignment?: textAligns;
};

export const Text = ({
  children,
  fontWeight,
  variants,
  color,
  textAlignment,
  style,
  ...props
}: TextProps) => {
  const fontFamily = getFontFamilyByFontWeight(fontWeight);
  const variantsStyle = getVariantsStyle(variants)
  const colorStyle = getColorStyle(color);
  const textAlignmentStyle = getTextAlignStyle(textAlignment);

  return (
    <RNText
      style={[fontFamily,variantsStyle, colorStyle, textAlignmentStyle, style]}
      {...props}>
      {children}
    </RNText>
  );
};
