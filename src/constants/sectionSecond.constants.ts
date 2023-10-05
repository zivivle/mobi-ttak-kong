export type SectionSecondConstants = typeof sectionSecondConstants
import screenshot1 from '/public/image/intro-screen1.png'
import screenshot2 from '/public/image/intro-screen2.png'
import screenshot3 from '/public/image/intro-screen3.png'

export const sectionSecondConstants = {
  description: [
    {
      id: 1,
      image: screenshot1,
      step: 'Step 1.',
      description1: '원하는 스터디 분야를 선택해주세요!',
      info: '상세 분야까지 선택하면 스터디 매칭 확률이 올라갑니다.',
    },

    {
      id: 2,
      image: screenshot3,
      step: 'Step 3.',
      description1: '마지막으로, 원하는 스터디 레벨을 선택해주세요!',
      info: '나의 수준에 맞게 선택해 나와 딱 맞는 스터디원을 만나보세요.',
    },
    {
      id: 3,
      image: screenshot2,
      step: 'Step 2.',
      description1: '대면 / 비대면 여부와 희망 스터디 장소를 선택해주세요!',
      info: '집에서 가까운 장소 혹은 직장에서 가까운 장소를 선택해보세요.',
    },
  ],
}
