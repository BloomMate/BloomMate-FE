import { Box } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import { memo } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import { PlantEditForm } from '../../hooks';
import {
  PlantDetailEditScreenNavigationProps,
  PlantDetailEditScreenNavigationRouteProps,
} from '../../plant-detail-edit.screen';

import { useUpdatePlantMutation } from './hooks';

import { Button } from '@/atoms';
import { useMutationIndicator } from '@/providers';

export const PlantDetailEditFooterModule = memo(() => {
  const navigation = useNavigation<PlantDetailEditScreenNavigationProps>();
  const {
    params: { id },
  } = useRoute<PlantDetailEditScreenNavigationRouteProps>();

  const { formState, handleSubmit } = useFormContext<PlantEditForm>();
  const { isDirty, isValid } = formState;

  const { mutateAsync, isLoading } = useUpdatePlantMutation();
  useMutationIndicator([isLoading]);

  const loginByIdAndPassWord: SubmitHandler<PlantEditForm> = async ({
    plant_nickname,
    plant_picture_url,
  }) => {
    await mutateAsync({
      plant_nickname,
      plant_picture_url,
      plant_id: id.toString(),
    });

    navigation.reset({
      index: 1,
      routes: [
        { name: 'PrimaryStack', params: { screen: 'PrimaryPlantListScreen' } },
        { name: 'PlantDetailScreen', params: { id } },
      ],
    });
  };

  const handlePressEditButton = () => {
    handleSubmit(loginByIdAndPassWord)();
  };

  const isEditable = isDirty && isValid;

  return (
    <Box flex="fluid" alignY="bottom">
      <Button
        onPress={handlePressEditButton}
        disabled={!isEditable}
        mode="contained">
        업데이트
      </Button>
    </Box>
  );
});
