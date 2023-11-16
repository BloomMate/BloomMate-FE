import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { QnAForm } from '../../../../../hooks';

import { TextInput } from '@/atoms';

type PrimaryCommunityQnaPostContentContentComponentProps = {};

export const PrimaryCommunityQnaPostContentContentComponent =
  memo<PrimaryCommunityQnaPostContentContentComponentProps>(() => {
    //TODO: height 어케 키우지
    const { control } = useFormContext<QnAForm>();

    const {
      field: { onChange, value },
      fieldState,
    } = useController({ control, name: 'question_content' });

    const placeholder =
      '식물에 대해서 궁금한 점을 질문하세요.\n\n자세하게 작성할 수록, BloomMate팀이 \n더 정확한 정보와 팁을 제공합니다';

    return (
      <TextInput
        label="내용"
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        multiline={true}
        error={!isUndefined(fieldState.error)}
        errorMsg={fieldState.error?.message as string}
        contentStyle={{ height: 200 }}
      />
    );
  });
