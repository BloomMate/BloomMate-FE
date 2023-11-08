import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import {
  PlantDiagnosisIntroContentModule,
  PlantDiagnosisIntroFooterModule,
  PlantDiagnosisIntroHeaderModule,
} from './modules';

import { PointLinearGradient } from '@/atoms';
import { BasicLayout } from '@/layouts';

type PlantDiagnosisIntroScreenProps = {};

export type PlantDiagnosisIntroScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantDiagnosisIntroScreen'
>;

export type PlantDiagnosisIntroScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantDiagnosisIntroScreen'
>;

export const PlantDiagnosisIntroScreen =
  ({}: PlantDiagnosisIntroScreenProps) => {
    const {
      params: { id },
    } = useRoute<PlantDiagnosisIntroScreenNavigationRouteProps>();

    return (
      <PointLinearGradient style={{ width: '100%', height: '100%' }}>
        <BasicLayout backgroundColor="transparent">
          <PlantDiagnosisIntroHeaderModule />
          <PlantDiagnosisIntroContentModule />
          <PlantDiagnosisIntroFooterModule />
        </BasicLayout>
      </PointLinearGradient>
    );
  };
