import { Box } from '@mobily/stacks';
import LottieView from 'lottie-react-native';

import { Modal } from '@/atoms';

type MutationIndicatorProps = {
  isMutating: boolean;
};

export const MutationIndicator = ({ isMutating }: MutationIndicatorProps) => {
  return (
    <Modal isVisible={isMutating}>
      <Box alignX="center" alignY="center" alignSelf="center" flex="fluid">
        <LottieView
          source={require('./mutation-lottie.json')}
          autoPlay
          loop
          style={{ width: 100, height: 100 }}
        />
      </Box>
    </Modal>
  );
};
