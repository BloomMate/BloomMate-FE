import { Box } from '@mobily/stacks';
import { Suspense } from 'react';

import { PrimaryCommunityArticleContentModule } from './modules';

import { LoadingPage } from '@/layouts';
import { palette } from '@/utils';

type PrimaryCommunityArticleScreenProps = {};

export const PrimaryCommunityArticleScreen =
  ({}: PrimaryCommunityArticleScreenProps) => {
    return (
      <Suspense fallback={<LoadingPage />}>
        <Box
          paddingTop={24}
          paddingBottom={16}
          style={{
            backgroundColor: palette['gray-100'],
            height: '100%',
          }}>
          <PrimaryCommunityArticleContentModule />
        </Box>
      </Suspense>
    );
  };
