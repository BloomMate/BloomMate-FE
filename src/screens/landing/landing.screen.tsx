import { Row, Rows, Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image } from 'react-native';

import { RootStackParamList } from '../root.navigator';

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
      <Rows
        paddingX={32}
        paddingY={32}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
        <Row height="fluid" style={{ justifyContent: 'center' }}>
          <Stack space={80} align={'center'}>
            <Image
              source={require('./const/Image/LogoImage.png')}
              style={{ height: 56 }}
              resizeMode="contain"
            />
            <Image
              source={require('./const/Image/LandingImage.jpg')}
              style={{ width: 148, height: 120 }}
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
