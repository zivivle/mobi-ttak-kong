import { StudyDataType } from '@/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

export const useAppliedStudies = () => {
  const [loadedData, setloadedData] = useState<StudyDataType[] | undefined>()

  useQuery({
    queryKey: ['appliedStudies'],
    queryFn: async () => {
      const { data } = await axios.get('/api/getUserAppliedStudies')
      return data
    },
    onSuccess: (data) => {
      setloadedData(data)
      console.log('useStudies 데이터 전송 성공!', loadedData)
    },
    onError: (error: Error) => {
      console.log('useStudies 데이터 전송 실패!', error.message)
    },
  })
  return loadedData
}
