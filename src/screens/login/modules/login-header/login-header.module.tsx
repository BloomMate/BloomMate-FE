import { Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';

import { LoginScreenNavigationProps } from '../../login.screen';

import { Text } from '@/atoms';
import { ModalHeader } from '@/layouts';

type LoginHeaderModuleProps = {};

export const LoginHeaderModule = memo<LoginHeaderModuleProps>(() => {
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const handlePressBack = () => {
    navigation.goBack();
  };

  return (
    <Stack space={32}>
      <ModalHeader left={{ type: 'icon' }} onPressExit={handlePressBack} />
      <Text fontWeight="Bold" variants="titleLarge" color="black">
        로그인
      </Text>
    </Stack>
  );
});
