import { Box } from '@mobily/stacks';
import { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { PlantAddPictureModalComponent } from '../plant-add-content-modal';

import { Icon, PointLinearGradient } from '@/atoms';
import { palette } from '@/utils';

type PlantAddContentPhotoComponentProps = {};

export const PlantAddContentPhotoComponent =
  memo<PlantAddContentPhotoComponentProps>(() => {
    const [isModal, setModal] = useState(false);

    const handlePressPictureButton = async () => {
      setModal(true);
    };

    return (
      <Box alignX="center">
        <PlantAddPictureModalComponent isModal={isModal} setModal={setModal} />
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
