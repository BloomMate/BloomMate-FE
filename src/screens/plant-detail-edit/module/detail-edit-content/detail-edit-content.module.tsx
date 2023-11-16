import { Stack } from '@mobily/stacks';
import { memo } from 'react';

import { Text } from '@/atoms';

type DetailEditContentModuleProps = {};

export const DetailEditContentModule = memo<DetailEditContentModuleProps>(
  () => {
    return (
      <Stack>
        <Text
          variants={'titleLarge'}
          fontWeight={'Light'}
          color={'gray-900'}></Text>
      </Stack>
    );
  },
);
