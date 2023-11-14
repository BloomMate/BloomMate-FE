import { useNavigation, useRoute } from '@react-navigation/native';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';

import {
  PlantDiagnosisResultScreenNavigationProps,
  PlantDiagnosisResultScreenNavigationRouteProps,
} from '../../plant-diagnosis-result.screen';

import { useGetPlantDiagnosisRecordDetailQuery } from '@/hooks';
import { ModalHeader } from '@/layouts';

type PlantDiagnosisResultHeaderModuleProps = {};

export const PlantDiagnosisResultHeaderModule =
  memo<PlantDiagnosisResultHeaderModuleProps>(() => {
    const {
      params: { id },
    } = useRoute<PlantDiagnosisResultScreenNavigationRouteProps>();

    const { data } = useGetPlantDiagnosisRecordDetailQuery({
      disease_record_id: id,
    });

    if (isUndefined(data)) {
      return;
    }

    const { plant_nickname } = data;

    const navigation =
      useNavigation<PlantDiagnosisResultScreenNavigationProps>();

    const onPressExit = () => {
      navigation.goBack();
    };

    return (
      <ModalHeader
        left={{ type: 'string', title: `진단 결과 - ${plant_nickname}` }}
        onPressExit={onPressExit}
      />
    );
  });
