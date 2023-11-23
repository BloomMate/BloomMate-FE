import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { BasicLayout } from '@/layouts';

type AboutBloomMateScreenProps = {};

export type AboutBloomMateScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'AboutBloomMateScreen'
>;

export type AboutBloomMateScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'AboutBloomMateScreen'
>;

export const AboutBloomMateScreen = ({}: AboutBloomMateScreenProps) => {
  return (
    <BasicLayout backgroundColor="gray-100">
      <Text>dd</Text>
    </BasicLayout>
  );
};
