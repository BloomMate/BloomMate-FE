import { useMutation } from 'react-query';

import { queryClient } from '@/providers';
import { defaultAxios, logHttpErrorMessage } from '@/utils';

type DeletePlantRequestProps = {
  plant_id: string;
};

export const useDeletePlantMutation = () => {
  return useMutation(
    async ({ plant_id }: DeletePlantRequestProps) => {
      await defaultAxios.delete('plants/plant_detail', {
        params: { plant_id },
      });

      return { plant_id };
    },
    {
      onError: e => {
        console.log(e);
        logHttpErrorMessage(e);
      },
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
