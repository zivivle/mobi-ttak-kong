import { Button } from '@/components'
import type { NextStepButtonProps } from './NextStepButton.types'

export const NextStepButton = ({ onClick, disabled = false }: NextStepButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`flex justify-between w-[130px] h-[50px] pl-[24px] rounded-[60px] ${
        disabled && 'bg-gray-500 pointer-events-none'
      }`}
    >
      다음 단계로 <span className="material-icons-outlined">navigate_next</span>
    </Button>
  )
}
