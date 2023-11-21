import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { memo } from 'react';

import { SingleButtonProps } from '../CTA-section';

import { Text, Modal, Button } from '@/atoms';
import { palette } from '@/utils';

type DialogProps = {
  dialogVisible: boolean;
  onBackdropPress?: () => void;
  title: string;
  content?: string;
  okayButton?: SingleButtonProps;
  cancelButton?: SingleButtonProps;
};

export const Dialog = memo<DialogProps>(
  ({
    dialogVisible,
    onBackdropPress,
    title,
    content,
    okayButton,
    cancelButton,
  }) => {
    return (
      <Modal isVisible={dialogVisible} onBackdropPress={onBackdropPress}>
        <Box
          padding={16}
          style={{
            backgroundColor: palette['white'],
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <Stack
            space={24}
            paddingBottom={24}
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
                variants="bodyMedium"
                textAlignment="center">
                {content}
              </Text>
            )}
          </Stack>
          <Columns space={12}>
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
