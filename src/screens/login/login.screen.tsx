import { Box, Row, Rows } from '@mobily/stacks';
import { useState } from 'react';

import { Text, Icon, Button, TextInput, Modal } from '@/atoms';
import { Divider } from '@/atoms/divider';
import { Skeleton } from '@/atoms/skeleton';
import { BasicLayout, CTASection, SingleButtonProps, Dialog } from '@/layouts';
import { palette } from '@/utils';

type LoginScreenProps = {};

export const LoginScreen = ({}: LoginScreenProps) => {
  const buttons: SingleButtonProps[] = [
    {
      label: '버튼 1',
      mode: 'contained',
      disabled: false,
    },
    {
      label: '버튼 2',
      mode: 'outlined',
      disabled: true,
    },
  ];
  // TODO : Use MutationIndicator Properly
  // useMutationIndicator([true])
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <BasicLayout>
      <Dialog
        dialogVisible={true}
        title="title"
        content="content"
        okayButton={{ label: 'okay', mode: 'contained', onPress: () => {} }}
        cancelButton={{ label: 'cancel', mode: 'outlined', onPress: () => {} }}
      />

      <Rows>
        <Row height="fluid">
          <Box>
            <Skeleton />

            <Divider />

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
                mode={'contained'}
              />
              <Button
                onPress={() => {}}
                children={'안녕하세요'}
                mode={'outlined'}
              />
            </Box>
          </Box>

          <Box direction="row" padding={40}>
            <Button onPress={() => {}} children={'뒤로가기'} mode={'text'} />
            <Icon name="delete" size={30} color={palette['green-500']} />
          </Box>
        </Row>
        <Row height="content">
          <CTASection direction="row" buttons={buttons} />
        </Row>
      </Rows>
    </BasicLayout>
  );
};
