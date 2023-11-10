import { useQuery } from 'react-query';

export type PlantListResponse = {
  DATA: {
    id: number;
    user_id: string;
    plant_nickname: string;
    plant_picture_url: string;
    planted_at: string;
    harvested_at: string;
    plant_type_id: 1;
    is_harvested: boolean;
    growth_level: 'germination' | 'growth' | 'harvest';
  }[];
  garden_size: '0' | '1' | '2';
};

export const useGetPlantListQuery = () => {
  return useQuery<PlantListResponse>('/plants');
};
