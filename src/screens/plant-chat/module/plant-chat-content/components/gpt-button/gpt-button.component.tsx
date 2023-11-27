import { Box, Stack, Columns, Column } from '@mobily/stacks';
import { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { GPTLoading } from '../gpt-loading';

import { TOMATO_SEED_IMG } from '@/assets';
import { Image, Text } from '@/atoms';
import { palette } from '@/utils';

type GPTButtonProps = {};

export const GPTButton = memo<GPTButtonProps>(({}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isCountDownEnd, setIsCountDownEnd] = useState(false);

  const handlePressButton = () => {
    setIsPressed(true);

    // Start a 3-second countdown
    setTimeout(() => {
      setIsCountDownEnd(true);
    }, 3000);
  };

  return (
    <Stack space={8} marginTop={-24}>
      <Columns
        space={12}
        padding={12}
        style={{
          backgroundColor: palette['teal-400'],
          borderRadius: 12,
          borderTopLeftRadius: 0,
          maxWidth: 256,
        }}>
        <Column width="content">
          <Image
            // TODO : 비료 이미지로 바꿀 것
            source={{ uri: TOMATO_SEED_IMG }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 80,
              backgroundColor: palette['white'],
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </Column>
        <Column width="fluid">
          <Stack space={16}>
            <Text variants="bodyMedium" fontWeight="Medium" color="white">
              {`틔운 비료 소형`}
            </Text>
            <TouchableOpacity onPress={handlePressButton}>
              <Box
                alignX="center"
                paddingY={12}
                style={{
                  backgroundColor: palette['white'],
                  borderRadius: 8,
                }}>
                <Text variants="bodyMedium" fontWeight="Medium" color="primary">
                  원클릭 구매
                </Text>
              </Box>
            </TouchableOpacity>
          </Stack>
        </Column>
      </Columns>
      {isPressed && (
        <>
          {isCountDownEnd ? (
            <Box direction="row">
              <Box
                paddingX={12}
                paddingY={8}
                alignX="center"
                alignY="center"
                style={{
                  backgroundColor: palette['teal-400'],
                  borderRadius: 12,
                  borderTopLeftRadius: 0,
                }}>
                <Text variants="bodyMedium" fontWeight="Medium" color="white">
                  구매 완료. 관리사님이 배졍되었습니다
                </Text>
              </Box>
            </Box>
          ) : (
            <GPTLoading />
          )}
        </>
      )}
    </Stack>
  );
});
