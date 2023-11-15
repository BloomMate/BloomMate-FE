import { Stack } from '@mobily/stacks';

import { Text } from '@/atoms';
import { USER_DETAIL_DUMMY_DATA } from '@/dummy-data/user-detail-dummy-data';
import { BasicLayout } from '@/layouts';

type UserInfoScreenProps = {};

export const UserInfoScreen = ({}: UserInfoScreenProps) => {
  const data = USER_DETAIL_DUMMY_DATA; // 더미 데이터를 직접 사용합니다

  const { user_name, account_id, tiiun_number, garden_size, address } = data;

  return (
    <BasicLayout backgroundColor="gray-100">
      <Stack>
        <UserInfoItem title="이름" content={user_name} />
        <UserInfoItem title="계정 ID" content={account_id} />
        <UserInfoItem title="Tiiun 번호" content={tiiun_number} />
        <UserInfoItem title="정원 크기" content={String(garden_size)} />
        <UserInfoItem title="주소" content={address} />
      </Stack>
    </BasicLayout>
  );
};

interface UserInfoItemProps {
  title: string;
  content: string;
}

const UserInfoItem: React.FC<UserInfoItemProps> = ({ title, content }) => (
  <Text variants={'bodyMedium'} fontWeight={'Medium'} color={'gray-900'}>
    {title}: {content}
  </Text>
);
