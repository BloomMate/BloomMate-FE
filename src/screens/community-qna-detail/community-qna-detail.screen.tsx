import { Box } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import isUndefined from 'lodash/isUndefined';
import { Suspense } from 'react';

import { RootStackParamList } from '../root.navigator';

import {
  CommunityQnaDetailAnswerModule,
  CommunityQnaDetailHeaderModule,
  CommunityQnaDetailQuestionModule,
} from './modules';

import { useGetQuestionDetailQuery } from '@/hooks';
import { LoadingPage } from '@/layouts';
import { palette } from '@/utils';

export type CommunityQnaDetailScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'CommunityQnaDetailScreen'
>;

export type CommunityQnaDetailScreenRouteProps = RouteProp<
  RootStackParamList,
  'CommunityQnaDetailScreen'
>;

type CommunityQnaDetailScreenProps = {};

export const CommunityQnaDetailScreen = ({}: CommunityQnaDetailScreenProps) => {
  const {
    params: { id },
  } = useRoute<CommunityQnaDetailScreenRouteProps>();

  const { data } = useGetQuestionDetailQuery(id);

  if (isUndefined(data)) {
    return null;
  }
  const { question, comment } = data;

  return (
    <Suspense fallback={<LoadingPage />}>
      <Box
        paddingY={32}
        paddingX={24}
        style={{
          backgroundColor: palette['gray-100'],
          height: '100%',
        }}>
        <CommunityQnaDetailHeaderModule />
        <CommunityQnaDetailQuestionModule question_data={question} />
        {question.is_answered && (
          <CommunityQnaDetailAnswerModule question_comment={comment} />
        )}
      </Box>
    </Suspense>
  );
};
