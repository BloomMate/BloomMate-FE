import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { FlatList } from 'react-native';

import { PrimaryCommunityArticleItem } from '../components';
import { PRIMARY_COMMUNITY_ARTICLE_DATA } from '../primary-community-article-content.const';

type PrimaryCommunityArticleContentModuleProps = {};

export const PrimaryCommunityArticleContentModule =
  memo<PrimaryCommunityArticleContentModuleProps>(({}) => {
    const articleList = PRIMARY_COMMUNITY_ARTICLE_DATA;

    return (
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={articleList}
        ItemSeparatorComponent={() => <Box style={{ height: 16 }} />}
        renderItem={({ item }) => <PrimaryCommunityArticleItem {...item} />}
        ListFooterComponent={<Box style={{ height: 40 }} />}
      />
    );
  });
