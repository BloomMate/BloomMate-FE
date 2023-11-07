export const QUESTION_DETAIL_DUMMY_DATA: {
  question: {
    id: string;
    created_at: string;
    question_title: string;
    question_content: string;
    is_answered: boolean;
  };
  comment?: {
    id: string;
    created_at: string;
    comment_content: string;
  };
}[] = [
  {
    question: {
      id: '1',
      created_at: '2023-10-26T23:22:02.385081+09:00',
      question_title: '틔운에서 판매하는 옥수수의 품종은 무엇인가요?',
      question_content:
        '저번주에 새롭게 옥수수 씨앗을 구매했는데요, 아티클을 보니까 옥수수 품종이 엄청 다양하더라구여.틔운에서 판매하는 옥수수의 품종은 무엇인가요? 품번은 TIIUN342CORN입니다!',
      is_answered: true,
    },
    comment: {
      id: '1',
      created_at: '2023-10-30T23:22:02.385081+09:00',
      comment_content:
        '안녕하세요. BloomMate입니다. LG 틔운에서 판매하는 옥수수 씨앗의 품종에 대해 문의주셨는데요, 고객님께서 구매하신 씨앗 품번을 토대로 확인한 결과‘찰옥수수’로 확인되었습니다.LG 스마트스토어에서 찰옥수수 외에도 초당옥수수 등 다른 품종도 판매하고 있으니관심 있으시다면 다음 반려식물로는 다른 품종의 옥수수도 구매해보세요!감사합니다.',
    },
  },
  {
    question: {
      id: '2',
      created_at: '2023-10-22T23:22:02.385081+09:00',
      question_title: '비가 왔는데 물을 제가 또 줘야 하나요?',
      question_content:
        '현재 틔운을 사용하고 있는 지역이 며칠내내 비가 많이 내렸습니다.이런 상황에서도 제가 따로 주말에 방문해서 물을 줘야 할까요?',
      is_answered: false,
    },
  },
  {
    question: {
      id: '3',
      created_at: '2023-10-10T23:22:02.385081+09:00',
      question_title: 'AI 식물진단 결과에서…',
      question_content:
        '제가 키우고 있는 딸기 상태가 이상해서 AI 진단을 사용해봤더니 병이 있다고 나왔어요~… 모종을 뽑고 새로 키우라고 나오는데…. 잎이 이상하지 않았던 옆 딸기들도 다 뽑아야 할까요? 제가 초보라 ^^; 잘 몰라서 여쭙니다 ^^',
      is_answered: false,
    },
  },
  {
    question: {
      id: '4',
      created_at: '2023-11-03T23:22:02.385081+09:00',
      question_title: '감자 북주기가 뭔가요?',
      question_content:
        '제 감자가 북주기를 해달라고 하는데 북주기는 뭔가요? 왜 해야 하는 건가요? 감자를 처음 키워봐서 그런지 모르는 게 많네요.. 북주기를 어떻게 하는지 주의사항 좀 알려주세요!!!',
      is_answered: true,
    },
    comment: {
      id: '4',
      created_at: '2023-11-06T23:22:02.385081+09:00',
      comment_content:
        '안녕하세요. BloomMate입니다.북주기는 감자 줄기 밑동에 흙을 모아주는 작업을 말해요.북주기를 하면 땅속에서 자라고 있는 감자의 노출을 막아 알이 굵고 건전해지기 때문에품질 좋은 씨감자를 생산할 수 있어요.북을 주지 않거나 너무 얕게 주면 감자가 땅 위로 드러나 다시 싹이 나거나 표피에 클로로필이 형성돼 녹색으로 변해요.폴리에틸렌(PE) 필름을 덮어 가꾸기(멀칭재배) 할 경우에도 감자 구멍을 고랑의 흙으로 메워주는 북주기를 하면 효과를 볼 수 있어요!북주기는 보통 1∼2회 시행하고 꽃이 피기 이전에 끝내도록 해야 합니다. 1차 북주기는 씨감자를 심고 40∼50일 뒤 싹이 10cm 정도 자랐을 때 실시하고 2차는 1차 북주기 후 15∼20일 지나서 한다. 이때  북주기 두께는 1·2차 합쳐서 15cm 정도가 바람직해요!BloomMate는 당신의 재밌는 식집사 생활을 도와드릴게요.감사합니다!',
    },
  },
];
