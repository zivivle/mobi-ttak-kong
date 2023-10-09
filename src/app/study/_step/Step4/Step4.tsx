import { RadioGroup, RadioGroupItem } from '@/components'
import { useState } from 'react'
import { QuestionContainer, SearchLodationModal } from '../../_components'
import { InnerSection, NextStepButton } from '../_components'
import type { CreateStudyPageProps } from '../_types'

export const Step4Page = ({ nextStep }: CreateStudyPageProps) => {
  const [isInPerson, setInPerson] = useState<string | undefined>(undefined)
  const [address, setAddress] = useState('')

  const [addressModalOpen, setAddressModalOpen] = useState(false)

  const onClickIsInPerson = (isIn: string) => {
    setInPerson(isIn)
  }

  return (
    <QuestionContainer title="혹시 원하는 스터디 장소가 있나요?">
      <InnerSection subtitle="대면 / 비대면을 선택해주세요.">
        <RadioGroup defaultValue="true" className="flex gap-[30px]" onValueChange={onClickIsInPerson}>
          <div className="flex items-center space-x-2">
            <label htmlFor="true" className="cursor-pointer">
              대면 스터디
            </label>
            <RadioGroupItem value="true" id="true" />
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="false" className="cursor-pointer">
              비대면 스터디
            </label>
            <RadioGroupItem value="false" id="false" />
          </div>
        </RadioGroup>
      </InnerSection>
      <InnerSection subtitle="스터디 장소 지역을 검색해주세요.">
        <div>
          <input
            className="border-[1px] px-4 py-2 rounded-[20px] w-[193px] cursor-pointer shadow-md"
            value={address}
            readOnly
            onClick={() => setAddressModalOpen(true)}
            placeholder={' 👆🏻 이곳을 클릭해주세요'}
          />
          {addressModalOpen && (
            <SearchLodationModal setAddress={setAddress} setAddressModalOpen={setAddressModalOpen} />
          )}
        </div>
      </InnerSection>

      <div className="flex justify-end">
        <NextStepButton onClick={nextStep} disabled={!isInPerson || !address} />
      </div>
    </QuestionContainer>
  )
}
