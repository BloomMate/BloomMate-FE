import { Stack } from '@mobily/stacks';
import dayjs from 'dayjs';
import { memo } from 'react';
import { Image } from 'react-native';

import { Icon, Text } from '@/atoms';
import {
  palette,
  getCopyByGrowthLevel,
  isPlantSickByPlantDiseaseName,
} from '@/utils';

type DiagnosisListItemProps = {
  diagnosis_id: string;
  created_at: string;
  diagnose_photo_url: string;
  growth_level: 'germination' | 'growth' | 'harvest';
  plant_disease_name: string;
};

export const DiagnosisListItem = memo<DiagnosisListItemProps>(
  ({
    diagnosis_id,
    created_at,
    diagnose_photo_url,
    growth_level,
    plant_disease_name,
  }) => {
    const isPlantSick = isPlantSickByPlantDiseaseName(plant_disease_name);

    return (
      <Stack
        align="center"
        horizontal
        space={16}
        paddingY={12}
        paddingX={16}
        style={{
          backgroundColor: palette['white'],
          borderRadius: 8,
          elevation: 4,
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
              {`${dayjs(created_at).format(
                'YYYY.MM.DD',
              )} - ${getCopyByGrowthLevel(growth_level)}`}
            </Text>
          </Stack>
          {isPlantSick ? (
            <Stack horizontal space={4} align="center">
              <Icon name="warning" color={palette['red-600']} size={16} />
              <Text variants="bodySmall" fontWeight="Medium" color="error">
                병이 발견되었습니다
              </Text>
            </Stack>
          ) : (
            <Text variants="bodySmall" fontWeight="Medium" color="primary">
              문제 없이 잘 자라고 있습니다
            </Text>
          )}
        </Stack>
      </Stack>
    );
  },
);
