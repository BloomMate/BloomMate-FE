import { Box, Stack } from '@mobily/stacks';
import { Image } from 'react-native';

import { MYPAGE_IMG } from '@/assets';
import { Text } from '@/atoms';

type PrimaryMyPageGreetingModuleProps = {};

export const PrimaryMyPageGreetingModule =
  ({}: PrimaryMyPageGreetingModuleProps) => {
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
      </Stack>
    );
  };
