import { Row, Rows, Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../root.navigator';

import {
  LandingLoginModule,
  LandingSignUpModule,
  LandingTextModule,
} from './modules';

import { BasicLayout, ScrollView } from '@/layouts';

type LandingScreenProps = {};

export type LandingScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'LandingScreen'
>;

export type LandingScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'LandingScreen'
>;
export const LandingScreen = ({}: LandingScreenProps) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <BasicLayout>
        <Rows>
          <Row height="fluid">
            <Stack space={32}>
              <LandingTextModule />
            </Stack>
          </Row>
          <Row height="content">
            <Stack space={16}>
              <LandingSignUpModule />
              <LandingLoginModule />
            </Stack>
          </Row>
        </Rows>
      </BasicLayout>
    </ScrollView>
  );
};
