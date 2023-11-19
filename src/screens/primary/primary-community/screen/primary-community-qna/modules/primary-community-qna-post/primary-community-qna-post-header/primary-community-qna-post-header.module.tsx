import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { PrimaryNavigatorProps } from '../../../../../../primary.navigator';

import { ModalHeader } from '@/layouts';

type PrimaryCommunityQnaPostHeaderModuleProps = {};

export const PrimaryCommunityQnaPostHeaderModule =
  memo<PrimaryCommunityQnaPostHeaderModuleProps>(() => {
    const navigation = useNavigation<PrimaryNavigatorProps>();
    const handlePressBack = () => {
      navigation.replace('PrimaryStack', { screen: 'PrimaryCommunityScreen' });
    };

    return (
      <ModalHeader left={{ type: 'icon' }} onPressExit={handlePressBack} />
    );
  });
