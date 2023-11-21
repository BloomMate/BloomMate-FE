import dayjs from 'dayjs';
import { useMutation } from 'react-query';

import { queryClient } from '@/providers';
import { defaultAxios } from '@/utils';

type PostHarvestPlantRequestProps = {
  plant_id: number;
};

export const usePostHarvestPlantMutation = () => {
  return useMutation(
    async ({ plant_id }: PostHarvestPlantRequestProps) => {
      await defaultAxios.post(
        '/plants/plant_detail',
        { harvested_at: dayjs().toISOString() },
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
