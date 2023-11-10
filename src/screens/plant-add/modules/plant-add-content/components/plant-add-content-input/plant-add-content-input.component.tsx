import { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { ESignUpStep } from '../../../../plant-add.state';
import {
  PlantAddContentDateModalComponent,
  PlantAddContentVarietyModalComponent,
} from '../plant-add-content-modal';

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
      <TextInput
        placeholder={placeholder}
        label={label}
        rightIconName={rightIconName}
      />
    );
  });

export const PlantAddVarietyInputComponent =
  memo<PlantAddContentInputComponentProps>(({ screenStep }) => {
    const { placeholder, label, rightIconName } =
      mapLabelByScreenStep[screenStep] || {};
    const [isModal, setModal] = useState(false);

    return (
      <>
        <PlantAddContentVarietyModalComponent
          isModal={isModal}
          setModal={setModal}
        />
        <TouchableOpacity onPress={() => setModal(!isModal)}>
          <TextInput
            placeholder={placeholder}
            label={label}
            rightIconName={rightIconName}
          />
        </TouchableOpacity>
      </>
    );
  });

export const PlantAddDateInputComponent =
  memo<PlantAddContentInputComponentProps>(({ screenStep }) => {
    const { placeholder, label, rightIconName } =
      mapLabelByScreenStep[screenStep] || {};
    const [isModal, setModal] = useState(false);

    return (
      <>
        <PlantAddContentDateModalComponent
          isModal={isModal}
          setModal={setModal}
        />
        <TouchableOpacity onPress={() => setModal(!isModal)}>
          <TextInput
            placeholder={placeholder}
            label={label}
            rightIconName={rightIconName}
          />
        </TouchableOpacity>
      </>
    );
  });
