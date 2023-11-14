import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Suspense } from 'react';

import { RootStackParamList } from '../root.navigator';

import {
  PlantDiagnosisResultFooterModule,
  PlantDiagnosisResultGPTModule,
  PlantDiagnosisResultHeaderModule,
  PlantDiagnosisResultInfoModule,
} from './modules';

import { BasicLayout, LoadingPage } from '@/layouts';

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
        <Suspense fallback={<LoadingPage />}>
          <PlantDiagnosisResultHeaderModule />
          <PlantDiagnosisResultInfoModule />
          <PlantDiagnosisResultGPTModule />
          <PlantDiagnosisResultFooterModule />
        </Suspense>
      </BasicLayout>
    );
  };
