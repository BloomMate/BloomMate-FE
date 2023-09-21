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
          paddingBottom={10}
          paddingTop={20}
          paddingX={10}
          style={{
            backgroundColor: palette['white'],
            borderWidth: 3,
            borderColor: palette['green-500'],
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <Stack
            space={8}
            padding={30}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text color="gray-900" fontWeight="Bold" variants="headlineLarge">
              {title}
            </Text>
            {content && (
              <Text
                color="gray-800"
                fontWeight="Medium"
                variants={'headlineSmall'}>
                {content}
              </Text>
            )}
          </Stack>
          <Columns space={12}>
            {okayButton && (
              <Column>
                <Button {...okayButton} style={{}}>
                  {okayButton.label}
                </Button>
              </Column>
            )}
            {cancelButton && (
              <Column>
                <Button {...cancelButton} style={{}}>
                  {cancelButton.label}
                </Button>
              </Column>
            )}
          </Columns>
        </Box>
      </Modal>
    );
  },
);
