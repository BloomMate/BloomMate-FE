import { useMutation } from 'react-query';

import { PlantEditForm } from '../../../hooks';

import { queryClient } from '@/providers';
import { defaultAxios } from '@/utils';

type UpdatePlantMutationRequestProps = PlantEditForm & { plant_id: string };

export const useUpdatePlantMutation = () => {
  return useMutation(
    async ({
      plant_nickname,
      plant_picture_url,
      plant_id,
    }: UpdatePlantMutationRequestProps) => {
      await defaultAxios.patch(`plants/plant_detail?plant_id=${plant_id}`, {
        plant_nickname,
        plant_picture_url,
      });

      return { plant_id };
    },
    {
      onSuccess: ({ plant_id }) => {
        queryClient.invalidateQueries(['plants/plant_detail', { plant_id }]);
      },
    },
  );
};
