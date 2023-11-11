import { Stack } from '@mobily/stacks';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { isUndefined } from 'lodash';
import { Suspense } from 'react';

import { RootStackParamList } from '../root.navigator';

import { PlantDetailFooterModule } from './modules/plant-detail-footer';
import { PlantDetailHeaderModule } from './modules/plant-detail-header';
import { PlantDetailContentModule } from './modules/plant-details-content';

import { PLANT_DETAIL_DUMMY_DATA } from '@/dummy-data/plant-detail-dummy-data';
import { BasicLayout, LoadingPage, ScrollView } from '@/layouts';
import { palette } from '@/utils';

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

  const currentPlant = PLANT_DETAIL_DUMMY_DATA.find(v => v.id === id);

  if (isUndefined(currentPlant)) {
    return null;
  }

  return (
    <BasicLayout backgroundColor="gray-100">
      <PlantDetailHeaderModule />
      <Suspense fallback={<LoadingPage />}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Stack
            style={{ backgroundColor: palette['gray-100'], flex: 1 }}
            space={16}>
            <PlantDetailContentModule />
            <PlantDetailFooterModule />
          </Stack>
        </ScrollView>
      </Suspense>
    </BasicLayout>
  );
};
