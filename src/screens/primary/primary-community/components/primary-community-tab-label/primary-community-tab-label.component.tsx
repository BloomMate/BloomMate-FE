import { Text, fontColorType } from '@/atoms';

type PrimaryCommunityTabLabelProps = {
  label: string;
  focused: boolean;
  color: string;
};

export const PrimaryCommunityTabLabel = ({
  color,
  focused,
  label,
}: PrimaryCommunityTabLabelProps) => (
  <Text
    variants="bodySmall"
    color={color as fontColorType}
    fontWeight={focused ? 'Bold' : 'Medium'}
    style={{ marginBottom: 16 }}>
    {label}
  </Text>
);
