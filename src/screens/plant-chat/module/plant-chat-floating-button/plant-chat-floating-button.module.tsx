import dayjs from 'dayjs';
import { memo, useState } from 'react';
import ActionButton from 'react-native-action-button';
import { useSetRecoilState } from 'recoil';

import { $plantChatState } from '../../plant-chat.state';

import { ChatCalendarModal } from './components';

import { Icon } from '@/atoms';
import { palette } from '@/utils';

type PlantChatFloatingButtonProps = {};

export const PlantChatFloatingButton = memo<PlantChatFloatingButtonProps>(
  () => {
    const [isCalendarModalVisible, setIsCalendarModalVisible] = useState(false);
    const setPlantChat = useSetRecoilState($plantChatState);

    const handlePressTodayReport = () => {
      setPlantChat(prev => ({ ...prev, date: dayjs() }));
    };

    const handleCloseCalendarModal = () => {
      setIsCalendarModalVisible(false);
    };
    const handleOpenCalendarModal = () => {
      setIsCalendarModalVisible(true);
    };

    return (
      <>
        <ChatCalendarModal
          isModalVisible={isCalendarModalVisible}
          closeModal={handleCloseCalendarModal}
        />
        <ActionButton
          renderIcon={() => (
            <Icon size={20} name={'add'} style={{ color: palette['white'] }} />
          )}
          offsetX={0}
          offsetY={0}
          style={{ marginBottom: 84, marginRight: 24 }}
          nativeFeedbackRippleColor="rgba(255,255,255,0.1)"
          size={44}
          buttonColor={palette['primary']}>
          <ActionButton.Item
            buttonColor={palette['white']}
            title="이전 레포트"
            textContainerStyle={{
              backgroundColor: 'white',
              borderWidth: 0,
              height: 'auto',
            }}
            hideLabelShadow
            textStyle={{
              color: palette['gray-900'],
              fontFamily: 'SUITE-Bold',
            }}
            spaceBetween={4}
            onPress={handleOpenCalendarModal}>
            <Icon
              name="calendar-month"
              size={20}
              style={{ color: palette['primary'] }}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor={palette['white']}
            title="오늘의 레포트"
            textContainerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
            }}
            hideLabelShadow={true}
            textStyle={{
              color: palette['gray-900'],
              fontFamily: 'SUITE-Bold',
            }}
            spaceBetween={4}
            onPress={handlePressTodayReport}>
            <Icon
              name="calendar-today"
              size={20}
              style={{ color: palette['primary'] }}
            />
          </ActionButton.Item>
        </ActionButton>
      </>
    );
  },
);
