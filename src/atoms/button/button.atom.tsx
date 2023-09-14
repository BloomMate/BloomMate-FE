import color from 'color';
import { ComponentProps } from 'react';
import { Button as PaperButton } from 'react-native-paper';

import { getVariantsStyle } from '../text';

import { palette } from '@/utils';


export type ButtonProps = Omit<ComponentProps<typeof PaperButton>, 'mode'> & {
  mode: 'outlined' | 'contained' | 'text';
};

export const Button = ({
  children,
  mode,
  contentStyle,
  labelStyle,
  ...props
}: ButtonProps) => {
    const labelLargeFontStyle = getVariantsStyle('labelLarge');
    const rippleColor = color(palette['white']).alpha(0.33).rgb().string();

  return (
    <PaperButton
      mode={mode}
      contentStyle={[contentStyle]}
      labelStyle={[labelStyle]}
      rippleColor={rippleColor}
      theme={{
        fonts: {
          labelLarge: {
            ...labelLargeFontStyle,
            fontFamily: 'GmarketSansTTFMedium',
          },
        },
        colors: {
          primary: palette['green-600'],
          onPrimary: palette['white'],
          onSurface: palette['gray-300'],
        },
        roundness: 1,
      }}
      {...props}>
      {children}
    </PaperButton>
  );
};
