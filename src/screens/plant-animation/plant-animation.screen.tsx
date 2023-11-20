import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

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

  return <BasicLayout backgroundColor="white"></BasicLayout>;
};
