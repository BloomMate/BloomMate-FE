import { Stack } from '@mobily/stacks';
import { memo } from 'react';

import { Text } from '@/atoms';

type DiseaseInfoItemProps = {
  title: string;
  content: string;
};

export const DiseaseInfoItem = memo<DiseaseInfoItemProps>(
  ({ title, content }) => (
    <Stack space={24} horizontal align="center">
      <Text variants="bodyMedium" fontWeight="Medium" color="gray-900">
        {title}
      </Text>
      <Text variants="labelMedium" fontWeight="Light" color="gray-900">
        {content}
      </Text>
    </Stack>
  ),
);
