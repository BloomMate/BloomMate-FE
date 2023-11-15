import { Box } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { FlatList } from 'react-native';

import { PlantListEmpty } from '../../../../../primary-plant-list/screen/primary-plant-current-list/modules/primary-plant-current-list-content/components';
import { PrimaryCommunityScreenNavigatorProp } from '../../../../primary-community.screen';
import { PrimaryCommuntiyArticleItem } from '../components';
import { PRIMARY_COMMUNITY_ARTICLE_DATA } from '../primary-community-article-content.const';

type PrimaryCommunityArticleContentModuleProps = {};

export const PrimaryCommunityArticleContentModule =
  memo<PrimaryCommunityArticleContentModuleProps>(({}) => {
    const navigation = useNavigation<PrimaryCommunityScreenNavigatorProp>();
    const articleList = PRIMARY_COMMUNITY_ARTICLE_DATA;

    return (
      //   <Tiles space={12} columns={2}>
      //     <PrimaryCommuntiyArticleItem />
      //     <PrimaryCommuntiyArticleItem />
      //   </Tiles>

      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={articleList}
        ListEmptyComponent={<PlantListEmpty />}
        ItemSeparatorComponent={() => <Box style={{ height: 20 }} />}
        renderItem={({ item }) => <PrimaryCommuntiyArticleItem {...item} />}
        ListFooterComponent={<Box style={{ height: 40 }} />}
      />
    );
  });
