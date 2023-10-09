export interface CounterProps {
  /**
   * tailwind theme 가능 / RGB 가능
   */
  bgColor?: string
  minCount?: number
  maxCount?: number
  count: number
  onChange: (newCount: number) => void
}
