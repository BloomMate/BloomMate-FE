import { Box, Stack } from '@mobily/stacks';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import dayjs from 'dayjs';
import { isUndefined } from 'lodash';
import { Image, View } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { Button, Icon, Text } from '@/atoms';
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

const DetailItem = ({
  detail,
}: {
  detail: { title: string; content: string | undefined };
}) => (
  <Stack horizontal>
    <Text
      style={{ minWidth: 81 }}
      variants="bodySmall"
      fontWeight={'Medium'}
      color={'gray-900'}>
      {detail.title}
    </Text>
    <Text variants={'bodySmall'} fontWeight={'Light'} color={'gray-900'}>
      {detail.content}
    </Text>
  </Stack>
);

export const PlantDetailScreen = ({}: PlantDetailScreenProps) => {
  const navigation = useNavigation<PlantDetailScreenNavigationProps>();
  const {
    params: { id },
  } = useRoute<PlantDetailScreenNavigationRouteProps>();

  const handlePressDiagnosisButton = () => {
    navigation.navigate('PlantDiagnosisIntroScreen', { id });
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

  const plantDetails = [
    { title: '품종', content: plant_name },
    { title: '적정 온도', content: plant_temperature },
    { title: '적정 습도', content: plant_humidity },
    { title: '적정 조도', content: plant_illuminance },
    { title: '개화 시기', content: plant_bloom_season },
    { title: '급수 주기', content: plant_watering_cycle },
    { title: '난이도', content: plant_difficulty },
    { title: '주의사항', content: plant_caution },
  ];

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
          <Stack space={48}>
            <Stack space={8}>
              <Text
                variants={'titleLarge'}
                fontWeight={'Medium'}
                color={'gray-900'}>
                {plant_nickname}
              </Text>
              <View
                style={{
                  borderRadius: 8,
                  height: 180,
                  backgroundColor: palette['white'],
                  elevation: 4,
                }}>
                <Image
                  source={{ uri: plant_picture_url }}
                  style={{ width: '100%', height: '100%', borderRadius: 8 }}
                  resizeMode="cover"
                />
              </View>
            </Stack>
          </Stack>
          <Stack space={12}>
            <Stack space={4} horizontal>
              <Icon
                color={palette['primary']}
                size={16}
                name={'list-alt'}></Icon>
              <Text
                variants={'bodyMedium'}
                fontWeight={'Medium'}
                color={'primary'}>
                상세정보
              </Text>
            </Stack>
            <Stack space={4}>
              {plantDetails.map((detail, index) => (
                <DetailItem key={index} detail={detail} />
              ))}
            </Stack>
            <Stack space={16}>
              <Stack space={12}>
                <Stack space={4} horizontal>
                  <Icon
                    color={palette['primary']}
                    size={16}
                    name={'energy-savings-leaf'}></Icon>
                  <Text
                    variants={'bodyMedium'}
                    fontWeight={'Medium'}
                    color={'primary'}>
                    성장정보
                  </Text>
                </Stack>
                <Stack space={4}>
                  <Stack space={12} horizontal>
                    <Text
                      variants={'bodySmall'}
                      fontWeight={'Medium'}
                      color={'gray-900'}>
                      {calculateDaysDifference(planted_at)} 일차
                    </Text>
                    <Text
                      variants={'bodySmall'}
                      fontWeight={'Light'}
                      color={'gray-900'}>
                      {`수확 예상 시기 : ${dayjs(planted_at)
                        .add(harvest_period_start, 'd')
                        .format('MM.DD')} ~  ${dayjs(planted_at)
                        .add(harvest_period_end, 'd')
                        .format('MM.DD')}`}
                    </Text>
                  </Stack>
                  <Text
                    variants={'bodySmall'}
                    fontWeight={'Medium'}
                    color={'primary'}>
                    수확기입니다. 상태를 확인 후 수확해주세요.
                  </Text>
                </Stack>
              </Stack>
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
