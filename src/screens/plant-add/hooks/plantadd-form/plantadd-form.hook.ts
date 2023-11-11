import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { EPlantAddStep } from '../../plant-add.state';

export type PlantAddForm = {
  [EPlantAddStep.ALIAS_INPUT]: string;
  [EPlantAddStep.PICTURE_COMPLETE]: string;
  [EPlantAddStep.PICTURE]: string;
  [EPlantAddStep.DATE_INPUT]: string;
  [EPlantAddStep.VARIETY]: number;
};
const PlantAddSchemaFormSchema: yup.ObjectSchema<PlantAddForm> = yup
  .object()
  .shape({
    [EPlantAddStep.PICTURE]: yup.string().required('사진을 등록해주세요.'),
    [EPlantAddStep.PICTURE_COMPLETE]: yup
      .string()
      .required('사진을 등록해주세요'),
    [EPlantAddStep.VARIETY]: yup.number().required('품종을 선택해주세요.'),
    [EPlantAddStep.ALIAS_INPUT]: yup
      .string()
      .required('별명을 입력해주세요.')
      .min(1, '1글자 이상으로 입력해주세요')
      .max(5, '5글자 이하로 입력해주세요'),
    [EPlantAddStep.DATE_INPUT]: yup.string().required('날짜를 입력해주세요'),
  });

export const usePlantAddForm = () => {
  const methods = useForm<PlantAddForm>({
    defaultValues: {
      [EPlantAddStep.VARIETY]: undefined,
      [EPlantAddStep.ALIAS_INPUT]: undefined,
      [EPlantAddStep.PICTURE]: undefined,
      [EPlantAddStep.PICTURE_COMPLETE]: undefined,
      [EPlantAddStep.DATE_INPUT]: undefined,
    },
    resolver: yupResolver(PlantAddSchemaFormSchema),
    reValidateMode: 'onChange',
    mode: 'all',
  });

  return methods;
};
