import { memo } from 'react';

import { ESignUpStep } from '../../../../plant-add.state';

import { mapLabelByScreenStep } from './plant-add-content-const';

import { TextInput } from '@/atoms';

type PlantAddContentInputComponentProps = {
  screenStep: ESignUpStep;
};

//TODO: 아이콘 이름 찾기

export const PlantAddContentInputComponent =
  memo<PlantAddContentInputComponentProps>(({ screenStep }) => {
    const { placeholder, label, rightIconName } =
      mapLabelByScreenStep[screenStep] || {};

    return (
      <>
        <TextInput
          placeholder={placeholder}
          label={label}
          rightIconName={rightIconName}
        />
      </>
    );
  });
