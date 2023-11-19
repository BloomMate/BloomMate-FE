import { Box } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, TouchableOpacity } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { PlantChatHeaderModule } from './module/plant-chat-header/plant-chat-header.module';

import { CHAT_LOGO_IMG } from '@/assets';
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
        <PlantChatHeaderModule />
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: CHAT_LOGO_IMG }}
        />
        <TouchableOpacity></TouchableOpacity>
      </Box>
    </PointLinearGradient>
  );
};
