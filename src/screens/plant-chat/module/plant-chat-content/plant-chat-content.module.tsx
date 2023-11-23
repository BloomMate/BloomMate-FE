import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { ActivityIndicator, FlatList, Image } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useDidUpdate } from 'rooks';

import { $plantChatSelector, $plantChatState } from '../../plant-chat.state';

import { useGetChattingContentsByDate, usePostPlantChat } from './hooks';

import { CHAT_LOGO_IMG, LOGO_FONT_IMG } from '@/assets';
import { Button, Text } from '@/atoms';
import { palette, withSuspense } from '@/utils';

type PlantChatContentModuleProps = {};

const PlantChatContent = memo<PlantChatContentModuleProps>(() => {
  useGetChattingContentsByDate();

  const [plantChat, setPlantChat] = useRecoilState($plantChatState);

  const { isEmptyPlantChat, isTodayPlantChat } =
    useRecoilValue($plantChatSelector);
  const { contents, date } = plantChat;

  const { mutate } = usePostPlantChat();

  useDidUpdate(() => {
    if (!isTodayPlantChat) {
      return;
    }
    const lastChatting = contents[contents.length - 1];
    const { chatting_content, is_user_chat } = lastChatting;

    if (!is_user_chat) {
      return;
    }

    mutate({
      chatting_content,
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

  return (
    <FlatList
      data={contents}
      ListHeaderComponent={() => (
        <Box paddingBottom={32} alignX="center">
          <Text variants="bodyMedium" fontWeight="Bold" color="black">
            {date.format('YY.MM.DD')}
          </Text>
        </Box>
      )}
      ItemSeparatorComponent={() => <Box style={{ height: 32 }} />}
      renderItem={({ item }) => {
        const { is_user_chat, chatting_content } = item;

        return (
          <Stack space={8}>
            {!item.is_user_chat && (
              <Image
                source={{ uri: LOGO_FONT_IMG }}
                style={{ width: 80, height: 16 }}
              />
            )}
            <Box
              padding={12}
              alignSelf={item.is_user_chat ? 'right' : 'left'}
              style={{
                backgroundColor: item.is_user_chat
                  ? palette['white']
                  : palette['teal-400'],
                maxWidth: 256,
                borderRadius: 12,
                borderTopLeftRadius: 0,
              }}>
              <Text
                variants="labelMedium"
                fontWeight="Medium"
                color={item.is_user_chat ? 'gray-900' : 'white'}>
                {item.chatting_content}
              </Text>
            </Box>
          </Stack>
        );
      }}
      ListFooterComponent={() => <Box style={{ height: 40 }} />}
      ListEmptyComponent={() => (
        <Box flex="fluid" alignX="center" alignY="center">
          <Text variants="bodyMedium" fontWeight="Medium" color="gray-900">
            이 날은 진행된 대화가 없어요!
          </Text>
        </Box>
      )}
    />
  );
});

const PlantChatLoading = () => (
  <Box flex="fluid">
    <ActivityIndicator size="large" color={palette['primary']} />
  </Box>
);

export const PlantChatContentModule = withSuspense(
  PlantChatContent,
  PlantChatLoading,
);
