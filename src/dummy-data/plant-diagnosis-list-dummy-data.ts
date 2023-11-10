export const PLANT_DIAGNOSIS_LIST_DUMMY_DATA: {
  diagnosis_id: string;
  created_at: string;
  diagnose_photo_url: string;
  growth_level: 'germination' | 'growth' | 'harvest';
  plant_disease_name: string;
}[] = [
  {
    diagnosis_id: '1',
    created_at: '2023-09-21T23:22:02.385081+09:00',
    diagnose_photo_url: 'https://picsum.photos/100/100',
    growth_level: 'growth',
    plant_disease_name: 'Potato late blight',
  },
  {
    diagnosis_id: '2',
    created_at: '2023-09-21T23:22:02.385081+09:00',
    diagnose_photo_url: 'https://picsum.photos/101/101',
    growth_level: 'germination',
    plant_disease_name: 'Potato early blight',
  },
  {
    diagnosis_id: '3',
    created_at: '2023-09-21T23:22:02.385081+09:00',
    diagnose_photo_url: 'https://picsum.photos/102/102',
    growth_level: 'germination',
    plant_disease_name: 'Potato healthy',
  },
];
