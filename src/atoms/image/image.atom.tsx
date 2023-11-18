import FastImage, { FastImageProps } from 'react-native-fast-image';

export type ImageProps = FastImageProps & {};

export const Image = ({ ...props }: ImageProps) => {
  return <FastImage {...props} />;
};
