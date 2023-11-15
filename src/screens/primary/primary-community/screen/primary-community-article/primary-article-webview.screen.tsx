import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  RouteProp,
  useRoute,
} from '@react-navigation/native';
import { Suspense } from 'react';
import WebView from 'react-native-webview';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../../../primary.navigator';

import { LoadingPage } from '@/layouts';

type PrimaryArticleWebviewScreenProps = {};

export type PrimaryArticleWebviewScreenNavigatorProp = CompositeNavigationProp<
  PrimaryNavigatorProps,
  BottomTabNavigationProp<
    PrimaryNavigatorParamLists,
    'PrimaryArticleWebviewScreen'
  >
>;

export type PrimaryArticleWebviewScreenRouteProp = RouteProp<
  PrimaryNavigatorParamLists,
  'PrimaryArticleWebviewScreen'
>;

export const PrimaryArticleWebviewScreen =
  ({}: PrimaryArticleWebviewScreenProps) => {
    const {
      params: { article_content },
    } = useRoute<PrimaryArticleWebviewScreenRouteProp>();
    console.log(article_content);

    return (
      <Suspense fallback={<LoadingPage />}>
        <WebView source={{ uri: article_content }} style={{ flex: 1 }} />
      </Suspense>
    );
  };
