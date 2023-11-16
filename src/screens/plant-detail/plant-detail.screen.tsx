import { Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Suspense } from 'react';

import { RootStackParamList } from '../root.navigator';

import { PlantDetailFooterModule } from './modules/plant-detail-footer';
import { PlantDetailHeaderModule } from './modules/plant-detail-header';
import { PlantDetailContentModule } from './modules/plant-details-content';

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
