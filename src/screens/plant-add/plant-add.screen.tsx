import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FormProvider } from 'react-hook-form';

import { RootStackParamList } from '../root.navigator';

import { usePlantAddForm, useResetPlantState } from './hooks';
import {
  PlantAddFooterModule,
  PlantAddHeaderModule,
  PlantAddContentModule,
} from './modules';

import { BasicLayout, ScrollView } from '@/layouts';

type PlantAddScreenProps = {};

export type PlantAddScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantAddScreen'
>;

export type PlantAddScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantAddScreen'
>;
export const PlantAddScreen = ({}: PlantAddScreenProps) => {
  const methods = usePlantAddForm();

  useResetPlantState();

  return (
    <FormProvider {...methods}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <BasicLayout backgroundColor="white">
          <PlantAddHeaderModule />
          <PlantAddContentModule />
          <PlantAddFooterModule />
        </BasicLayout>
      </ScrollView>
    </FormProvider>
  );
};
