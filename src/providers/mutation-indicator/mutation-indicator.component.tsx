import { Box } from '@mobily/stacks';
import LottieView from 'lottie-react-native';

import { MUTATION_LOTTIE } from '@/assets';
import { Modal } from '@/atoms';

type MutationIndicatorProps = {
  isMutating: boolean;
};

export const MutationIndicator = ({ isMutating }: MutationIndicatorProps) => {
  return (
    <Modal isVisible={isMutating}>
      <Box alignX="center" alignY="center" alignSelf="center" flex="fluid">
        <LottieView
          source={MUTATION_LOTTIE}
          autoPlay
          loop
          style={{ width: 100, height: 100 }}
        />
      </Box>
    </Modal>
  );
};
