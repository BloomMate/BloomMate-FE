import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

type ScrollViewProps = KeyboardAwareScrollViewProps;

export const ScrollView = ({ children, ...props }: ScrollViewProps) => {
  return (
    <KeyboardAwareScrollView {...props}>{children}</KeyboardAwareScrollView>
  );
};
