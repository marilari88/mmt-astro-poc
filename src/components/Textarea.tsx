import {clsx} from 'clsx'
import type {TextareaHTMLAttributes} from 'react'
import {forwardRef} from 'react'

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({className, ...props}, ref) {
  return (
    <textarea
      ref={ref}
      {...props}
      className={clsx(
        'w-full h-full p-6 text-lg text-neutral-1200 focus:outline-none resize-none',
        className,
      )}
    />
  )
})
