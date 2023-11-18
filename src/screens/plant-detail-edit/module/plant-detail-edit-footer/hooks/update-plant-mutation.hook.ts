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
      await defaultAxios.patch(
        `plants/plant_detail`,
        {
          plant_nickname,
          plant_picture_url,
        },
        { params: { plant_id } },
      );

      return { plant_id };
    },
    {
      onSuccess: async ({ plant_id }) => {
        await queryClient.invalidateQueries([
          'plants/plant_detail',
          { plant_id },
        ]);
        await queryClient.invalidateQueries('/plants');
      },
    },
  );
};
