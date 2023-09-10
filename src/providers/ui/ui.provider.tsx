import { StacksProvider } from '@mobily/stacks';
import { PropsWithChildren } from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import { palette } from '@/utils';

type UIProviderProps = PropsWithChildren<{}>;

export const UIProvider = ({ children }: UIProviderProps) => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StacksProvider spacing={1}>
        <SafeAreaView style={{ flex: 1, backgroundColor: palette['white'] }}>
          {children}
        </SafeAreaView>
      </StacksProvider>
    </SafeAreaProvider>
  );
};
