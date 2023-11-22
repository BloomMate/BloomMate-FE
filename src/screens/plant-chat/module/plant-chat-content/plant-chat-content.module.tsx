import { Box, Stack } from '@mobily/stacks';
import isEmpty from 'lodash/isEmpty';
import { memo } from 'react';
import { Image } from 'react-native';
import { useRecoilState } from 'recoil';
import { useDidUpdate } from 'rooks';

import { $plantChatState } from '../../plant-chat.state';

import { usePostPlantChat } from './hooks';

import { CHAT_LOGO_IMG } from '@/assets';
import { Button, Text } from '@/atoms';
import { ScrollView } from '@/layouts';

type PlantChatContentModuleProps = {};

export const PlantChatContentModule = memo<PlantChatContentModuleProps>(() => {
  const [plantChat, setPlantChat] = useRecoilState($plantChatState);
  const { contents, date } = plantChat;

  const { mutate } = usePostPlantChat();

  const isTodayPlantChat = date.isToday();
  const isEmptyPlantChat = isEmpty(contents);

  useDidUpdate(() => {
    if (!isTodayPlantChat) {
      return;
    }

    const lastChattingContent = contents[contents.length - 1].chatting_content;

    mutate({
      chatting_content: lastChattingContent,
    });
  }, [contents]);

  const handlePressTodayReportCheckButton = () => {
    setPlantChat(prev => ({
      ...prev,
      contents: [{ chatting_content: '오늘 상태는 어때?', is_user_chat: true }],
    }));
  };

  if (isTodayPlantChat && isEmptyPlantChat) {
    return (
      <Box flex="fluid" alignX="center" style={{ width: '100%' }}>
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: CHAT_LOGO_IMG }}
        />
        <Button
          style={{ width: '100%' }}
          mode={'contained'}
          onPress={handlePressTodayReportCheckButton}>
          오늘의 레포트 확인
        </Button>
      </Box>
    );
  }

  if (isTodayPlantChat) {
    return (
      <ScrollView>
        <Stack space={12}>
          {contents.map(content => (
            <Text
              variants="labelLarge"
              fontWeight="Medium"
              color="gray-900"
              style={{
                alignSelf: content.is_user_chat ? 'flex-start' : 'flex-end',
              }}
              key={content.chatting_content}>
              {content.chatting_content}
            </Text>
          ))}
        </Stack>
      </ScrollView>
    );
  }

  return null;
});
