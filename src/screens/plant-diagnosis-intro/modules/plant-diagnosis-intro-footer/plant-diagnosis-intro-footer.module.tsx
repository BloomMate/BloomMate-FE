import { memo } from 'react';

import { CTASection, SingleButtonProps } from '@/layouts';

type PlantDiagnosisIntroFooterModuleProps = {};

export const PlantDiagnosisIntroFooterModule =
  memo<PlantDiagnosisIntroFooterModuleProps>(() => {
    const buttons: SingleButtonProps[] = [
      { label: '진단 기록', mode: 'outlined', onPress: () => {} },
      {
        label: '진단하기',
        mode: 'contained',
        icon: 'search-off',
        onPress: () => {},
      },
    ];

    return <CTASection buttons={buttons} direction="row" />;
  });
