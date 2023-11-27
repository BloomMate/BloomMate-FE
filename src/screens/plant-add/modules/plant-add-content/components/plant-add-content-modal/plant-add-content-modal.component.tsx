import { Box, Stack } from '@mobily/stacks';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import React, { memo } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';

dayjs.extend(isSameOrAfter);

import { MarkingProps } from 'react-native-calendars/src/calendar/day/marking';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { PlantAddForm } from '../../../../hooks';
import {
  $currentPlantAddScreenStepIndexSelector,
  $plantAddState,
  EPlantAddStep,
  plantAddSteps,
} from '../../../../plant-add.state';

import { Icon, Modal, Text } from '@/atoms';
import { useUploadImageLibraryMutation, useUploadPhotoMutation } from '@/hooks';
import { useMutationIndicator } from '@/providers';
import { calculateHarvestDateRange, palette } from '@/utils';

type PlantAddContentModalComponentProps = {
  isModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PlantAddContentVarietyModalComponent =
  memo<PlantAddContentModalComponentProps>(({ isModal, setModal }) => {
    const { width: deviceWidth } = useWindowDimensions();
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

    const handlePressBackdropModal = () => {
      setModal(false);
    };

    return (
      <Modal
        isVisible={isVisible}
        isBottomSheet={true}
        onBackdropPress={handlePressBackdropModal}>
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
              }}
            />
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
    const { control, watch } = useFormContext<PlantAddForm>();

    const selectedPlant = watch(EPlantAddStep.VARIETY);
    const [harvestStartDate, harvestEndDate] =
      calculateHarvestDateRange(selectedPlant);

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

    const handlePressBackdropModal = () => {
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
    const today = dayjs();

    const maxDate = today.format('YYYY-MM-DD');
    const harvestEndRealDate = today.subtract(harvestEndDate, 'day');
    const harvestStartRealDate = today.subtract(harvestStartDate, 'day');

    // harvestStartRealDate부터 harvestEndRealDate까지의 날짜 배열을 생성합니다.
    const harvestDateRange = [];

    for (
      let currentDate = harvestStartRealDate;
      currentDate.isSameOrAfter(harvestEndRealDate);
      currentDate = currentDate.subtract(1, 'day')
    ) {
      harvestDateRange.push(currentDate.format('YYYY-MM-DD'));
    }

    return (
      <Modal
        isVisible={isVisible}
        isBottomSheet={true}
        onBackdropPress={handlePressBackdropModal}>
        <Stack
          paddingX={32}
          paddingY={12}
          space={16}
          style={{
            minHeight: 390,
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            backgroundColor: palette['white'],
          }}>
          <Calendar
            monthFormat={'yyyy년 MM월'}
            onDayPress={day => handleDatePress(day)}
            hideExtraDays={true}
            maxDate={maxDate}
            minDate={harvestEndRealDate.format('YYYY-MM-DD')}
            markedDates={{
              ...harvestDateRange.reduce(
                (marked: { [key: string]: MarkingProps }, date) => {
                  marked[date] = {
                    selected: true,
                    selectedColor: palette['red-300'],
                  };
                  return marked;
                },
                {},
              ),
              [selectedDate?.split('T')[0]]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: palette['primary'],
                selectedTextColor: palette['white'],
              },
            }}
            theme={{
              todayTextColor: palette['gray-900'],
              textDayFontFamily: 'SUITE-Regular',
              textMonthFontFamily: 'SUITE-Regular',
            }}
          />
          <Stack horizontal space={12} paddingLeft={20} align="center">
            <Box
              style={{
                width: 16,
                height: 16,
                borderRadius: 16,
                backgroundColor: palette['red-300'],
              }}
            />
            <Text variants="labelMedium" fontWeight="Medium" color="gray-900">
              {
                '현재 수확기간인 날짜에 표시됩니다. \n진단하기 기능이 불가하니 주의하세요!'
              }
            </Text>
          </Stack>
        </Stack>
      </Modal>
    );
  });

export const PlantAddPictureModalComponent =
  memo<PlantAddContentModalComponentProps>(({ isModal, setModal }) => {
    const isVisible = isModal;

    const { control } = useFormContext<PlantAddForm>();
    const currentPlantAddScreenStepIndex = useRecoilValue(
      $currentPlantAddScreenStepIndexSelector,
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

      if (jsonResponse != null) {
        field1.value = jsonResponse.data.url as string;
        field1.onChange(jsonResponse.data.url as string);
        field2.onChange(field1.value);
        setPlantAddState({
          screenStep: plantAddSteps[currentPlantAddScreenStepIndex + 1],
        });
      }

      setModal(false);
    };

    const handlePressLibraryButton = async () => {
      const jsonResponse = await mutateLibraryAsync();

      if (jsonResponse != null) {
        field1.value = jsonResponse.data.url as string;
        field1.onChange(jsonResponse.data.url as string);
        field2.onChange(field1.value);
        setPlantAddState({
          screenStep: plantAddSteps[currentPlantAddScreenStepIndex + 1],
        });
      }
      setModal(false);
    };

    const handlePressBackdrop = () => {
      setModal(false);
    };

    return (
      <Modal
        isVisible={isVisible}
        isBottomSheet={true}
        onBackdropPress={handlePressBackdrop}>
        <Stack
          space={12}
          paddingX={4}
          paddingTop={12}
          paddingBottom={30}
          style={{
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            backgroundColor: palette['white'],
            justifyContent: 'center',
          }}>
          <Stack space={30}>
            <Stack
              style={{
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 50,
                  height: 3,
                  backgroundColor: palette['gray-400'],
                  borderRadius: 8,
                }}
              />
            </Stack>
            <Box direction={'row'}>
              <Box
                style={{
                  paddingHorizontal: 24,
                  paddingVertical: 16,
                  borderColor: palette['primary'],
                  flex: 1,
                }}>
                <TouchableOpacity
                  onPress={handlePressPictureButton}
                  style={{ alignItems: 'center' }}>
                  <Stack space={10} align="center">
                    <Icon
                      name={'photo-library'}
                      size={40}
                      color={palette['primary']}
                    />
                    <Text
                      variants={'bodyLarge'}
                      fontWeight={'Medium'}
                      color={'primary'}>
                      갤러리에서 선택
                    </Text>
                  </Stack>
                </TouchableOpacity>
              </Box>
              <Box
                style={{
                  paddingHorizontal: 24,
                  paddingVertical: 16,
                  flex: 1,
                }}>
                <TouchableOpacity
                  onPress={handlePressLibraryButton}
                  style={{ alignItems: 'center' }}>
                  <Stack space={10} align="center">
                    <Icon
                      name={'photo-camera'}
                      size={40}
                      color={palette['primary']}
                    />
                    <Text
                      variants={'bodyLarge'}
                      fontWeight={'Medium'}
                      color={'primary'}>
                      직접 촬영하기
                    </Text>
                  </Stack>
                </TouchableOpacity>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Modal>
    );
  });
