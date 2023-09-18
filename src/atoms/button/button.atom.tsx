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
  ...props
}: ButtonProps) => {
    const textColor = mode === 'contained' ? palette['white'] : palette['green-600']

    const labelLargeFontStyle = getVariantsStyle('labelLarge');
    const rippleColor = color(textColor).alpha(0.33).rgb().string();

  return (
    <PaperButton
      mode={mode}
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
          surfaceDisabled: palette['gray-300'],
          onSurfaceDisabled: palette['gray-500'],
          outline: palette['green-600'],
          
        },
        roundness: 1,
      }}
      {...props}>
      {children}
    </PaperButton>
  );
};
