import { Row, Rows } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { PrimaryCommunityScreenNavigatorProp } from '../../../../primary-community.screen';

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
      const navigation = useNavigation<PrimaryCommunityScreenNavigatorProp>();

      return (
        <Rows space={12}>
          <TouchableOpacity>
            <Row>
              <Image
                source={{
                  uri: article_thumbnail_url,
                }}
                style={{ aspectRatio: 190 / 80 }}
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
