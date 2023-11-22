import { Box, Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { CommunityQnaPostScreenNavigationProps } from '../../../../../../community-qna-post';

import { Icon, PointLinearGradient, Text } from '@/atoms';
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
          bottom: 4,
          right: 2,
        }}
        align="center"
        horizontal
        space={8}>
        <Text variants="labelLarge" fontWeight="Medium" color="gray-700">
          질문하기
        </Text>

        <Box style={{ elevation: 4, borderRadius: 50 }}>
          <TouchableOpacity onPress={handlePressButton}>
            <PointLinearGradient
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 50,
              }}>
              <Icon name="add" size={24} color={palette['primary']} />
            </PointLinearGradient>
          </TouchableOpacity>
        </Box>
      </Stack>
    );
  },
);
