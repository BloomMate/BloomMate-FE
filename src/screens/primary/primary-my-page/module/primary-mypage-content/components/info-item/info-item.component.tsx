import { Box } from '@mobily/stacks';
import { TouchableOpacity } from 'react-native';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type InfoItemProps = {
  text: string;
  onPress: () => void;
};

export const InfoItem = ({ text, onPress }: InfoItemProps) => (
  <TouchableOpacity onPress={onPress}>
    <Box direction="row" alignX="between">
      <Text variants={'bodyMedium'} fontWeight={'Medium'} color={'gray-700'}>
        {text}
      </Text>
      <Icon size={20} color={palette['gray-700']} name={'arrow-forward-ios'} />
    </Box>
  </TouchableOpacity>
);
