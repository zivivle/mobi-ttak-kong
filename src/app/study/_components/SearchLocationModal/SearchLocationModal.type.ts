import { Dispatch, SetStateAction } from 'react'

export interface SearchLodationModalProps {
  setAddress: Dispatch<SetStateAction<string>>
  setAddressModalOpen: Dispatch<SetStateAction<boolean>>
}
