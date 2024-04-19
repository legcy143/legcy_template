import { cn } from '@/lib/utils';
import React from 'react'
import { TbDatabaseExclamation } from "react-icons/tb";

export default function NoDataFound({title = "data" , className}:{
    title?:string,
    className?:string
}) {
  return (
    <div className={cn('p-5 md:p-10 rounded  w-full flex flex-col items-center justify-center capitalize font-bold gap-5' , className)}>
        <TbDatabaseExclamation  size={50}/>
        <p>no {title} found</p>
    </div>
  )
}
