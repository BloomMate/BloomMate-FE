import { useState } from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';

import { Skeleton } from '../skeleton';

export type ImageProps = FastImageProps & {
  skeletonStyle?: {
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
  };
};

export const Image = ({ skeletonStyle, ...props }: ImageProps) => {
  const [isLoadingImg, setIsLoadingImg] = useState(true);

  return (
    <>
      {isLoadingImg && (
        <Skeleton
          style={{ ...skeletonStyle, position: 'absolute', elevation: -1 }}
        />
      )}
      <FastImage {...props} onLoadEnd={() => setIsLoadingImg(false)} />
    </>
  );
};
