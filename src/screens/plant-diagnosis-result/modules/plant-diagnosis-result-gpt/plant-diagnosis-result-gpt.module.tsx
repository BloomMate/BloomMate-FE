import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { Text } from '@/atoms';
import { palette } from '@/utils';

export const PlantDiagnosisResultGPTModule = memo(() => {
  return (
    <Box flex="fluid" alignY="center">
      <Stack space={8} style={{ minHeight: 128 }}>
        <Image
          source={require('./assets/bloomMate-logo.png')}
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
              source={require('./assets/seed.png')}
              style={{ width: 80, height: 80, borderRadius: 80 }}
              resizeMode="contain"
            />
          </Column>
          <Column width="fluid">
            <Stack space={16}>
              <Text variants="bodySmall" fontWeight="Medium" color="white">
                틔움 옥수수 씨앗 키트
              </Text>
              <TouchableOpacity>
                <Box
                  alignX="center"
                  paddingY={12}
                  style={{
                    backgroundColor: palette['white'],
                    borderRadius: 8,
                  }}>
                  <Text
                    variants="bodySmall"
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
