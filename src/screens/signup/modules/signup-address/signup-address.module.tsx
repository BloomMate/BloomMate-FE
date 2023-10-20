import Postcode from '@actbase/react-daum-postcode';
import { Stack } from '@mobily/stacks';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Alert } from 'react-native';

import { SignUpForm } from '../../hooks';

import { Button } from '@/atoms';

type SignUpAddressModuleProps = {};

//todo: 주소 받을 버튼 생성, 주소 검색하는 api 연결 방법 찾기

export const SignUpAddressModule = memo<SignUpAddressModuleProps>(() => {
  const { control } = useFormContext<SignUpForm>();
  const {
    field: { onChange, value },
    fieldState,
  } = useController({ control, name: 'Address' });

  const handlePressAddressInputButton = () => {
    return (
      <Postcode
        onSelected={data => JSON.stringify(data.address)}
        onError={error => Alert.alert('먕')}
        style={{ width: '100%', height: '100%' }}
        jsOptions={{ animation: true }}
      />
    );
  };

  return (
    <Stack space={4}>
      <Button mode="text" onPress={handlePressAddressInputButton}>
        주소 입력하기
      </Button>
    </Stack>
  );
});
