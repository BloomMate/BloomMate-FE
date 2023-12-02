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

  const renderTempFastImage = () => {
    return (
      <FastImage
        source={props.source}
        style={{
          width: 1,
          height: 1,
          opacity: 0,
          position: 'absolute',
          zIndex: -1,
        }}
        onLoadEnd={() => setIsLoadingImg(false)}
      />
    );
  };

  return (
    <>
      {isLoadingImg ? (
        <>
          <Skeleton style={[style, { zIndex: -1, ...skeletonStyle }]} />
          {renderTempFastImage()}
        </>
      ) : (
        <FastImage {...props} />
      )}
    </>
  );
};
