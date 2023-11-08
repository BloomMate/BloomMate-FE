import { Box } from '@mobily/stacks';
import { PropsWithChildren } from 'react';

import { palette } from '@/utils';

type BasicLayoutProps = PropsWithChildren<{
  backgroundColor: 'white' | 'gray-100' | 'transparent';
  tabBar?: boolean;
}>;

export const BasicLayout = ({
  children,
  backgroundColor,
  tabBar,
}: BasicLayoutProps) => {
  return (
    <Box
      flex="fluid"
      paddingX={24}
      paddingTop={32}
      paddingBottom={tabBar ? 0 : 32}
      style={{
        width: '100%',
        backgroundColor: palette[backgroundColor],
      }}>
      {children}
    </Box>
  );
};
