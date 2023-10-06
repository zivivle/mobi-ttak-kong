import { StaticImageData } from 'next/image'

export interface StudyCreatedCardProps {
  id?: string
  title: string
  label: string
  content: string
  nowMemberCount: number
  minMemberCount: number
  levelImage: StaticImageData
  level: string
  tag: string
  isClosing: boolean
}
