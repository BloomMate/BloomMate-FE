import { Box, Stack } from '@mobily/stacks';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../primary.navigator';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

export type PrimaryMyPageScreenNavigatorProp = CompositeNavigationProp<
  PrimaryNavigatorProps,
  BottomTabNavigationProp<PrimaryNavigatorParamLists, 'PrimaryMyPageScreen'>
>;

export type PrimaryMyPageScreenRouteProp = RouteProp<
  PrimaryNavigatorParamLists,
  'PrimaryMyPageScreen'
>;

type PrimaryMyPageScreenProps = {};

export const PrimaryMyPageScreen = ({}: PrimaryMyPageScreenProps) => {
  return (
    <Stack
      paddingX={32}
      paddingY={32}
      style={{ backgroundColor: palette['gray-100'], flex: 1 }}
      space={48}>
      <Text fontWeight="Medium" variants="titleLarge" color="gray-900">
        마이 페이지
      </Text>
      <Stack space={64}>
        <Stack horizontal space={8} style={{ alignItems: 'center' }}>
          <Box
            style={{
              backgroundColor: 'red',
              width: 80,
              height: 80,
              borderRadius: 80,
            }}
          />
          <Text variants={'bodyLarge'} fontWeight={'Medium'} color={'gray-900'}>
            윤용성님 환영합니다!
          </Text>
        </Stack>

        <Stack
          paddingY={20}
          paddingX={16}
          style={{
            borderRadius: 8,
            backgroundColor: palette['white'],
            elevation: 4,
          }}
          space={24}>
          <Stack horizontal>
            <Text
              variants={'bodyMedium'}
              fontWeight={'Medium'}
              color={'gray-900'}>
              정보
            </Text>
          </Stack>

          <Stack space={16}>
            <Stack style={{ justifyContent: 'space-between' }} horizontal>
              <Text
                style={{ flex: 1 }}
                variants={'bodyMedium'}
                fontWeight={'Medium'}
                color={'gray-700'}>
                로그아웃
              </Text>
              <Icon
                size={20}
                color={palette['gray-700']}
                name={'arrow-forward-ios'}
              />
            </Stack>

            <Stack style={{ justifyContent: 'space-between' }} horizontal>
              <Text
                style={{ flex: 1 }}
                variants={'bodyMedium'}
                fontWeight={'Medium'}
                color={'gray-700'}>
                회원정보 확인
              </Text>
              <Icon
                size={20}
                color={palette['gray-700']}
                name={'arrow-forward-ios'}
              />
            </Stack>
            <Stack style={{ justifyContent: 'space-between' }} horizontal>
              <Text
                style={{ flex: 1 }}
                variants={'bodyMedium'}
                fontWeight={'Medium'}
                color={'gray-700'}>
                About BloomMate
              </Text>
              <Icon
                size={20}
                color={palette['gray-700']}
                name={'arrow-forward-ios'}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
