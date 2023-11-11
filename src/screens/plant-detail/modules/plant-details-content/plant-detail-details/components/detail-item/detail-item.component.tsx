import { Stack } from '@mobily/stacks';

import { Text } from '@/atoms';

type DetailItemProps = {
  detail: {
    title: string;
    content: string;
  };
};

export const DetailItem = ({ detail }: DetailItemProps) => (
  <Stack horizontal>
    <Text
      style={{ minWidth: 81 }}
      variants="bodySmall"
      fontWeight={'Medium'}
      color={'gray-900'}>
      {detail.title}
    </Text>
    <Text variants={'bodySmall'} fontWeight={'Light'} color={'gray-900'}>
      {detail.content}
    </Text>
  </Stack>
);
