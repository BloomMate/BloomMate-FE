import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PrimaryPlantListScreenNavigatorProp } from '../../../primary/primary-plant-list';

import { ModalHeader } from '@/layouts';

type PlantDetailEditHeaderModuleProps = {};

export const PlantDetailEditHeaderModule =
  memo<PlantDetailEditHeaderModuleProps>(() => {
    const navigation = useNavigation<PrimaryPlantListScreenNavigatorProp>();

    const handlePressBack = () => {
      navigation.goBack();
    };

    return (
      <ModalHeader left={{ type: 'icon' }} onPressExit={handlePressBack} />
    );
  });
