import { Stack } from '@mobily/stacks';
import { memo } from 'react';

import {
  PrimaryCommunityQnaPostContentContentComponent,
  PrimaryCommunityQnaPostContentTitleComponent,
} from './components';

type PrimaryCommunityQnaPostContentModuleProps = {};

export const PrimaryCommunityQnaPostContentModule =
  memo<PrimaryCommunityQnaPostContentModuleProps>(() => {
    return (
      <Stack space={32} paddingTop={32}>
        <PrimaryCommunityQnaPostContentTitleComponent />
        <PrimaryCommunityQnaPostContentContentComponent />
      </Stack>
    );
  });
