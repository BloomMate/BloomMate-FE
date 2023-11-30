import { Box } from '@mobily/stacks';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Suspense } from 'react';
import { ActivityIndicator } from 'react-native';

import { RootStackParamList } from '../root.navigator';

import {
  PlantDiagnosisIntroContentModule,
  PlantDiagnosisIntroFooterModule,
  PlantDiagnosisIntroHeaderModule,
} from './modules';

import { PointLinearGradient } from '@/atoms';
import { BasicLayout, ScrollView } from '@/layouts';
import { palette } from '@/utils';

type PlantDiagnosisIntroScreenProps = {};

export type PlantDiagnosisIntroScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'PlantDiagnosisIntroScreen'
>;

export type PlantDiagnosisIntroScreenNavigationRouteProps = RouteProp<
  RootStackParamList,
  'PlantDiagnosisIntroScreen'
>;

export const PlantDiagnosisIntroScreen =
  ({}: PlantDiagnosisIntroScreenProps) => {
    return (
      <PointLinearGradient style={{ width: '100%', height: '100%' }}>
        <BasicLayout backgroundColor="transparent">
          <PlantDiagnosisIntroHeaderModule />
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Suspense
              fallback={
                <Box
                  flex="fluid"
                  style={{ backgroundColor: palette['transparent'] }}
                  alignX="center"
                  alignY="center">
                  <ActivityIndicator animating={true} size="large" />
                </Box>
              }>
              <PlantDiagnosisIntroContentModule />
              <PlantDiagnosisIntroFooterModule />
            </Suspense>
          </ScrollView>
        </BasicLayout>
      </PointLinearGradient>
    );
  };
