import { Box, Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { CommunityQnaPostScreenNavigationProps } from '../../../../../../community-qna-post';

import { Icon } from '@/atoms';
import { palette } from '@/utils';

type PrimaryCommunityQnaFloatingModuleProps = {};

export const PrimaryCommunityQnaFloatingModule = memo(
  ({}: PrimaryCommunityQnaFloatingModuleProps) => {
    const navigation = useNavigation<CommunityQnaPostScreenNavigationProps>();
    const handlePressButton = () => {
      navigation.navigate('CommunityQnaPostScreen');
    };

    return (
      <Stack
        style={{
          position: 'absolute',
          bottom: 16,
          right: 2,
        }}
        align="center"
        horizontal
        space={8}>
        <Box style={{ elevation: 4, borderRadius: 50 }}>
          <TouchableOpacity onPress={handlePressButton}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 50,
                backgroundColor: palette['primary'],
              }}>
              <Icon name="edit" size={24} color={palette['white']} />
            </View>
          </TouchableOpacity>
        </Box>
      </Stack>
    );
  },
);
