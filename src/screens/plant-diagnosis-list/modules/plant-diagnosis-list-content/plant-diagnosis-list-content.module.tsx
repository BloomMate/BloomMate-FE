import { Box } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import { isUndefined } from 'lodash';
import { FlatList } from 'react-native';

import { PlantDiagnosisListScreenNavigationRouteProps } from '../../plant-diagnosis-list.screen';

import { DiagnosisListItem, DiagnosisListEmpty } from './components';

import { Text } from '@/atoms';
import { useGetPlantDiagnosisRecordListQuery } from '@/hooks';

type PlantDiagnosisListContentModuleProps = {};

export const PlantDiagnosisListContentModule =
  ({}: PlantDiagnosisListContentModuleProps) => {
    const {
      params: { id },
    } = useRoute<PlantDiagnosisListScreenNavigationRouteProps>();

    const { data } = useGetPlantDiagnosisRecordListQuery({ plant_id: id });

    if (isUndefined(data)) {
      return;
    }

    const diagnosisList = data.DATA;
    const { plant_nickname } = data;

    return (
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={diagnosisList}
        ItemSeparatorComponent={() => <Box style={{ height: 20 }} />}
        ListHeaderComponent={() => (
          <Box paddingY={32}>
            <Text variants="titleLarge" fontWeight="Medium" color="gray-900">
              진단 기록 - {plant_nickname}
            </Text>
          </Box>
        )}
        renderItem={({ item }) => <DiagnosisListItem {...item} />}
        ListEmptyComponent={<DiagnosisListEmpty />}
        ListFooterComponent={<Box style={{ height: 40 }} />}
      />
    );
  };
