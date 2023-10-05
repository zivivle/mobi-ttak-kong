'use client'

import { SelectCard } from './_components/SelectCard/SelectCard'
import { mainConstants } from './constants/main.constants'

const MyStudy = () => {
  return (
    <>
      <div className="h-screen bg-primary-50 flex justify-center items-center gap-12">
        {mainConstants.description.map((info) => (
          <SelectCard mypageInfo={info} />
        ))}
      </div>
    </>
  )
}

export default MyStudy
