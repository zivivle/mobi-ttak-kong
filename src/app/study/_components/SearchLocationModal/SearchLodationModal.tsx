'use client'

import DaumPostcode from 'react-daum-postcode'
import { AddressData, SearchLodationModalProps } from '..'

export const SearchLodationModal = ({ setAddress, setAddressModalOpen }: SearchLodationModalProps) => {
  const postCodeStyle = {
    width: '400px',
  }
  const handleAddress = (data: AddressData) => {
    const fullAdress = data.sido + ' ' + data.sigungu + ' ' + data.bname
    setAddress(fullAdress)
    setAddressModalOpen(false)
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md w-[500px] h-[500px] z-50">
        <div className="absolute top-2 right-2 cursor-pointer">
          <span
            onClick={() => {
              setAddressModalOpen(false)
            }}
            className="material-icons-outlined cursor-pointer"
          >
            close
          </span>
        </div>
        <DaumPostcode style={postCodeStyle} onComplete={handleAddress} autoClose={false} />
      </div>
    </div>
  )
}
