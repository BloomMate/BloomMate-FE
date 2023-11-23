import { Stack } from '@mobily/stacks';
import { memo } from 'react';

import {
  mapGardenSizeInfoByValue,
  mapGardenSizePotsByValue,
} from './signup-content-pot.const';

import { Image, Text } from '@/atoms';

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
          <Image
            key={i}
            resizeMode="contain"
            style={{ width: 28, height: 42 }}
            skeletonStyle={{ width: 28, height: 42 }}
            source={require('./Image/flower_pot.png')}
          />,
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
          variants="bodyMedium"
          fontWeight="Medium"
          color="gray-700"
          textAlignment="center">
          {gardenSizeInfoText}
        </Text>
      </Stack>
    );
  },
);
