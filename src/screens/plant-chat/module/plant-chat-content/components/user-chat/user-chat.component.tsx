import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';

import { ChattingContent } from '../../../../plant-chat.type';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type UserChatProps = ChattingContent & {};

export const UserChat = memo<UserChatProps>(({ chatting_content }) => {
  return (
    <Stack space={8}>
      <Box
        padding={12}
        alignSelf={'left'}
        style={{
          backgroundColor: palette['white'],
          maxWidth: 256,
          borderRadius: 12,
          borderTopRightRadius: 0,
        }}>
        <Text variants="labelMedium" fontWeight="Medium" color={'gray-900'}>
          {chatting_content}
        </Text>
      </Box>
    </Stack>
  );
});
