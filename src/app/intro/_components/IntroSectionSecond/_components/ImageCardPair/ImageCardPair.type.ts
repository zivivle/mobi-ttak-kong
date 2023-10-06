import { StaticImageData } from 'next/image'
import { InfoDataType } from './../../introSectionSecond.type'

export interface ImageCardPairProps {
  imageSrc: StaticImageData
  introInfo: InfoDataType
  imageOnLeft: boolean
}
