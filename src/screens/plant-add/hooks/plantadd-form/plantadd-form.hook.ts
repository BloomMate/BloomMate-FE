import { useForm } from 'react-hook-form';

export type PlantAddForm = {};
export const usePlantAddForm = () => {
  const methods = useForm<PlantAddForm>({
    defaultValues: {},
  });

  return methods;
};
