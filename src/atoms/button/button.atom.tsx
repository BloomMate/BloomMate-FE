import color from 'color';
import { ComponentProps } from 'react';
import { Button as PaperButton } from 'react-native-paper';

import { getVariantsStyle } from '../text';

import { palette } from '@/utils';

export type ButtonProps = Omit<ComponentProps<typeof PaperButton>, 'mode'> & {
  mode: 'outlined' | 'contained' | 'text';
};

export const Button = ({ children, mode, ...props }: ButtonProps) => {
  const textColor =
    mode === 'contained' ? palette['white'] : palette['primary'];

  const labelLargeFontStyle = getVariantsStyle('labelLarge');
  const rippleColor = color(textColor).alpha(0.33).rgb().string();

  return (
    <PaperButton
      mode={mode}
      rippleColor={rippleColor}
      style={{ height: 48 }}
      theme={{
        fonts: {
          labelLarge: {
            ...labelLargeFontStyle,
            fontFamily: 'GmarketSansTTFMedium',
          },
        },
        colors: {
          primary: palette['primary'],
          onPrimary: palette['white'],
          surfaceDisabled: palette['gray-300'],
          onSurfaceDisabled: palette['gray-500'],
          outline: palette['primary'],
        },
        roundness: 2,
      }}
      {...props}>
      {children}
    </PaperButton>
  );
};
