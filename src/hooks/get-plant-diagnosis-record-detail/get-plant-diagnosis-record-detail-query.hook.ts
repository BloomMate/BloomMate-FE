import { useQuery } from 'react-query';

export type PlantDiagnosisRecordDetailResponse = {
  id: number;
  created_at: string;
  diagnose_photo_url: string;
  growth_level: 'germination' | 'growth' | 'harvest';
  plant_disease_name: string;
  plant_disease_symptom: string;
  plant_disease_condition: string;
  plant_nickname: string;
};

export type PlantDiagnosisRecordDetailRequestParams = {
  disease_record_id: number;
};

export const useGetPlantDiagnosisRecordDetailQuery = ({
  disease_record_id,
}: PlantDiagnosisRecordDetailRequestParams) => {
  return useQuery<PlantDiagnosisRecordDetailResponse>([
    'plants/disease_record_detail',
    { disease_record_id },
  ]);
};
