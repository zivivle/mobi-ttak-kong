import { Toggle } from '@/components'
import { LEVEL_DATA } from '@/constants/level.constants'
import Image from 'next/image'
import type { LevelCardProps } from './LevelCard.types'

export const LevelCard = ({ level }: LevelCardProps) => {
  return (
    <Toggle className="flex flex-col gap-[20px] p-[36px] items-center justify-center w-[224px] h-[320px] rounded-[20px] bg-primary-50 data-[state=on]:bg-primary-100 data-[state=on]:text-black hover:bg-primary-100 hover:text-black">
      <Image src={LEVEL_DATA[level].imageSrc} alt={`${level} 설명 카드`} width={570} height={570} />
      <div className="text-[20px] font-semibold">{level}</div>
      <div
        dangerouslySetInnerHTML={{ __html: LEVEL_DATA[level].description }}
        className="text-gray-500 text-[12px] font-normal"
      />
    </Toggle>
  )
}
