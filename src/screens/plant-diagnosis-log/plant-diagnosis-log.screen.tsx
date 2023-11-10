import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import {
  PlantDiagnosisLogContentModule,
  PlantDiagnosisLogHeader,
} from './modules';

import { BasicLayout } from '@/layouts';

type PlantDiagnosisLogScreenProps = {};

export type PlantDiagnosisLogScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantDiagnosisLogScreen'
>;

export type PlantDiagnosisLogScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantDiagnosisLogScreen'
>;

export const PlantDiagnosisLogScreen = ({}: PlantDiagnosisLogScreenProps) => {
  return (
    <BasicLayout backgroundColor="gray-100">
      <PlantDiagnosisLogHeader />
      <PlantDiagnosisLogContentModule />
    </BasicLayout>
  );
};
