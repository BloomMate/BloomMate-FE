import { Stack } from '@mobily/stacks';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { SignUpForm } from '../../hooks';

import { TextInput } from '@/atoms';

type SignUpAddressModuleProps = {};

//todo: 주소 받을 버튼 생성, 주소 검색하는 api 연결 방법 찾기

export const SignUpAddressModule = memo<SignUpAddressModuleProps>(() => {
  const { control } = useFormContext<SignUpForm>();
  const {
    field: { onChange, value },
    fieldState,
  } = useController({ control, name: 'Address' });

  return (
    <Stack space={4}>
      <TextInput
        placeholder="주소를 입력하세요."
        label="주소"
        value={value}
        onChangeText={onChange}
        error={!isUndefined(fieldState.error)}
        errorMsg={fieldState.error?.message as string}
      />
    </Stack>
  );
});
