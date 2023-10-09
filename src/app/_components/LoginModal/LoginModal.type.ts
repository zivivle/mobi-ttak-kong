import { SetStateAction } from 'jotai'
import { Dispatch } from 'react'

export interface LoginModalPageProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}
