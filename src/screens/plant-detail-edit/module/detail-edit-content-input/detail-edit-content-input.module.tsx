import { Stack } from '@mobily/stacks';
import { useController, useFormContext } from 'react-hook-form';

import { PlantEditForm } from '../../hooks';

import { Text, TextInput } from '@/atoms';

type DetailEditContentInputModuleProps = {};

export const DetailEditContentInputModule =
  ({}: DetailEditContentInputModuleProps) => {
    const { control } = useFormContext<PlantEditForm>();
    const {
      field: { onChange },
    } = useController({ control, name: 'plant_nickname' });
    const {} = useController({ control, name: 'plant_picture_url' });

    return (
      <Stack>
        <Stack space={8}>
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
