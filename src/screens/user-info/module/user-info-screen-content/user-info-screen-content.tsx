import { Stack } from '@mobily/stacks';

import { Text } from '@/atoms';
import { USER_DETAIL_DUMMY_DATA } from '@/dummy-data/user-detail-dummy-data';
import { palette } from '@/utils';

type UserInfoContentModuleProps = {};

export const UserInfoContentModule = ({}: UserInfoContentModuleProps) => {
  const data = USER_DETAIL_DUMMY_DATA;

  const { user_name, account_id, tiiun_number, garden_size, address } = data;

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
          <UserInfoItem title="Tiiun 사이즈" content={String(garden_size)} />
          <UserInfoItem title="주소" content={address} />
        </Stack>
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
        variants={'bodyMedium'}
        fontWeight={'Medium'}
        color={'gray-900'}>
        {title}
      </Text>
      <Text variants={'bodyMedium'} fontWeight={'Medium'} color={'gray-700'}>
        {content}
      </Text>
    </Stack>
  </Stack>
);
