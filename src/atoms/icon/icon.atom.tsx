import { ComponentProps } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type IconProps = ComponentProps<typeof MaterialIcons>;

export const Icon = ({ ...props }: IconProps) => {
  return <MaterialIcons {...props} />;
};
