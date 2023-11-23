import { Row, Rows } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { ArticleWebviewScreenNavigationProps } from '../../../../../../article-webview';

import { Image, Text } from '@/atoms';

type PrimaryCommuntiyArticleItemProps = {
  id: string;
  article_title: string;
  article_content: string;
  article_thumbnail_url: string;
};

export const PrimaryCommuntiyArticleItem =
  memo<PrimaryCommuntiyArticleItemProps>(
    ({ id, article_content, article_thumbnail_url, article_title }) => {
      const navigation = useNavigation<ArticleWebviewScreenNavigationProps>();

      const handlePressArticle = () => {
        navigation.navigate('ArticleWebview', {
          article_content: article_content,
        });
      };

      return (
        <Rows space={12}>
          <TouchableOpacity onPress={handlePressArticle}>
            <Row>
              <Image
                source={{
                  uri: article_thumbnail_url,
                }}
                style={{ aspectRatio: 190 / 80, borderRadius: 10 }}
                skeletonStyle={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </Row>
          </TouchableOpacity>
          <Row>
            <Text variants="labelMedium" fontWeight="Medium" color="gray-900">
              {article_title}
            </Text>
          </Row>
        </Rows>
      );
    },
  );
