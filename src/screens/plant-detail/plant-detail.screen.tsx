import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { BasicLayout, ModalHeader } from '@/layouts';

type PlantDetailScreenProps = {};

export type PlantDetailScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantDetailScreen'
>;

export type PlantDetailScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantDetailScreen'
>;

export const PlantDetailScreen = ({}: PlantDetailScreenProps) => {
  const navigation = useNavigation();

  return (
    <BasicLayout backgroundColor="gray-100">
      <ModalHeader
        left={{ type: 'icon' }}
        onPressExit={() => navigation.goBack()}
      />
    </BasicLayout>
  );
};
