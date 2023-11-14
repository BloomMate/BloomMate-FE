import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import { memo, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { PlantDiagnosisResultScreenNavigationRouteProps } from '../../plant-diagnosis-result.screen';

import { GPTLoading } from './components';

import { Text } from '@/atoms';
import { useGetPlantDiagnosisRecordDetailQuery } from '@/hooks';
import { isPlantSickByPlantDiseaseName, palette } from '@/utils';

export const PlantDiagnosisResultGPTModule = memo(() => {
  const [gptState, setGptState] = useState<'loading' | 'button' | 'confirm'>(
    'loading',
  );

  const {
    params: { id },
  } = useRoute<PlantDiagnosisResultScreenNavigationRouteProps>();

  const { data } = useGetPlantDiagnosisRecordDetailQuery({
    disease_record_id: id,
  });

  if (isUndefined(data)) {
    return;
  }

  const { plant_disease_name, plant_name } = data;
  const isPlantSick = isPlantSickByPlantDiseaseName(plant_disease_name);

  if (!isPlantSick) {
    return null;
  }

  if (gptState === 'loading') {
    return <GPTLoading />;
  }

  return (
    <Box flex="fluid" alignY="center">
      <Stack space={8} style={{ minHeight: 128 }}>
        <Image
          source={require('./assets/bloomMate-logo.png')}
          style={{ width: 80, height: 16 }}
          resizeMode="contain"
        />
        <Columns
          space={12}
          padding={12}
          style={{
            backgroundColor: palette['teal-400'],
            borderRadius: 12,
            borderTopLeftRadius: 0,
          }}>
          <Column width="content">
            <Image
              source={require('./assets/seed.png')}
              style={{ width: 80, height: 80, borderRadius: 80 }}
              resizeMode="contain"
            />
          </Column>
          <Column width="fluid">
            <Stack space={16}>
              <Text variants="bodyMedium" fontWeight="Medium" color="white">
                {`틔움 ${plant_name} 씨앗 키트`}
              </Text>
              <TouchableOpacity>
                <Box
                  alignX="center"
                  paddingY={12}
                  style={{
                    backgroundColor: palette['white'],
                    borderRadius: 8,
                  }}>
                  <Text
                    variants="bodyMedium"
                    fontWeight="Medium"
                    color="primary">
                    원클릭 구매
                  </Text>
                </Box>
              </TouchableOpacity>
            </Stack>
          </Column>
        </Columns>
      </Stack>
    </Box>
  );
});
