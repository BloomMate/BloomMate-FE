import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

type PlantDiagnosisResultScreenProps = {};

export type PlantDiagnosisResultScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantDiagnosisResultScreen'
>;

export type PlantDiagnosisResultScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantDiagnosisResultScreen'
>;

export const PlantDiagnosisResultScreen =
  ({}: PlantDiagnosisResultScreenProps) => {
    return null;
  };
