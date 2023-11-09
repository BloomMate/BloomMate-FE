import { Box, Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

import { PrimaryNavigatorParamLists } from '../../../../../primary.navigator';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

export type PrimaryMyPageScreenNavigatorProp = StackNavigationProp<
  PrimaryNavigatorParamLists,
  'PrimaryMyPageScreen'
>;

export type PrimaryMyPageScreenRouteProp = RouteProp<
  PrimaryNavigatorParamLists,
  'PrimaryMyPageScreen'
>;

type PrimaryMyPageContentModuleProps = {
  navigation: PrimaryMyPageScreenNavigatorProp;
};

type InfoItemProps = {
  text: string;
  navigation: PrimaryMyPageScreenNavigatorProp;
  screen?: 'PrimaryMyPageInformationScreen';
};

const InfoItem = ({ text, navigation, screen }: InfoItemProps) => (
  <TouchableOpacity onPress={() => screen && navigation.navigate(screen)}>
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
  </TouchableOpacity>
);

export const PrimaryMyPageContentModule = ({
  navigation,
}: PrimaryMyPageContentModuleProps) => {
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
            <InfoItem text="로그아웃" navigation={navigation} />
            <InfoItem
              text="회원정보 확인"
              navigation={navigation}
              screen="PrimaryMyPageInformationScreen"
            />
            <InfoItem text="About BloomMate" navigation={navigation} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
