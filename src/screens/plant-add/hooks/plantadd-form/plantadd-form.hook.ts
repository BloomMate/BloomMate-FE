import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ESignUpStep } from '../../plant-add.state';

export type PlantAddForm = {
  [ESignUpStep.ALIAS_INPUT]: string;
  [ESignUpStep.PICTURE_COMPLETE]: string;
  [ESignUpStep.PICTURE]: string;
  [ESignUpStep.DATE_INPUT]: string;
  [ESignUpStep.VARIETY]: number;
};
const PlantAddSchemaFormSchema: yup.ObjectSchema<PlantAddForm> = yup
  .object()
  .shape({
    [ESignUpStep.PICTURE]: yup.string().required('사진을 등록해주세요.'),
    [ESignUpStep.PICTURE_COMPLETE]: yup
      .string()
      .required('사진을 등록해주세요'),
    [ESignUpStep.VARIETY]: yup.number().required('품종을 선택해주세요.'),
    [ESignUpStep.ALIAS_INPUT]: yup
      .string()
      .required('별명을 입력해주세요.')
      .min(1, '1글자 이상으로 입력해주세요')
      .max(5, '5글자 이하로 입력해주세요'),
    [ESignUpStep.DATE_INPUT]: yup.string().required('날짜를 입력해주세요'),
  });

export const usePlantAddForm = () => {
  const methods = useForm<PlantAddForm>({
    defaultValues: {
      [ESignUpStep.VARIETY]: undefined,
      [ESignUpStep.ALIAS_INPUT]: undefined,
      [ESignUpStep.PICTURE]: undefined,
      [ESignUpStep.PICTURE_COMPLETE]: undefined,
      [ESignUpStep.DATE_INPUT]: undefined,
    },
    resolver: yupResolver(PlantAddSchemaFormSchema),
    reValidateMode: 'onChange',
    mode: 'all',
  });

  return methods;
};
