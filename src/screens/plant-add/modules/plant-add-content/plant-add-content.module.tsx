import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';

import { $plantAddState } from '../../plant-add.state';

import {
  PlantAddContentInfoComponent,
  PlantAddContentInputComponent,
  PlantAddContentPhotoComponent,
} from './components';
import { getInfoByScreenStep } from './plant-add-content.util';

type PlantAddContentModuleProps = {};

export const PlantAddContentModule = memo<PlantAddContentModuleProps>(() => {
  const { screenStep } = useRecoilValue($plantAddState);
  const info = getInfoByScreenStep(screenStep);
  const isPhoto = screenStep === 'PICTURE' || 'PICTURE_COMPLETE';

  return (
    <Box flex="fluid">
      <PlantAddContentInfoComponent info={info} />
      {isPhoto ? (
        <PlantAddContentPhotoComponent />
      ) : (
        <PlantAddContentInputComponent screenStep={screenStep} />
      )}
    </Box>
  );
});
