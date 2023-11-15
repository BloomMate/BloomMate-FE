import { Stack } from '@mobily/stacks';

import { Text } from '@/atoms';
import { USER_DETAIL_DUMMY_DATA } from '@/dummy-data/user-detail-dummy-data';
import { palette } from '@/utils';

type UserInfoContentModuleProps = {};

export const UserInfoContentModule = ({}: UserInfoContentModuleProps) => {
  const data = USER_DETAIL_DUMMY_DATA; // 더미 데이터를 직접 사용합니다

  const { user_name, account_id, tiiun_number, garden_size, address } = data;

  return (
    <Stack
      style={{
        backgroundColor: palette['white'],
        paddingHorizontal: 24,
        paddingVertical: 24,
        elevation: 4,
        borderRadius: 8,
      }}>
      <Stack space={16}>
        <UserInfoItem title="이름" content={user_name} />
        <UserInfoItem title="계정 ID" content={account_id} />
        <UserInfoItem title="Tiiun 번호" content={tiiun_number} />
        <UserInfoItem title="정원 크기" content={String(garden_size)} />
        <UserInfoItem title="주소" content={address} />
      </Stack>
    </Stack>
  );
};

interface UserInfoItemProps {
  title: string;
  content: string;
}

const UserInfoItem: React.FC<UserInfoItemProps> = ({ title, content }) => (
  <Stack>
    <Stack horizontal>
      <Text
        style={{ minWidth: 95 }}
        variants={'bodyLarge'}
        fontWeight={'Bold'}
        color={'gray-900'}>
        {title}:
      </Text>
      <Text variants={'bodyLarge'} fontWeight={'Medium'} color={'gray-900'}>
        {content}
      </Text>
    </Stack>
  </Stack>
);
