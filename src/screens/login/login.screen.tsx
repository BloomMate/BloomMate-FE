import { Box } from '@mobily/stacks';

import { Text, Icon, Button, TextInput } from '@/atoms';
import { BasicLayout } from '@/layouts';
import { palette } from '@/utils';

type LoginScreenProps = {};



export const LoginScreen = ({}: LoginScreenProps) => {
  // TODO : Use MutationIndicator Properly
  // useMutationIndicator([true])

  return (
    <BasicLayout>
      <Box padding={10}>
        <TextInput
          label="아이디를 입력해주세요"
          rightIconName='hexagon'
          rightIconColor='red'
          error={true}
          errorMsg='에러났다'
        />
      </Box>
      <Box direction="row" padding={10}>
        <Button
          onPress={() => {}}
          children={'안녕하세요'}
          mode={'contained'}
          disabled
        />
      </Box>
      <Box direction="row" padding={10}>
        <Button onPress={() => {}} children={'안녕하세요'} mode={'outlined'} />
      </Box>
      <Box direction="row" padding={40}>
        <Button onPress={() => {}} children={'뒤로가기'} mode={'text'} />
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
