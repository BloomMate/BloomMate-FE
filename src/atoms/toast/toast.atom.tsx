import { Stack } from '@mobily/stacks';
import RNToast, { ToastConfig } from 'react-native-toast-message';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

export const Toast = () => {
  const toastConfig: ToastConfig = {
    plantAddFailed: ({ text1, text2 }) => {
      return (
        <Stack
          horizontal
          space={12}
          paddingX={12}
          paddingY={16}
          align="center"
          style={{ backgroundColor: palette['gray-600'], borderRadius: 8 }}>
          <Icon name="warning-amber" size={24} color={palette['white']} />
          <Text
            variants="labelLarge"
            fontWeight="Light"
            color="white"
            textAlignment="center">
            {`${text1} 사이즈 틔운에서는\n${text2}개 이상의 식물을 키우기 어려워요`}
          </Text>
        </Stack>
      );
    },
  };

  return <RNToast config={toastConfig} />;
};
