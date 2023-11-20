import { Box, Stack } from '@mobily/stacks';
import React, { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { PlantAddForm } from '../../../../hooks';
import {
  $currentScreenStepIndexSelector,
  $plantAddState,
  EPlantAddStep,
  plantAddSteps,
} from '../../../../plant-add.state';

import { Button, Modal, Text } from '@/atoms';
import { useUploadImageLibraryMutation, useUploadPhotoMutation } from '@/hooks';
import { useMutationIndicator } from '@/providers';
import { palette } from '@/utils';

type PlantAddContentModalComponentProps = {
  isModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PlantAddContentVarietyModalComponent =
  memo<PlantAddContentModalComponentProps>(({ isModal, setModal }) => {
    const handleClickButton = (v: number) => {
      onChange(v);
      setModal(false);
    };
    const isVisible = isModal;
    const { control } = useFormContext<PlantAddForm>();
    const { field } = useController({
      control,
      name: EPlantAddStep.VARIETY,
    });
    const { onChange } = field;

    return (
      <Modal isVisible={isVisible} isBottomSheet={true}>
        <Box
          paddingX={32}
          paddingY={12}
          style={{
            minHeight: 390,
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            backgroundColor: palette['white'],
          }}>
          <Stack style={{ alignItems: 'center' }} paddingBottom={12}>
            <View
              style={{
                width: 50,
                height: 3,
                backgroundColor: palette['gray-400'],
                borderRadius: 8,
              }}></View>
          </Stack>

          <Stack space={20}>
            <Text fontWeight="Bold" color="black" variants="titleMedium">
              품종
            </Text>

            <TouchableOpacity
              onPress={() => handleClickButton(2)}
              style={{
                backgroundColor: palette['gray-100'],
                padding: 12,
                borderRadius: 8,
              }}>
              <Text fontWeight="Medium" color="gray-700" variants="titleSmall">
                🍓 딸기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: palette['gray-100'],
                padding: 12,
                borderRadius: 8,
              }}
              onPress={() => handleClickButton(3)}>
              <Text fontWeight="Medium" color="gray-700" variants="titleSmall">
                🌽 옥수수
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: palette['gray-100'],
                padding: 12,
                borderRadius: 8,
              }}
              onPress={() => handleClickButton(4)}>
              <Text fontWeight="Medium" color="gray-700" variants="titleSmall">
                🥔 감자
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: palette['gray-100'], padding: 8 }}
              onPress={() => handleClickButton(1)}>
              <Text fontWeight="Medium" color="gray-700" variants="titleMedium">
                🍅 토마토
              </Text>
            </TouchableOpacity>
          </Stack>
        </Box>
      </Modal>
    );
  });
export const PlantAddContentDateModalComponent =
  memo<PlantAddContentModalComponentProps>(({ isModal, setModal }) => {
    const { control } = useFormContext<PlantAddForm>();
    const { field } = useController({
      control,
      name: EPlantAddStep.DATE_INPUT,
    });
    const { onChange, value } = field;
    const isVisible = isModal;
    const selectedDate = value;

    const handleDatePress = (day: DateData) => {
      onChange(day.dateString + 'T00:00:00+09:00');
      setModal(false);
    };

    LocaleConfig.locales['kr'] = {
      monthNames: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
      ],
      monthNamesShort: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
      ],
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      today: '오늘',
    };
    LocaleConfig.defaultLocale = 'kr';
    const today = new Date();
    const maxDate = today.toISOString().split('T')[0];

    return (
      <Modal isVisible={isVisible} isBottomSheet={true}>
        <Box
          paddingX={32}
          paddingY={12}
          style={{
            minHeight: 390,
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            backgroundColor: palette['white'],
          }}>
          <Calendar
            monthFormat={'yyyy년 MM월'}
            maxDate={maxDate}
            onDayPress={day => handleDatePress(day)}
            hideExtraDays={true}
            markedDates={{
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: palette['gray-200'],
                selectedTextColor: palette['gray-900'],
              },
            }}
            theme={{
              todayTextColor: palette['gray-900'],
              textDayFontFamily: 'GmarketSansTTFMedium',
              textMonthFontFamily: 'GmarketSansTTFMedium',
            }}
          />
        </Box>
      </Modal>
    );
  });

export const PlantAddPictureModalComponent =
  memo<PlantAddContentModalComponentProps>(({ isModal, setModal }) => {
    const isVisible = isModal;

    const { control } = useFormContext<PlantAddForm>();
    const currentScreenStepIndex = useRecoilValue(
      $currentScreenStepIndexSelector,
    );
    const { field: field1 } = useController({
      name: EPlantAddStep.PICTURE,
      control,
    });
    const { field: field2 } = useController({
      name: EPlantAddStep.PICTURE_COMPLETE,
      control,
    });
    const setPlantAddState = useSetRecoilState($plantAddState);

    const { mutateAsync: mutatePhotoAsync, isLoading: isPhotoLoading } =
      useUploadPhotoMutation();
    const { mutateAsync: mutateLibraryAsync, isLoading: isLibraryLoading } =
      useUploadImageLibraryMutation();

    useMutationIndicator([isPhotoLoading, isLibraryLoading]);

    const handlePressPictureButton = async () => {
      const jsonResponse = await mutatePhotoAsync();
      field1.value = jsonResponse.data.url as string;
      field1.onChange(jsonResponse.data.url as string);
      field2.onChange(field1.value);
      setPlantAddState({
        screenStep: plantAddSteps[currentScreenStepIndex + 1],
      });
      setModal(false);
    };

    const handlePressLibraryButton = async () => {
      const jsonResponse = await mutateLibraryAsync();
      field1.value = jsonResponse.data.url as string;
      field1.onChange(jsonResponse.data.url as string);
      field2.onChange(field1.value);
      setPlantAddState({
        screenStep: plantAddSteps[currentScreenStepIndex + 1],
      });
      setModal(false);
    };

    return (
      <Modal isVisible={isVisible} isBottomSheet={true}>
        <Stack space={24} padding={32}>
          <Button onPress={handlePressPictureButton} mode="contained">
            직접 촬영하기
          </Button>
          <Button
            onPress={handlePressLibraryButton}
            mode="outlined"
            style={{ backgroundColor: palette['white'] }}>
            갤러리에서 선택하기
          </Button>
        </Stack>
      </Modal>
    );
  });
