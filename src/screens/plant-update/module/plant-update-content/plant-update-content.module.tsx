import { Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

import { PrimaryPlantListScreenNavigatorProp } from '../../../primary/primary-plant-list';

type PrimaryMyPageContentModuleProps = {};

export const PrimaryMyPageContentModule =
  ({}: PrimaryMyPageContentModuleProps) => {
    const navigation = useNavigation<PrimaryPlantListScreenNavigatorProp>();

    const handlePressPlantUpdate = () => {
      navigation.navigate('UserInfoScreen');
    };

    return (
      <Stack>
        <Text onPress={handlePressPlantUpdate}>여길 눌러</Text>
      </Stack>
    );
  };
