import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PrimaryMyPageScreenNavigatorProp } from '../../../primary/primary-my-page';

import { ModalHeader } from '@/layouts';

type AboutBloomMateHeaderModuleProps = {};

export const AboutBloomMateHeaderModule = memo<AboutBloomMateHeaderModuleProps>(
  () => {
    const navigation = useNavigation<PrimaryMyPageScreenNavigatorProp>();

    const handlePressBack = () => {
      navigation.goBack();
    };

    return (
      <ModalHeader left={{ type: 'icon' }} onPressExit={handlePressBack} />
    );
  },
);
