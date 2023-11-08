import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { PlantDiagnosisResultHeaderModule } from './modules/plant-diagnosis-result-header/plant-diagnosis-result-header.module';

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
    const {
      params: { photo_url },
    } = useRoute<PlantDiagnosisResultScreenNavigationRouteProps>();

    return (
      <BasicLayout backgroundColor="gray-100">
        <PlantDiagnosisResultHeaderModule />
      </BasicLayout>
    );
  };
