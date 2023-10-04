export type SiteConfig = typeof sectionFirstConfig
import logo from '../../public/image/testlogo.png'

export const sectionFirstConfig = {
  description: [
    {
      image: logo,
      description1: `“내가 원하는`,
      description2: `스터디부터 보고 싶어요.”`,
      info: '23살 대학생 김OO',
    },
    {
      image: logo,
      description1: `“저와 딱맞는 스터디원를 `,
      description2: `쉽게 찾기가 어려워요.”`,
      info: '30살 직장인 지OO',
    },
    {
      image: logo,
      description1: `“취업 준비를 같이 할 수준의`,
      description2: `파트너들을 찾기 어려워요."`,
      info: '26살 취준생 이OO',
    },
  ],
}
