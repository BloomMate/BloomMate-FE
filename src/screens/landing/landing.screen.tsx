import { Row, Rows, Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { bgImageURL, logoImageURL } from './const';
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
      <Image
        source={bgImageURL}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
      <BasicLayout>
        <Rows>
          <Row height="fluid" style={{ justifyContent: 'center' }}>
            <Stack space={80} align={'center'}>
              <Image source={logoImageURL} style={{ width: 290, height: 56 }} />
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
