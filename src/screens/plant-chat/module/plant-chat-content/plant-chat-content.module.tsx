import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { ActivityIndicator, FlatList, Image } from 'react-native';
import { useSetRecoilState } from 'recoil';

import { $plantChatState } from '../../plant-chat.state';

import { GPTChat, GPTLoading, UserChat } from './components';
import { useGetChattingContentsByDate, usePostPlantChat } from './hooks';

import { CHAT_LOGO_IMG } from '@/assets';
import { Button, Text } from '@/atoms';
import { palette, withSuspense } from '@/utils';

type PlantChatContentModuleProps = {};

const PlantChatContent = memo<PlantChatContentModuleProps>(() => {
  useGetChattingContentsByDate();
  const { contents, date, isTodayPlantChat, isEmptyPlantChat } =
    usePostPlantChat();

  const setPlantChat = useSetRecoilState($plantChatState);

  const handlePressTodayReportCheckButton = () => {
    setPlantChat(prev => ({
      ...prev,
      contents: [
        { chatting_content: '오늘 상태는 어때?', is_user_chat: true },
        { chatting_content: '', is_user_chat: false, isLoading: true },
      ],
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
      contentContainerStyle={{ flexGrow: 1 }}
      ListHeaderComponent={() => (
        <Box paddingBottom={32} alignX="center">
          <Text variants="bodyMedium" fontWeight="Bold" color="black">
            {date.format('YY.MM.DD')}
          </Text>
        </Box>
      )}
      ItemSeparatorComponent={() => <Box style={{ height: 32 }} />}
      renderItem={({ item }) => {
        const { is_user_chat, isLoading } = item;

        if (isLoading) {
          return <GPTLoading />;
        }

        return (
          <>{is_user_chat ? <UserChat {...item} /> : <GPTChat {...item} />}</>
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
  <Box flex="fluid" alignY="center" alignX="center">
    <ActivityIndicator size="large" color={palette['primary']} />
  </Box>
);

export const PlantChatContentModule = withSuspense(
  PlantChatContent,
  PlantChatLoading,
);
