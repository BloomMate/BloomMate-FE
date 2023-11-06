import { Text, fontColorType } from '@/atoms';

type PrimaryPlantListTabLabelProps = {
  label: string;
  focused: boolean;
  color: fontColorType;
};

export const PrimaryPlantListTabLabel = ({
  color,
  focused,
  label,
}: PrimaryPlantListTabLabelProps) => (
  <Text
    variants="bodySmall"
    color={color as fontColorType}
    fontWeight={focused ? 'Bold' : 'Medium'}
    style={{ marginBottom: 16 }}>
    {label}
  </Text>
);
