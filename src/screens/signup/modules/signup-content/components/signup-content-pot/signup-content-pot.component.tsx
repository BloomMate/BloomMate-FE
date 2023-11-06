import { Stack } from '@mobily/stacks';
import { memo } from 'react';
import { Image } from 'react-native';

import {
  mapGardenSizeInfoByValue,
  mapGardenSizePotsByValue,
} from './signup-content-pot.const';

import { Text } from '@/atoms';

type SignUpContentPotComponentProps = {
  value: 0 | 1 | 2;
};

export const SignUpContentPotComponent = memo<SignUpContentPotComponentProps>(
  ({ value }) => {
    const gardenSizeInfoText = mapGardenSizeInfoByValue[value];
    const numberOfPots = mapGardenSizePotsByValue[value];
    const renderImages = () => {
      const images = [];

      for (let i = 0; i < numberOfPots; i++) {
        images.push(
          <Image key={i} source={require('./Image/flower_pot.png')} />,
        );
      }

      return images;
    };

    return (
      <Stack space={32}>
        <Stack
          space={16}
          horizontal
          align="center"
          style={{ width: '100%', justifyContent: 'center' }}>
          {renderImages()}
        </Stack>
        <Text
          variants="labelMedium"
          fontWeight="Medium"
          color="gray-700"
          textAlignment="center">
          {gardenSizeInfoText}
        </Text>
      </Stack>
    );
  },
);
