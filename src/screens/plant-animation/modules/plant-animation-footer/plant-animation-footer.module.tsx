import { useNavigation, useRoute } from '@react-navigation/native';
import { memo } from 'react';

import {
  PlantAnimationScreenNavigationProps,
  PlantAnimationScreenNavigationRouteProps,
} from '../../plant-animation.screen';

import { Button } from '@/atoms';

type PlantAnimationFooterModuleProps = {};

export const PlantAnimationFooterModule = memo<PlantAnimationFooterModuleProps>(
  () => {
    const {
      params: { type },
    } = useRoute<PlantAnimationScreenNavigationRouteProps>();
    const navigation = useNavigation<PlantAnimationScreenNavigationProps>();

    const handlePressButton = () => {
      navigation.replace('PrimaryStack', { screen: 'PrimaryPlantListScreen' });
    };

    return (
      <Button mode="contained" onPress={handlePressButton}>
        홈으로 가기
      </Button>
    );
  },
);
