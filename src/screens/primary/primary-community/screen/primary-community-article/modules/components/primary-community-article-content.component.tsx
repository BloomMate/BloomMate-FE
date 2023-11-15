import { Row, Rows } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { PrimaryArticleWebviewScreenNavigationProps } from '../../primary-article-webview.screen';

import { Text } from '@/atoms';

type PrimaryCommuntiyArticleItemProps = {
  id: string;
  article_title: string;
  article_content: string;
  article_thumbnail_url: string;
};

export const PrimaryCommuntiyArticleItem =
  memo<PrimaryCommuntiyArticleItemProps>(
    ({ id, article_content, article_thumbnail_url, article_title }) => {
      const navigation =
        useNavigation<PrimaryArticleWebviewScreenNavigationProps>();

      const handlePressArticle = () => {
        navigation.navigate('PrimaryArticleWebview', {
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
