import { Box } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { memo } from 'react';

import { PlantAnimationScreenNavigationRouteProps } from '../../plant-animation.screen';

import { PLANT_ADD_LOTTIE } from '@/assets';
import { Text } from '@/atoms';

type PlantAnimationContentModuleProps = {};

export const PlantAnimationContentModule =
  memo<PlantAnimationContentModuleProps>(() => {
    const {
      params: { type },
    } = useRoute<PlantAnimationScreenNavigationRouteProps>();

    return (
      <Box alignX="center" alignY="center" flex="fluid">
        <LottieView
          source={PLANT_ADD_LOTTIE}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
        <Text
          variants="bodyLarge"
          fontWeight="Medium"
          color={'gray-900'}
          textAlignment="center">
          {
            '틔운에 성공적으로 식물을 심으셨군요!\nBloomMate에서 식물과 대화하고 진단해보세요'
          }
        </Text>
      </Box>
    );
  });
