import { useQuery } from 'react-query';

export type PlantDiagnosisRecordListResponse = {
  DATA: {
    id: number;
    created_at: string;
    diagnose_photo_url: string;
    growth_level: 'germination' | 'growth' | 'harvest';
    plant_disease_name: string;
  }[];
  plant_nickname: '토순이';
};

export type PlantDiagnosisRecordListRequestParams = {
  plant_id: number;
};

export const useGetPlantDiagnosisRecordListQuery = ({
  plant_id,
}: PlantDiagnosisRecordListRequestParams) => {
  return useQuery<PlantDiagnosisRecordListResponse>([
    'plants/disease_record',
    { plant_id },
  ]);
};
