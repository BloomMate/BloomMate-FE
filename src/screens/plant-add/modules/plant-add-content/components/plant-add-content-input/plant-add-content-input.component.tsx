import isUndefined from 'lodash/isUndefined';
import { memo, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';

import { PlantAddForm } from '../../../../hooks';
import { EPlantAddStep } from '../../../../plant-add.state';
import {
  PlantAddContentDateModalComponent,
  PlantAddContentVarietyModalComponent,
} from '../plant-add-content-modal';

import { mapLabelByScreenStep } from './plant-add-content-const';

import { TextInput } from '@/atoms';

type PlantAddContentInputComponentProps = {
  screenStep: EPlantAddStep;
};

export const PlantAddContentInputComponent =
  memo<PlantAddContentInputComponentProps>(({ screenStep }) => {
    const { control } = useFormContext<PlantAddForm>();
    const { field, fieldState } = useController({
      control,
      name: EPlantAddStep.ALIAS_INPUT,
    });
    const { onChange, value } = field;
    const { placeholder, label, rightIconName } =
      mapLabelByScreenStep[screenStep] || {};

    return (
      <TextInput
        placeholder={placeholder}
        label={label}
        value={value as string}
        onChangeText={onChange}
        error={!isUndefined(fieldState.error)}
        autoCapitalize="none"
        maxLength={5}
        errorMsg={fieldState.error?.message as string}
        rightIconName={rightIconName}
      />
    );
  });

export const PlantAddVarietyInputComponent =
  memo<PlantAddContentInputComponentProps>(({ screenStep }) => {
    const { placeholder, label, rightIconName } =
      mapLabelByScreenStep[screenStep] || {};
    const [isModal, setModal] = useState(false);
    const { control } = useFormContext<PlantAddForm>();
    const { field, fieldState } = useController({
      control,
      name: EPlantAddStep.VARIETY,
    });
    const { onChange, value } = field;
    const selectedVariety = () => {
      switch (value) {
        case 1:
          return '🍅 토마토';
        case 2:
          return '🍓 딸기';
        case 3:
          return '🌽 옥수수';
        case 4:
          return '🥔 감자';

        default:
          return undefined;
      }
    };

    return (
      <>
        <PlantAddContentVarietyModalComponent
          isModal={isModal}
          setModal={setModal}
        />
        <TouchableOpacity onPress={() => setModal(!isModal)}>
          <TextInput
            disabled
            placeholder={placeholder}
            label={label}
            rightIconName={rightIconName}
            value={selectedVariety()}
            error={!isUndefined(fieldState.error)}
            errorMsg={fieldState.error?.message as string}
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
    const { control } = useFormContext<PlantAddForm>();
    const { field, fieldState } = useController({
      control,
      name: EPlantAddStep.DATE_INPUT,
    });
    const { value } = field;
    let date_value = '';
    if (value == undefined) {
      date_value = '';
    } else {
      date_value = value.slice(0, 10);
    }
    return (
      <>
        <PlantAddContentDateModalComponent
          isModal={isModal}
          setModal={setModal}
        />
        <TouchableOpacity onPress={() => setModal(!isModal)}>
          <TextInput
            disabled
            placeholder={placeholder}
            label={label}
            value={date_value}
            rightIconName={rightIconName}
            error={!isUndefined(fieldState.error)}
            errorMsg={fieldState.error?.message as string}
          />
        </TouchableOpacity>
      </>
    );
  });
