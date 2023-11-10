import BottomSheet from '@gorhom/bottom-sheet';
import { memo, useMemo, useRef } from 'react';

import { Text } from '@/atoms';

type PlantAddAliasComponentProps = {};

export const PlantAddAliasComponent = memo<PlantAddAliasComponentProps>(() => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const handleSheetChanges = () => {};

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <Text fontWeight="Medium" variants="titleMedium" color="gray-900">
        품종
      </Text>
    </BottomSheet>
  );
});
