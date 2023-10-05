export type SectionFirstConstants = typeof sectionFirstConstants
import logo1 from '/public/image/emoji-thinking.png'
import logo2 from '/public/image/emoji-sad.png'
import logo3 from '/public/image/emoji-dizzy.png'

export const sectionFirstConstants = {
  description: [
    {
      id: 1,
      image: logo1,
      description1: `“내가 원하는 `,
      description2: `스터디부터 보고 싶어요.”`,
      info: '23살 대학생 김OO',
    },
    {
      id: 2,
      image: logo2,
      description1: `“저와 딱맞는 스터디원를 `,
      description2: `쉽게 찾기가 어려워요.”`,
      info: '30살 직장인 지OO',
    },
    {
      id: 3,
      image: logo3,
      description1: `“취업 준비를 같이 할 수준의`,
      description2: `파트너들을 찾기 어려워요."`,
      info: '26살 취준생 이OO',
    },
  ],
}
