import { Box } from '@mobily/stacks';
import { Suspense } from 'react';

import { LoadingPage } from '@/layouts';
import { palette } from '@/utils';

type PrimaryCommunityQnaScreenProps = {};

export const PrimaryCommunityQnaScreen =
  ({}: PrimaryCommunityQnaScreenProps) => {
    return (
      <Suspense fallback={<LoadingPage />}>
        <Box
          paddingTop={24}
          paddingBottom={52}
          style={{
            backgroundColor: palette['gray-100'],
            height: '100%',
          }}></Box>
      </Suspense>
    );
  };
