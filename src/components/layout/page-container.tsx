import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export interface PageContainerProps {
  children: ReactNode
  className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className="content-wrapper">
      <div className={cn('content', className)}>{children}</div>
    </div>
  )
}
