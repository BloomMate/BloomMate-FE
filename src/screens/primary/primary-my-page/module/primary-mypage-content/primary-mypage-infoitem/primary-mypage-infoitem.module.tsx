import { Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';

import { PrimaryMyPageScreenNavigatorProp } from '../../../primary-my-page.screen';
import { InfoItem } from '../components';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type PrimaryMyPageInfoItemModuleProps = {};

export const PrimaryMyPageInfoItemModule =
  ({}: PrimaryMyPageInfoItemModuleProps) => {
    const navigation = useNavigation<PrimaryMyPageScreenNavigatorProp>();

    const handlePressLogOut = () => {};
    const handlePressUserInfoCheck = () => {
      navigation.navigate('UserInfoScreen');
    };
    const handlePressAboutBloomMate = () => {};

    return (
      <Stack paddingTop={48}>
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
    );
  };
