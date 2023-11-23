import { Box, Stack } from '@mobily/stacks';
import { MotiView } from 'moti';
import { memo, useState } from 'react';
import { Image } from 'react-native';
import { useIntervalWhen } from 'rooks';

import { LOGO_FONT_IMG } from '@/assets';
import { palette } from '@/utils';

type GPTLoadingProps = {};

export const GPTLoading = memo<GPTLoadingProps>(() => {
  const [dotsVisibility, setDotsVisibility] = useState([
    false,
    false,
    false,
    false,
  ]);

  useIntervalWhen(
    () => {
      setDotsVisibility(prevVisibility => {
        const indexToChange = prevVisibility.indexOf(false);

        if (indexToChange !== -1) {
          const updatedVisibility = [...prevVisibility];
          updatedVisibility[indexToChange] = true;
          return updatedVisibility;
        } else {
          return [false, false, false, false];
        }
      });
    },
    1000, // run callback every 1 second
    true, // start the timer when it's true
  );

  return (
    <Stack space={8}>
      <Image
        source={{ uri: LOGO_FONT_IMG }}
        style={{ width: 80, height: 16 }}
        resizeMode="contain"
      />
      <Box direction="row">
        <Stack
          style={{
            backgroundColor: palette['teal-400'],
            borderRadius: 12,
            borderTopLeftRadius: 0,
          }}
          paddingY={16}
          paddingX={40}
          horizontal
          space={16}>
          {dotsVisibility.map((isVisible, index) => (
            <MotiView
              key={index}
              style={{
                width: 14,
                height: 14,
                borderRadius: 10,
                backgroundColor: palette['white'],
              }}
              from={{
                translateY: -10,
                opacity: 0,
              }}
              animate={{
                opacity: isVisible ? 1 : 0,
                translateY: isVisible ? 0 : -10,
              }}
              transition={{
                type: 'timing',
                duration: 500,
              }}
            />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
});
