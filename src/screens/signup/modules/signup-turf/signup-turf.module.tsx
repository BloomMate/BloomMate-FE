import { Stack } from '@mobily/stacks';
import { memo, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { SignUpForm } from '../../hooks';

import { Button } from '@/atoms';

type SignUpTurfModuleProps = {};

export const SignUpTurfModule = memo<SignUpTurfModuleProps>(() => {
  const { control } = useFormContext<SignUpForm>();
  const [selected, setSelected] = useState(NaN);

  const handlePressTurfButton = (testID: number) => {
    setSelected(testID);
    onChange(testID);
  };

  const {
    field: { onChange },
    fieldState,
  } = useController({ control, name: 'GardenSize' });

  return (
    <Stack space={4}>
      <Button
        mode={selected === 0 ? 'contained' : 'outlined'}
        testID="0"
        onPress={() => handlePressTurfButton(0)}>
        5평 이하 (16.53 ㎡)
      </Button>
      <Button
        mode={selected === 1 ? 'contained' : 'outlined'}
        testID="1"
        onPress={() => handlePressTurfButton(1)}>
        5~10평 (16.53 ㎡ ~ 33.06 ㎡)
      </Button>
      <Button
        mode={selected === 2 ? 'contained' : 'outlined'}
        testID="2"
        onPress={() => handlePressTurfButton(2)}>
        10평 이상 (33.06 ㎡)
      </Button>
    </Stack>
  );
});
