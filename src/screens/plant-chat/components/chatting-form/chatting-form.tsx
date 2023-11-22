import { Stack } from '@mobily/stacks';
import { memo, useState } from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { palette } from '@/utils';

type ChattingFormProps = {};

export const ChattingForm = memo<ChattingFormProps>(() => {
  const [text, setText] = useState(''); // 텍스트 상태 관리

  const handleSend = () => {
    console.log(text); // 보내기 버튼을 눌렀을 때 실행할 동작
    setText(''); // 텍스트 초기화
  };

  return (
    <Stack
      paddingX={12}
      horizontal
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
        }}
        onChangeText={setText}
        value={text}
        placeholder="메시지를 입력하세요..."
        placeholderTextColor={palette['primary']}
      />
      <TouchableOpacity
        style={{ alignItems: 'center', justifyContent: 'center' }}
        onPress={handleSend}>
        <Icon color={palette['primary']} size={24} name="send-outline" />
      </TouchableOpacity>
    </Stack>
  );
});
