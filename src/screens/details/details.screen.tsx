import { Stack } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type DetailsScreenProps = {};

export type LandingScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'DetailsScreen'
>;

export type LandingScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'DetailsScreen'
>;

// 아이템 함수
const DetailItem = ({ title, content }: { title: string; content: string }) => (
  <Stack horizontal>
    <Text
      style={{ width: 81 }}
      variants={'bodySmall'}
      fontWeight={'Medium'}
      color={'gray-900'}>
      {title}
    </Text>
    <Text variants={'bodySmall'} fontWeight={'Light'} color={'gray-900'}>
      {content}
    </Text>
  </Stack>
);

export const DetailsScreen = ({}: DetailsScreenProps) => {
  // 데이터 배열
  const details = [
    { title: '품종', content: '토마토' },
    { title: '적정 온도', content: '18~27도' },
    { title: '적정 습도', content: '60~80%' },
    { title: '적정 조도', content: '실외직사광' },
    { title: '개화 시기', content: '여름' },
    { title: '급수 주기', content: '2~3일 간격' },
    { title: '난이도', content: '하' },
    { title: '주의사항', content: '싹이 틀 때까지 매일 물을 줘야함' },
  ];

  return (
    <Stack
      space={16}
      paddingX={32}
      paddingY={32}
      style={{ backgroundColor: palette['gray-100'], flex: 1 }}>
      <Stack space={48}>
        <Icon color={palette['gray-900']} size={24} name={'arrow-back-ios'} />
        {/* 식물사진 */}
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
        {/* 상세정보 */}
        <Stack space={4} horizontal>
          <Icon color={palette['primary']} size={16} name={'list-alt'}></Icon>
          <Text variants={'bodyMedium'} fontWeight={'Medium'} color={'primary'}>
            상세정보
          </Text>
        </Stack>
        <Stack space={4}>
          {details.map((detail, index) => (
            <DetailItem
              key={index}
              title={detail.title}
              content={detail.content}
            />
          ))}
        </Stack>
        {/* 성장정보 */}
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
              <Text
                variants={'bodySmall'}
                fontWeight={'Medium'}
                color={'gray-900'}>
                138일차
              </Text>
              <Text
                variants={'bodySmall'}
                fontWeight={'Medium'}
                color={'gray-900'}>
                수확기입니다. 상태를 확인 후 수확해주세요.
              </Text>
            </Stack>
          </Stack>

          {/* 성장그래프 */}
          <Stack paddingX={16}>
            <Stack>
              <Text
                variants={'bodySmall'}
                fontWeight={'Medium'}
                color={'gray-900'}>
                발아기
              </Text>
            </Stack>
          </Stack>
          {/* 수확하기버튼 */}
        </Stack>
      </Stack>
    </Stack>
  );
};
