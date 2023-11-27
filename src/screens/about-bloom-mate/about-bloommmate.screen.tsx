import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import WebView from 'react-native-webview';

import { RootStackParamList } from '../root.navigator';

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
    <WebView
      source={{
        uri: 'https://exuberant-guan-3ad.notion.site/About-BloomMate-4a8d8dfca7ed4ef9937b4f1641e0a53d?pvs=4',
      }}
    />
  );
};
