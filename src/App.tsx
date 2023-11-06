import { API_URL } from '@env';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import isToday from 'dayjs/plugin/isToday';
import { initializeMMKVFlipper } from 'react-native-mmkv-flipper-plugin';

import {
  MutationIndicatorProvider,
  QueryClientProvider,
  RecoilProvider,
  UIProvider,
} from './providers';
import { RootNavigator } from './screens';
import { defaultStorage } from './utils';

if (__DEV__) {
  initializeMMKVFlipper({ default: defaultStorage });
}

export const App = () => {
  console.log(API_URL);
  dayjs.extend(isToday);
  dayjs.locale('ko');

  return (
    <QueryClientProvider>
      <RecoilProvider>
        <UIProvider>
          <MutationIndicatorProvider>
            <RootNavigator />
          </MutationIndicatorProvider>
        </UIProvider>
      </RecoilProvider>
    </QueryClientProvider>
  );
};
