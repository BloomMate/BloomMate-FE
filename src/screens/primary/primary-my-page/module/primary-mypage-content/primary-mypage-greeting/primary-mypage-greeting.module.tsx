import { Box, Stack } from '@mobily/stacks';
import { isUndefined } from 'lodash';
import { memo } from 'react';

import { MYPAGE_IMG } from '@/assets';
import { Image, Skeleton, Text } from '@/atoms';
import { useGetAccountInfoQuery } from '@/hooks/get-account-info';

type PrimaryMyPageGreetingModuleProps = {};

export const PrimaryMypageGreetingModule =
  memo<PrimaryMyPageGreetingModuleProps>(() => {
    const { data } = useGetAccountInfoQuery();

    if (isUndefined(data)) {
      return null;
    }
    const { account_id, user_name, tiiun_number, garden_size, address } = data;

    return (
      <Stack horizontal space={12} style={{ alignItems: 'center' }}>
        <Box>
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 80,
            }}
            source={{ uri: MYPAGE_IMG }}
            skeletonStyle={{
              width: 80,
              height: 80,
              borderRadius: 80,
            }}
          />
        </Box>
        <Text variants={'bodyLarge'} fontWeight={'Bold'} color={'gray-900'}>
          {user_name}님 환영합니다 !
        </Text>
      </Stack>
    );
  });

export const PrimaryMyPageGreetingSuspenseModule = () => (
  <Stack horizontal space={12} style={{ alignItems: 'center' }}>
    <Box>
      <Image
        style={{
          width: 80,
          height: 80,
          borderRadius: 80,
        }}
        source={{ uri: MYPAGE_IMG }}
        skeletonStyle={{
          width: 80,
          height: 80,
          borderRadius: 80,
        }}
      />
    </Box>
    <Skeleton style={{ width: 160, height: 40 }} />
  </Stack>
);
