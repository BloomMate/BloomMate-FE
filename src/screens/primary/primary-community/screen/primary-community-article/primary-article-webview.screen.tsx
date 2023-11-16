import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Suspense, useEffect } from 'react';
import { BackHandler } from 'react-native';
import WebView from 'react-native-webview';

import { RootStackParamList } from '../../../../root.navigator';
import { PrimaryNavigatorProps } from '../../../primary.navigator';

import { LoadingPage } from '@/layouts';

type PrimaryArticleWebviewScreenProps = {};

export type PrimaryArticleWebviewScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PrimaryArticleWebview'
>;

export type PrimaryArticleWebviewScreenRouteProps = RouteProp<
  RootStackParamList,
  'PrimaryArticleWebview'
>;

export const PrimaryArticleWebviewScreen =
  ({}: PrimaryArticleWebviewScreenProps) => {
    const {
      params: { article_content },
    } = useRoute<PrimaryArticleWebviewScreenRouteProps>();

    const navigation = useNavigation<PrimaryNavigatorProps>();

    useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', () => {
        navigation.replace('PrimaryStack', {
          screen: 'PrimaryCommunityScreen',
        });
        return true;
      });
    }, []);

    return (
      <Suspense fallback={<LoadingPage />}>
        <WebView source={{ uri: article_content }} style={{ flex: 1 }} />
      </Suspense>
    );
  };
