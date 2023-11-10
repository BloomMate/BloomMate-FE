import { Column, Columns, Stack } from '@mobily/stacks';
import dayjs from 'dayjs';
import { memo } from 'react';
import { Image } from 'react-native';

import { Text } from '@/atoms';
import { PlantListResponse } from '@/hooks';
import { palette } from '@/utils';

type HarvestedPlantListItemComponentProps = PlantListResponse['DATA'][0] & {};

export const HarvestedPlantListItem =
  memo<HarvestedPlantListItemComponentProps>(
    ({ id, plant_picture_url, plant_nickname, planted_at, harvested_at }) => {
      return (
        <Columns
          style={{
            elevation: 4,
            backgroundColor: palette['white'],
            borderBottomLeftRadius: 12,
            borderBottomEndRadius: 12,
            borderBottomRightRadius: 12,
            borderBottomStartRadius: 12,
          }}
          alignY="center">
          <Column width="content" padding={10}>
            <Image
              style={{ borderRadius: 80, width: 80, height: 80 }}
              source={{ uri: plant_picture_url }}
              resizeMode="contain"
            />
          </Column>
          <Column width="fluid" paddingY={16} paddingLeft={12}>
            <Stack space={16}>
              <Text variants="bodyMedium" fontWeight="Medium" color="black">
                {plant_nickname}
              </Text>
              <Text variants="labelSmall" fontWeight="Medium" color="black">
                {`${dayjs(planted_at).format('YYYY-MM-DD')} ~ ${dayjs(
                  harvested_at,
                ).format('YYYY-MM-DD')}`}
              </Text>
            </Stack>
          </Column>
        </Columns>
      );
    },
  );
