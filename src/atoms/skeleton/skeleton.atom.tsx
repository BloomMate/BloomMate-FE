import { ComponentProps } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceholder, {
  createShimmerPlaceholder,
} from 'react-native-shimmer-placeholder';

export type ISkeletonProps = ComponentProps<typeof ShimmerPlaceholder>;

const NativeShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export const Skeleton = ({ ...props }: ISkeletonProps) => {
  return <NativeShimmerPlaceholder {...props} />;
};
