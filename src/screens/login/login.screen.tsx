import { Box } from '@mobily/stacks';
import { useState } from 'react';

import { Text, Icon, Button, TextInput, Modal } from '@/atoms';
import { Divider } from '@/atoms/divider';
import { Skeleton } from '@/atoms/skeleton';
import { BasicLayout } from '@/layouts';
import { palette } from '@/utils';

type LoginScreenProps = {};

export const LoginScreen = ({}: LoginScreenProps) => {
  // TODO : Use MutationIndicator Properly
  // useMutationIndicator([true])
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <BasicLayout>
      <Box>
        <Skeleton />
      </Box>

      <Divider heavy />
      <Box padding={10}>
        <TextInput
          label="아이디를 입력해주세요"
          rightIconName="hexagon"
          rightIconColor="red"
          error={true}
          errorMsg="에러났다sdf"
        />
      </Box>
      <Divider heavy />
      <Box direction="row" padding={10}>
        <Button
          onPress={() => {}}
          children={'안녕하세요'}
          mode={'contained'}
          disabled
        />
      </Box>
      <Box>
        <Modal isVisible={isModalVisible}>
          <Text
            variants={'displayLarge'}
            fontWeight={'Light'}
            color={'gray-900'}>
            Modal Test
          </Text>
          <Button
            onPress={() => setModalVisible(false)}
            children={'Cancel'}
            mode={'text'}
          />
        </Modal>
        <Button
          onPress={() => setModalVisible(true)}
          children={'Open Modal'}
          mode={'text'}
        />
      </Box>
      <Box direction="row" padding={10}>
        <Button onPress={() => {}} children={'안녕하세요'} mode={'outlined'} />
      </Box>
      <Divider />
      <Box direction="row" padding={40}>
        <Button onPress={() => {}} children={'뒤로가기'} mode={'text'} />
      </Box>
      <Icon name="delete" size={30} color={palette['amber-500']} />
      <Text variants="bodySmall" color="gray-900" fontWeight="Light">
        바디 스몰 / 그레이-900 / 라이트
      </Text>
      <Divider />
      <Text variants="titleMedium" color="black" fontWeight="Bold">
        타이틀 미디움 / 블랙 / 볼드
      </Text>
      <Text variants="displaySmall" color="gray-600" fontWeight="Medium">
        바디라지 / 그레이-600 / 미디움
      </Text>
    </BasicLayout>
  );
};
