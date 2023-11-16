import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { memo } from 'react';

import { Text } from '@/atoms';
import { QuestionDetail } from '@/hooks';
import { palette } from '@/utils';

type PrimaryCommunityQnaDetailQuestionModuleProps = {
  data: QuestionDetail[];
};

export const PrimaryCommunityQnaDetailQuestionModule = memo(
  ({ data }: PrimaryCommunityQnaDetailQuestionModuleProps) => {
    const { id, created_at, question_content, question_title, is_answered } =
      data[0];
    const question_date = created_at.slice(0, 10);

    return (
      <Box
        style={{
          backgroundColor: palette['white'],
          borderRadius: 8,
          elevation: 4,
        }}
        padding={12}
        marginTop={32}>
        <Stack space={12}>
          <Columns alignX={'between'}>
            <Column width="fluid">
              <Columns space={8} alignX="left" alignY="center">
                <Column width="content">
                  <Box
                    style={[
                      { height: 12, width: 12, borderRadius: 100 },
                      {
                        backgroundColor: is_answered
                          ? palette['primary']
                          : palette['gray-400'],
                      },
                    ]}
                  />
                </Column>
                <Column width="content">
                  <Text
                    variants="labelSmall"
                    fontWeight="Medium"
                    color={is_answered ? 'primary' : 'gray-400'}>
                    {is_answered ? '답변 완료' : '답변 필요'}
                  </Text>
                </Column>
              </Columns>
            </Column>
            <Column width="content">
              <Text variants="labelSmall" fontWeight="Light" color="gray-900">
                {question_date}
              </Text>
            </Column>
          </Columns>
          <Text variants="bodyMedium" fontWeight="Medium" color="gray-900">
            {question_title}
          </Text>
          <Text variants="bodySmall" fontWeight="Light" color="gray-900">
            {question_content}
          </Text>
        </Stack>
      </Box>
    );
  },
);
