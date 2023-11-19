import { Box, Stack } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { PlantChatContentModule } from './module/plant-chat-content';
import { PlantChatHeaderModule } from './module/plant-chat-header/plant-chat-header.module';

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
  const {
    params: { id },
  } = useRoute<PlantChatScreenNavigationRouteProps>();

  return (
    <PointLinearGradient style={{ width: '100%', height: '100%' }}>
      <Box paddingX={24} paddingY={24}>
        <Stack space={40}>
          <PlantChatHeaderModule />
          <PlantChatContentModule />
        </Stack>
      </Box>
    </PointLinearGradient>
  );
};
