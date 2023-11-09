import { Stack } from '@mobily/stacks';
import { Text } from 'react-native';

import { palette } from '@/utils';

type MyPageInformationScreenProps = {};

export const PrimaryMyPageInformationScreen =
  ({}: MyPageInformationScreenProps) => {
    return (
      <Stack
        paddingX={24}
        paddingY={32}
        style={{ backgroundColor: palette['gray-100'], flex: 1 }}
        space={48}>
        <Text>df</Text>
      </Stack>
    );
  };
