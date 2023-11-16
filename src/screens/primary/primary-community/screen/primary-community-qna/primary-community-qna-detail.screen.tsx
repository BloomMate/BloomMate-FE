import { Box } from '@mobily/stacks';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Suspense } from 'react';

import { RootStackParamList } from '../../../../root.navigator';

import { LoadingPage, ModalHeader } from '@/layouts';
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

    const handlePressButton = () => {
      console.log(id);
    };

    return (
      <Suspense fallback={<LoadingPage />}>
        <Box
          paddingY={32}
          paddingX={24}
          style={{
            backgroundColor: palette['gray-100'],
            height: '100%',
          }}>
          <ModalHeader
            left={{ type: 'icon' }}
            onPressExit={handlePressButton}
          />
        </Box>
      </Suspense>
    );
  };
