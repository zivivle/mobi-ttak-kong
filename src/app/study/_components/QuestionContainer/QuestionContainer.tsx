import type { PropsWithChildren } from 'react'
import type { QuestionContainerProps } from './QuestionContainer.types'

export const QuestionContainer = ({ title, children }: PropsWithChildren<QuestionContainerProps>) => {
  return (
    <section className="w-full flex flex-col items-center">
      <h1 className="text-[18px] font-bold tracking-wide">{title}</h1>
      <div className="flex flex-col gap-[40px] bg-white mt-7 rounded-[40px] min-w-[1063px] max-w-[1063px] p-[54px]">
        {children}
      </div>
    </section>
  )
}
