import { Box } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { useResetPlantChatState } from './hooks';
import {
  PlantChatContentModule,
  PlantChatFooterModule,
  PlantChatHeaderModule,
  PlantChatFloatingButton,
} from './module';

import { PointLinearGradient } from '@/atoms';

type PlantChatScreenProps = {};

export type PlantChatScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantChatScreen'
>;

export type PlantChatScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantChatScreen'
>;

export const PlantChatScreen = ({}: PlantChatScreenProps) => {
  useResetPlantChatState();

  return (
    <PointLinearGradient style={{ width: '100%', height: '100%' }}>
      <Box paddingX={24} paddingY={32} flex="fluid">
        <PlantChatHeaderModule />
        <PlantChatContentModule />
        <PlantChatFooterModule />
      </Box>
      <PlantChatFloatingButton />
    </PointLinearGradient>
  );
};
