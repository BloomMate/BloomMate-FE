import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { QnAForm } from '../../../hooks';

import { TextInput } from '@/atoms';

type PrimaryCommunityQnaPostContentContentComponentProps = {};

export const PrimaryCommunityQnaPostContentContentComponent =
  memo<PrimaryCommunityQnaPostContentContentComponentProps>(() => {
    const { control } = useFormContext<QnAForm>();

    const {
      field: { onChange, value },
      fieldState,
    } = useController({ control, name: 'question_content' });

    return (
      <TextInput
        label="내용"
        placeholder="식물에 대해서 궁금한 점을 질문하세요.\n
          자세하게 작성할 수록, BloomMate팀이\n
          더 정확한 정보와 팁을 제공합니다."
        value={value}
        onChangeText={onChange}
        error={!isUndefined(fieldState.error)}
        errorMsg={fieldState.error?.message as string}
        style={{ height: 200 }}
      />
    );
  });
