import { Box, Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import { isUndefined } from 'lodash';
import { memo } from 'react';
import { Image } from 'react-native';

import { PlantDiagnosisLogScreenNavigationRouteProps } from '../../plant-diagnosis-log.screen';

import { DiseaseInfoItem } from './components';

import { Icon, Text } from '@/atoms';
import { PLANT_DIAGNOSIS_LIST_DUMMY_DATA } from '@/dummy-data';
import { palette } from '@/utils';

type PlantDiagnosisLogContentModuleProps = {};

export const PlantDiagnosisLogContentModule =
  memo<PlantDiagnosisLogContentModuleProps>(({}) => {
    const {
      params: { diagnosis_id },
    } = useRoute<PlantDiagnosisLogScreenNavigationRouteProps>();

    const currentLog = PLANT_DIAGNOSIS_LIST_DUMMY_DATA.find(
      v => v.diagnosis_id === diagnosis_id,
    );

    if (isUndefined(currentLog)) {
      return;
    }

    const { diagnose_photo_url, created_at } = currentLog;

    return (
      <Stack space={64} paddingY={64}>
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
              resizeMode="contain"
            />
            <Stack space={20}>
              <Stack horizontal space={4} align="center">
                <Text variants="bodySmall" fontWeight="Medium" color="gray-900">
                  진단 일자 :
                </Text>
                <Text variants="bodySmall" fontWeight="Light" color="gray-900">
                  {`${dayjs(created_at).format('YYYY.MM.DD')} - 성장기`}
                </Text>
              </Stack>
              <Stack horizontal space={4} align="center">
                <Icon name="warning" color={palette['red-600']} size={16} />
                <Text variants="bodySmall" fontWeight="Medium" color="error">
                  병이 발견되었습니다
                </Text>
              </Stack>
            </Stack>
          </Stack>
          <Stack space={12} paddingY={12} paddingX={16}>
            <Text variants="bodySmall" fontWeight="Medium" color="error">
              진단 내용
            </Text>
            <Stack space={8}>
              {[
                { title: '병명', content: 'Corn gray leaf spot' },
                {
                  title: '증상',
                  content: '처음에는 반점처럼 나타났다가 점차 커지며 괴사함',
                },
                {
                  title: '조건',
                  content:
                    '24도 보다 높은 온도, 95%보다 높은 습도 및 습한 날씨에 오래 방치될 때',
                },
              ].map(v => (
                <DiseaseInfoItem {...v} key={v.title} />
              ))}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    );
  });
