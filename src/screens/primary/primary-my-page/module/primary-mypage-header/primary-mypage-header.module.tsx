import { Stack } from '@mobily/stacks';

import { Text } from '@/atoms';

type PrimaryMyPageHeaderModuleProps = {};

export const PrimaryMyPageHeaderModule =
  ({}: PrimaryMyPageHeaderModuleProps) => {
    return (
      <Stack>
        <Text fontWeight="Medium" variants="titleLarge" color="gray-900">
          마이 페이지
        </Text>
      </Stack>
    );
  };
