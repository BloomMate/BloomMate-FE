import { Stack } from '@mobily/stacks';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { useFormContext, useController } from 'react-hook-form';

import { PlantEditForm } from '../../hooks';

import { Text, TextInput } from '@/atoms';

export const PlantDetailEditNickNameInputModule = memo(() => {
  const { control } = useFormContext<PlantEditForm>();
  const {
    field: { onChange, value },
    fieldState,
  } = useController({ control, name: 'plant_nickname' });

  return (
    <Stack space={16}>
      <Text variants={'titleLarge'} fontWeight={'Bold'} color={'black'}>
        별명
      </Text>
      <TextInput
        label="별명"
        value={value}
        autoCapitalize="none"
        onChangeText={onChange}
        error={!isUndefined(fieldState.error)}
        errorMsg={fieldState.error?.message as string}
      />
    </Stack>
  );
});
