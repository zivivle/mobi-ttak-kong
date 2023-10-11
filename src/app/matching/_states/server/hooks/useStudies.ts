import { StudyDataType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useStudies = () => {
  return useQuery({
    queryKey: ['studies'],
    queryFn: async () => {
      const { data } = await axios.get<StudyDataType[]>('/api/getStudies')
      return data
    },
    onSuccess: (data) => {
      console.log('Data loaded successfully!', data)
    },
    onError: (error) => {
      console.error('Error fetching studies:', error)
    },
  })
}
