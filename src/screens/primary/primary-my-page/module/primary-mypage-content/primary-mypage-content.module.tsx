import { Box, Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import { PrimaryMyPageScreenNavigatorProp } from '../../primary-my-page.screen';

import { InfoItem } from './components';

import { MYPAGE_IMG } from '@/assets';
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
        <Stack horizontal space={12} style={{ alignItems: 'center' }}>
          <Box>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 80,
              }}
              source={{ uri: MYPAGE_IMG }}
            />
          </Box>
          <Text variants={'bodyLarge'} fontWeight={'Bold'} color={'gray-900'}>
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
              <Text variants={'bodyLarge'} fontWeight={'Bold'} color={'black'}>
                정보
              </Text>
            </Stack>

            <Stack space={24}>
              <InfoItem text="로그아웃" onPress={handlePressLogOut} />
              <InfoItem text="회원정보" onPress={handlePressUserInfoCheck} />
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
