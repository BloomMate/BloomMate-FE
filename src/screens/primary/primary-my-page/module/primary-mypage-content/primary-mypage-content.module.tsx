import { Stack } from '@mobily/stacks';
import { Suspense } from 'react';

import { PrimaryMyPageGreetingSuspenseModule } from './primary-mypage-greeting';
import { PrimaryMyPageHeaderModule } from './primary-mypage-header';
import { PrimaryMyPageInfoItemModule } from './primary-mypage-infoitem';

type PrimaryMyPageContentModuleProps = {};

export const PrimaryMyPageContentModule =
  ({}: PrimaryMyPageContentModuleProps) => {
    return (
      <Stack>
        <Stack space={48}>
          <PrimaryMyPageHeaderModule />
          <Suspense fallback={<PrimaryMyPageGreetingSuspenseModule />}>
            {/* <PrimaryMypageGreetingModule /> */}
          </Suspense>
        </Stack>
        <PrimaryMyPageInfoItemModule />
      </Stack>
    );
  };
