import { Box } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { PointLinearGradient, Text } from '@/atoms';

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
        <Text variants="displaySmall" fontWeight="Medium" color="gray-700">
          식물과 채팅하기 - id: {id}
        </Text>
      </Box>
    </PointLinearGradient>
  );
};
