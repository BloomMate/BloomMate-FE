import { Column, Columns } from '@mobily/stacks';
import { memo } from 'react';

import { Text } from '@/atoms';

type DiseaseInfoItemProps = {
  title: string;
  content: string;
};

export const DiseaseInfoItem = memo<DiseaseInfoItemProps>(
  ({ title, content }) => (
    <Columns space={24}>
      <Column width="content">
        <Text variants="bodyMedium" fontWeight="Medium" color="gray-900">
          {title}
        </Text>
      </Column>
      <Column width="fluid">
        <Text variants="labelMedium" fontWeight="Light" color="gray-900">
          {content}
        </Text>
      </Column>
    </Columns>
  ),
);
