import { Row, Rows, Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, Platform } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { bgImageURL, logoImageURL } from './const';
import {
  LandingLoginModule,
  LandingSignUpModule,
  LandingTextModule,
} from './modules';

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
    <>
      <Image
        source={bgImageURL}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
        blurRadius={Platform.OS === 'android' ? 4 : 5}
      />
      <Rows
        paddingX={32}
        paddingY={32}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
        <Row height="fluid" style={{ justifyContent: 'center' }}>
          <Stack space={80} align={'center'}>
            <Image
              source={logoImageURL}
              style={{ width: 290, height: 56 }}
              resizeMode="contain"
            />
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
    </>
  );
};
