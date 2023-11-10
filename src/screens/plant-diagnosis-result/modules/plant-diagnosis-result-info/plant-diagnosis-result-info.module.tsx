import { Box, Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import { memo } from 'react';
import { Image } from 'react-native';

import { PlantDiagnosisResultScreenNavigationRouteProps } from '../../plant-diagnosis-result.screen';

import { DiseaseInfoItem } from './components';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type PlantDiagnosisResultInfoModuleProps = {};

export const PlantDiagnosisResultInfoModule =
  memo<PlantDiagnosisResultInfoModuleProps>(() => {
    const {
      params: { photo_url },
    } = useRoute<PlantDiagnosisResultScreenNavigationRouteProps>();

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
              source={{ uri: photo_url }}
              style={{ width: 80, height: 80, borderRadius: 150 }}
              resizeMode="contain"
            />
            <Stack space={20}>
              <Stack horizontal space={4} align="center">
                <Text variants="bodySmall" fontWeight="Medium" color="gray-900">
                  진단 일자 :
                </Text>
                <Text variants="bodySmall" fontWeight="Light" color="gray-900">
                  {`${dayjs().format('YYYY.MM.DD')} - 성장기`}
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
        <Text
          variants="bodyMedium"
          fontWeight="Medium"
          color="primary"
          textAlignment="center">
          {'아쉽지만 모종을 뽑고\n새로운 씨앗을 다시 심어봐요'}
        </Text>
      </Stack>
    );
  });
