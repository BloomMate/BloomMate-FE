import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PlantDetailScreenNavigationProps } from '../../plant-detail.screen';

import { ModalHeader } from '@/layouts';

type PlantDetailHeaderModuleProps = {};

export const PlantDetailHeaderModule = memo<PlantDetailHeaderModuleProps>(
  () => {
    const navigation = useNavigation<PlantDetailScreenNavigationProps>();

    const handlePressBack = () => {
      navigation.goBack();
    };

    return (
      <ModalHeader left={{ type: 'icon' }} onPressExit={handlePressBack} />
    );
  },
);
