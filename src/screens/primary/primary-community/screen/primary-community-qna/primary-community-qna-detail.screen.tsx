import { Box } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Suspense } from 'react';

import { RootStackParamList } from '../../../../root.navigator';

import {
  PrimaryCommunityQnaFloatingModule,
  PrimaryCommunityQnaListModule,
} from './modules';

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
    return (
      <Suspense fallback={<LoadingPage />}>
        <Box
          paddingTop={24}
          paddingBottom={52}
          style={{
            backgroundColor: palette['gray-100'],
            height: '100%',
          }}>
          <PrimaryCommunityQnaListModule />
          <PrimaryCommunityQnaFloatingModule />
        </Box>
      </Suspense>
    );
  };
