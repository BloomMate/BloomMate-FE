import { Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';

import {
  PrimaryMyPageContentModule,
  PrimaryMyPageScreenNavigatorProp,
} from './module/primary-mypage-content';
import { PrimaryMyPageHeaderModule } from './module/primary-mypage-header';

import { palette } from '@/utils';

type PrimaryMyPageScreenProps = {};

export const PrimaryMyPageScreen = ({}: PrimaryMyPageScreenProps) => {
  const navigation = useNavigation<PrimaryMyPageScreenNavigatorProp>();

  return (
    <Stack
      paddingX={24}
      paddingY={32}
      style={{ backgroundColor: palette['gray-100'], flex: 1 }}
      space={48}>
      <PrimaryMyPageHeaderModule />
      <PrimaryMyPageContentModule navigation={navigation} />
    </Stack>
  );
};
