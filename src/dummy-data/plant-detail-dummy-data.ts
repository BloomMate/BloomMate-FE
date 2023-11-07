// id : 2, 4, 5, 7

export const PLANT_DETAIL_DUMMY_DATA: {
  id: string;
  plant_nickname: string;
  planted_at: string;
  plant_name: '토마토' | '옥수수' | '감자' | '딸기';
  plant_temperature: string;
  plant_humidity: string;
  plant_illuminance: string;
  plant_bloom_season: string;
  plant_watering_cycle: string;
  plant_difficulty: string;
  plant_caution: string;
  germination_period_start: number;
  germination_period_end: number;
  growth_period_start: number;
  growth_period_end: number;
  harvest_period_start: number;
  harvest_period_end: number;
  growth_level: 'germination' | 'growth' | 'harvest';
}[] = [
  {
    id: '2',
    plant_nickname: '멋쟁이감자',
    planted_at: '2023-09-21T23:22:02.385081+09:00',
    plant_name: '감자',
    plant_temperature: '14~23도',
    plant_humidity: '60-80%',
    plant_illuminance: '실외 직사광',
    plant_bloom_season: '봄',
    plant_watering_cycle: '2-3일 간격',
    plant_difficulty: '즁하',
    plant_caution: '수확기에는 물을 적게 주어야 함',
    germination_period_start: 1,
    germination_period_end: 60,
    growth_period_start: 61,
    growth_period_end: 90,
    harvest_period_start: 91,
    harvest_period_end: 110,
    growth_level: 'growth',
  },
  {
    id: '5',
    plant_nickname: '화난토마토',
    planted_at: '2023-10-20T23:22:02.385081+09:00',
    plant_name: '토마토',
    plant_temperature: '18~27도',
    plant_humidity: '60-80%',
    plant_illuminance: '실외 직사광',
    plant_bloom_season: '여름',
    plant_watering_cycle: '2-3일 간격',
    plant_difficulty: '하',
    plant_caution: '싹이 틀때까지 매일 물을 줘야 함',
    germination_period_start: 1,
    germination_period_end: 60,
    growth_period_start: 61,
    growth_period_end: 90,
    harvest_period_start: 91,
    harvest_period_end: 110,
    growth_level: 'germination',
  },
];
