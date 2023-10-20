import { Box } from '@mobily/stacks';
import { memo } from 'react';

import { Button } from '@/atoms';

type SignUpFooterModuleProps = {};

export const SignUpFooterModule = memo<SignUpFooterModuleProps>(() => {
  return (
    <Box>
      <Button mode="contained">회원가입</Button>
    </Box>
  );
});
