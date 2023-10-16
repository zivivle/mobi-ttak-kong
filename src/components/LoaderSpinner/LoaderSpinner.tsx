import Image from 'next/image'
import spinner from '/public/image/matching-loading.gif'

export const LoaderSpinner = () => {
  return (
    <div>
      <Image src={spinner} alt="Loader Spinner" width={150} height={150} />
    </div>
  )
}
