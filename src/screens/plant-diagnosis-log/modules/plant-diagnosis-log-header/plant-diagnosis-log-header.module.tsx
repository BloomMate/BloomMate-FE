import { Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';

import {
  PlantDiagnosisLogScreenNavigationProps,
  PlantDiagnosisLogScreenNavigationRouteProps,
} from '../../plant-diagnosis-log.screen';

import { Text } from '@/atoms';
import { useGetPlantDiagnosisRecordDetailQuery } from '@/hooks';
import { ModalHeader } from '@/layouts';

type PlantDiagnosisLogHeaderModules = {};

export const PlantDiagnosisLogHeader = memo<PlantDiagnosisLogHeaderModules>(
  () => {
    const navigation = useNavigation<PlantDiagnosisLogScreenNavigationProps>();

    const {
      params: { diagnosis_id },
    } = useRoute<PlantDiagnosisLogScreenNavigationRouteProps>();

    const { data } = useGetPlantDiagnosisRecordDetailQuery({
      disease_record_id: diagnosis_id,
    });

    if (isUndefined(data)) {
      return null;
    }

    const { plant_nickname } = data;

    const onPressExit = () => {
      navigation.goBack();
    };

    return (
      <Stack space={32}>
        <ModalHeader left={{ type: 'icon' }} onPressExit={onPressExit} />
        <Text variants="titleLarge" fontWeight="Bold" color="black">
          진단결과 - {plant_nickname}
        </Text>
      </Stack>
    );
  },
);
