import { Box, Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import isEmpty from 'lodash/isEmpty';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';

import { PrimaryPlantListScreenNavigatorProp } from '../../../../primary-plant-list.screen';

import { Icon, PointLinearGradient, Text } from '@/atoms';
import { useGetPlantListQuery } from '@/hooks';
import {
  isFullListByGardenSizeAndNumberOfPlant,
  mapCopyByGardenSize,
  maxNumberMappingByGardenSize,
  palette,
} from '@/utils';

// TODO : props 삭제 예정
type PrimaryPlantCurrentListFloatingModuleProps = {};

export const PrimaryPlantCurrentListFloatingModule = memo(
  ({}: PrimaryPlantCurrentListFloatingModuleProps) => {
    const { data } = useGetPlantListQuery();
    const navigation = useNavigation<PrimaryPlantListScreenNavigatorProp>();

    if (
      isEmpty(data?.DATA.filter(v => v.is_harvested === false)) ||
      isUndefined(data)
    ) {
      return null;
    }

    const { garden_size, DATA } = data;

    const isFullList = isFullListByGardenSizeAndNumberOfPlant(
      garden_size,
      DATA.filter(v => !v.is_harvested).length,
    );

    const handlePressButton = () => {
      if (isFullList) {
        Toast.show({
          type: 'plantAddFailed',
          text1: mapCopyByGardenSize[garden_size],
          text2: maxNumberMappingByGardenSize[garden_size].toString(),
          topOffset: 64,
        });
      } else {
        navigation.navigate('PlantAddScreen');
      }
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
