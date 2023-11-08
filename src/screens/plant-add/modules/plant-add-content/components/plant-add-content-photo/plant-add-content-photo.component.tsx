import { Box } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

import { PlantAddScreenNavigationProps } from '../../../../plant-add.screen';

import { Icon, PointLinearGradient } from '@/atoms';
import { palette } from '@/utils';

type PlantAddContentPhotoComponentProps = {};

//TODO: 아이콘 찾기
export const PlantAddContentPhotoComponent =
  memo<PlantAddContentPhotoComponentProps>(() => {
    const navigation = useNavigation<PlantAddScreenNavigationProps>();
    const handlePressPictureButton = async () => {
      const result = await launchCamera({
        mediaType: 'photo',
        saveToPhotos: true,
      });

      if (isUndefined(result.assets) || result.didCancel) {
        return;
      }

      navigation.navigate('PlantDiagnosisResultScreen', {
        photo_url: result.assets[0].uri as string,
        id: '1',
      });
    };

    return (
      <Box alignX="center">
        <TouchableOpacity onPress={handlePressPictureButton}>
          <PointLinearGradient
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderRadius: 160,
              height: 160,
              width: 160,
            }}>
            <Icon name="camera-alt" size={40} color={palette['gray-900']} />
          </PointLinearGradient>
        </TouchableOpacity>
      </Box>
    );
  });
