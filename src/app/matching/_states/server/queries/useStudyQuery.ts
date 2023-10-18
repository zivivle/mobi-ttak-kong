import { QUERY_KEYS } from '@/constants'
import { StudyDataType } from '@/types'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

const fetcher = () => axios.get<StudyDataType[] | undefined>(QUERY_KEYS.getStudies).then(({ data }) => data)

export const useStudyQuery = (options?: UseQueryOptions<StudyDataType[] | undefined, AxiosError>) => {
  return useQuery<StudyDataType[] | undefined, AxiosError>([QUERY_KEYS.getStudies], fetcher, {
    ...options,
  })
}
