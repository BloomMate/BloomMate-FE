import { Box } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { PointLinearGradient, Text } from '@/atoms';

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
        <Box paddingX={24} paddingY={24}>
          <Text variants="displaySmall" fontWeight="Medium" color="gray-700">
            식물 진단하기
          </Text>
        </Box>
      </PointLinearGradient>
    );
  };
