import Image from 'next/image'
import type { InfoType } from './infoCard.types'

export const InfoCard = ({ introInfo }: { introInfo: InfoType }) => {
  return (
    <div className="mt-[70px] mb-[80px] p-5 bg-white flex flex-col justify-center items-center w-[282px] rounded-[20px]">
      <Image src={introInfo.image} alt="profileImage" width={100} height={100} className="mt-10 mb-8" />
      <div className="mb-5 flex flex-col justify-center items-center text-[18px] ">
        <p className="text-center" dangerouslySetInnerHTML={{ __html: introInfo.description }} />
      </div>
      <div className="mt-4 text-[12px] text-primary-gray939">{introInfo.info}</div>
    </div>
  )
}
