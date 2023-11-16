import { Box } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Suspense } from 'react';
import { FormProvider } from 'react-hook-form';

import { RootStackParamList } from '../../../../root.navigator';

import { useQnAForm } from './hooks';
import { PrimaryCommunityQnaPostHeaderModule } from './modules/primary-community-qna-post';
import { PrimaryCommunityQnaPostContentModule } from './modules/primary-community-qna-post/primary-community-qna-post-content/primary-community-qna-post-content.module';
import { PrimaryCommunityQnaPostFooterModule } from './modules/primary-community-qna-post/primary-community-qna-post-footer';

import { LoadingPage } from '@/layouts';
import { palette } from '@/utils';

export type PrimaryCommunityQnaPostScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PrimaryCommunityQnaPostScreen'
>;

export type PrimaryCommunityQnaPostScreenRouteProps = RouteProp<
  RootStackParamList,
  'PrimaryCommunityQnaPostScreen'
>;

type PrimaryCommunityQnaPostScreenProps = {};

export const PrimaryCommunityQnaPostScreen =
  ({}: PrimaryCommunityQnaPostScreenProps) => {
    const methods = useQnAForm();

    return (
      <FormProvider {...methods}>
        <Suspense fallback={<LoadingPage />}>
          <Box
            paddingY={32}
            paddingX={24}
            style={{
              backgroundColor: palette['gray-100'],
              height: '100%',
            }}>
            <PrimaryCommunityQnaPostHeaderModule />
            <PrimaryCommunityQnaPostContentModule />
            <PrimaryCommunityQnaPostFooterModule />
          </Box>
        </Suspense>
      </FormProvider>
    );
  };
