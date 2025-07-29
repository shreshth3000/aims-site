import React from 'react'
import { cn } from '@/lib/utils'

// Define the types for the component's props
interface BlobProps {
  className?: string;
}

function Blob({ className }: BlobProps) {
  return (
    <div className={cn(
        // Default styles: a large, blurry, circular shape
        "absolute rounded-full blur-3xl -z-10", 
        className
      )}
    />
  )
}

export default Blob