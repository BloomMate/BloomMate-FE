import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type PrimaryCommuntiyQnaListItemProps = {
  id: string;
  created_at: string;
  question_title: string;
  question_content: string;
  is_answered: boolean;
};

export const PrimaryCommuntiyQnaListItem =
  memo<PrimaryCommuntiyQnaListItemProps>(
    ({ id, created_at, question_title, question_content, is_answered }) => {
      const question_date = created_at.slice(0, 10);
      const handlePressItem = () => {
        console.log(id, '누르면 질의응답 상세');
      };

      return (
        <TouchableOpacity onPress={handlePressItem}>
          <Box
            style={{
              height: 136,
              backgroundColor: palette['white'],
              borderRadius: 8,
              elevation: 4,
            }}
            padding={12}>
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
                  <Text
                    variants="labelSmall"
                    fontWeight="Light"
                    color="gray-900">
                    {question_date}
                  </Text>
                </Column>
              </Columns>
              <Text variants="bodyMedium" fontWeight="Medium" color="gray-900">
                {question_title}
              </Text>
              <Text
                variants="bodySmall"
                fontWeight="Light"
                color="gray-900"
                numberOfLines={2}>
                {question_content}
              </Text>
            </Stack>
          </Box>
        </TouchableOpacity>
      );
    },
  );
