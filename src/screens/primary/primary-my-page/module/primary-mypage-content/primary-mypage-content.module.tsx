import { Box, Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';

import { PrimaryMyPageScreenNavigatorProp } from '../../primary-my-page.screen';

import { InfoItem } from './components';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type PrimaryMyPageContentModuleProps = {};

export const PrimaryMyPageContentModule =
  ({}: PrimaryMyPageContentModuleProps) => {
    const navigation = useNavigation<PrimaryMyPageScreenNavigatorProp>();

    const handlePressLogOut = () => {};
    const handlePressUserInfoCheck = () => {
      navigation.navigate('UserInfoScreen');
    };
    const handlePressAboutBloomMate = () => {};

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
              <InfoItem text="로그아웃" onPress={handlePressLogOut} />
              <InfoItem
                text="회원정보 확인"
                onPress={handlePressUserInfoCheck}
              />
              <InfoItem
                text="About BloomMate"
                onPress={handlePressAboutBloomMate}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  };