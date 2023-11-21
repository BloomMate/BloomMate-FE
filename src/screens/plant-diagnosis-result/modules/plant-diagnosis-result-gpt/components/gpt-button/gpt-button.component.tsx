import { Box, Stack, Columns, Column } from '@mobily/stacks';
import { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { CORN_SEED_IMG, LOGO_FONT_IMG } from '@/assets';
import { Text } from '@/atoms';
import { palette } from '@/utils';

type GPTButtonProps = {
  name: string;
  onPress: () => void;
};

export const GPTButton = memo<GPTButtonProps>(({ name, onPress }) => {
  const handlePressButton = () => {
    onPress();
  };

  return (
    <Box flex="fluid" alignY="center">
      <Stack space={8} style={{ minHeight: 128 }}>
        <Image
          source={{ uri: LOGO_FONT_IMG }}
          style={{ width: 80, height: 16 }}
          resizeMode="contain"
        />
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
              source={{ uri: CORN_SEED_IMG }}
              style={{ width: 80, height: 80, borderRadius: 80 }}
              resizeMode="contain"
            />
          </Column>
          <Column width="fluid">
            <Stack space={16}>
              <Text variants="bodyMedium" fontWeight="Medium" color="white">
                {`틔움 ${name} 씨앗 키트`}
              </Text>
              <TouchableOpacity onPress={handlePressButton}>
                <Box
                  alignX="center"
                  paddingY={12}
                  style={{
                    backgroundColor: palette['white'],
                    borderRadius: 8,
                  }}>
                  <Text
                    variants="bodyMedium"
                    fontWeight="Medium"
                    color="primary">
                    원클릭 구매
                  </Text>
                </Box>
              </TouchableOpacity>
            </Stack>
          </Column>
        </Columns>
      </Stack>
    </Box>
  );
});
