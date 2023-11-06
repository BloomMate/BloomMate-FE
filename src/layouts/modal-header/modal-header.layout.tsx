import { useBackHandler } from '@react-native-community/hooks';
import { memo } from 'react';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type ModalHeaderLayoutProps = {
  left:
    | {
        type: 'string';
        title: string;
      }
    | { type: 'icon' };
  onPressExit: () => void;
};

export const ModalHeaderLayout = memo<ModalHeaderLayoutProps>(
  ({ left, onPressExit }) => {
    useBackHandler(() => {
      onPressExit();
      return true;
    });

    if (left.type === 'string') {
      return (
        <Text variants="titleLarge" fontWeight="Medium" color="gray-900">
          {left.title}
        </Text>
      );
    }

    const handlePressBackIcon = () => {
      onPressExit();
    };

    return (
      <Icon
        name="arrow-back-ios"
        onPress={handlePressBackIcon}
        size={24}
        color={palette['gray-900']}
      />
    );
  },
);
