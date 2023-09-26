import { ComponentType, Suspense } from 'react';

export const withSuspense = <P extends {}>(
  WrappedComponent: ComponentType<P>,
  SuspenseComponent: ComponentType,
) => {
  return (props: P) => (
    <Suspense fallback={<SuspenseComponent />}>
      <WrappedComponent {...props} />
    </Suspense>
  );
};
