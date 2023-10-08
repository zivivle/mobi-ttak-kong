'use client'

import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import { StudyAppliedDetailProps, StudyDetailInfoCard } from '.'

export default function StudyAppliedDetailPage(props: StudyAppliedDetailProps) {
  const searchParams: ReadonlyURLSearchParams | null = useSearchParams()
  const getId = searchParams ? searchParams.get('appliedDataId') : null
  console.log('getId:', typeof getId)

  return (
    <div className="h-auto flex justify-center items-center  bg-primary-50">
      <div
        className="
         h-auto flex flex-col px-[100px]"
      >
        <StudyDetailInfoCard studyDataId={props.params.postId} studyDetailDataId={Number(getId)} />
      </div>
    </div>
  )
}
