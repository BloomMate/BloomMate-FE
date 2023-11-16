import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { QnAForm } from '../../../hooks';

import { TextInput } from '@/atoms';

type PrimaryCommunityQnaPostContentTitleComponentProps = {};

export const PrimaryCommunityQnaPostContentTitleComponent =
  memo<PrimaryCommunityQnaPostContentTitleComponentProps>(() => {
    const { control } = useFormContext<QnAForm>();

    const {
      field: { onChange, value },
      fieldState,
    } = useController({ control, name: 'question_title' });

    return (
      <TextInput
        label="제목"
        placeholder="제목을 입력하세요"
        value={value}
        onChangeText={onChange}
        error={!isUndefined(fieldState.error)}
        errorMsg={fieldState.error?.message as string}
      />
    );
  });
