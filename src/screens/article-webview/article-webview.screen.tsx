import { useBackHandler } from '@react-native-community/hooks';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Suspense } from 'react';
import WebView from 'react-native-webview';

import { PrimaryNavigatorProps } from '../primary';
import { RootStackParamList } from '../root.navigator';

import { LoadingPage } from '@/layouts';

type ArticleWebviewScreenProps = {};

export type ArticleWebviewScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'ArticleWebview'
>;

export type ArticleWebviewScreenRouteProps = RouteProp<
  RootStackParamList,
  'ArticleWebview'
>;

export const ArticleWebviewScreen = ({}: ArticleWebviewScreenProps) => {
  const {
    params: { article_content },
  } = useRoute<ArticleWebviewScreenRouteProps>();

  const navigation = useNavigation<PrimaryNavigatorProps>();

  useBackHandler(() => {
    navigation.replace('PrimaryStack', {
      screen: 'PrimaryCommunityScreen',
    });
    return true;
  });

  return (
    <Suspense fallback={<LoadingPage />}>
      <WebView source={{ uri: article_content }} style={{ flex: 1 }} />
    </Suspense>
  );
};
