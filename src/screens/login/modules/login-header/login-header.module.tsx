import { Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { LoginScreenNavigationProps } from '../../login.screen';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type LoginHeaderModuleProps = {};

export const LoginHeaderModule = memo<LoginHeaderModuleProps>(() => {
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const handlePressBack = () => {
    navigation.goBack();
  };

  return (
    <Stack space={32} paddingTop={32}>
      <Icon
        name="arrow-back-ios"
        onPress={handlePressBack}
        size={24}
        color={palette['gray-900']}
      />
      <Text fontWeight="Medium" variants="titleLarge" color="gray-900">
        로그인
      </Text>
    </Stack>
  );
});
