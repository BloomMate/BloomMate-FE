import { Box, Stack, Columns, Column } from '@mobily/stacks';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { TOMATO_SEED_IMG } from '@/assets';
import { Image, Text } from '@/atoms';
import { palette } from '@/utils';

type GPTButtonProps = {
  onPress: () => void;
};

export const GPTButton = memo<GPTButtonProps>(({ onPress }) => {
  const handlePressButton = () => {
    onPress();
  };

  return (
    <Stack space={8} style={{ minHeight: 128 }}>
      <Columns
        space={12}
        padding={12}
        style={{
          backgroundColor: palette['teal-400'],
          borderRadius: 12,
          borderTopLeftRadius: 0,
        }}>
        <Column width="content">
          <Image
            // TODO : 비료 이미지로 바꿀 것
            source={{ uri: TOMATO_SEED_IMG }}
            style={{ width: 80, height: 80, borderRadius: 80 }}
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
    </Stack>
  );
});
