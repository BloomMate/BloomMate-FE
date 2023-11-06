import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const calculateDaysDifference = (inputDateString: string): number => {
  // 입력된 문자열을 파싱
  const inputDate = dayjs(inputDateString);

  // 현재 날짜를 얻기
  const currentDate = dayjs();

  // 두 날짜 사이의 차이를 계산
  const daysDifference = currentDate.diff(inputDate, 'day');

  return daysDifference;
};
