export type MainConstants = typeof mainConstants
import mypageIconL from '/public/image/icon-beans.png'
import mypageIconR from '/public/image/icon-beans.png'

export const mainConstants = {
  description: [
    {
      id: 1,
      image: mypageIconL,
      title: '스터디 매칭 현황',
      description: '현재 나의 스터디 매칭 현황을 확인해보세요!',
    },
    {
      id: 2,
      image: mypageIconR,
      title: '스터디 만들러 가기',
      description: '나만의 커스텀 스터디 모임을 만들어봐요!',
    },
  ],
}
