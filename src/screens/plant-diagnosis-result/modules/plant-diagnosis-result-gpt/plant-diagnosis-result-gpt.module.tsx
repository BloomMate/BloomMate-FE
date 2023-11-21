import { Box } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import { memo, useRef, useState } from 'react';
import { useCountdown, useDidUpdate } from 'rooks';

import {
  PlantDiagnosisResultScreenNavigationProps,
  PlantDiagnosisResultScreenNavigationRouteProps,
} from '../../plant-diagnosis-result.screen';

import { GPTButton, GPTLoading } from './components';
import { useDeletePlantMutation } from './hooks';

import { useGetPlantDiagnosisRecordDetailQuery } from '@/hooks';
import { Dialog } from '@/layouts';
import { useMutationIndicator } from '@/providers';
import { isPlantSickByPlantDiseaseName } from '@/utils';

export const PlantDiagnosisResultGPTModule = memo(() => {
  const [gptState, setGptState] = useState<'loading' | 'button'>('loading');
  const [dialogVisible, setDialogVisible] = useState(false);

  const [isCountDownEnd, setIsCountDownEnd] = useState(false);
  const endTimeRef = useRef(new Date(Date.now() + 5000));

  const { mutateAsync, isLoading } = useDeletePlantMutation();
  useMutationIndicator([isLoading]);

  const {
    params: { id },
  } = useRoute<PlantDiagnosisResultScreenNavigationRouteProps>();

  const navigation = useNavigation<PlantDiagnosisResultScreenNavigationProps>();

  const { data } = useGetPlantDiagnosisRecordDetailQuery({
    disease_record_id: id,
  });

  useCountdown(endTimeRef.current, {
    interval: 1000,
    onEnd: () => setIsCountDownEnd(true),
  });

  useDidUpdate(() => {
    if (isCountDownEnd) {
      setGptState('button');
    }
  }, [isCountDownEnd]);

  if (isUndefined(data)) {
    return;
  }

  const { plant_disease_name, plant_name } = data;
  const isPlantSick = isPlantSickByPlantDiseaseName(plant_disease_name);

  const handlePressGPTButton = () => {
    setDialogVisible(true);
  };

  const handlePressDialogBackDrop = () => {
    setDialogVisible(false);
  };

  const handlePressDialogCancelButton = () => {
    setDialogVisible(false);
  };

  const handlePressDialogOkayButton = async () => {
    await mutateAsync({ plant_id: id.toString() });

    setDialogVisible(false);
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'PrimaryStack',
          params: { screen: 'PrimaryPlantListScreen' },
        },
        { name: 'PlantAnimationScreen', params: { type: 'plant-dead' } },
      ],
    });
  };

  return (
    <Box flex="fluid">
      {isPlantSick && (
        <>
          <Dialog
            dialogVisible={dialogVisible}
            onBackdropPress={handlePressDialogBackDrop}
            title="원클릭 구매"
            content={
              '새로운 씨앗을 구매하시면 기존의 식물이 삭제됩니다.\n구매하시겠습니까?'
            }
            cancelButton={{
              label: '취소',
              mode: 'outlined',
              onPress: handlePressDialogCancelButton,
            }}
            okayButton={{
              label: '확인',
              mode: 'contained',
              onPress: handlePressDialogOkayButton,
            }}
          />
          {gptState === 'loading' && <GPTLoading />}
          {gptState === 'button' && (
            <GPTButton name={plant_name} onPress={handlePressGPTButton} />
          )}
        </>
      )}
    </Box>
  );
});
