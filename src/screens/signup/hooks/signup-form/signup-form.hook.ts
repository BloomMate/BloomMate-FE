import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export type SignUpForm = {
  Name: string;
  ID: string;
  PassWord: string;
  PassWordCheck: string;
  TIIUN: string;
  GardenSize: number;
  Address: string;
};

const SignUpSchemaFormSchema: yup.ObjectSchema<SignUpForm> = yup
  .object()
  .shape({
    Name: yup
      .string()
      .required('이름을 입력해주세요')
      .min(2, '본명을 사용해주세요.')
      .max(5, '본명을 사용해주세요.'),
    ID: yup
      .string()
      .required('id를 입력해주세요')
      .min(5, '5자 이상으로 입력해주세요')
      .max(20, '20자 이내로 입력해주세요'),
    PassWord: yup
      .string()
      .required('비밀번호를 입력해주세요')
      .min(8, '8자 이상으로 입력해주세요')
      .max(20, '20자 이내로 입력해주세요'),
    PassWordCheck: yup
      .string()
      .required('비밀번호를 한번 더 입력해주세요')
      .oneOf([yup.ref('PassWord')], '비밀번호가 일치하지 않습니다.'),
    TIIUN: yup.string().required('틔운 제품키를 입력해주세요'),
    GardenSize: yup.number().required('하나를 선택해주세요.'),
    Address: yup.string().required('주소를 입력해주세요.'),
  });

export const useSignUpForm = () => {
  const methods = useForm<SignUpForm>({
    defaultValues: {
      Name: undefined,
      ID: undefined,
      PassWord: undefined,
      PassWordCheck: undefined,
      TIIUN: undefined,
      GardenSize: NaN,
      Address: undefined,
    },
    resolver: yupResolver(SignUpSchemaFormSchema),
    reValidateMode: 'onChange',
    mode: 'all',
  });

  return methods;
};
