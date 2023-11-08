import { Box, Stack } from '@mobily/stacks';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { isUndefined } from 'lodash';

import { RootStackParamList } from '../root.navigator';

import { PlantDetailDetailsModule } from './modules/plant-details-content/plant-detail-details/plant-detail-details';
import { PlantDetailPictureModule } from './modules/plant-details-content/plant-detail-picture';
import { PlantDetailGrowthModule } from './modules/plant-details-content/plant-details-growth';

import { Button, Text } from '@/atoms';
import { PLANT_DETAIL_DUMMY_DATA } from '@/dummy-data/plant-detail-dummy-data';
import { BasicLayout, ModalHeader, ScrollView } from '@/layouts';
import { calculateDaysDifference, palette } from '@/utils';

type PlantDetailScreenProps = {};

export type PlantDetailScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantDetailScreen'
>;

export type PlantDetailScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantDetailScreen'
>;

export const PlantDetailScreen = ({}: PlantDetailScreenProps) => {
  const navigation = useNavigation<PlantDetailScreenNavigationProps>();
  const {
    params: { id },
  } = useRoute<PlantDetailScreenNavigationRouteProps>();

  const handlePressDiagnosisButton = () => {
    // navigation.navigate('PlantDiagnosisIntroScreen', { id });
    console.log('button clicked');
  };

  const currentPlant = PLANT_DETAIL_DUMMY_DATA.find(v => v.id === id);

  if (isUndefined(currentPlant)) {
    return null;
  }

  const {
    planted_at,
    plant_picture_url,
    plant_nickname,
    plant_name,
    plant_temperature,
    plant_humidity,
    plant_illuminance,
    plant_bloom_season,
    plant_watering_cycle,
    plant_difficulty,
    plant_caution,
    germination_period_start,
    germination_period_end,
    growth_period_start,
    growth_period_end,
    harvest_period_start,
    harvest_period_end,
  } = currentPlant;

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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <BasicLayout backgroundColor="gray-100">
        <ModalHeader
          left={{ type: 'icon' }}
          onPressExit={() => navigation.goBack()}
        />
        <Stack
          space={16}
          paddingY={32}
          style={{ backgroundColor: palette['gray-100'], flex: 1 }}>
          <PlantDetailPictureModule />

          <PlantDetailDetailsModule />
          <PlantDetailGrowthModule />
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
              </Stack>
              <Stack paddingX={15.5}>
                <Box style={{ position: 'relative' }}>
                  <Box
                    style={[
                      {
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
                        left: `${growthLevelPercentage}%`,
                        marginLeft: -12,
                      },
                    ]}
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
                        // marginBottom: 12,
                      }}
                    />
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Button
          mode="contained"
          icon="health-and-safety"
          onPress={handlePressDiagnosisButton}>
          AI 진단하기
        </Button>
      </BasicLayout>
    </ScrollView>
  );
};
