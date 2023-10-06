'use client'
import { Button } from '@/components'
import { loginConstants } from '@/constants/login.constants'

import Image from 'next/image'

export default function LoginModalPage() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-[40px] shadow-md ">
        <div className="flex justify-end">
          <Image
            src={loginConstants.image.mainImage}
            alt="beanIcon"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-center items-center gap-1">
          <Image src={loginConstants.image.mainImage} alt="beanIcon" width={35} height={35} />
          <Image src={loginConstants.image.mainLogo} alt="mainLogo" width={45} height={45} />
        </div>
        <div className="flex justify-center items-center mt-6 text-primary-black font-bold text-[18px]">
          {loginConstants.description}
        </div>
        <div className="flex justify-center items-center">
          <Image src={loginConstants.image.subImage} alt="descriptionImage" width={160} className="m-5" />
        </div>
        <div className="flex justify-center items-center m-5">
          <Button variant={'tertiary'} className="w-[300px] h-[50px] rounded-[20px] text-primary-black">
            구글 회원가입
          </Button>
        </div>
      </div>
    </div>
  )
}
