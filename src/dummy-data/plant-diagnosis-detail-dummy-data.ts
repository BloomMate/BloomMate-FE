export const PLANT_DIAGNOSIS_HEALTHY_DETAIL_DUMMY_DATA: {
  id: string;
  plant_id: string;
  plant_nickname: string;
  growth_level: 'germination' | 'growth' | 'harvest';
  plant_disease_name: string;
  plant_disease_symptom?: string;
  plant_disease_condition?: string;
} = {
  id: '1',
  plant_id: '2',
  plant_nickname: '멋쟁이감자',
  growth_level: 'growth',
  plant_disease_name: 'Potato Healthy',
};

export const PLANT_DIAGNOSIS_DISEASE_HEALTHY_DETAIL_DUMMY_DATA: {
  id: string;
  plant_id: string;
  plant_nickname: string;
  growth_level: 'germination' | 'growth' | 'harvest';
  plant_disease_name: string;
  plant_disease_symptom?: string;
  plant_disease_condition?: string;
} = {
  id: '1',
  plant_id: '2',
  plant_nickname: '멋쟁이감자',
  growth_level: 'growth',
  plant_disease_name: 'Potato late blight',
  plant_disease_symptom: '짙은 갈색으로 끝이 둥그렇게 말리거나 쪼그라듦',
  plant_disease_condition: '16 - 21도인 고온의 습한 날씨일 때',
};
