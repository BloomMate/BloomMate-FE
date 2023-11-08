import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

type PlantDiagnosisListScreenProps = {};

export type PlantDiagnosisListScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantDiagnosisListScreen'
>;

export type PlantDiagnosisListScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantDiagnosisListScreen'
>;

export const PlantDiagnosisListScreen = ({}: PlantDiagnosisListScreenProps) => {
  return null;
};
