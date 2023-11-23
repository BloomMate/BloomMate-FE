import { Box } from '@mobily/stacks';
import dayjs from 'dayjs';
import { memo } from 'react';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { useRecoilState } from 'recoil';

import { $plantChatState } from '../../../../plant-chat.state';

import { Modal } from '@/atoms';
import { palette } from '@/utils';

type ChatCalendarModalProps = {
  isModalVisible: boolean;
  closeModal: () => void;
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

export const ChatCalendarModal = memo<ChatCalendarModalProps>(
  ({ isModalVisible, closeModal }) => {
    const [plantChat, setPlantChat] = useRecoilState($plantChatState);
    const selectedDate = plantChat.date.format('YYYY.MM.DD');

    const handleDatePress = (day: DateData) => {
      setPlantChat(prev => ({ ...prev, date: dayjs(day.dateString) }));
      closeModal();
    };

    const handlePressBackdropModal = () => {
      closeModal();
    };

    const today = dayjs();

    const maxDate = today.format('YYYY-MM-DD');

    return (
      <Modal
        isVisible={isModalVisible}
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
          <Calendar
            monthFormat={'yyyy년 MM월'}
            onDayPress={day => handleDatePress(day)}
            hideExtraDays={true}
            maxDate={maxDate}
            markedDates={{
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
        </Box>
      </Modal>
    );
  },
);
