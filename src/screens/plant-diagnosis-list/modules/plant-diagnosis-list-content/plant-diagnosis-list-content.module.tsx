import { Box } from '@mobily/stacks';
import { FlatList } from 'react-native';

import { DiagnosisListItem, DiagnosisListEmpty } from './components';

import { Text } from '@/atoms';
import { PLANT_DIAGNOSIS_LIST_DUMMY_DATA } from '@/dummy-data';

type PlantDiagnosisListContentModuleProps = {};

export const PlantDiagnosisListContentModule =
  ({}: PlantDiagnosisListContentModuleProps) => {
    const diagnosisList = PLANT_DIAGNOSIS_LIST_DUMMY_DATA;

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
