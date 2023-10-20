import { Box } from '@mobily/stacks';

import { palette } from '@/utils';

type DividerProps = {
  heavy?: boolean;
};

export const Divider = ({ heavy = false }: DividerProps) => {
  return (
    <Box
      style={[
        { height: 1, backgroundColor: palette['gray-400'] },
        heavy ? { height: 5, backgroundColor: palette['teal-800'] } : null,
      ]}
    />
  );
};
