import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { Pressable } from 'react-native';

import { mapGardenSizeByValue } from './signup-content-toggle-button.const';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type SignUpContentToggleButtonComponentProps = {
  value: 0 | 1 | 2;
  selected: boolean;
  onPress: () => void;
};

export const SignUpContentToggleButtonComponent =
  memo<SignUpContentToggleButtonComponentProps>(
    ({ value, selected, onPress }) => {
      const handlePressToggleButton = () => {
        onPress();
      };

      const gardenSizeText = mapGardenSizeByValue[value];

      return (
        <Pressable style={{ width: '100%' }} onPress={handlePressToggleButton}>
          {({}) => (
            <Box
              style={[
                {
                  height: 60,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: palette['gray-900'],
                },
                selected && {
                  backgroundColor: palette['teal-100'],
                  borderColor: palette['primary'],
                },
              ]}
              alignX="center"
              alignY="center">
              <Text
                variants="labelLarge"
                fontWeight="Light"
                color="gray-700"
                textAlignment="center">
                {gardenSizeText}
              </Text>
            </Box>
          )}
        </Pressable>
      );
    },
  );
