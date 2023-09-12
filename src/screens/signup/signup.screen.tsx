import { Text } from '@/atoms';
import { BasicLayout } from '@/layouts';

type SignUpScreenProps = {};

export const SignUpScreen = ({}: SignUpScreenProps) => {
  return (
    <BasicLayout>
      <Text fontSize="14" fontWeight="500" color="black">
        하이
      </Text>
    </BasicLayout>
  );
};
