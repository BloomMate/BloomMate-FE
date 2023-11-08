import { Stack } from '@mobily/stacks';
import { memo } from 'react';

import { Text } from '@/atoms';

type DiseaseInfoItemProps = {
  title: string;
  content: string;
};

export const DiseaseInfoItem = memo<DiseaseInfoItemProps>(
  ({ title, content }) => (
    <Stack space={24} horizontal>
      <Text variants="bodySmall" fontWeight="Medium" color="gray-900">
        {title}
      </Text>
      <Text variants="labelSmall" fontWeight="Light" color="gray-900">
        {content}
      </Text>
    </Stack>
  ),
);
