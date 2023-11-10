import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';

import { $plantAddState, ESignUpStep } from '../../plant-add.state';

import {
  PlantAddContentInfoComponent,
  PlantAddContentInputComponent,
  PlantAddContentPhotoComponent,
  PlantAddDateInputComponent,
  PlantAddVarietyInputComponent,
} from './components';
import { getInfoByScreenStep } from './plant-add-content.util';

type PlantAddContentModuleProps = {};

export const PlantAddContentModule = memo<PlantAddContentModuleProps>(() => {
  const { screenStep } = useRecoilValue($plantAddState);
  const info = getInfoByScreenStep(screenStep);

  const isPhoto = screenStep === 'PICTURE' || screenStep === 'PICTURE_COMPLETE';
  const renderInputs = () => {
    switch (screenStep) {
      case ESignUpStep.PICTURE:
      case ESignUpStep.PICTURE_COMPLETE:
        return <PlantAddContentPhotoComponent />;
      case ESignUpStep.ALIAS_INPUT:
        return <PlantAddContentInputComponent screenStep={screenStep} />;
      case ESignUpStep.VARIETY:
        return <PlantAddVarietyInputComponent screenStep={screenStep} />;
      case ESignUpStep.DATE_INPUT:
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
