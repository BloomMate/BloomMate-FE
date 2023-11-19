import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export type QnAForm = {
  question_title: string;
  question_content: string;
};

const QnASchemaFormSchema: yup.ObjectSchema<QnAForm> = yup.object().shape({
  question_title: yup
    .string()
    .required('제목을 입력해주세요.')
    .max(50, '50글자 이내로 입력해주세요.'),
  question_content: yup.string().required('내용을 입력해주세요.'),
});

export const useQnAForm = () => {
  const methods = useForm<QnAForm>({
    defaultValues: {
      question_title: undefined,
      question_content: undefined,
    },
    resolver: yupResolver(QnASchemaFormSchema),
    reValidateMode: 'onChange',
    mode: 'all',
  });

  return methods;
};
