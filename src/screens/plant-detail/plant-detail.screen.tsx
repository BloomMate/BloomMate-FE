import { Box, Stack } from '@mobily/stacks';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { Button, Icon, Text } from '@/atoms';
import { PLANT_LIST_DUMMY_DATA } from '@/dummy-data';
import { BasicLayout, ModalHeader, ScrollView } from '@/layouts';
import { palette } from '@/utils';

type PlantDetailScreenProps = {};

export type PlantDetailScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantDetailScreen'
>;

export type PlantDetailScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantDetailScreen'
>;

const plantDetailsByType = {
  tomato: [
    { title: '품종', content: '토마토' },
    { title: '적정 온도', content: '18~27도' },
    { title: '적정 습도', content: '60~80%' },
    { title: '적정 조도', content: '실외직사광' },
    { title: '개화 시기', content: '여름' },
    { title: '급수 주기', content: '2~3일 간격' },
    { title: '난이도', content: '하' },
    { title: '주의사항', content: '싹이 틀 때까지 매일 물을 줘야함' },
  ],
  potato: [],
  // 'potato'에 대한 디테일을 추가하려면 여기에 추가하세요.
};

const getDetailsByType = (type: 'tomato' | 'potato') => {
  return plantDetailsByType[type];
};

const DetailItem = ({
  detail,
}: {
  detail: { title: string; content: string };
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
    // navigation.navigate('PlantDiagnosisIntroScreen', { id });
    console.log('button clicked');
  };
  const plantDetails = getDetailsByType('tomato');
  const currentPlant = PLANT_LIST_DUMMY_DATA.find(v => v.id === id);

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
                토토로
              </Text>
              <View
                style={{
                  borderRadius: 8,
                  height: 180,
                  backgroundColor: palette['white'],
                  elevation: 4,
                }}></View>
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
                      138일차
                    </Text>
                    <Text
                      variants={'bodySmall'}
                      fontWeight={'Light'}
                      color={'gray-900'}>
                      수확 예상 시기 : 8.1 ~ 8.6
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
                          약 20일
                        </Text>
                      </Stack>
                    </Box>
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
                          약 20일
                        </Text>
                      </Stack>
                    </Box>
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
                          약 20일
                        </Text>
                      </Stack>
                    </Box>
                  </Box>
                </Stack>
                <Stack paddingX={15.5}>
                  <Box
                    style={{
                      width: 'auto',
                      height: 12,
                      backgroundColor: palette['primary'],
                      borderRadius: 8,
                    }}></Box>
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
