import { useQuery } from 'react-query';

export type PlantDetailResponse = {
  id: 1;
  plant_nickname: string;
  plant_picture_url: string;
  planted_at: string;
  plant_name: string;
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
};

export type PlantDetailRequestParams = {
  plant_id: number;
};

export const useGetPlantDetailQuery = ({
  plant_id,
}: PlantDetailRequestParams) => {
  return useQuery<PlantDetailResponse>(['/plant_detail', { plant_id }]);
};
