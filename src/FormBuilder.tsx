import type { ReactNode } from 'react'

export interface FormBuilderProps {
  children?: ReactNode
  onSubmit?: (data: Record<string, unknown>) => void
}

export function FormBuilder({ children, onSubmit }: FormBuilderProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: Record<string, unknown> = {}
    formData.forEach((value, key) => {
      data[key] = value
    })
    onSubmit?.(data)
  }

  return <form onSubmit={handleSubmit}>{children}</form>
}
