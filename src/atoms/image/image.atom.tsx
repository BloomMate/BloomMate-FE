import { useState } from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';

import { Skeleton } from '../skeleton';

export type ImageProps = FastImageProps;

FastImage.preload([
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699584465/garden_ot7vrl.png',
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699584465/SmartCottage_yq2e78.jpg',
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585014/QnALogo_anebsf.png',
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585432/Rectangle_nigtyn.png',
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585015/AIDiag_jmsiie.png',
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585038/001_poybv6.png',
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585039/002_icfaze.png',
  },
  {
    uri: ' https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585040/003_ikb5ux.png',
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585039/004_ofko46.png',
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585041/005_dv12mz.png',
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585040/006_kaf49x.png',
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585041/007_vdtnyv.png',
  },
  {
    uri: 'https://res.cloudinary.com/dolc0qkxk/image/upload/v1699585042/008_ojpfxk.png',
  },
  {
    uri: 'https://res.cloudinary.com/dahw1d9li/image/upload/v1700477736/strawberry_bsjmxj.png',
  },
  {
    uri: 'https://res.cloudinary.com/dahw1d9li/image/upload/v1700478058/LogoFont_ebtook.png',
  },
  {
    uri: 'https://res.cloudinary.com/dahw1d9li/image/upload/v1700404118/chatlogo_ed8pau.png',
  },
]);

export const Image = ({ ...props }: ImageProps) => {
  const { style } = props;
  const [isLoadingImg, setIsLoadingImg] = useState(true);

  // return <Skeleton style={[style]} />;

  return (
    <>
      {isLoadingImg && (
        <Skeleton style={[style, { position: 'absolute', elevation: -1 }]} />
      )}
      <FastImage {...props} onLoadEnd={() => setIsLoadingImg(false)} />
    </>
  );
};
