import { Column, Columns, Stack } from '@mobily/stacks';
import { memo } from 'react';
import FastImage from 'react-native-fast-image';

import { QNA_IMG } from '@/assets';
import { Divider, Image, PointLinearGradient, Text } from '@/atoms';
import { QuestionDetailComment } from '@/hooks';

type CommunityQnaDetailAnswerModuleProps = {
  question_comment: QuestionDetailComment;
};

export const CommunityQnaDetailAnswerModule =
  memo<CommunityQnaDetailAnswerModuleProps>(({ question_comment }) => {
    const comment_date = question_comment.created_at.slice(0, 10);

    return (
      <Stack space={16} marginTop={16}>
        <Divider />

        <Columns space={12} alignX="left" alignY="center">
          <Column width="content">
            <PointLinearGradient style={{ borderRadius: 8, padding: 4 }}>
              <Image
                source={{ uri: QNA_IMG, priority: FastImage.priority.high }}
                style={{ aspectRatio: 1, minWidth: 50 }}
                skeletonStyle={{
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  margin: 4,
                }}
              />
            </PointLinearGradient>
          </Column>
          <Column width="fluid">
            <Stack space={12}>
              <Text variants="titleSmall" color="gray-900" fontWeight="Medium">
                BloomMate
              </Text>
              <Text variants="bodySmall" color="gray-900" fontWeight="Light">
                {comment_date}
              </Text>
            </Stack>
          </Column>
        </Columns>

        <Text variants="titleSmall" color="gray-900" fontWeight="Medium">
          {question_comment.comment_content}
        </Text>
      </Stack>
    );
  });
