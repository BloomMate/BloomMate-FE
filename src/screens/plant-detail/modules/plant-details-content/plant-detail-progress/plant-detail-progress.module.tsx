import { Box, Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import { MotiView } from 'moti';
import { memo } from 'react';

import { PlantDetailScreenNavigationRouteProps } from '../../../plant-detail.screen';

import { Text } from '@/atoms';
import { useGetPlantDetailQuery } from '@/hooks';
import { calculateDaysDifference, palette } from '@/utils';

type PlantDetailProgressModule = {};

export const PlantDetailProgressModule = memo<PlantDetailProgressModule>(() => {
  const {
    params: { id },
  } = useRoute<PlantDetailScreenNavigationRouteProps>();
  const { data } = useGetPlantDetailQuery({ plant_id: id });

  if (isUndefined(data)) {
    return null;
  }

  const {
    planted_at,
    germination_period_start,
    germination_period_end,
    growth_period_start,
    growth_period_end,
    harvest_period_start,
    harvest_period_end,
  } = data;

  const totalPeriod = harvest_period_end - germination_period_start;
  const growthLevelPercentage =
    (calculateDaysDifference(planted_at) / totalPeriod) * 100;

  const growthPeriod = growth_period_end - growth_period_start + 1;
  const harvestPeriod = harvest_period_end - harvest_period_start + 1;
  const getBoxColor = (percentage: number) => {
    if (percentage < 30) {
      return palette['primary'];
    } else if (percentage >= 30 && percentage < 70) {
      return palette['primary'];
    } else {
      return palette['primary'];
    }
  };

  return (
    <Stack space={16}>
      <Stack
        space={16}
        style={{
          backgroundColor: 'white',
          elevation: 4,
          borderRadius: 8,
        }}
        paddingY={16}>
        <Stack>
          <Box direction={'row'}>
            <Box direction={'column'} flex={'fluid'}>
              <Stack space={4} style={{ alignItems: 'center' }}>
                <Text
                  variants={'bodySmall'}
                  fontWeight={'Medium'}
                  color={'gray-900'}>
                  발아기
                </Text>

                <Text
                  variants={'bodySmall'}
                  fontWeight={'Light'}
                  color={'gray-900'}>
                  {germination_period_end}일
                </Text>
              </Stack>
            </Box>
            <Box direction={'column'} flex={'fluid'}>
              <Stack space={4} style={{ alignItems: 'center' }}>
                <Text
                  variants={'bodySmall'}
                  fontWeight={'Medium'}
                  color={'gray-900'}>
                  성장기
                </Text>

                <Text
                  variants={'bodySmall'}
                  fontWeight={'Light'}
                  color={'gray-900'}>
                  {growthPeriod}일
                </Text>
              </Stack>
            </Box>
            <Box direction={'column'} flex={'fluid'}>
              <Stack space={4} style={{ alignItems: 'center' }}>
                <Text
                  variants={'bodySmall'}
                  fontWeight={'Medium'}
                  color={'gray-900'}>
                  수확기
                </Text>

                <Text
                  variants={'bodySmall'}
                  fontWeight={'Light'}
                  color={'gray-900'}>
                  {harvestPeriod}일
                </Text>
              </Stack>
            </Box>
          </Box>
          <Stack paddingX={15.5}>
            <Box style={{ position: 'relative' }}>
              <MotiView
                style={{
                  width: 0,
                  height: 0,
                  backgroundColor: 'transparent',
                  borderStyle: 'solid',
                  borderTopWidth: 0,
                  borderRightWidth: 12,
                  borderBottomWidth: 20.4,
                  borderLeftWidth: 12,
                  borderTopColor: 'transparent',
                  borderRightColor: 'transparent',
                  borderBottomColor: palette['primary'],
                  borderLeftColor: 'transparent',
                  transform: [{ rotateX: '180deg' }],
                  position: 'relative',
                  marginLeft: -12,
                }}
                from={{ left: '0%' }}
                animate={{ left: `${growthLevelPercentage}%` }}
                transition={{ type: 'timing', duration: 1000 }}
              />
              <Box
                style={{
                  backgroundColor: palette['gray-300'],
                  height: 12,
                  borderRadius: 8,
                }}>
                <Box
                  style={{
                    width: `${growthLevelPercentage}%`,
                    height: 12,
                    backgroundColor: getBoxColor(growthLevelPercentage),
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                />
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
});
