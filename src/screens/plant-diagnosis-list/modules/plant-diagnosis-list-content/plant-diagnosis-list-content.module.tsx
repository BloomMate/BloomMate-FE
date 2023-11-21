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
      return null;
    }

    const diagnosisList = data.DATA;

    return (
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={diagnosisList}
        ItemSeparatorComponent={() => <Box style={{ height: 20 }} />}
        ListHeaderComponent={() => (
          <Box paddingY={32}>
            <Text variants="titleLarge" fontWeight="Bold" color="black">
              진단 기록 - 킹왕옥수수
            </Text>
          </Box>
        )}
        renderItem={({ item }) => <DiagnosisListItem {...item} />}
        ListEmptyComponent={<DiagnosisListEmpty />}
        ListFooterComponent={<Box style={{ height: 40 }} />}
      />
    );
  };
