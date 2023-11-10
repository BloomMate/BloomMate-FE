import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import {
  PlantDiagnosisListContentModule,
  PlantDiagnosisListHeaderModule,
} from './modules';

import { BasicLayout } from '@/layouts';

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
  return (
    <BasicLayout backgroundColor="gray-100">
      <PlantDiagnosisListHeaderModule />
      <PlantDiagnosisListContentModule />
    </BasicLayout>
  );
};
