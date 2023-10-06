export type LevelProps = '누구나' | '초급' | '중급' | '고급'

export type LevelDataProps = {
  [key in LevelProps]: {
    imageSrc: string
    description: string
  }
}
