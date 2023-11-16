import { Column, Columns, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { Image } from 'react-native';

import { QNA_IMG } from '@/assets';
import { Divider, PointLinearGradient, Text } from '@/atoms';

type PrimaryCommunityQnaDetailAnswerModuleProps = {};

//TODO: 실제 답변 넣기
export const PrimaryCommunityQnaDetailAnswerModule =
  memo<PrimaryCommunityQnaDetailAnswerModuleProps>(() => {
    return (
      <Stack space={16} marginTop={16}>
        <Divider />

        <Columns space={12} alignX="left" alignY="center">
          <Column width="content">
            <PointLinearGradient style={{ borderRadius: 8, padding: 4 }}>
              <Image
                source={{ uri: QNA_IMG }}
                style={{ aspectRatio: 50 / 50, minWidth: 50 }}
              />
            </PointLinearGradient>
          </Column>
          <Column width="fluid">
            <Stack space={12}>
              <Text variants="titleSmall" color="gray-900" fontWeight="Medium">
                BloomMate
              </Text>
              <Text variants="bodySmall" color="gray-900" fontWeight="Light">
                2023-10-25
              </Text>
            </Stack>
          </Column>
        </Columns>

        <Text variants="titleSmall" color="gray-900" fontWeight="Medium">
          안녕하세요. BloomMate입니다!
        </Text>
      </Stack>
    );
  });
