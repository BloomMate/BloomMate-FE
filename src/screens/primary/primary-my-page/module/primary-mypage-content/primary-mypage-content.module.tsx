import { Stack } from '@mobily/stacks';

import { PrimaryMyPageGreetingModule } from './primary-mypage-greeting';
import { PrimaryMyPageHeaderModule } from './primary-mypage-header';
import { PrimaryMyPageInfoItemModule } from './primary-mypage-infoitem';

type PrimaryMyPageContentModuleProps = {};

export const PrimaryMyPageContentModule =
  ({}: PrimaryMyPageContentModuleProps) => {
    return (
      <Stack>
        <Stack space={48}>
          <PrimaryMyPageHeaderModule />
          <PrimaryMyPageGreetingModule />
        </Stack>

        <PrimaryMyPageInfoItemModule />
      </Stack>
    );
  };
