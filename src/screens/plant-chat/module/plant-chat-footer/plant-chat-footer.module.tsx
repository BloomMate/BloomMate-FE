import { Box } from '@mobily/stacks';
import isEmpty from 'lodash/isEmpty';
import { memo, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { $plantChatSelector, $plantChatState } from '../../plant-chat.state';

import { palette } from '@/utils';

type PlantChatFooterModuleProps = {};

export const PlantChatFooterModule = memo<PlantChatFooterModuleProps>(() => {
  const setPlantChat = useSetRecoilState($plantChatState);
  const [text, setText] = useState(''); // 텍스트 상태 관리

  const { isEmptyPlantChat, isTodayPlantChat } =
    useRecoilValue($plantChatSelector);

  const handleSend = () => {
    setPlantChat(prev => ({
      ...prev,
      contents: [
        ...prev.contents,
        { is_user_chat: true, chatting_content: text },
        { chatting_content: '', is_user_chat: false, isLoading: true },
      ],
    }));
    setText(''); // 텍스트 초기화
  };

  const isDisableTextInput =
    !isTodayPlantChat || (isTodayPlantChat && isEmptyPlantChat);

  return (
    <Box
      paddingX={12}
      direction="row"
      style={{
        backgroundColor: palette['white'],
        justifyContent: 'space-between',
        borderRadius: 8,
        alignItems: 'center',
      }}>
      <TextInput
        style={{
          height: 40,
          color: palette['gray-900'],
          flex: 1,
        }}
        editable={!isDisableTextInput}
        onChangeText={setText}
        value={text}
        onSubmitEditing={handleSend}
        placeholderTextColor={palette['primary']}
      />
      <TouchableOpacity
        disabled={isDisableTextInput || isEmpty(text)}
        style={{ alignItems: 'center', justifyContent: 'center' }}
        onPress={handleSend}>
        <Icon color={palette['primary']} size={24} name="send-outline" />
      </TouchableOpacity>
    </Box>
  );
});
