import { Stack } from '@mobily/stacks';
import color from 'color';
import isUndefined from 'lodash/isUndefined';
import { ComponentProps } from 'react';
import { Button as PaperButton, TouchableRipple } from 'react-native-paper';

import { Icon } from '../icon';
import { Text, getVariantsStyle } from '../text';

import { palette } from '@/utils';

export type ButtonProps = Omit<
  ComponentProps<typeof PaperButton>,
  'mode' | 'icon'
> & {
  mode: 'outlined' | 'contained' | 'text';
  icon?: string;
};

export const Button = ({
  children,
  mode,
  contentStyle,
  icon,
  onPress,
  ...props
}: ButtonProps) => {
  const textColor =
    mode === 'contained' ? palette['white'] : palette['primary'];

  const labelLargeFontStyle = getVariantsStyle('labelLarge');
  const rippleColor = color(textColor).alpha(0.33).rgb().string();

  if (!isUndefined(icon)) {
    return (
      <TouchableRipple
        rippleColor={rippleColor}
        style={{
          backgroundColor: palette['primary'],
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
        }}
        onPress={onPress}>
        <Stack space={8} horizontal align="center">
          <Text fontWeight="Bold" variants="labelLarge" color="white">
            {children}
          </Text>
          <Icon name={icon} size={20} color={palette['white']} />
        </Stack>
      </TouchableRipple>
    );
  }

  return (
    <PaperButton
      mode={mode}
      onPress={onPress}
      rippleColor={rippleColor}
      contentStyle={[{ height: 48 }, contentStyle]}
      theme={{
        fonts: {
          labelLarge: {
            ...labelLargeFontStyle,
            fontFamily: 'SUITE-Bold',
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
