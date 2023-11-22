import { Stack } from '@mobily/stacks';
import { memo } from 'react';

import {
  CommunityQnaPostContentTitleComponent,
  CommunityQnaPostContentContentComponent,
} from './components';

type CommunityQnaPostContentModuleProps = {};

export const CommunityQnaPostContentModule =
  memo<CommunityQnaPostContentModuleProps>(() => {
    return (
      <Stack space={32} paddingTop={32}>
        <CommunityQnaPostContentTitleComponent />
        <CommunityQnaPostContentContentComponent />
      </Stack>
    );
  });
