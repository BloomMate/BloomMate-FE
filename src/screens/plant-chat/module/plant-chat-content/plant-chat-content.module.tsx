import { Box } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { Image } from 'react-native';

import { PlantChatScreenNavigationProps } from '../../plant-chat.screen';

import { CHAT_LOGO_IMG } from '@/assets';
import { Button } from '@/atoms';

type PlantChatContentModuleProps = {};

export const PlantChatContentModule = memo<PlantChatContentModuleProps>(() => {
  const navigation = useNavigation<PlantChatScreenNavigationProps>();

  return (
    <Box flex="fluid" alignX="center" style={{ width: '100%' }}>
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: CHAT_LOGO_IMG }}
      />

      <Button style={{ width: '100%' }} mode={'contained'}>
        오늘의 레포트 확인
      </Button>
    </Box>
  );
});
