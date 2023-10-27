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
    .matches(
      /^[a-zA-Z0-9]{5,19}$/,
      '아이디는 영문자 및 숫자만 사용 가능합니다.',
    )
    .required('아이디를 입력해주세요')
    .min(5, '5자 이상으로 입력해주세요')
    .max(20, '20자 이내로 입력해주세요'),
  PassWord: yup
    .string()
    .matches(
      /^[a-zA-Z0-9]{8,19}$/,
      '비밀번호는 영문자 및 숫자만 사용 가능합니다.',
    )
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
