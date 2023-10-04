import Image from 'next/image'
import logo from '../../../public/image/testlogo.png'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="fixed top-0 w-full h-[auto] bg-blue-500 text-white flex justify-between pl-10 pr-14 py-2">
      <div className="flex flex-row gap-2">
        <Image src={logo} alt="딱콩로고" width={40} height={30} />
        <div className="grid items-center">Header</div>
      </div>
      <div className="flex flex-row">
        <div className="grid items-center">로그인</div>
      </div>
    </div>
  )
}
