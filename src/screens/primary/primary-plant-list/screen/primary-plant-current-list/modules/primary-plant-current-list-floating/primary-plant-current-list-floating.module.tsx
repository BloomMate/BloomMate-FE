import { Box, Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import isEmpty from 'lodash/isEmpty';
import { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';

import { PrimaryPlantListScreenNavigatorProp } from '../../../../primary-plant-list.screen';

import { Icon } from '@/atoms';
import { useGetPlantListQuery } from '@/hooks';
import { isFullListByGardenSizeAndNumberOfPlant, palette } from '@/utils';

// TODO : props 삭제 예정
type PrimaryPlantCurrentListFloatingModuleProps = {};

export const PrimaryPlantCurrentListFloatingModule = memo(
  ({}: PrimaryPlantCurrentListFloatingModuleProps) => {
    const { data } = useGetPlantListQuery();
    const navigation = useNavigation<PrimaryPlantListScreenNavigatorProp>();

    if (isEmpty(data?.DATA) || isUndefined(data)) {
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
          text1: '중간',
          text2: '5',
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
          bottom: 16,
          right: 2,
        }}
        align="center"
        horizontal
        space={8}>
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
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                  borderRadius: 50,
                  backgroundColor: palette['primary'],
                }}>
                <Icon name="add" size={24} color={palette['white']} />
              </View>
            )}
          </TouchableOpacity>
        </Box>
      </Stack>
    );
  },
);
