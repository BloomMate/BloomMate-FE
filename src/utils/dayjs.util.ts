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

export const calculateHarvestDateRange = (variety: number) => {
  switch (variety) {
    case 1:
      return [91, 110];
    case 2:
      return [71, 100];
    case 3:
      return [81, 105];
    case 4:
      return [91, 100];

    default:
      return [0, 0];
  }
};
