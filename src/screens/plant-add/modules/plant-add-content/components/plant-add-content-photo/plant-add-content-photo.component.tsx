import { Box } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import isUndefined from 'lodash/isUndefined';
import { memo, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { PlantAddScreenNavigationProps } from '../../../../plant-add.screen';
import {
  $currentScreenStepIndexSelector,
  $plantAddState,
  plantAddSteps,
} from '../../../../plant-add.state';

import { Icon, PointLinearGradient } from '@/atoms';
import { palette } from '@/utils';

type PlantAddContentPhotoComponentProps = {};

//TODO: 아이콘 찾기

//TODO: useState 안 쓰는 법 생각해보기, 나중에 onChange하면 될 것 같기도 하고
export const PlantAddContentPhotoComponent =
  memo<PlantAddContentPhotoComponentProps>(() => {
    const navigation = useNavigation<PlantAddScreenNavigationProps>();
    const [photo, setPhoto] = useState('');
    const setPlantAddState = useSetRecoilState($plantAddState);
    const currentScreenStepIndex = useRecoilValue(
      $currentScreenStepIndexSelector,
    );
    const isPictureCompleteStep = currentScreenStepIndex === 1;
    const handlePressPictureButton = async () => {
      const result = await launchCamera({
        mediaType: 'photo',
        saveToPhotos: true,
      });

      if (isUndefined(result.assets) || result.didCancel) {
        return;
      }
      const photo_url = result.assets[0].uri as string;
      setPhoto(photo_url);
      setPlantAddState({
        screenStep: plantAddSteps[currentScreenStepIndex + 1],
      });
    };

    return !isPictureCompleteStep ? (
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
    ) : (
      <Image source={{ uri: photo }} style={{ height: 200, borderRadius: 8 }} />
    );
  });
