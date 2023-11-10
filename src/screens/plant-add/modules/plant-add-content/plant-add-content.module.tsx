import { Box, Stack } from '@mobily/stacks';
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
  const isPhoto = screenStep === 'PICTURE' || screenStep === 'PICTURE_COMPLETE';

  return (
    <Box flex="fluid">
      <Stack space={32} paddingTop={32}>
        <PlantAddContentInfoComponent info={info} />
        {isPhoto ? (
          <PlantAddContentPhotoComponent />
        ) : (
          <PlantAddContentInputComponent screenStep={screenStep} />
        )}
      </Stack>
    </Box>
  );
});
