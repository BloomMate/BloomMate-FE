import { Box } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { memo } from 'react';

import { PlantAnimationScreenNavigationRouteProps } from '../../plant-animation.screen';

import { getPlantAnimationContents } from './plant-animation-content.util';

import { Text } from '@/atoms';

type PlantAnimationContentModuleProps = {};

export const PlantAnimationContentModule =
  memo<PlantAnimationContentModuleProps>(() => {
    const {
      params: { type },
    } = useRoute<PlantAnimationScreenNavigationRouteProps>();

    const { LOTTIE_FILE, copy } = getPlantAnimationContents(type);

    return (
      <Box alignX="center" alignY="center" flex="fluid">
        <LottieView
          source={LOTTIE_FILE}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
        <Text
          variants="bodyLarge"
          fontWeight="Medium"
          color={'gray-900'}
          textAlignment="center">
          {copy}
        </Text>
      </Box>
    );
  });
