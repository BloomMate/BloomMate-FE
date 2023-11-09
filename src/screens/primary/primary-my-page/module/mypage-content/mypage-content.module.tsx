import { Box, Stack } from '@mobily/stacks';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../../../primary.navigator';

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

type PrimaryMyPageContentModuleProps = {};
type InfoItemProps = {
  text: string;
};

const InfoItem = ({ text }: InfoItemProps) => (
  <Stack style={{ justifyContent: 'space-between' }} horizontal>
    <Text
      style={{ flex: 1 }}
      variants={'bodyMedium'}
      fontWeight={'Medium'}
      color={'gray-700'}>
      {text}
    </Text>
    <Icon size={20} color={palette['gray-700']} name={'arrow-forward-ios'} />
  </Stack>
);

export const PrimaryMyPageContentModule =
  ({}: PrimaryMyPageContentModuleProps) => {
    return (
      <Stack>
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

        <Stack paddingTop={64}>
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
              <InfoItem text="로그아웃" />
              <InfoItem text="회원정보 확인" />
              <InfoItem text="About BloomMate" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  };
