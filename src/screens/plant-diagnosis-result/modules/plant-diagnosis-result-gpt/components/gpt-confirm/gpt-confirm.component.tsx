import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type GPTConfirmProps = {};

export const GPTConfirm = memo<GPTConfirmProps>(() => {
  return (
    <Box flex="fluid" alignY="center" direction="row" alignX="center">
      <Stack
        horizontal
        space={12}
        paddingX={12}
        paddingY={16}
        align="center"
        style={{ backgroundColor: palette['teal-400'], borderRadius: 8 }}>
        <Icon name="notifications-none" size={24} color={palette['white']} />
        <Text
          variants="labelLarge"
          fontWeight="Light"
          color="white"
          textAlignment="center">
          {`씨앗 구매가 완료되었습니다`}
        </Text>
      </Stack>
    </Box>
  );
});
