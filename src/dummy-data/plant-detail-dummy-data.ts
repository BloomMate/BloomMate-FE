// id : 2, 4, 5, 7

export const PLANT_DETAIL_DUMMY_DATA: {
  id: string;
  plant_picture_url: string;
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
    plant_picture_url: 'https://picsum.photos/200/100',
    plant_nickname: '멋쟁이감자',
    planted_at: '2023-09-21T23:22:02.385081+09:00',
    plant_name: '감자',
    plant_temperature: '14~23도',
    plant_humidity: '60-80%',
    plant_illuminance: '실외 직사광',
    plant_bloom_season: '봄',
    plant_watering_cycle: '2-3일 간격',
    plant_difficulty: '중하',
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
    id: '4',
    plant_picture_url: 'https://picsum.photos/200/100',
    plant_nickname: '왕옥수수',
    planted_at: '2023-08-10T23:22:02.385081+09:00',
    plant_name: '옥수수',
    plant_temperature: '20~30도',
    plant_humidity: '60-80%',
    plant_illuminance: '실외 직사광',
    plant_bloom_season: '여름',
    plant_watering_cycle: '2-3일 간격',
    plant_difficulty: '하',
    plant_caution: '양분을 많이 필요로 하는 식물임',
    germination_period_start: 1,
    germination_period_end: 25,
    growth_period_start: 26,
    growth_period_end: 80,
    harvest_period_start: 81,
    harvest_period_end: 105,
    growth_level: 'harvest',
  },
  {
    id: '5',
    plant_picture_url: 'https://picsum.photos/200/100',
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
  {
    id: '7',
    plant_picture_url: 'https://picsum.photos/200/100',
    plant_nickname: '딸기공주',
    planted_at: '2023-08-10T23:22:02.385081+09:00',
    plant_name: '딸기',
    plant_temperature: '17~20도',
    plant_humidity: '40-70%',
    plant_illuminance: '실외 직사광',
    plant_bloom_season: '봄',
    plant_watering_cycle: '5일마다',
    plant_difficulty: '중',
    plant_caution: '가지과 식물군을 재배했던 곳에 심지 않기',
    germination_period_start: 1,
    germination_period_end: 40,
    growth_period_start: 41,
    growth_period_end: 70,
    harvest_period_start: 71,
    harvest_period_end: 100,
    growth_level: 'harvest',
  },
];
