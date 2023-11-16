import { Stack } from '@mobily/stacks';

import { Text, TextInput } from '@/atoms';

type DetailEditContentModuleProps = {
  placeholder?: string;
  label?: string;
  value: string;
  onChange: (text: string) => void;
  error?: boolean;
  errorMsg?: string;
  secureTextEntry?: boolean;
};

export const DetailEditContentModule = ({
  value,
  onChange,
  error,
  errorMsg,
  secureTextEntry,
}: DetailEditContentModuleProps) => {
  return (
    <Stack space={48}>
      {/* 별명스택 */}
      <Stack space={12}>
        <Text variants={'titleLarge'} fontWeight={'Bold'} color={'black'}>
          별명
        </Text>
        <TextInput
          placeholder="토토로"
          label="별명 수정"
          value={value}
          onChangeText={onChange}
          error={error}
          errorMsg={errorMsg || ''}
          secureTextEntry={secureTextEntry}
        />
      </Stack>
      {/* 사진스택 */}
      <Stack>
        <Text variants={'titleLarge'} fontWeight={'Bold'} color={'black'}>
          gd
        </Text>
      </Stack>
    </Stack>
  );
};
