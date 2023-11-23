import { Box } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Suspense } from 'react';
import { ActivityIndicator } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { useResetPlantChatState } from './hooks';
import {
  PlantChatContentModule,
  PlantChatFooterModule,
  PlantChatHeaderModule,
  PlantFloatingButton,
} from './module';

import { PointLinearGradient } from '@/atoms';
import { palette } from '@/utils';

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
  const {
    params: { id },
  } = useRoute<PlantChatScreenNavigationRouteProps>();

  useResetPlantChatState();

  return (
    <PointLinearGradient style={{ width: '100%', height: '100%' }}>
      <Box paddingX={24} paddingY={24} flex="fluid">
        <PlantChatHeaderModule />
        <Suspense
          fallback={
            <Box flex="fluid">
              <ActivityIndicator size="large" color={palette['primary']} />
            </Box>
          }>
          <PlantChatContentModule />
        </Suspense>
        <PlantChatFooterModule />
      </Box>
      <PlantFloatingButton />
    </PointLinearGradient>
  );
};
