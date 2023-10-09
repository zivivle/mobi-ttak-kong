import { UserDataType } from '.'

export interface StudyDataType {
  id: string
  field: string
  detailField: string
  title: string
  content: string
  minMemberCount: number
  nowMemberCount: number
  level: string
  isInPerson: boolean
  location: string
  isClosed?: boolean
  isAppliedMember?: UserDataType[]
  isMember?: UserDataType[]
}
