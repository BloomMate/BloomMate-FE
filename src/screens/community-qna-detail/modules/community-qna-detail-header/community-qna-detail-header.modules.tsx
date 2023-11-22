import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PrimaryNavigatorProps } from '../../../primary';

import { ModalHeader } from '@/layouts';

type CommunityQnaDetailHeaderModuleProps = {};

export const CommunityQnaDetailHeaderModule =
  memo<CommunityQnaDetailHeaderModuleProps>(() => {
    const navigation = useNavigation<PrimaryNavigatorProps>();
    const handlePressBack = () => {
      navigation.replace('PrimaryStack', { screen: 'PrimaryCommunityScreen' });
    };

    return (
      <ModalHeader left={{ type: 'icon' }} onPressExit={handlePressBack} />
    );
  });
