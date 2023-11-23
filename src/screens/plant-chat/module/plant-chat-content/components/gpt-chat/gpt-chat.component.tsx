import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { Image } from 'react-native';

import { ChattingContent } from '../../../../plant-chat.type';

import { LOGO_FONT_IMG } from '@/assets';
import { Text } from '@/atoms';
import { palette } from '@/utils';

type GPTChatProps = ChattingContent & {};

export const GPTChat = memo<GPTChatProps>(({ chatting_content }) => {
  return (
    <Stack space={8}>
      <Image
        source={{ uri: LOGO_FONT_IMG }}
        style={{ width: 80, height: 16 }}
      />

      <Box
        padding={12}
        alignSelf={'right'}
        style={{
          backgroundColor: palette['teal-400'],
          maxWidth: 256,
          borderRadius: 12,
          borderTopLeftRadius: 0,
        }}>
        <Text variants="labelMedium" fontWeight="Medium" color={'white'}>
          {chatting_content}
        </Text>
      </Box>
    </Stack>
  );
});
