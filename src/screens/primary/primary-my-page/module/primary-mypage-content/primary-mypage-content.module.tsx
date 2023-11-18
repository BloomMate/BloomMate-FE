import { Stack } from '@mobily/stacks';

import { PrimaryMypageGreetingModule } from './primary-mypage-greeting';
import { PrimaryMyPageHeaderModule } from './primary-mypage-header';
import { PrimaryMyPageInfoItemModule } from './primary-mypage-infoitem';

type PrimaryMyPageContentModuleProps = {};

export const PrimaryMyPageContentModule =
  ({}: PrimaryMyPageContentModuleProps) => {
    return (
      <Stack>
        <Stack space={48}>
          <PrimaryMyPageHeaderModule />
          <PrimaryMypageGreetingModule />
        </Stack>

        <PrimaryMyPageInfoItemModule />
      </Stack>
    );
  };
