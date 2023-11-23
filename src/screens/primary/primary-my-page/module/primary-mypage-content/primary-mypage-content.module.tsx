import { Stack } from '@mobily/stacks';
import { Suspense } from 'react';

import { PrimaryMyPageHeaderModule } from './primary-mypage-header';
import {
  PrimaryMyPageInfoItemModule,
  PrimaryMyPageInfoItemSuspenseModule,
} from './primary-mypage-infoitem';

type PrimaryMyPageContentModuleProps = {};

export const PrimaryMyPageContentModule =
  ({}: PrimaryMyPageContentModuleProps) => {
    return (
      <Stack>
        <Stack space={48}>
          <PrimaryMyPageHeaderModule />
          <Suspense fallback={<PrimaryMyPageInfoItemSuspenseModule />}>
            <PrimaryMyPageInfoItemModule />
          </Suspense>
        </Stack>
      </Stack>
    );
  };
