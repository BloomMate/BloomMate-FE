import { Text } from '@/atoms';
import { BasicLayout } from '@/layouts';

type LoginScreenProps = {};

export const LoginScreen = ({}: LoginScreenProps) => {
  // TODO : Use MutationIndicator Properly
  // useMutationIndicator([true])

  return (
    <BasicLayout>
      <Text color="gray-1000" fontSize="14" fontWeight="500">
        gray-1000 / 14 size / 500 weight
      </Text>
      <Text color="gray-800" fontSize="18" fontWeight="500">
        gray-800 / 18 size / 500 weight
      </Text>
      <Text color="error" fontSize="28" fontWeight="400">
        error / 28 size / 500 weight
      </Text>
    </BasicLayout>
  );
};
