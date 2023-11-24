import { Box, Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import FastImage from 'react-native-fast-image';

import { PlantDiagnosisResultScreenNavigationRouteProps } from '../../plant-diagnosis-result.screen';

import { DiseaseInfoItem } from './components';

import { Icon, Image, Text } from '@/atoms';
import { useGetPlantDiagnosisRecordDetailQuery } from '@/hooks';
import {
  getCopyByGrowthLevel,
  isPlantSickByPlantDiseaseName,
  palette,
} from '@/utils';

type PlantDiagnosisResultInfoModuleProps = {};

export const PlantDiagnosisResultInfoModule =
  memo<PlantDiagnosisResultInfoModuleProps>(() => {
    const {
      params: { id },
    } = useRoute<PlantDiagnosisResultScreenNavigationRouteProps>();

    const { data } = useGetPlantDiagnosisRecordDetailQuery({
      disease_record_id: id,
    });

    if (isUndefined(data)) {
      return null;
    }

    const {
      diagnose_photo_url,
      created_at,
      plant_disease_name,
      growth_level,
      plant_disease_symptom,
      plant_disease_condition,
    } = data;

    const diseaseInfoItems = [
      { title: '병명', content: plant_disease_name },
      { title: '증상', content: plant_disease_symptom },
      { title: '조건', content: plant_disease_condition },
    ];

    const isPlantSick = isPlantSickByPlantDiseaseName(plant_disease_name);

    return (
      <Stack space={36} paddingTop={64}>
        <Box
          style={{
            backgroundColor: palette['white'],
            borderRadius: 8,
            elevation: 4,
          }}>
          <Stack
            align="center"
            horizontal
            space={16}
            paddingY={12}
            paddingX={16}
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: palette['gray-300'],
            }}>
            <Image
              source={{ uri: diagnose_photo_url }}
              style={{ width: 80, height: 80, borderRadius: 150 }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Stack space={20}>
              <Stack horizontal space={4} align="center">
                <Text
                  variants="bodyMedium"
                  fontWeight="Medium"
                  color="gray-900">
                  진단 일자 :
                </Text>
                <Text variants="bodyMedium" fontWeight="Light" color="gray-900">
                  {`${dayjs(created_at).format(
                    'YYYY.MM.DD',
                  )} - ${getCopyByGrowthLevel(growth_level)}`}
                </Text>
              </Stack>
              {isPlantSick ? (
                <Stack horizontal space={4} align="center">
                  <Icon name="warning" color={palette['red-600']} size={16} />
                  <Text variants="bodyMedium" fontWeight="Medium" color="error">
                    병이 발견되었습니다
                  </Text>
                </Stack>
              ) : (
                <Text variants="bodyMedium" fontWeight="Medium" color="primary">
                  문제 없이 잘 자라고 있습니다
                </Text>
              )}
            </Stack>
          </Stack>
          {isPlantSick && (
            <Stack space={12} paddingY={12} paddingX={16}>
              <Text variants="bodyMedium" fontWeight="Bold" color="error">
                진단 내용
              </Text>
              <Stack space={8}>
                {diseaseInfoItems.map(v => (
                  <DiseaseInfoItem {...v} key={v.title} />
                ))}
              </Stack>
            </Stack>
          )}
        </Box>
        {isPlantSick && (
          <Text
            variants="bodyLarge"
            fontWeight="Medium"
            color="primary"
            textAlignment="center">
            {'아쉽지만 모종을 뽑고\n새로운 씨앗을 다시 심어봐요'}
          </Text>
        )}
      </Stack>
    );
  });
