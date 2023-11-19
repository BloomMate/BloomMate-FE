import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export type PlantEditForm = {
  plant_nickname: string;
  plant_picture_url: string;
};

const plantEditFormSchema: yup.ObjectSchema<PlantEditForm> = yup
  .object()
  .shape({
    plant_nickname: yup
      .string()
      .required('별명을 입력해주세요.')
      .min(1, '1글자 이상으로 입력해주세요')
      .max(5, '5글자 이하로 입력해주세요'),
    plant_picture_url: yup.string().required('사진을 등록해주세요'),
  });

export const usePlantDetailEditForm = () => {
  const methods = useForm<PlantEditForm>({
    defaultValues: {
      plant_nickname: '',
      plant_picture_url: '',
    },
    resolver: yupResolver(plantEditFormSchema),
    reValidateMode: 'onChange',
    mode: 'all',
  });

  return methods;
};
