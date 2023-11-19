import { Box } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { PrimaryPlantListScreenNavigatorProp } from '../../../primary/primary-plant-list';

import { CHAT_LOGO_IMG } from '@/assets';

type PlantChatContentModuleProps = {};

export const PlantChatContentModule = memo<PlantChatContentModuleProps>(() => {
  const navigation = useNavigation<PrimaryPlantListScreenNavigatorProp>();

  return (
    <Box>
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: CHAT_LOGO_IMG }}
      />
      <TouchableOpacity></TouchableOpacity>
    </Box>
  );
});
