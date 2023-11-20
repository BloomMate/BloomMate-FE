import { Box } from '@mobily/stacks';
import LottieView from 'lottie-react-native';
import { memo } from 'react';

import { PLANT_ADD_LOTTIE } from '@/assets';
import { Text } from '@/atoms';

type PlantAnimationContentModuleProps = {};

export const PlantAnimationContentModule =
  memo<PlantAnimationContentModuleProps>(() => {
    return (
      <Box alignX="center" alignY="center">
        <LottieView
          source={PLANT_ADD_LOTTIE}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
        <Text variants="bodyMedium" fontWeight="Medium" color={'gray-900'}>
          BloomMate 를 통해 식물을 추가하셨군요!
        </Text>
      </Box>
    );
  });
