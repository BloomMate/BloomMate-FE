import { memo } from 'react';

import { Text } from '@/atoms';

type SignUpContentInfoComponentProps = {
  info: string;
};

export const SignUpContentInfoComponent = memo<SignUpContentInfoComponentProps>(
  ({ info }) => {
    return (
      <Text variants="titleLarge" fontWeight="Bold" color="black">
        {info}
      </Text>
    );
  },
);
