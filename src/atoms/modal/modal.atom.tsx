import { useWindowDimensions } from '@mobily/stacks';
import { PropsWithChildren } from 'react';
import { Dimensions } from 'react-native';
import RNModal from 'react-native-modal';

import { palette } from '@/utils';

type ModalProps = PropsWithChildren<{
  isVisible: boolean;
  onBackdropPress?: () => void;
  isBottomSheet?: boolean;
}>;

export const Modal = ({
  children,
  isVisible,
  onBackdropPress = () => {},
  isBottomSheet = false,
}: ModalProps) => {
  const { width } = useWindowDimensions();

  const maxDeviceHeight = Math.max(
    Dimensions.get('window').height,
    Dimensions.get('screen').height,
  );

  return (
    <RNModal
      isVisible={isVisible}
      animationIn={isBottomSheet ? 'slideInUp' : 'fadeIn'}
      animationOut={isBottomSheet ? 'slideOutDown' : 'fadeOut'}
      backdropColor={palette['modal']}
      backdropOpacity={1}
      style={[
        {
          margin: 0,
          paddingHorizontal: isBottomSheet ? 0 : 20,
          justifyContent: 'center',
          alignItems: 'center',
        },
        isBottomSheet && {
          justifyContent: 'flex-end',
        },
      ]}
      useNativeDriver
      statusBarTranslucent
      deviceHeight={maxDeviceHeight}
      deviceWidth={width}
      onBackdropPress={onBackdropPress}
      avoidKeyboard>
      {children}
    </RNModal>
  );
};
