import { Box } from '@mobily/stacks';

import { Text, Icon, Button } from '@/atoms';
import { BasicLayout } from '@/layouts';
import { palette } from '@/utils';

type LoginScreenProps = {};



export const LoginScreen = ({}: LoginScreenProps) => {
  // TODO : Use MutationIndicator Properly
  // useMutationIndicator([true])

  return (
    <BasicLayout>
      <Box direction="row">
        <Button onPress={()=>{}} children={'안녕하세요'} mode={'contained'}/>
      </Box>
      <Icon name="delete" size={30} color={palette['amber-500']} />
      <Text variants="bodySmall" color="gray-900" fontWeight="Light">
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
