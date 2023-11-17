import { Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import { isUndefined } from 'lodash';

import { PlantDetailEditScreenNavigationRouteProps } from '../../plant-detail-edit.screen';

import { Text, TextInput } from '@/atoms';
import { useGetPlantDetailQuery } from '@/hooks';

type DetailEditContentInputModuleProps = {
  placeholder?: string;
  label?: string;
  value: string;
  onChange: (text: string) => void;
  error?: boolean;
  errorMsg?: string;
  secureTextEntry?: boolean;
};

export const DetailEditContentInputModule = ({
  value,
  onChange,
  error,
  errorMsg,
  secureTextEntry,
}: DetailEditContentInputModuleProps) => {
  const {
    params: { id },
  } = useRoute<PlantDetailEditScreenNavigationRouteProps>();
  const { data } = useGetPlantDetailQuery({ plant_id: id });

  if (isUndefined(data)) {
    return null;
  }

  const { plant_name } = data;

  const plantDetails = [{ title: '품종', content: plant_name }];

  return (
    <Stack space={48}>
      {/* 별명스택 */}
      <Stack space={12}>
        <Text variants={'titleLarge'} fontWeight={'Bold'} color={'black'}>
          별명
        </Text>
        <TextInput
          placeholder="토토로"
          label="별명 수정"
          value={value}
          onChangeText={onChange}
          error={error}
          errorMsg={errorMsg || ''}
          secureTextEntry={secureTextEntry}
        />
      </Stack>
    </Stack>
  );
};
