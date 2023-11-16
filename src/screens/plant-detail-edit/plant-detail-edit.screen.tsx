import { Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { DetailEditContentModule } from './module/detail-edit-content';
import { DetailEditHeaderModule } from './module/detail-edit-header';

import { BasicLayout } from '@/layouts';

type PlantDetailEditScreenProps = {};

export type PlantDetailEditScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantDetailEditScreen'
>;

export type PlantDetailEditScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantDetailEditScreen'
>;

export const PlantDetailEditScreen = ({}: PlantDetailEditScreenProps) => {
  return (
    <BasicLayout backgroundColor="gray-100">
      <Stack space={48}>
        <DetailEditHeaderModule />
        <DetailEditContentModule
          value={''}
          onChange={function (text: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      </Stack>
    </BasicLayout>
  );
};
