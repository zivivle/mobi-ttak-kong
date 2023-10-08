'use client'

import { StudyAppliedDetailProps, StudyDetailInfoCard } from '.'

export default function StudyAppliedDetailPage(props: StudyAppliedDetailProps) {
  console.log(props.params.postId)

  return (
    <div className="h-auto flex justify-center items-center  bg-primary-50">
      <div
        className="
         h-auto flex flex-col px-[100px]"
      >
        <StudyDetailInfoCard studyDataId={props.params.postId} />
      </div>
    </div>
  )
}
