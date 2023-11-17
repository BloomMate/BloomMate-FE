import { Stack } from '@mobily/stacks';

import { Text, TextInput } from '@/atoms';

type DetailEditContentInputModuleProps = {
  placeholder: string;
  label?: string;
  value: string;
  onChange: (text: string) => void;
  error?: boolean;
  errorMsg?: string;
  secureTextEntry?: boolean;
};

export const DetailEditContentInputModule = ({
  value,
  onChange,
  placeholder,
  error,
  errorMsg,
  secureTextEntry,
}: DetailEditContentInputModuleProps) => {
  return (
    <Stack>
      {/* 별명스택 */}
      <Stack space={12}>
        <Text variants={'titleLarge'} fontWeight={'Bold'} color={'black'}>
          별명 업데이트
        </Text>
        <TextInput
          placeholder={placeholder} // placeholder는 배열 형태이므로 원하는 값을 추출하여 사용합니다.
          label="별명"
          value={value}
          onChangeText={onChange}
          error={error}
          errorMsg={errorMsg || ''}
          secureTextEntry={secureTextEntry}
        />
      </Stack>
    </Stack>
  );
};
