import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';

import { $plantAddState, EPlantAddStep } from '../../plant-add.state';

import {
  PlantAddContentInfoComponent,
  PlantAddContentInputComponent,
  PlantAddContentPhotoCompleteComponent,
  PlantAddContentPhotoComponent,
  PlantAddDateInputComponent,
  PlantAddVarietyInputComponent,
} from './components';
import { getInfoByScreenStep } from './plant-add-content.util';

type PlantAddContentModuleProps = {};

export const PlantAddContentModule = memo<PlantAddContentModuleProps>(() => {
  const { screenStep } = useRecoilValue($plantAddState);
  const info = getInfoByScreenStep(screenStep);
  const renderInputs = () => {
    switch (screenStep) {
      case EPlantAddStep.PICTURE:
        return <PlantAddContentPhotoComponent />;
      case EPlantAddStep.PICTURE_COMPLETE:
        return <PlantAddContentPhotoCompleteComponent />;
      case EPlantAddStep.ALIAS_INPUT:
        return <PlantAddContentInputComponent screenStep={screenStep} />;
      case EPlantAddStep.VARIETY:
        return <PlantAddVarietyInputComponent screenStep={screenStep} />;
      case EPlantAddStep.DATE_INPUT:
        return <PlantAddDateInputComponent screenStep={screenStep} />;
    }
  };

  return (
    <Box flex="fluid">
      <Stack space={32} paddingTop={32}>
        <PlantAddContentInfoComponent info={info} />
        {renderInputs()}
      </Stack>
    </Box>
  );
});
