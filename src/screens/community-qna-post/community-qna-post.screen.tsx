import { Box, Row, Rows } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Suspense } from 'react';
import { FormProvider } from 'react-hook-form';

import { RootStackParamList } from '../root.navigator';

import { useQnAForm } from './hooks';
import {
  CommunityQnaPostContentModule,
  CommunityQnaPostFooterModule,
  CommunityQnaPostHeaderModule,
} from './modules';

import { LoadingPage } from '@/layouts';
import { palette } from '@/utils';

export type CommunityQnaPostScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'CommunityQnaPostScreen'
>;

export type CommunityQnaPostScreenRouteProps = RouteProp<
  RootStackParamList,
  'CommunityQnaPostScreen'
>;

type CommunityQnaPostScreenProps = {};

export const CommunityQnaPostScreen = ({}: CommunityQnaPostScreenProps) => {
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
          <CommunityQnaPostHeaderModule />
          <Rows alignY="between">
            <Row height="content">
              <CommunityQnaPostContentModule />
            </Row>
            <Row height="content">
              <CommunityQnaPostFooterModule />
            </Row>
          </Rows>
        </Box>
      </Suspense>
    </FormProvider>
  );
};
