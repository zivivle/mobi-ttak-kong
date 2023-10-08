import Image from 'next/image'
import beanIcon from '/public/image/icon-beans.png'

export const StudyAppliedEmptyDataCard = () => {
  return (
    <div className="w-[400px] bg-primary-50 rounded-[20px] p-[43px] mt-[30px]">
      <Image src={beanIcon} alt="콩아이콘" />
    </div>
  )
}
