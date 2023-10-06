import { CarouselButtonProps } from '.'

export const CarouselButton = ({ numButtons, onCarouselButtonClick }: CarouselButtonProps) => {
  return (
    <div className="flex flex-col space-y-5">
      {Array.from({ length: numButtons }).map((_, index) => (
        <button
          onClick={() => {
            onCarouselButtonClick(index - 1)
          }}
          key={index}
          className="w-4 h-4 rounded-full bg-primary-200 hover:bg-primary-300"
        />
      ))}
    </div>
  )
}
