import { StaticImageData } from 'next/image'

export interface SelectCardProps {
  id: number
  image: StaticImageData
  title: string
  description: string
}
