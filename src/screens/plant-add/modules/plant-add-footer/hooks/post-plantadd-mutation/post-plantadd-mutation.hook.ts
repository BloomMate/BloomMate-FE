import { useMutation } from 'react-query';

import { defaultAxios, logHttpErrorMessage } from '@/utils';

type PostPlantAddRequestProps = {
  plant_picture_url: string;
  plant_nickname: string;
  plant_type_id: number;
  planted_at: string;
};

type PostPlantAddResponseData = {
  id: number;
  user_id: string;
  plant_picture_url: string;
  plant_nickname: string;
  plant_type_id: number;
  planted_at: string;
  harvested_at: null;
};

export const usePostPlantAddMutation = () => {
  return useMutation(
    async ({
      plant_nickname,
      plant_picture_url,
      plant_type_id,
      planted_at,
    }: PostPlantAddRequestProps) => {
      try {
        const { data } = await defaultAxios.post<PostPlantAddResponseData>(
          'plants/create',
          {
            plant_picture_url: plant_picture_url,
            plant_nickname: plant_nickname,
            plant_type_id: plant_type_id,
            planted_at: planted_at,
          },
        );

        return data;
      } catch (error) {
        logHttpErrorMessage(error);
        throw new Error(error as string);
      }
    },
  );
};
