import { Row, Rows } from '@mobily/stacks';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';

import { $plantAddState } from '../../plant-add.state';

import {
  PlantAddContentInfoComponent,
  PlantAddContentInputComponent,
} from './components';
import { getInfoByScreenStep } from './plant-add-content.util';

type PlantAddContentModuleProps = {};

export const PlantAddContentModule = memo<PlantAddContentModuleProps>(() => {
  const { screenStep } = useRecoilValue($plantAddState);
  const info = getInfoByScreenStep(screenStep);

  return (
    <Rows space={32} paddingTop={32}>
      <Row height="content">
        <PlantAddContentInfoComponent info={info} />
      </Row>
      <Row height="fluid">
        <PlantAddContentInputComponent screenStep={screenStep} />
      </Row>
    </Rows>
  );
});
