import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';

import { Icon, PointLinearGradient, Text } from '@/atoms';
import { palette } from '@/utils';

// TODO : props 삭제 예정
type PrimaryPlantCurrentListFloatingModuleProps = {
  isEmptyList: boolean;
  isFullList: boolean;
};

export const PrimaryPlantCurrentListFloatingModule = memo(
  ({ isEmptyList, isFullList }: PrimaryPlantCurrentListFloatingModuleProps) => {
    if (isEmptyList) {
      return null;
    }

    const handlePressButton = () => {
      if (isFullList) {
        Toast.show({
          type: 'plantAddFailed',
          text1: '중간',
          text2: '5',
          topOffset: 64,
        });
      }
      // TODO : Plant ADD 로 넘어가는 버튼 마련
    };

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
        {!isFullList && (
          <Text variants="labelLarge" fontWeight="Medium" color="gray-700">
            식물 추가하기
          </Text>
        )}
        <Box style={{ elevation: 4, borderRadius: 50 }}>
          <TouchableOpacity onPress={handlePressButton}>
            {isFullList ? (
              <Box
                style={{
                  backgroundColor: palette['gray-300'],
                  padding: 10,
                  borderRadius: 50,
                }}
                alignX="center"
                alignY="center">
                <Icon name="add" size={24} color={palette['gray-400']} />
              </Box>
            ) : (
              <PointLinearGradient
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                  borderRadius: 50,
                }}>
                <Icon name="add" size={24} color={palette['primary']} />
              </PointLinearGradient>
            )}
          </TouchableOpacity>
        </Box>
      </Stack>
    );
  },
);
