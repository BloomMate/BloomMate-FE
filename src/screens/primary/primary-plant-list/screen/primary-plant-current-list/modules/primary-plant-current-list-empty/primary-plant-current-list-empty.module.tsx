import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';

import { Button, Text } from '@/atoms';

type PrimaryPlantCurrentListEmptyModuleProps = {};

export const PrimaryPlantCurrentListEmptyModule =
  memo<PrimaryPlantCurrentListEmptyModuleProps>(() => {
    const handleAddPlantButton = () => {};

    return (
      <Box alignX="center" alignY="center" style={{ height: '100%' }}>
        <Stack space={32}>
          <Text
            variants="labelLarge"
            fontWeight="Medium"
            color="gray-900"
            textAlignment="center">
            {'등록된 식물이 없어요.\n첫 식물을 등록해주세요!'}
          </Text>
          <Button mode="contained" onPress={handleAddPlantButton} icon="add">
            <Text variants="labelLarge" fontWeight="Medium" color="white">
              식물 등록
            </Text>
          </Button>
        </Stack>
      </Box>
    );
  });
