import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import { PrimaryNavigatorProps } from '../../../../../../primary.navigator';
import { QnAForm } from '../../../hooks';

import { usePostCommunityQnaMutation } from './hooks';

import { Button } from '@/atoms';
import { useMutationIndicator } from '@/providers';

type PrimaryCommunityQnaPostFooterModuleProps = {};

export const PrimaryCommunityQnaPostFooterModule =
  memo<PrimaryCommunityQnaPostFooterModuleProps>(() => {
    const navigation = useNavigation<PrimaryNavigatorProps>();

    const { formState, handleSubmit } = useFormContext<QnAForm>();
    const { isDirty, isValid } = formState;
    const { mutateAsync, isLoading } = usePostCommunityQnaMutation();

    useMutationIndicator([isLoading]);

    const postQnA: SubmitHandler<QnAForm> = async ({
      question_title: question_title,
      question_content: question_content,
    }) => {
      await mutateAsync({ question_title, question_content });

      navigation.replace('PrimaryStack', { screen: 'PrimaryCommunityScreen' });
    };

    const handlePressButton = () => {
      handleSubmit(postQnA)();
    };

    const isPostQnAPossible = isDirty && isValid;

    return (
      <Button
        style={{ marginTop: 16 }}
        onPress={handlePressButton}
        disabled={!isPostQnAPossible}
        mode="contained">
        질문하기
      </Button>
    );
  });
