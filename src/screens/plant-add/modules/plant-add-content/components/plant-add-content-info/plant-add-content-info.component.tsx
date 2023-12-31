import { memo } from 'react';

import { Text } from '@/atoms';

type PlantAddContentInfoComponentProps = {
  info: string;
};

export const PlantAddContentInfoComponent =
  memo<PlantAddContentInfoComponentProps>(({ info }) => {
    return (
      <Text variants="titleLarge" fontWeight="Bold" color="black">
        {info}
      </Text>
    );
  });
