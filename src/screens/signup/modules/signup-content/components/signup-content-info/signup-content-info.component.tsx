import { memo } from 'react';

import { Text } from '@/atoms';

type SignUpContentInfoComponentProps = {
  info: string;
};

export const SignUpContentInfoComponent = memo<SignUpContentInfoComponentProps>(
  ({ info }) => {
    return (
      <Text variants="bodyLarge" fontWeight="Medium" color="black">
        {info}
      </Text>
    );
  },
);
