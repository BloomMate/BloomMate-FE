import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { LandingScreenNavigationProps } from '../../landing.screen';

import { Text } from '@/atoms';

type LandingTextModuleProps = {};

export const LandingTextModule = memo<LandingTextModuleProps>(() => {
  const navigation = useNavigation<LandingScreenNavigationProps>();

  return (
    <Text variants="titleLarge" fontWeight="Medium" color="gray-900">
      식집사를 위한 친구
    </Text>
  );
});
