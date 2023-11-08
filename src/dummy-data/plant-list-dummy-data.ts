export const PLANT_LIST_DUMMY_DATA: {
  id: string;
  plant_picture_url: string;
  plant_nickname: string;
  planted_at: string;
  harvested_at: string | null;
  is_harvested: boolean;
  growth_level: 'germination' | 'growth' | 'harvest';
}[] = [
  {
    id: '1',
    plant_picture_url: 'https://picsum.photos/121/121',
    plant_nickname: '토토로',
    planted_at: '2023-10-26T23:22:02.385081+09:00',
    harvested_at: '2023-10-30T23:22:02.385081+09:00',
    is_harvested: true,
    growth_level: 'harvest',
  },
  {
    id: '2',
    plant_picture_url: 'https://picsum.photos/122/122',
    plant_nickname: '멋쟁이감자',
    planted_at: '2023-09-21T23:22:02.385081+09:00',
    harvested_at: null,
    is_harvested: false,
    growth_level: 'growth',
  },
  {
    id: '3',
    plant_picture_url: 'https://picsum.photos/123/123',
    plant_nickname: '볼빨간딸기',
    planted_at: '2023-10-22T23:22:02.385081+09:00',
    harvested_at: '2023-11-02T23:22:02.385081+09:00',
    is_harvested: true,
    growth_level: 'harvest',
  },
  {
    id: '4',
    plant_picture_url: 'https://picsum.photos/124/124',
    plant_nickname: '왕옥수수',
    planted_at: '2023-08-10T23:22:02.385081+09:00',
    harvested_at: null,
    is_harvested: false,
    growth_level: 'harvest',
  },
  {
    id: '5',
    plant_picture_url: 'https://picsum.photos/125/125',
    plant_nickname: '화난토마토',
    planted_at: '2023-10-20T23:22:02.385081+09:00',
    harvested_at: null,
    is_harvested: false,
    growth_level: 'germination',
  },
  {
    id: '6',
    plant_picture_url: 'https://picsum.photos/126/126',
    plant_nickname: '퀸수수',
    planted_at: '2023-10-22T23:22:02.385081+09:00',
    harvested_at: '2023-11-04T23:22:02.385081+09:00',
    is_harvested: true,
    growth_level: 'harvest',
  },
  {
    id: '7',
    plant_picture_url: 'https://picsum.photos/127/127',
    plant_nickname: '딸기공주',
    planted_at: '2023-08-10T23:22:02.385081+09:00',
    harvested_at: null,
    is_harvested: false,
    growth_level: 'harvest',
  },
];
