import { Box } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import LottieView from 'lottie-react-native';

import { RootStackParamList } from '../root.navigator';

import { PLANT_ADD_LOTTIE } from '@/assets';
import { BasicLayout } from '@/layouts';

type PlantAnimationScreenProps = {};

export type PlantAnimationScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantAnimationScreen'
>;

export type PlantAnimationScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantAnimationScreen'
>;

export const PlantAnimationScreen = ({}: PlantAnimationScreenProps) => {
  const {
    params: { type },
  } = useRoute<PlantAnimationScreenNavigationRouteProps>();

  return (
    <BasicLayout backgroundColor="white">
      <Box alignX="center" alignY="center">
        <LottieView
          source={PLANT_ADD_LOTTIE}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
      </Box>
    </BasicLayout>
  );
};
