import Image from 'next/image'
import beanIcon from '/public/image/icon-beans.png'
import { matchingLoadingConstants } from '@/constants'

export const NoMatchingCard = () => {
  return (
    <div className="w-[500px] bg-primary-50 rounded-[20px] p-[43px] mt-[30px] ">
      <div className="flex flex-col justify-center items-center">
        <Image src={beanIcon} alt="beanIcon" width={120} height={120} />
        <div className="mt-[20px] ml-[20px] text-[24px] font-bold">{matchingLoadingConstants.nodataDescription}</div>
      </div>
    </div>
  )
}
