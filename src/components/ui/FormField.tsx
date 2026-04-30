import { cn } from '@/lib/cn'
import type { ComponentPropsWithoutRef } from 'react'

interface FieldProps {
  label: string
  name: string
  error?: string[]
  required?: boolean
  hint?: string
  className?: string
}

type InputFieldProps = FieldProps & Omit<ComponentPropsWithoutRef<'input'>, 'name'>
type TextareaFieldProps = FieldProps & Omit<ComponentPropsWithoutRef<'textarea'>, 'name'>
type SelectFieldProps = FieldProps & Omit<ComponentPropsWithoutRef<'select'>, 'name'> & {
  options: { value: string; label: string }[]
  placeholder?: string
}

const inputBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-[border-color,box-shadow] focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_0_3px_rgb(34_211_238_/_0.15)] disabled:opacity-50 disabled:cursor-not-allowed'

export function InputField({ label, name, error, required, hint, className, ...props }: InputFieldProps) {
  const id = `field-${name}`
  const errId = `${id}-error`
  const hasError = error && error.length > 0

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-sm font-medium text-slate-800">
        {label}
        {required && <span className="ml-1 text-danger-500" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={name}
        required={required}
        aria-required={required}
        aria-invalid={hasError}
        aria-describedby={hasError ? errId : hint ? `${id}-hint` : undefined}
        className={cn(
          inputBase,
          hasError
            ? 'border-danger-500 focus:border-danger-500 focus:shadow-[0_0_0_3px_rgb(239_68_68_/_0.15)]'
            : 'border-slate-200'
        )}
        {...props}
      />
      {hint && !hasError && (
        <p id={`${id}-hint`} className="text-xs text-slate-500">{hint}</p>
      )}
      {hasError && (
        <p id={errId} role="alert" className="text-xs text-danger-500">
          {error[0]}
        </p>
      )}
    </div>
  )
}

export function TextareaField({ label, name, error, required, hint, className, ...props }: TextareaFieldProps) {
  const id = `field-${name}`
  const errId = `${id}-error`
  const hasError = error && error.length > 0

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-sm font-medium text-slate-800">
        {label}
        {required && <span className="ml-1 text-danger-500" aria-hidden="true">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        aria-required={required}
        aria-invalid={hasError}
        aria-describedby={hasError ? errId : hint ? `${id}-hint` : undefined}
        rows={4}
        className={cn(
          inputBase, 'resize-y min-h-[100px]',
          hasError
            ? 'border-danger-500 focus:border-danger-500'
            : 'border-slate-200'
        )}
        {...props}
      />
      {hint && !hasError && (
        <p id={`${id}-hint`} className="text-xs text-slate-500">{hint}</p>
      )}
      {hasError && (
        <p id={errId} role="alert" className="text-xs text-danger-500">
          {error[0]}
        </p>
      )}
    </div>
  )
}

export function SelectField({ label, name, error, required, hint, options, placeholder, className, ...props }: SelectFieldProps) {
  const id = `field-${name}`
  const errId = `${id}-error`
  const hasError = error && error.length > 0

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-sm font-medium text-slate-800">
        {label}
        {required && <span className="ml-1 text-danger-500" aria-hidden="true">*</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        aria-required={required}
        aria-invalid={hasError}
        aria-describedby={hasError ? errId : undefined}
        className={cn(
          inputBase, 'appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D\'http%3A//www.w3.org/2000/svg\'%20width%3D\'12\'%20height%3D\'8\'%20fill%3D\'none\'%3E%3Cpath%20d%3D\'M1%201l5%205%205-5\'%20stroke%3D\'%2394A3B8\'%20stroke-width%3D\'1.5\'%20stroke-linecap%3D\'round\'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_1rem_center] pr-10',
          hasError ? 'border-danger-500' : 'border-slate-200'
        )}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {hint && !hasError && (
        <p id={`${id}-hint`} className="text-xs text-slate-500">{hint}</p>
      )}
      {hasError && (
        <p id={errId} role="alert" className="text-xs text-danger-500">
          {error[0]}
        </p>
      )}
    </div>
  )
}

interface CheckboxFieldProps {
  label: string | React.ReactNode
  name: string
  error?: string[]
  required?: boolean
  className?: string
}

export function CheckboxField({ label, name, error, required, className }: CheckboxFieldProps) {
  const id = `field-${name}`
  const errId = `${id}-error`
  const hasError = error && error.length > 0

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          id={id}
          name={name}
          type="checkbox"
          value="on"
          required={required}
          aria-required={required}
          aria-invalid={hasError}
          aria-describedby={hasError ? errId : undefined}
          className="mt-0.5 h-5 w-5 min-w-[1.25rem] rounded border-slate-300 text-cyan-500 focus:ring-cyan-400 focus:ring-offset-1 cursor-pointer"
        />
        <span className="text-sm text-slate-700">{label}</span>
      </label>
      {hasError && (
        <p id={errId} role="alert" className="text-xs text-danger-500 ml-8">
          {error[0]}
        </p>
      )}
    </div>
  )
}
