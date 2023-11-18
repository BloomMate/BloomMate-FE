import { useQuery } from 'react-query';

export type GetAccountInfoResponse = {
  account_id: string;
  user_name: string;
  tiiun_number: string;
  garden_size: '0' | '1' | '2';
  address: string;
};

export const useGetAccountInfoQuery = () => {
  return useQuery<GetAccountInfoResponse>(['accounts/info', {}]);
};
