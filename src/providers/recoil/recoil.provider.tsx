import { PropsWithChildren, useEffect, useState } from 'react';
import { Flipper, addPlugin } from 'react-native-flipper';
import { RecoilRoot, useRecoilSnapshot } from 'recoil';

type RecoilProviderProps = PropsWithChildren<{}>;

export const RecoilProvider = ({ children }: RecoilProviderProps) => {
  const RecoilFlipperClient: React.FC<{ children?: never }> = () => {
    const snapshot = useRecoilSnapshot();
    const [flipperConnection, setFlipperConnection] =
      useState<Flipper.FlipperConnection | null>(null);

    useEffect(() => {
      addPlugin({
        getId: () => 'react-recoil',
        onConnect: setFlipperConnection,
        onDisconnect: () => {},
        runInBackground: () => true,
      });
    }, []);

    useEffect(() => {
      Array.from(snapshot.getNodes_UNSTABLE({ isModified: true })).forEach(
        node => {
          const loadable = snapshot.getLoadable(node);
          flipperConnection?.send('newRow', {
            atom: node.key,
            date: new Date().toISOString(),
            content: loadable.contents,
            state: loadable.state,
          });
        },
      );
    }, [snapshot]);

    return null;
  };

  return (
    <RecoilRoot>
      <RecoilFlipperClient />
      {children}
    </RecoilRoot>
  );
};
