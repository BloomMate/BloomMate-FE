import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

const gradientColors = ['#D7E3FF', '#C8FFF9'];

type PointLinearGradientProps = Omit<LinearGradientProps, 'colors'>;

export const PointLinearGradient = (props: PointLinearGradientProps) => {
  return <LinearGradient colors={gradientColors} {...props} />;
};
