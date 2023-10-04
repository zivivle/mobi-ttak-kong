import type { PropsWithChildren } from 'react'
import type { InnerSectionProps } from './InnerSection.types'

export const InnerSection = ({ subtitle, description, children }: PropsWithChildren<InnerSectionProps>) => {
  return (
    <div>
      <div className="mb-[18px]">
        <h2 className="text-[20px] font-semibold">{subtitle}</h2>
        {description && <h3 className="text-[14px] text-gray-500 mt-[4px]">{description}</h3>}
      </div>
      <div className="mt-[24px]">{children}</div>
    </div>
  )
}
