import { Stack } from '@mobily/stacks';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';

import {
  PrimaryNavigatorParamLists,
  PrimaryNavigatorProps,
} from '../../../../primary.navigator';

import { ModalHeader } from '@/layouts/modal-header/modal-header.layout';

type PrimaryMyPageHeaderModuleProps = {};

export type PrimaryMypageScreenNavigatorProp = CompositeNavigationProp<
  PrimaryNavigatorProps,
  BottomTabNavigationProp<PrimaryNavigatorParamLists, 'PrimaryPlantListScreen'>
>;

export const PrimaryMyPageHeaderModule =
  ({}: PrimaryMyPageHeaderModuleProps) => {
    const navigation = useNavigation<PrimaryMypageScreenNavigatorProp>();

    return (
      <Stack>
        <ModalHeader
          left={{ type: 'string', title: '마이페이지' }}
          onPressExit={() => navigation.goBack()}
        />
      </Stack>
    );
  };
