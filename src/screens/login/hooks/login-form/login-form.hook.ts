import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export type LoginForm = {
  ID: string;
  PassWord: string;
};

const loginSchemaFormSchema: yup.ObjectSchema<LoginForm> = yup.object().shape({
  ID: yup
    .string()
    .required('아이디를 입력해주세요')
    .min(5, '5자 이상으로 입력해주세요')
    .max(20, '20자 이내로 입력해주세요'),
  PassWord: yup
    .string()
    .required('비밀번호를 입력해주세요')
    .min(8, '8자 이상으로 입력해주세요')
    .max(20, '20자 이내로 입력해주세요'),
});

export const useLoginForm = () => {
  const methods = useForm<LoginForm>({
    defaultValues: {
      ID: undefined,
      PassWord: undefined,
    },
    resolver: yupResolver(loginSchemaFormSchema),
    reValidateMode: 'onChange',
    mode: 'all',
  });

  return methods;
};
