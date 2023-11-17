import { Stack } from '@mobily/stacks';

import { Text, TextInput } from '@/atoms';

type DetailEditContentInputModuleProps = {
  placeholder: {
    title: string;
    content: string;
  }[];
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
    <Stack space={48}>
      {/* 별명스택 */}
      <Stack space={12}>
        <Text variants={'titleLarge'} fontWeight={'Bold'} color={'black'}>
          별명
        </Text>
        <TextInput
          placeholder={placeholder[0].content} // placeholder는 배열 형태이므로 원하는 값을 추출하여 사용합니다.
          label="별명 수정"
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
