export const isPlantSickByPlantDiseaseName = (plant_disease_name: string) => {
  if (plant_disease_name.includes('healthy')) {
    return false;
  }

  return true;
};
