import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Suspense } from 'react';
import WebView from 'react-native-webview';

import { RootStackParamList } from '../../../../root.navigator';

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

    return (
      <Suspense fallback={<LoadingPage />}>
        <WebView source={{ uri: article_content }} style={{ flex: 1 }} />
      </Suspense>
    );
  };
