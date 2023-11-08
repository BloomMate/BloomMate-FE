import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import {
  PlantDiagnosisResultHeaderModule,
  PlantDiagnosisResultInfoModule,
} from './modules';

import { BasicLayout } from '@/layouts';

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
    return (
      <BasicLayout backgroundColor="gray-100">
        <PlantDiagnosisResultHeaderModule />
        <PlantDiagnosisResultInfoModule />
      </BasicLayout>
    );
  };
