import { Box, Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import { memo } from 'react';
import FastImage from 'react-native-fast-image';

import { PlantDiagnosisIntroScreenNavigationRouteProps } from '../../plant-diagnosis-intro.screen';

import { DIAGNOSIS_IMG } from '@/assets';
import { Icon, Image, Text } from '@/atoms';
import { useGetPlantDetailQuery } from '@/hooks';
import { palette } from '@/utils';

type PlantDiagnosisIntroContentModuleProps = {};

export const PlantDiagnosisIntroContentModule =
  memo<PlantDiagnosisIntroContentModuleProps>(() => {
    const {
      params: { id },
    } = useRoute<PlantDiagnosisIntroScreenNavigationRouteProps>();

    const { data } = useGetPlantDetailQuery({ plant_id: id });

    if (isUndefined(data)) {
      return null;
    }

    const { plant_nickname } = data;

    return (
      <Box flex="fluid" paddingTop={48} alignX="center">
        <Stack space={64}>
          <Stack space={36} align="center">
            <Box>
              <Image
                source={{
                  uri: DIAGNOSIS_IMG,
                  priority: FastImage.priority.high,
                }}
                style={{ width: 200, height: 200, borderRadius: 100 }}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Icon
                style={{ position: 'absolute', bottom: 0, right: 0 }}
                name="search-off"
                size={48}
                color={palette['gray-900']}
              />
            </Box>
            <Stack space={8}>
              <Text variants="titleLarge" fontWeight="Bold" color="black">
                {`AI 식물 진단 - ${plant_nickname}`}
              </Text>
              <Text variants="labelLarge" fontWeight="Medium" color="gray-700">
                본 진단은 LG 스마트 코티지 야외용 틔운 텃밭의 식물을 촬영하여 AI
                러닝을 기반으로 병해를 진단하고, 관리법을 추천드리는
                서비스입니다.
              </Text>
            </Stack>
          </Stack>
          <Box
            paddingY={16}
            alignX="center"
            style={{
              backgroundColor: palette['white'],
              borderRadius: 8,
              elevation: 3,
            }}>
            <Text
              variants="bodyLarge"
              fontWeight="Medium"
              color="primary"
              textAlignment="center">
              {
                '주기적으로 스마트 코티지에\n방문하셔서 식물을 진단하고\n관리해주셔야 식물이 잘 자랄거에요!'
              }
            </Text>
          </Box>
        </Stack>
      </Box>
    );
  });
