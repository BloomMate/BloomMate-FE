import { Box } from '@mobily/stacks';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

type PrimaryPlantListTabProps = MaterialTopTabBarProps & {};

export const PrimaryPlantListTab = ({
  state,
  descriptors,
  navigation,
  position,
}: PrimaryPlantListTabProps) => {
  return <Box style={{ height: 40, backgroundColor: 'red' }} />;
};
