import { Box, Stack } from '@mobily/stacks';
import { useController, useFormContext } from 'react-hook-form';
import { TouchableOpacity, useWindowDimensions } from 'react-native';
import FastImage from 'react-native-fast-image';

import { PlantEditForm } from '../../hooks';

import { Icon, Image, Text } from '@/atoms';
import { useUploadPhotoMutation } from '@/hooks';
import { useMutationIndicator } from '@/providers';
import { palette } from '@/utils';

type PlantDetailEditPictureInputModuleProps = {};

export const PlantDetailEditPictureInputModule =
  ({}: PlantDetailEditPictureInputModuleProps) => {
    const { width: deviceWidth } = useWindowDimensions();
    const { control } = useFormContext<PlantEditForm>();
    const {
      field: { onChange, value },
      fieldState,
    } = useController({ control, name: 'plant_picture_url' });

    const { mutateAsync, isLoading } = useUploadPhotoMutation();
    useMutationIndicator([isLoading]);

    const handlePressTakePhoto = async () => {
      const response = await mutateAsync();

      if (response != null) {
        onChange(response.data.url);
      }
    };

    if (!value) {
      return null;
    }

    return (
      <Stack space={16}>
        <Box alignX="between" direction="row" alignY="center">
          <Text variants={'titleLarge'} fontWeight={'Bold'} color={'black'}>
            사진 업데이트
          </Text>
          <TouchableOpacity onPress={handlePressTakePhoto}>
            <Box direction="row" alignX="center" alignY="center">
              <Text variants="bodySmall" fontWeight="Bold" color="primary">
                {'촬영하기'}
              </Text>
              <Icon name="photo-camera" size={16} color={palette['primary']} />
            </Box>
          </TouchableOpacity>
        </Box>
        <Box
          style={{
            borderRadius: 8,
            height: 180,
            backgroundColor: palette['white'],
            elevation: 4,
          }}>
          <Image
            source={{ uri: value }}
            style={{ height: '100%', borderRadius: 8 }}
            resizeMode={FastImage.resizeMode.cover}
            skeletonStyle={{ width: deviceWidth - 48 }}
          />
        </Box>
      </Stack>
    );
  };
