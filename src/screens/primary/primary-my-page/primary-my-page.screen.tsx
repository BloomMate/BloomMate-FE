import { Stack } from '@mobily/stacks';

import { PrimaryMyPageContentModule } from './module/mypage-content';
import { PrimaryMyPageHeaderModule } from './module/mypage-header';

import { palette } from '@/utils';

type PrimaryMyPageScreenProps = {};

export const PrimaryMyPageScreen = ({}: PrimaryMyPageScreenProps) => {
  return (
    <Stack
      paddingX={24}
      paddingY={32}
      style={{ backgroundColor: palette['gray-100'], flex: 1 }}
      space={48}>
      <PrimaryMyPageHeaderModule />
      <PrimaryMyPageContentModule />
    </Stack>
  );
};
