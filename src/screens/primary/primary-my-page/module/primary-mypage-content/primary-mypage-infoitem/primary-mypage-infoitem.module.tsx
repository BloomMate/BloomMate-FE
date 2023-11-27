import { Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import LottieView from 'lottie-react-native';
import React from 'react';

import { PrimaryMyPageScreenNavigatorProp } from '../../../primary-my-page.screen';
import { InfoItem } from '../components';

import { MYPAGE_GREETING_LOTTIE } from '@/assets';
import { Skeleton, Text } from '@/atoms';
import { useGetAccountInfoQuery } from '@/hooks/get-account-info';
import { defaultAxios, palette } from '@/utils';

type GreetingSectionProps = {
  userName: string;
};

const GreetingSection: React.FC<GreetingSectionProps> = ({ userName }) => (
  <Stack
    paddingX={16}
    style={{
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: palette['primary'],
      elevation: 4,
    }}>
    <Stack horizontal space={12} style={{ alignItems: 'center' }}>
      <Text variants={'titleLarge'} fontWeight={'Bold'} color={'white'}>
        {userName}
      </Text>
      <Text variants={'bodyLarge'} fontWeight={'Medium'} color={'white'}>
        님 환영합니다 !
      </Text>
      <LottieView
        source={MYPAGE_GREETING_LOTTIE}
        autoPlay
        loop
        style={{ width: 150, height: 150 }}
      />
    </Stack>
  </Stack>
);

type InfoSectionProps = {
  handlePressLogOut: () => void;
  handlePressUserInfoCheck: () => void;
  handlePressAboutBloomMate: () => void;
};

const InfoSection: React.FC<InfoSectionProps> = ({
  handlePressLogOut,
  handlePressUserInfoCheck,
  handlePressAboutBloomMate,
}) => (
  <Stack
    style={{
      backgroundColor: palette['white'],
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      elevation: 4,
    }}
    paddingX={16}
    paddingY={24}>
    <Stack space={30}>
      <InfoItem text="로그아웃" onPress={handlePressLogOut} />
      <InfoItem text="회원정보" onPress={handlePressUserInfoCheck} />
      <InfoItem text="About BloomMate" onPress={handlePressAboutBloomMate} />
    </Stack>
  </Stack>
);

export const PrimaryMyPageInfoItemModule: React.FC = () => {
  const navigation = useNavigation<PrimaryMyPageScreenNavigatorProp>();
  const { data } = useGetAccountInfoQuery();

  if (isUndefined(data)) {
    return null;
  }
  const { user_name } = data;

  const handlePressLogOut = () => {
    defaultAxios.defaults.headers.Authorization = null;

    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LandingScreen',
        },
      ],
    });
  };

  const handlePressUserInfoCheck = () => {
    navigation.navigate('UserInfoScreen');
  };

  const handlePressAboutBloomMate = () => {
    navigation.navigate('AboutBloomMateScreen');

    // const url = 'https://github.com/BloomMate/BloomMate-FE'; // 원하는 웹사이트 주소로 변경]

    // if (await Linking.canOpenURL(url)) {
    //   Linking.openURL(url);
    // } else {
    //   console.log('Cannot open this URL');
    // }
  };

  return (
    <Stack style={{ elevation: 4 }}>
      <GreetingSection userName={user_name} />
      <InfoSection
        handlePressLogOut={handlePressLogOut}
        handlePressUserInfoCheck={handlePressUserInfoCheck}
        handlePressAboutBloomMate={handlePressAboutBloomMate}
      />
    </Stack>
  );
};

export const PrimaryMyPageInfoItemSuspenseModule = () => (
  <Stack horizontal space={12} style={{ alignItems: 'center' }}>
    <LottieView
      source={MYPAGE_GREETING_LOTTIE}
      autoPlay
      loop
      style={{ width: 150, height: 150 }}
    />
    <Skeleton style={{ width: 160, height: 40 }} />
  </Stack>
);
