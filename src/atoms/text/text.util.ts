import { TextStyle } from 'react-native';

import {
  fontColorType,
  fontWeightType,
  textAligns,
  textVariants,
} from './text.atom';

import { palette } from '@/utils';

// TODO : Add fonts + customize the typography
// fontWeight is not working (no font file yet)

export const getFontFamilyByFontWeight = (
  fontWeight: fontWeightType,
): TextStyle => {
  switch (fontWeight) {
    case 'Light':
      return {
        fontFamily: 'GmarketSansTTFLight',
      };
    case 'Medium':
      return {
        fontFamily: 'GmarketSansTTFMedium',
      };
    case 'Bold':
      return {
        fontFamily: 'GmarketSansTTFBold',
      };
    default:
      return {
        fontFamily: 'GmarketSansTTFMedium',
      };
  }
};

export const getVariantsStyle = (variant: textVariants): TextStyle => {
  switch (variant) {
    case 'displayLarge':
      return {
        fontSize: 57,
        lineHeight: 64,
        letterSpacing: -0.25,
      };
    case 'displayMedium':
      return {
        fontSize: 45,
        lineHeight: 52,
        letterSpacing: 0,
      };
    case 'displaySmall':
      return {
        fontSize: 36,
        lineHeight: 44,
        letterSpacing: 0,
      };
    case 'headlineLarge':
      return {
        fontSize: 32,
        lineHeight: 40,
        letterSpacing: 0,
      };
    case 'headlineMedium':
      return {
        fontSize: 28,
        lineHeight: 36,
        letterSpacing: 0,
      };
    case 'headlineSmall':
      return {
        fontSize: 24,
        lineHeight: 32,
        letterSpacing: 0,
      };
    case 'titleLarge':
      return {
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 0,
      };
    case 'titleMedium':
      return {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
      };
    case 'titleSmall':
      return {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
      };
    case 'labelLarge':
      return {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
      };
    case 'labelMedium':
      return {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5,
      };
    case 'labelSmall':
      return {
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.5,
      };
    case 'bodyLarge':
      return {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5,
      };
    case 'bodyMedium':
      return {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25,
      };
    case 'bodySmall':
      return {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.4,
      };
  }
};

export const getColorStyle = (color: fontColorType): TextStyle => {
  switch (color) {
    case 'black':
      return { color: palette['black'] };

    case 'white':
      return { color: palette['white'] };

    case 'gray-900':
      return { color: palette['gray-900'] };

    case 'gray-800':
      return { color: palette['gray-800'] };

    case 'gray-700':
      return { color: palette['gray-700'] };

    case 'gray-600':
      return { color: palette['gray-600'] };

    case 'error':
      return { color: palette['error'] };

    default:
      return { color: palette['gray-800'] };
  }
};

export const getTextAlignStyle = (
  textAlign?: textAligns,
): { textAlign: textAligns } => {
  if (!textAlign) {
    return { textAlign: 'auto' };
  }
  return { textAlign };
};
