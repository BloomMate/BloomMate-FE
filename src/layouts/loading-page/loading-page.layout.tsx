import { Box } from '@mobily/stacks';
import { ActivityIndicator } from 'react-native';

import { palette } from '@/utils';

type LoadingPageProps = {};

export const LoadingPage = ({}: LoadingPageProps) => {
  return (
    <Box
      alignX="center"
      alignY="center"
      flex="fluid"
      style={{ backgroundColor: palette['white'], width: '100%' }}>
      <ActivityIndicator animating={true} size="large" />
    </Box>
  );
};
