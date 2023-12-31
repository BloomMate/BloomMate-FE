import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';
import FastImage from 'react-native-fast-image';

import { ChattingContent } from '../../../../plant-chat.type';

import { LOGO_FONT_IMG } from '@/assets';
import { Image, Text } from '@/atoms';
import { palette } from '@/utils';

type GPTChatProps = ChattingContent & {};

export const GPTChat = memo<GPTChatProps>(({ chatting_content }) => {
  return (
    <Stack space={8}>
      <Image
        source={{ uri: LOGO_FONT_IMG, priority: FastImage.priority.high }}
        style={{ width: 80, height: 16 }}
      />

      <Box
        padding={12}
        alignSelf={'left'}
        style={{
          backgroundColor: palette['teal-400'],
          maxWidth: 256,
          borderRadius: 12,
          borderTopLeftRadius: 0,
        }}>
        <Text variants="bodyMedium" fontWeight="Medium" color={'white'}>
          {chatting_content}
        </Text>
      </Box>
    </Stack>
  );
});
