import { Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { UserInfoContentModule } from './module/user-info-screen-content';
import { UserInfoHeaderModule } from './module/user-info-screen-header/user-info-screen-header';

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
  return (
    <BasicLayout backgroundColor="gray-100">
      <Stack>
        <UserInfoHeaderModule />
        <UserInfoContentModule />
      </Stack>
    </BasicLayout>
  );
};

interface UserInfoItemProps {
  title: string;
  content: string;
}

const UserInfoItem: React.FC<UserInfoItemProps> = ({ title, content }) => (
  <Text variants={'bodyMedium'} fontWeight={'Medium'} color={'gray-900'}>
    {title}: {content}
  </Text>
);
