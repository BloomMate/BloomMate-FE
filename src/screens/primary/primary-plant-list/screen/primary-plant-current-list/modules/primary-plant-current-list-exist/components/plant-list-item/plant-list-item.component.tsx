import { Box, Columns, Column, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { Icon, Text } from '@/atoms';
import { palette, calculateDaysDifference } from '@/utils';

type PlantListItemComponentProps = {
  imageURL: string;
  name: string;
  planted_at: string;
  type: string;
  harvested: boolean;
};

export const PlantListItemComponent = memo<PlantListItemComponentProps>(
  ({ imageURL, name, planted_at, type, harvested }) => {
    return (
      <Box
        style={{
          elevation: 3,
          backgroundColor: palette['white'],
          borderBottomLeftRadius: 12,
          borderBottomEndRadius: 12,
          borderBottomRightRadius: 12,
          borderBottomStartRadius: 12,
        }}>
        <Columns>
          <Column width="content" padding={10}>
            <Image
              style={{ borderRadius: 80, width: 80, height: 80 }}
              source={{ uri: imageURL }}
              resizeMode="contain"
            />
          </Column>
          <Column width="fluid" paddingY={16} paddingLeft={12}>
            <Stack space={16}>
              <Stack horizontal space={8} align="center">
                <Text variants="bodyMedium" color="black" fontWeight="Medium">
                  {name}
                </Text>
                <Text variants="bodySmall" color="gray-700" fontWeight="Light">
                  {`함께한 지 ${calculateDaysDifference(planted_at)}일째`}
                </Text>
              </Stack>
              <Text variants="labelSmall" fontWeight="Medium" color="primary">
                발아기입니다. 틔운 텃밭이 매일 물을 주고 있어요!
              </Text>
            </Stack>
          </Column>
        </Columns>
        <Columns>
          <Column width="fluid">
            <TouchableOpacity
              onPress={() => {}}
              style={{
                width: '100%',
                paddingVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Stack horizontal space={4} align="center">
                <Text variants="bodySmall" fontWeight="Medium" color="gray-700">
                  채팅하기
                </Text>
                <Icon
                  name="chat-bubble-outline"
                  size={20}
                  color={palette['gray-700']}
                />
              </Stack>
            </TouchableOpacity>
          </Column>
          <Column width="fluid">
            <TouchableOpacity
              onPress={() => {}}
              style={{
                width: '100%',
                paddingVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Stack horizontal space={4} align="center">
                <Text variants="bodySmall" fontWeight="Medium" color="gray-700">
                  상세정보
                </Text>
                <Icon name="list-alt" size={20} color={palette['gray-700']} />
              </Stack>
            </TouchableOpacity>
          </Column>
        </Columns>
      </Box>
    );
  },
);