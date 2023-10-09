import { ToggleItem } from '@/components'
import { LEVEL_DATA } from '@/constants/level.constants'
import Image from 'next/image'
import type { LevelCardProps } from './LevelCard.types'

export const LevelCard = ({ level }: LevelCardProps) => {
  return (
    <ToggleItem
      value={level}
      className="flex flex-col gap-[20px] p-[36px] items-center justify-center w-[224px] h-[320px] rounded-[20px] bg-primary-50 focus:bg-primary-100 focus:text-black hover:bg-primary-100 hover:text-black"
    >
      <Image src={LEVEL_DATA[level].imageSrc} alt={`${level} 설명 카드`} width={120} height={120} />
      <div className="text-[20px] font-semibold">{level}</div>
      <div
        dangerouslySetInnerHTML={{ __html: LEVEL_DATA[level].description }}
        className="text-gray-500 text-[12px] font-normal"
      />
    </ToggleItem>
  )
}
