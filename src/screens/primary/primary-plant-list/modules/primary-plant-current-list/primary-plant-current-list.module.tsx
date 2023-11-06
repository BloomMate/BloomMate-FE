import { Text } from '@/atoms';

type PrimaryPlantCurrentListModuleProps = {};

export const PrimaryPlantCurrentListModule =
  ({}: PrimaryPlantCurrentListModuleProps) => {
    return (
      <Text variants="displayLarge" fontWeight="Light" color="gray-600">
        재배중인 식물
      </Text>
    );
  };
