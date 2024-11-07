import { InputHTMLAttributes } from 'react'
import { cn } from '$/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const inputVariants = cva('w-full outline-none transition-colors', {
  variants: {
    variant: {
      default: 'rounded-3xl py-1 px-4 text-black font-medium',
      range: 'accent-maxpurple-500',
      radio: 'accent-maxpurple-500 w-auto'
    },
    inputSize: {
      default: 'h-10',
      sm: 'h-8',
      lg: 'h-12'
    },
    state: {
      default: '',
      error: 'border-red-500 focus:border-red-500',
      success: 'border-green-500 focus:border-green-500'
    }
  },
  defaultVariants: {
    variant: 'default',
    inputSize: 'default',
    state: 'default'
  }
})

const inputContainerVariants = cva('flex flex-col gap-2', {
  variants: {
    align: {
      default: '',
      center: 'items-center',
      start: 'items-start',
      end: 'items-end'
    }
  },
  defaultVariants: {
    align: 'default'
  }
})

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Omit<VariantProps<typeof inputVariants>, 'size'> {
  label?: string
  error?: string
  containerClassName?: string
  labelClassName?: string
  align?: VariantProps<typeof inputContainerVariants>['align']
  inputSize?: VariantProps<typeof inputVariants>['inputSize']
}

export default function Input({
  label,
  error,
  className,
  containerClassName,
  labelClassName,
  id,
  type = 'text',
  variant,
  inputSize,
  state,
  align,
  ...props
}: InputProps) {
  const inputVariant = variant || (type === 'range' ? 'range' : type === 'radio' ? 'radio' : 'default')

  return (
    <div className={cn(inputContainerVariants({ align }), containerClassName)}>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            'text-white',
            type === 'radio' ? 'cursor-pointer' : 'text-center',
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={cn(
          inputVariants({
            variant: inputVariant,
            inputSize,
            state: error ? 'error' : state
          }),
          className
        )}
        {...props}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}
