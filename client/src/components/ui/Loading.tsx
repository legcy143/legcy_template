"use client"
import { cn } from '@/lib/utils'
import React, { useEffect } from 'react'

export function FullScreenLoading({className}:{
  className:string
}) {
    useEffect(() => {
        if(typeof window !== undefined){
            document.body.style.overflow = 'hidden'
        }
        return () => {
          document.body.style.overflow = 'auto'
      }
    }, [])
    
  return (
    <div
        className={cn("flex flex-col items-center justify-center fixed top-0 right-0 w-[100vw] h-[100vh] backdrop-blur-sm z-50",className)}>
        <span className="spinner-border h-16 w-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin" />
    </div>
  )
}
export function AbsoluteLoading({className , refrence}:{
  className:string,
  refrence:any
}) {
    useEffect(() => {
        if(typeof window !== undefined && refrence?.current?.style?.overflow){
          refrence.current.style.overflow = 'hidden'
        }
        return () => {
          if(refrence?.current?.style?.overflow){
            refrence.current.style.overflow = 'auto'
          }
      }
    }, [])
    
  return (
    <div
        className={cn("flex flex-col items-center justify-center absolute top-0 right-0 w-full h-full backdrop-blur-sm z-50",className)}>
        <span className="spinner-border h-16 w-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin" />
    </div>
  )
}
export function MiniLoader({className}:{
  className:string
}) {
  return (
    <div
        className={cn("flex flex-col items-center relative justify-center w-full h-full backdrop-blur-sm z-20",className)}>
        <span className="spinner-border h-16 w-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin" />
    </div>
  )
}
