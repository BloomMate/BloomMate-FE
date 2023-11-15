import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Suspense } from 'react';

import { RootStackParamList } from '../root.navigator';

import {
  PlantDiagnosisLogContentModule,
  PlantDiagnosisLogHeader,
} from './modules';

import { BasicLayout, LoadingPage } from '@/layouts';

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
      <Suspense fallback={<LoadingPage />}>
        <PlantDiagnosisLogHeader />
        <PlantDiagnosisLogContentModule />
      </Suspense>
    </BasicLayout>
  );
};
