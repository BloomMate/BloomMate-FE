import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PrimaryPlantListScreenNavigatorProp } from '../../../primary/primary-plant-list';

import { ModalHeader } from '@/layouts';

type DetailEditHeaderModuleProps = {};

export const DetailEditHeaderModule = memo<DetailEditHeaderModuleProps>(() => {
  const navigation = useNavigation<PrimaryPlantListScreenNavigatorProp>();

  const handlePressBack = () => {
    navigation.goBack();
  };

  return <ModalHeader left={{ type: 'icon' }} onPressExit={handlePressBack} />;
});
