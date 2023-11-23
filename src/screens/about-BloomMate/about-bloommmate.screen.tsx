import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import { AboutBloomMateContentModule } from './module/about-bloommate-content';
import { AboutBloomMateHeaderModule } from './module/about-bloommate-header';

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
      <AboutBloomMateHeaderModule />
      <AboutBloomMateContentModule />
    </BasicLayout>
  );
};
