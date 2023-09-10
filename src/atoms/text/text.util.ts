import { TextStyle } from 'react-native';

import {
  fontColorType,
  fontSizeType,
  fontWeightType,
  textAligns,
} from './text.atom';

import { palette } from '@/utils';

// TODO : Add fonts + customize the typography
// fontWeight is not working (no font file yet)

export const getTextStyle = (
  fontWeight: fontWeightType,
  fontSize: fontSizeType,
): TextStyle => {
  const textStyle = {
    fontSize: parseInt(fontSize),
    lineHeight: parseInt(fontSize) * 1.5,
    letterSpacing: -parseInt(fontSize) * 0.04,
  };

  switch (fontWeight) {
    case '400':
      return {
        ...textStyle,
        fontFamily: 'Pretendard-Light',
      };
    case '500':
      return {
        ...textStyle,
        fontFamily: 'Pretendard-Medium',
      };
    case '600':
      return {
        ...textStyle,
        fontFamily: 'Pretendard-Bold',
      };
    default:
      return {
        ...textStyle,
        fontFamily: 'Pretendard-Medium',
      };
  }
};

export const getColorStyle = (color: fontColorType): TextStyle => {
  switch (color) {
    case 'gray-600':
      return { color: palette['gray-600'] };

    case 'gray-500':
      return { color: palette['gray-500'] };

    case 'gray-400':
      return { color: palette['gray-400'] };

    case 'gray-1000':
      return { color: palette['gray-1000'] };

    case 'gray-900':
      return { color: palette['gray-900'] };

    case 'gray-800':
      return { color: palette['gray-800'] };

    case 'gray-700':
      return { color: palette['gray-700'] };

    case 'primary':
      return { color: palette.primary };

    case 'error':
      return { color: palette['error'] };

    case 'white':
      return { color: palette['white'] };

    case 'black':
      return { color: palette['black'] };

    case 'green':
      return { color: palette['green'] };

    default:
      return { color: palette['gray-600'] };
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
