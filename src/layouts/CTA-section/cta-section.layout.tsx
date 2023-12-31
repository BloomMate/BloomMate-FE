import { Column, Columns, Stack } from '@mobily/stacks';
import { useKeyboard } from '@react-native-community/hooks';

import { Button, ButtonProps } from '@/atoms';
import { palette } from '@/utils';

export type SingleButtonProps = Omit<ButtonProps, 'children'> & {
  label: string;
};

type CTASectionProps = {
  buttons: SingleButtonProps[];
  direction?: 'row' | 'col';
  style?: any;
};

export const CTASection = ({
  buttons,
  direction = 'col',
  style,
}: CTASectionProps) => {
  const { keyboardShown } = useKeyboard();

  if (direction === 'row') {
    return (
      <Columns space={4}>
        {buttons.map(({ mode, label, disabled, ...buttonProps }, index) => (
          <Column
            key={index}
            style={[
              mode === 'outlined' && {
                backgroundColor: 'white',
                borderRadius: 11,
              },
              mode === 'contained' &&
                !disabled && {
                  borderColor: palette['primary'],
                  borderWidth: 1,
                  borderRadius: 11,
                  backgroundColor: palette['white'],
                },
            ]}>
            <Button
              {...buttonProps}
              disabled={disabled}
              mode={mode || 'contained'}
              style={{ ...(keyboardShown && { ...style, borderRadius: 0 }) }}>
              {label}
            </Button>
          </Column>
        ))}
      </Columns>
    );
  }

  return (
    <Stack space={10}>
      {buttons.map(({ mode, label, disabled, ...buttonProps }, index) => (
        <Button
          {...buttonProps}
          key={index}
          mode={mode || 'contained'}
          disabled={disabled}
          style={[
            keyboardShown && { borderRadius: 0 },
            mode === 'text' && {
              paddingVertical: 16,
            },
          ]}>
          {label}
        </Button>
      ))}
    </Stack>
  );
};
