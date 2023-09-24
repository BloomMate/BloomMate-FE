import { Box } from '@mobily/stacks';
import { ActivityIndicator } from 'react-native';

import { Modal } from '@/atoms';
import { palette } from '@/utils';

type MutationIndicatorProps = {
  isMutating: boolean;
};

export const MutationIndicator = ({ isMutating }: MutationIndicatorProps) => {
  return (
    <Modal isVisible={isMutating}>
      <Box alignX="center" alignY="center" alignSelf="center" flex="fluid">
        <ActivityIndicator
          animating={true}
          color={palette['green-600']}
          size="small"
        />
      </Box>
    </Modal>
  );
};
