import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { Button } from '@/atoms';
import { BasicLayout, ModalHeader, ScrollView } from '@/layouts';

type PlantDetailScreenProps = {};

export type PlantDetailScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantDetailScreen'
>;

export type PlantDetailScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantDetailScreen'
>;

export const PlantDetailScreen = ({}: PlantDetailScreenProps) => {
  const navigation = useNavigation<PlantDetailScreenNavigationProps>();
  const {
    params: { id },
  } = useRoute<PlantDetailScreenNavigationRouteProps>();

  const handlePressDiagnosisButton = () => {
    navigation.navigate('PlantDiagnosisIntroScreen', { id });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <BasicLayout backgroundColor="gray-100">
        <ModalHeader
          left={{ type: 'icon' }}
          onPressExit={() => navigation.goBack()}
        />
      </BasicLayout>
      <Button
        mode="contained"
        icon="health-and-safety"
        onPress={handlePressDiagnosisButton}>
        AI 진단하기
      </Button>
    </ScrollView>
  );
};
