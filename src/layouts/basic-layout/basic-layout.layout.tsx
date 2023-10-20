import { Box } from '@mobily/stacks';
import { PropsWithChildren } from 'react';

import { palette } from '@/utils';

type BasicLayoutProps = PropsWithChildren<{}>;

export const BasicLayout = ({ children }: BasicLayoutProps) => {
  return (
    <Box
      flex="fluid"
      paddingX={24}
      paddingTop={12}
      paddingBottom={32}
      style={{
        width: '100%',
        backgroundColor: palette['white'],
      }}>
      {children}
    </Box>
  );
};
