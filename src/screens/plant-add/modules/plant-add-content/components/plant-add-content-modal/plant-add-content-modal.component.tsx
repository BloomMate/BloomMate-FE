import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { Modal, Text } from '@/atoms';
import { palette } from '@/utils';

type PlantAddContentModalComponentProps = {
  isModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PlantAddContentModalComponent =
  memo<PlantAddContentModalComponentProps>(({ isModal, setModal }) => {
    const handleClickModal = () => {
      setModal(false);
    };
    const isVisible = isModal;

    return (
      <Modal isVisible={isVisible}>
        <TouchableOpacity onPress={handleClickModal}>
          <Box
            paddingX={32}
            paddingY={12}
            style={{
              borderTopRightRadius: 24,
              borderTopLeftRadius: 24,
              backgroundColor: palette['white'],
            }}>
            <Stack space={20}>
              <Text fontWeight="Medium" color="gray-900" variants="titleMedium">
                품종
              </Text>

              <TouchableOpacity
                style={{ backgroundColor: palette['gray-100'], padding: 8 }}>
                <Text
                  fontWeight="Medium"
                  color="gray-700"
                  variants="titleMedium">
                  🍓 딸기
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: palette['gray-100'], padding: 8 }}>
                <Text
                  fontWeight="Medium"
                  color="gray-700"
                  variants="titleMedium">
                  🌽 옥수수
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: palette['gray-100'], padding: 8 }}>
                <Text
                  fontWeight="Medium"
                  color="gray-700"
                  variants="titleMedium">
                  🥔 감자
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: palette['gray-100'], padding: 8 }}>
                <Text
                  fontWeight="Medium"
                  color="gray-700"
                  variants="titleMedium">
                  🍅 토마토
                </Text>
              </TouchableOpacity>
            </Stack>
          </Box>
        </TouchableOpacity>
      </Modal>
    );
  });
