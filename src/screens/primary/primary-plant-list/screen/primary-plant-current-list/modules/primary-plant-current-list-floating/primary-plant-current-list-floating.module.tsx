import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon, PointLinearGradient, Text } from '@/atoms';
import { palette } from '@/utils';

type PrimaryPlantCurrentListFloatingModuleProps = {
  isEmptyList: boolean;
};

export const PrimaryPlantCurrentListFloatingModule = memo(
  ({ isEmptyList }: PrimaryPlantCurrentListFloatingModuleProps) => {
    if (isEmptyList) {
      return null;
    }

    return (
      <Stack
        style={{
          position: 'absolute',
          bottom: 4,
          right: 2,
        }}
        align="center"
        horizontal
        space={8}>
        <Text variants="labelLarge" fontWeight="Medium" color="gray-700">
          식물 추가하기
        </Text>
        <Box style={{ elevation: 4, borderRadius: 50 }}>
          <TouchableOpacity>
            <PointLinearGradient
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 50,
              }}>
              <Icon name="add" size={24} color={palette['primary']} />
            </PointLinearGradient>
          </TouchableOpacity>
        </Box>
      </Stack>
    );
  },
);
