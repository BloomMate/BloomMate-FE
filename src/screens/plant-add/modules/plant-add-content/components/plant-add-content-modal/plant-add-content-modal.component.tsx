import { Box, Stack } from '@mobily/stacks';
import { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import { Modal, Text } from '@/atoms';
import { palette } from '@/utils';

type PlantAddContentModalComponentProps = {
  isModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PlantAddContentVarietyModalComponent =
  memo<PlantAddContentModalComponentProps>(({ isModal, setModal }) => {
    const handleClickModal = () => {
      setModal(false);
    };
    const isVisible = isModal;

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
          <Stack space={20}>
            <Text fontWeight="Medium" color="gray-900" variants="titleMedium">
              품종
            </Text>

            <TouchableOpacity
              style={{ backgroundColor: palette['gray-100'], padding: 8 }}>
              <Text fontWeight="Medium" color="gray-700" variants="titleMedium">
                🍓 딸기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: palette['gray-100'], padding: 8 }}
              onPress={handleClickModal}>
              <Text fontWeight="Medium" color="gray-700" variants="titleMedium">
                🌽 옥수수
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: palette['gray-100'], padding: 8 }}>
              <Text fontWeight="Medium" color="gray-700" variants="titleMedium">
                🥔 감자
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: palette['gray-100'], padding: 8 }}>
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
    const handleClickModal = () => {
      setModal(false);
    };
    const isVisible = isModal;
    const [selectedDate, setSelectedDate] = useState('');

    const handleDatePress = day => {
      setSelectedDate(day.dateString);
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
            maxDate={new Date().toISOString().split('T')[0]}
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
