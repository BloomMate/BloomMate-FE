import { Box, Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import { memo, useRef, useState } from 'react';
import { useCountdown, useDidUpdate } from 'rooks';

import { PlantDiagnosisResultScreenNavigationRouteProps } from '../../plant-diagnosis-result.screen';

import { GPTButton, GPTLoading } from './components';

import { Icon, Text } from '@/atoms';
import { useGetPlantDiagnosisRecordDetailQuery } from '@/hooks';
import { isPlantSickByPlantDiseaseName, palette } from '@/utils';

export const PlantDiagnosisResultGPTModule = memo(() => {
  const [gptState, setGptState] = useState<'loading' | 'button' | 'confirm'>(
    'loading',
  );

  const [isCountDownEnd, setIsCountDownEnd] = useState(false);
  const endTimeRef = useRef(new Date(Date.now() + 5000));

  const {
    params: { id },
  } = useRoute<PlantDiagnosisResultScreenNavigationRouteProps>();

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
    setGptState('confirm');
  };

  if (!isPlantSick) {
    return null;
  }

  if (gptState === 'loading') {
    return <GPTLoading />;
  }

  if (gptState === 'button') {
    return <GPTButton plant_name={plant_name} onPress={handlePressGPTButton} />;
  }

  return (
    <Box flex="fluid" alignY="center" direction="row" alignX="center">
      <Stack
        horizontal
        space={12}
        paddingX={12}
        paddingY={16}
        align="center"
        style={{ backgroundColor: palette['teal-400'], borderRadius: 8 }}>
        <Icon name="notifications-none" size={24} color={palette['white']} />
        <Text
          variants="labelLarge"
          fontWeight="Light"
          color="white"
          textAlignment="center">
          {`씨앗 구매가 완료되었습니다`}
        </Text>
      </Stack>
    </Box>
  );
});
