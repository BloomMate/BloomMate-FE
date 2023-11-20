import { Stack } from '@mobily/stacks';
import { memo } from 'react';
import { View } from 'react-native';
import ActionButton from 'react-native-action-button';

import { Icon } from '@/atoms';
import { palette } from '@/utils';

type FloatingButtonProps = {};

export const FloatingButton = memo<FloatingButtonProps>(() => {
  return (
    <Stack>
      <View style={{ flex: 1 }}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton
          renderIcon={() => (
            <Icon size={20} name={'add'} style={{ color: palette['white'] }} />
          )}
          nativeFeedbackRippleColor="rgba(255,255,255,0.1)"
          size={44}
          buttonColor={palette['primary']}>
          <ActionButton.Item
            buttonColor={palette['white']}
            title="이전 레포트"
            textContainerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
            }}
            hideLabelShadow={true}
            textStyle={{ color: palette['gray-900'], fontFamily: 'SUITE' }}
            onPress={() => console.log('notes tapped!')}>
            <Icon
              name="calendar-month"
              size={20}
              style={{ color: palette['primary'] }}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor={palette['white']}
            title="Notifications"
            onPress={() => {}}>
            <Icon
              name="calendar-today"
              size={20}
              style={{ color: palette['primary'] }}
            />
          </ActionButton.Item>
        </ActionButton>
      </View>
    </Stack>
  );
});
