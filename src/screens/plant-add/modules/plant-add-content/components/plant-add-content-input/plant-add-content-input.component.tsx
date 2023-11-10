import { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { ESignUpStep } from '../../../../plant-add.state';
import { PlantAddContentModalComponent } from '../plant-add-content-modal';

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
    const [isModal, setModal] = useState(false);

    return (
      <>
        <PlantAddContentModalComponent isModal={isModal} setModal={setModal} />
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
