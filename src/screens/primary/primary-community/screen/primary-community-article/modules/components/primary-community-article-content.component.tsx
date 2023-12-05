import { Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { TouchableOpacity, useWindowDimensions } from 'react-native';
import FastImage from 'react-native-fast-image';

import { ArticleWebviewScreenNavigationProps } from '../../../../../../article-webview';

import { Image, Text } from '@/atoms';

type PrimaryCommunityArticleItemProps = {
  id: number;
  article_title: string;
  article_content_url: string;
  article_thumbnail_url: string;
};

export const PrimaryCommunityArticleItem =
  memo<PrimaryCommunityArticleItemProps>(
    ({ id, article_content_url, article_thumbnail_url, article_title }) => {
      const { width: deviceWidth } = useWindowDimensions();

      const navigation = useNavigation<ArticleWebviewScreenNavigationProps>();

      const handlePressArticle = () => {
        navigation.navigate('ArticleWebview', {
          article_content: article_content_url,
        });
      };

      return (
        <Stack space={8}>
          <TouchableOpacity onPress={handlePressArticle}>
            <Image
              source={{
                uri: article_thumbnail_url,
              }}
              style={{
                aspectRatio: 190 / 80,
                borderRadius: 10,
                width: deviceWidth - 48,
              }}
              resizeMode={FastImage.resizeMode.cover}
              skeletonStyle={{ height: (deviceWidth - 48) / 2 }}
            />
          </TouchableOpacity>
          <Text variants="bodyLarge" fontWeight="Medium" color="gray-900">
            {article_title}
          </Text>
        </Stack>
      );
    },
  );
