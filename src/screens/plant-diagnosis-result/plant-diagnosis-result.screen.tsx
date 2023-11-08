import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image } from 'react-native';

import { RootStackParamList } from '../root.navigator';

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
        <Image
          source={{ uri: photo_url }}
          style={{ width: 100, height: 100 }}
        />
      </BasicLayout>
    );
  };
