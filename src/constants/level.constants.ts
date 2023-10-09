import type { LevelDataProps } from '@/types'

export const LEVEL_DATA: LevelDataProps = {
  누구나: {
    imageSrc: '/image/emoji-smile.png',
    description: '레벨 상관없이<br />누구나<br />환영해요!',
  },
  초급: {
    imageSrc: '/image/emoji-bbiyak.png',
    description: '이 분야의 스터디가<br/>처음이신 분들도<br/>환영이에요!',
  },
  중급: {
    imageSrc: '/image/emoji-nerd.png',
    description: '어느정도 알고있어서<br/>고수가 되기 위해 모인 분들을<br/>환영해요!',
  },
  고급: {
    imageSrc: '/image/emoji-diamond.png',
    description: '심도 있는 지식 공유가<br/>가능하신 분들을<br/>환영해요!',
  },
}
