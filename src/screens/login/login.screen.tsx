import { Text } from '@/atoms';
import { BasicLayout } from '@/layouts';

type LoginScreenProps = {};

export const LoginScreen = ({}: LoginScreenProps) => {
  // TODO : Use MutationIndicator Properly
  // useMutationIndicator([true])

  return (
    <BasicLayout>
      <Text variants="bodySmall" color="gray-900"  fontWeight="Light">
        바디 스몰 / 그레이-900 / 라이트
      </Text>
      <Text variants="titleMedium" color="black" fontWeight="Bold">
        타이틀 미디움 / 블랙 / 볼드
      </Text>
      <Text variants="displaySmall" color="gray-600" fontWeight="Medium">
        바디라지 / 그레이-600 / 미디움
      </Text>
    </BasicLayout>
  );
};
