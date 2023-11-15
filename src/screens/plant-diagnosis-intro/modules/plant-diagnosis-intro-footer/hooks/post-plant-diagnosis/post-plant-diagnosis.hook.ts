import { useMutation } from 'react-query';

import { defaultAxios } from '@/utils';

type PostPlantDiagnosisRequestType = {
  diagnose_photo_url: string;
  plant_id: string;
};

type PostPlantDiagnosisResponseType = {
  id: number;
  created_at: string;
  diagnose_photo_url: string;
  plant_id: number;
  disease_id: number;
};

export const usePostPlantDiagnosis = () => {
  return useMutation(async (body: PostPlantDiagnosisRequestType) => {
    const { data } = await defaultAxios.post<PostPlantDiagnosisResponseType>(
      '/plants/disease_record',
      {
        ...body,
      },
    );

    return data;
  });
};
