import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ESignUpStep } from '../../signup.state';

export type SignUpForm = {
  [ESignUpStep.NAME_INPUT]: string;
  [ESignUpStep.ID_INPUT]: string;
  [ESignUpStep.PW_INPUT]: string;
  [ESignUpStep.PW_CHECK_INPUT]: string;
  [ESignUpStep.TIIUN_INPUT]: string;
  [ESignUpStep.TURF_INPUT]: number;
  [ESignUpStep.ADDRESS_INPUT]: string;
};

const SignUpSchemaFormSchema: yup.ObjectSchema<SignUpForm> = yup
  .object()
  .shape({
    [ESignUpStep.NAME_INPUT]: yup
      .string()
      .required('이름을 입력해주세요')
      .min(2, '본명을 사용해주세요.')
      .max(5, '본명을 사용해주세요.'),
    [ESignUpStep.ID_INPUT]: yup
      .string()
      .matches(
        /^[a-zA-Z0-9]{5,19}$/,
        '아이디는 영문자 및 숫자만 사용 가능합니다.',
      )
      .required('아이디를 입력해주세요')
      .min(5, '5자 이상으로 입력해주세요')
      .max(20, '20자 이내로 입력해주세요'),
    [ESignUpStep.PW_INPUT]: yup
      .string()
      .matches(
        /^[a-zA-Z0-9]{8,19}$/,
        '비밀번호는 영문자 및 숫자만 사용 가능합니다.',
      )
      .required('비밀번호를 입력해주세요')
      .min(8, '8자 이상으로 입력해주세요')
      .max(20, '20자 이내로 입력해주세요'),
    [ESignUpStep.PW_CHECK_INPUT]: yup
      .string()
      .required('비밀번호를 한번 더 입력해주세요')
      .oneOf([yup.ref(ESignUpStep.PW_INPUT)], '비밀번호가 일치하지 않습니다.'),
    [ESignUpStep.TIIUN_INPUT]: yup
      .string()
      .matches(/^tiiun.*/, '틔운 제품키는 tiiun으로 시작하는 문자열입니다.')
      .length(8, '틔운 제품키는 8글자입니다.')
      .required('틔운 제품키를 입력해주세요'),
    [ESignUpStep.TURF_INPUT]: yup.number().required('하나를 선택해주세요.'),
    [ESignUpStep.ADDRESS_INPUT]: yup.string().required('주소를 입력해주세요.'),
  });

export const useSignUpForm = () => {
  const methods = useForm<SignUpForm>({
    defaultValues: {
      [ESignUpStep.NAME_INPUT]: undefined,
      [ESignUpStep.ID_INPUT]: undefined,
      [ESignUpStep.PW_INPUT]: undefined,
      [ESignUpStep.PW_CHECK_INPUT]: undefined,
      [ESignUpStep.TIIUN_INPUT]: undefined,
      [ESignUpStep.TURF_INPUT]: undefined,
      [ESignUpStep.ADDRESS_INPUT]: undefined,
    },
    resolver: yupResolver(SignUpSchemaFormSchema),
    reValidateMode: 'onChange',
    mode: 'all',
  });

  return methods;
};
