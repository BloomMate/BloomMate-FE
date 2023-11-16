import { Box } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Suspense } from 'react';

import { RootStackParamList } from '../../../../root.navigator';

import {
  PrimaryCommunityQnaDetailAnswerModule,
  PrimaryCommunityQnaDetailHeaderModule,
  PrimaryCommunityQnaDetailQuestionModule,
} from './modules';

import { useGetQuestionDetailQuery } from '@/hooks';
import { LoadingPage } from '@/layouts';
import { palette } from '@/utils';

export type PrimaryCommunityQnaDetailScreenNavigationProps =
  StackNavigationProp<RootStackParamList, 'PrimaryCommunityQnaDetailScreen'>;

export type PrimaryCommunityQnaDetailScreenRouteProps = RouteProp<
  RootStackParamList,
  'PrimaryCommunityQnaDetailScreen'
>;

type PrimaryCommunityQnaDetailScreenProps = {};

export const PrimaryCommunityQnaDetailScreen =
  ({}: PrimaryCommunityQnaDetailScreenProps) => {
    const {
      params: { id },
    } = useRoute<PrimaryCommunityQnaDetailScreenRouteProps>();

    const { data } = useGetQuestionDetailQuery(id);

    if (data) {
      const filteredData = data.DATA.filter(item => item.id === id);

      return (
        <Suspense fallback={<LoadingPage />}>
          <Box
            paddingY={32}
            paddingX={24}
            style={{
              backgroundColor: palette['gray-100'],
              height: '100%',
            }}>
            <PrimaryCommunityQnaDetailHeaderModule />
            <PrimaryCommunityQnaDetailQuestionModule data={filteredData} />
            <PrimaryCommunityQnaDetailAnswerModule />
          </Box>
        </Suspense>
      );
    } else {
      console.log(data);
    }
  };
