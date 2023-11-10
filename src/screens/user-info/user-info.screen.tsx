import { Stack } from '@mobily/stacks';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { Text } from '@/atoms';
import { BasicLayout } from '@/layouts';

type UserInfoScreenProps = {};

export type UserInfoScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'UserInfoScreen'
>;

export type UserInfoScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'UserInfoScreen'
>;

export const UserInfoScreen = ({}: UserInfoScreenProps) => {
  const navigation = useNavigation<UserInfoScreenNavigationProps>();

  return (
    <BasicLayout backgroundColor="gray-100">
      <Stack>
        <Text variants={'displayLarge'} fontWeight={'Light'} color={'gray-900'}>
          안녕하세요
        </Text>
      </Stack>
    </BasicLayout>
  );
};
