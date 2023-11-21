import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { memo } from 'react';

import { SingleButtonProps } from '../CTA-section';

import { Text, Modal, Button } from '@/atoms';
import { palette } from '@/utils';

type DialogProps = {
  dialogVisible: boolean;
  title: string;
  content?: string;
  okayButton?: SingleButtonProps;
  cancelButton?: SingleButtonProps;
};

export const Dialog = memo<DialogProps>(
  ({ dialogVisible, title, content, okayButton, cancelButton }) => {
    return (
      <Modal isVisible={dialogVisible}>
        <Box
          paddingBottom={24}
          paddingTop={24}
          paddingX={16}
          style={{
            backgroundColor: palette['white'],

            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            width: 320,
          }}>
          <Stack
            space={8}
            padding={30}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text color="black" fontWeight="Bold" variants="bodyLarge">
              {title}
            </Text>
            {content && (
              <Text
                color="gray-700"
                fontWeight="Medium"
                variants={'bodyMedium'}>
                {content}
              </Text>
            )}
          </Stack>
          <Columns space={4}>
            {cancelButton && (
              <Column>
                <Button {...cancelButton}>{cancelButton.label}</Button>
              </Column>
            )}
            {okayButton && (
              <Column>
                <Button {...okayButton}>{okayButton.label}</Button>
              </Column>
            )}
          </Columns>
        </Box>
      </Modal>
    );
  },
);
