import { Box, Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PlantChatScreenNavigationProps } from '../../plant-chat.screen';

import { CHAT_LOGO_IMG } from '@/assets';
import { Button, Image } from '@/atoms';

type PlantChatContentModuleProps = {};

export const PlantChatContentModule = memo<PlantChatContentModuleProps>(() => {
  const navigation = useNavigation<PlantChatScreenNavigationProps>();

  return (
    <Stack paddingBottom={136}>
      <Box alignX={'center'}>
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: CHAT_LOGO_IMG }}
          skeletonStyle={{ width: 300, height: 300 }}
        />
      </Box>

      <Button mode={'contained'}>오늘의 레포트 확인</Button>
    </Stack>
  );
});
