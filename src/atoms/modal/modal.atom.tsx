import { useWindowDimensions } from '@mobily/stacks';
import { PropsWithChildren } from 'react';
import { Dimensions } from 'react-native';
import RNModal from 'react-native-modal';

import { palette } from '@/utils';

type ModalProps = PropsWithChildren<{
  isVisible: boolean;
  isBottomSheet?: boolean;
}>;

export const Modal = ({
  children,
  isVisible,
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
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropColor={palette['modal']} // 이갓만 색깔 잘 정해서 바꿔
      backdropOpacity={1}
      style={{
        margin: 0,
        paddingHorizontal: 20,
        borderColor: palette['amber-500'],
      }}
      useNativeDriver
      statusBarTranslucent
      deviceHeight={maxDeviceHeight}
      deviceWidth={width}
      avoidKeyboard>
      {children}
    </RNModal>
  );
};
