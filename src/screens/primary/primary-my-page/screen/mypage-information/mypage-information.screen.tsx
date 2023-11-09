import { Stack } from '@mobily/stacks';

import { Text } from '@/atoms';

type MyPageInformationScreenProps = {};

export const PrimaryMyPageInformationScreen =
  ({}: MyPageInformationScreenProps) => {
    return (
      <Stack>
        <Text variants={'displayLarge'} fontWeight={'Light'} color={'gray-900'}>
          안녕하세요
        </Text>
      </Stack>
    );
  };
