import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import { PlantEditForm } from '../../hooks';
import { PlantDetailEditScreenNavigationProps } from '../../plant-detail-edit.screen';

import { Button } from '@/atoms';

export const PlantDetailEditFooterModule = memo(() => {
  const navigation = useNavigation<PlantDetailEditScreenNavigationProps>();

  const { formState, handleSubmit } = useFormContext<PlantEditForm>();
  const { isDirty, isValid } = formState;

  const loginByIdAndPassWord: SubmitHandler<PlantEditForm> = async ({
    plant_nickname,
    plant_picture_url,
  }) => {
    await mutateAsync({ id, pw });

    navigation.goBack();
  };

  const handlePressEditButton = () => {
    handleSubmit(loginByIdAndPassWord)();
  };

  const isEditable = isDirty && isValid;

  return (
    <Button
      onPress={handlePressEditButton}
      disabled={!isEditable}
      mode="contained">
      업데이트
    </Button>
  );
});
