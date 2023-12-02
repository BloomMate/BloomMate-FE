import { useState } from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';

import { Skeleton } from '../skeleton';

import { PRE_LOAD_IMG } from './image.const';

export type ImageProps = FastImageProps & {
  skeletonStyle?: any;
};

FastImage.preload(
  PRE_LOAD_IMG.map(img => ({ uri: img, priority: FastImage.priority.high })),
);

export const Image = ({ skeletonStyle, ...props }: ImageProps) => {
  const { style } = props;
  const [isLoadingImg, setIsLoadingImg] = useState(true);

  // return (
  //   <Skeleton
  //     style={[style, { position: 'absolute', elevation: -1, ...skeletonStyle }]}
  //   />
  // );

  return (
    <>
      {isLoadingImg && (
        <Skeleton
          style={[style, { zIndex: -1, elevation: -1, ...skeletonStyle }]}
        />
      )}
      <FastImage {...props} onLoadEnd={() => setIsLoadingImg(false)} />
    </>
  );
};
