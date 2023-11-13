import { Tiles } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PrimaryCommunityScreenNavigatorProp } from '../../../../primary-community.screen';
import { PrimaryCommuntiyArticleItem } from '../components';

type PrimaryCommunityArticleContentModuleProps = {};

export const PrimaryCommunityArticleContentModule =
  memo<PrimaryCommunityArticleContentModuleProps>(({}) => {
    const navigation = useNavigation<PrimaryCommunityScreenNavigatorProp>();

    return (
      <Tiles space={12} columns={2}>
        <PrimaryCommuntiyArticleItem />
        <PrimaryCommuntiyArticleItem />
      </Tiles>
    );
  });
