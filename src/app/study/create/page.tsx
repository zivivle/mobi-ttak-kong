'use client'

import { useState } from 'react'
import { CompletePage, Step1Page, Step2Page, Step3Page, Step4Page } from '../_step'

const CreateStudyPage = () => {
  const [step, setStep] = useState(1)

  return (
    <div className="flex justify-center h-[100vh] pt-[97px] bg-primary-50">
      <div className="w-[1063px]">
        {step === 1 && <Step1Page nextStep={() => setStep(2)} />}
        {step === 2 && <Step2Page nextStep={() => setStep(3)} />}
        {step === 3 && <Step3Page nextStep={() => setStep(4)} />}
        {step === 4 && <Step4Page nextStep={() => setStep(5)} />}
        {step === 5 && <CompletePage type="create" />}
      </div>
    </div>
  )
}

export default CreateStudyPage
