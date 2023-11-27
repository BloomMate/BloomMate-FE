import { Stack } from '@mobily/stacks';
import LottieView from 'lottie-react-native';
import { memo } from 'react';

import { ABOUT_BLOOMMATE_LOTTIE } from '@/assets';

type AboutBloomMateContentModuleProps = {};

export const AboutBloomMateContentModule =
  memo<AboutBloomMateContentModuleProps>(() => {
    return (
      <Stack>
        <LottieView
          source={ABOUT_BLOOMMATE_LOTTIE}
          autoPlay
          loop
          style={{ width: 150, height: 150 }}
        />
      </Stack>
    );
  });
