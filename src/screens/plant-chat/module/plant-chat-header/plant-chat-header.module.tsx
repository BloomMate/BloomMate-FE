import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PrimaryPlantListScreenNavigatorProp } from '../../../primary/primary-plant-list';

import { ModalHeader } from '@/layouts';

type PlantChatHeaderModuleProps = {};

export const PlantChatHeaderModule = memo<PlantChatHeaderModuleProps>(() => {
  const navigation = useNavigation<PrimaryPlantListScreenNavigatorProp>();

  const handlePressBack = () => {
    navigation.goBack();
  };

  return <ModalHeader left={{ type: 'icon' }} onPressExit={handlePressBack} />;
});
