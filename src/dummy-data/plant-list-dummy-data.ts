export const PLANT_LIST_DUMMY_DATA: {
  id: string;
  imageURL: string;
  name: string;
  planted_at: string;
  harvested_at: string | null;
  type: 'tomato' | 'potato' | 'strawberry' | 'corn';
  harvested: boolean;
  growth_level: 'germination' | 'growth' | 'harvest';
}[] = [
  {
    id: '1',
    imageURL: 'https://picsum.photos/100/100',
    name: '토토로',
    planted_at: '2023-10-26T23:22:02.385081+09:00',
    harvested_at: '2023-10-30T23:22:02.385081+09:00',
    type: 'tomato',
    harvested: true,
    growth_level: 'germination',
  },
  {
    id: '2',
    imageURL: 'https://picsum.photos/100/100',
    name: '멋쟁이감자',
    planted_at: '2023-10-21T23:22:02.385081+09:00',
    harvested_at: null,
    type: 'potato',
    harvested: false,
    growth_level: 'growth',
  },
  {
    id: '3',
    imageURL: 'https://picsum.photos/100/100',
    name: '볼빨간딸기',
    planted_at: '2023-10-22T23:22:02.385081+09:00',
    harvested_at: '2023-11-02T23:22:02.385081+09:00',
    type: 'strawberry',
    harvested: true,
    growth_level: 'harvest',
  },
  {
    id: '4',
    imageURL: 'https://picsum.photos/100/100',
    name: '왕옥수수',
    planted_at: '2023-10-19T23:22:02.385081+09:00',
    harvested_at: null,
    type: 'corn',
    harvested: false,
    growth_level: 'growth',
  },
  {
    id: '5',
    imageURL: 'https://picsum.photos/100/100',
    name: '킹옥수수',
    planted_at: '2023-10-20T23:22:02.385081+09:00',
    harvested_at: null,
    type: 'corn',
    harvested: false,
    growth_level: 'growth',
  },
  {
    id: '6',
    imageURL: 'https://picsum.photos/100/100',
    name: '퀸수수',
    planted_at: '2023-10-22T23:22:02.385081+09:00',
    harvested_at: '2023-11-04T23:22:02.385081+09:00',
    type: 'corn',
    harvested: true,
    growth_level: 'growth',
  },
  {
    id: '7',
    imageURL: 'https://picsum.photos/100/100',
    name: '옥수수공주',
    planted_at: '2023-10-21T23:22:02.385081+09:00',
    harvested_at: null,
    type: 'corn',
    harvested: false,
    growth_level: 'growth',
  },
];
