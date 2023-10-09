import type { CounterProps } from './Counter.types'

export const Counter = ({ bgColor = 'primary-100', count, onChange, minCount, maxCount }: CounterProps) => {
  const setBgColor = 'bg-' + bgColor

  const onClickUpAndDown = (type: 'up' | 'down') => {
    if (type === 'up') {
      onChange(count + 1)
    }
    if (type === 'down') {
      onChange(count - 1)
    }
  }

  return (
    <section className="flex gap-[10px] items-center">
      <span
        className={`flex items-center justify-center p-[16px] w-[20px] h-[20px] rounded-full ${setBgColor} cursor-pointer ${
          count === minCount && 'bg-primary-gray939 pointer-events-none'
        }`}
        onClick={() => onClickUpAndDown('down')}
      >
        <span className="material-icons-outlined">chevron_left</span>
      </span>
      <span>{count}</span>
      <span
        className={`flex items-center justify-center p-[16px] w-[20px] h-[20px] rounded-full ${setBgColor} cursor-pointer ${
          count === maxCount && 'bg-primary-gray939 pointer-events-none'
        }`}
        onClick={() => onClickUpAndDown('up')}
      >
        <span className="material-icons-outlined">navigate_next</span>
      </span>
    </section>
  )
}
