import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { FlatList } from 'react-native';

import { PrimaryCommunityArticleItem } from '../components';

import { useGetArticleListQuery } from '@/hooks';

type PrimaryCommunityArticleContentModuleProps = {};

export const PrimaryCommunityArticleContentModule =
  memo<PrimaryCommunityArticleContentModuleProps>(({}) => {
    const { data } = useGetArticleListQuery();
    const item = data?.DATA;

    return (
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={item}
        ItemSeparatorComponent={() => <Box style={{ height: 24 }} />}
        renderItem={({ item }) => <PrimaryCommunityArticleItem {...item} />}
        ListFooterComponent={<Box style={{ height: 40 }} />}
      />
    );
  });
