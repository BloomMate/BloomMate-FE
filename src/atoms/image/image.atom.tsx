import { useState } from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';

import { Skeleton } from '../skeleton';

export type ImageProps = FastImageProps & {
  skeletonStyle?: any;
};

FastImage.preload([
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699584465/garden_ot7vrl.png',
    priority: FastImage.priority.high,
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699584465/SmartCottage_yq2e78.jpg',
    priority: FastImage.priority.high,
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585014/QnALogo_anebsf.png',
    priority: FastImage.priority.high,
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585432/Rectangle_nigtyn.png',
    priority: FastImage.priority.high,
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585015/AIDiag_jmsiie.png',
    priority: FastImage.priority.high,
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585038/001_poybv6.png',
    priority: FastImage.priority.high,
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585039/002_icfaze.png',
    priority: FastImage.priority.high,
  },
  {
    uri: ' https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585040/003_ikb5ux.png',
    priority: FastImage.priority.high,
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585039/004_ofko46.png',
    priority: FastImage.priority.high,
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585041/005_dv12mz.png',
    priority: FastImage.priority.high,
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585040/006_kaf49x.png',
    priority: FastImage.priority.high,
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585041/007_vdtnyv.png',
    priority: FastImage.priority.high,
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585042/008_ojpfxk.png',
    priority: FastImage.priority.high,
  },
  {
    uri: 'https://res.cloudinary.com/dahw1d9li/image/upload/v1700477736/strawberry_bsjmxj.png',
    priority: FastImage.priority.high,
  },
  {
    uri: 'https://res.cloudinary.com/dahw1d9li/image/upload/v1700478058/LogoFont_ebtook.png',
    priority: FastImage.priority.high,
  },
  {
    uri: 'https://res.cloudinary.com/dahw1d9li/image/upload/v1700404118/chatlogo_ed8pau.png',
    priority: FastImage.priority.high,
  },
]);

export const Image = ({ skeletonStyle, ...props }: ImageProps) => {
  const { style } = props;
  const [isLoadingImg, setIsLoadingImg] = useState(true);

  // return <Skeleton style={[style, { elevation: -1, ...skeletonStyle }]} />;

  return (
    <>
      {isLoadingImg && (
        <Skeleton style={[style, { elevation: -1, ...skeletonStyle }]} />
      )}
      <FastImage {...props} onLoadEnd={() => setIsLoadingImg(false)} />
    </>
  );
};
