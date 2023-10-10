import { StudyDataType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useAppliedStudies = () => {
  return useQuery({
    queryKey: ['appliedStudies'],
    queryFn: async () => {
      const { data } = await axios.get('/api/getUserAppliedStudies')
      return data as StudyDataType[]
    },
  })
}
