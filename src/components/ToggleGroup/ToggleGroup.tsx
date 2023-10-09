'use client'

import * as TogglePrimitive from '@radix-ui/react-toggle'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import * as React from 'react'

import { cn } from '@/utils/shadcn.utils.ts'

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, type, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Root
      className={cn('flex flex-wrap gap-[10px]', className)}
      type={type}
      {...props}
      ref={ref}
    />
  )
})
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, value, ...props }, ref) => (
  <ToggleGroupPrimitive.Item
    ref={ref}
    value={value}
    className={cn(
      'aspect-square h-[44px] w-[149px] shadow-md rounded-[40px] bg-primary-100 focus:outline-none focus:bg-primary-300 focus:text-white focus:font-semibold hover:bg-primary-200 hover:text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    {...props}
  />
))

ToggleItem.displayName = TogglePrimitive.Root.displayName

export { ToggleGroup, ToggleItem }
