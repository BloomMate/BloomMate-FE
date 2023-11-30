import { Box, Columns, Column, Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

import { PrimaryPlantListScreenNavigatorProp } from '../../../../../../primary-plant-list.screen';

import { getPlantListItemCopyByGrowthLevel } from './plant-list-item.util';

import { Icon, Image, Text } from '@/atoms';
import { PlantListResponse } from '@/hooks';
import { palette, calculateDaysDifference } from '@/utils';

type PlantListItemProps = PlantListResponse['DATA'][0] & {};

export const PlantListItem = memo<PlantListItemProps>(
  ({ id, plant_picture_url, plant_nickname, planted_at, growth_level }) => {
    const navigation = useNavigation<PrimaryPlantListScreenNavigatorProp>();

    const handlePressDetailButton = () => {
      navigation.navigate('PlantDetailScreen', { id });
    };

    const handlePressChatButton = () => {
      navigation.navigate('PlantChatScreen', { id });
    };

    return (
      <Box
        style={{
          backgroundColor: palette['white'],
          borderTopEndRadius: 8,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderTopStartRadius: 8,
        }}>
        <Columns>
          <Column width="content" padding={10}>
            <Image
              style={{ width: 80, height: 80, borderRadius: 80 }}
              source={{ uri: plant_picture_url }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </Column>
          <Column width="fluid" paddingY={16} paddingLeft={12}>
            <Stack space={12}>
              <Stack horizontal space={8} align="center">
                <Text variants="bodyLarge" color="black" fontWeight="Bold">
                  {plant_nickname}
                </Text>
                <Text
                  variants="bodyMedium"
                  color="gray-700"
                  fontWeight="Medium">
                  {`함께한 지 ${calculateDaysDifference(planted_at)}일째`}
                </Text>
              </Stack>
              <Text variants="bodySmall" fontWeight="Medium" color="primary">
                {getPlantListItemCopyByGrowthLevel(growth_level)}
              </Text>
            </Stack>
          </Column>
        </Columns>
        <Columns
          style={{
            elevation: 5,
            backgroundColor: palette['white'],

            borderBottomLeftRadius: 8,
            borderBottomEndRadius: 8,
            borderBottomRightRadius: 8,
            borderBottomStartRadius: 8,
          }}>
          <Column width="fluid">
            <TouchableOpacity
              onPress={handlePressChatButton}
              style={{
                width: '100%',
                paddingVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Stack horizontal space={4} align="center">
                <Text
                  variants="bodyMedium"
                  fontWeight="Medium"
                  color="gray-700">
                  채팅하기
                </Text>
                <Icon
                  name="chat-bubble-outline"
                  size={20}
                  color={palette['gray-700']}
                />
              </Stack>
            </TouchableOpacity>
          </Column>
          <Column width="fluid">
            <TouchableOpacity
              onPress={handlePressDetailButton}
              style={{
                width: '100%',
                paddingVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Stack horizontal space={4} align="center">
                <Text
                  variants="bodyMedium"
                  fontWeight="Medium"
                  color="gray-700">
                  상세정보
                </Text>
                <Icon name="list-alt" size={20} color={palette['gray-700']} />
              </Stack>
            </TouchableOpacity>
          </Column>
        </Columns>
      </Box>
    );
  },
);
