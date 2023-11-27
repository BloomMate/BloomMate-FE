import { Column, Columns, Stack } from '@mobily/stacks';
import { isUndefined } from 'lodash';
import { memo } from 'react';

import { Text } from '@/atoms';
import { useGetAccountInfoQuery } from '@/hooks/get-account-info';
import { myPageGardenSize, palette } from '@/utils';

type UserInfoContentModuleProps = {};

export const UserInfoContentModule = memo<UserInfoContentModuleProps>(() => {
  const { data } = useGetAccountInfoQuery();

  if (isUndefined(data)) {
    return null;
  }

  const { user_name, account_id, tiiun_number, garden_size, address } = data;

  const myPageGardenSizeCopy = myPageGardenSize(garden_size);

  return (
    <Stack>
      <Stack
        style={{
          backgroundColor: palette['white'],
          paddingHorizontal: 24,
          paddingVertical: 20,
          elevation: 4,
          borderRadius: 8,
        }}>
        <Stack paddingBottom={24}>
          <Text variants={'bodyLarge'} fontWeight={'Bold'} color={'black'}>
            회원정보
          </Text>
        </Stack>

        <Stack space={20}>
          <UserInfoItem title="이름" content={user_name} />
          <UserInfoItem title="계정 ID" content={account_id} />
          <UserInfoItem title="Tiiun 제품키" content={tiiun_number} />
          <UserInfoItem
            title="Tiiun 사이즈"
            content={String(myPageGardenSizeCopy)}
          />
          <UserInfoItem title="주소" content={address} />
        </Stack>
      </Stack>
    </Stack>
  );
});

interface UserInfoItemProps {
  title: string;
  content: string;
}

const UserInfoItem: React.FC<UserInfoItemProps> = ({ title, content }) => (
  <Columns>
    <Column width="2/5">
      <Text variants={'bodyMedium'} fontWeight={'Medium'} color={'gray-900'}>
        {title}
      </Text>
    </Column>
    <Column>
      <Text variants={'bodyMedium'} fontWeight={'Medium'} color={'gray-700'}>
        {content}
      </Text>
    </Column>
  </Columns>
);
