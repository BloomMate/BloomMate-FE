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
      source={{ uri: 'https://create-react-app.dev/' }}
      style={{ marginTop: 20 }}
    />
  );
};
