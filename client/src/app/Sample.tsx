"use client"

import React from 'react'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTheme } from 'next-themes';
import { LuMoon, LuSun } from 'react-icons/lu';

export default function Sample() {
    const { setTheme } = useTheme()
  return (
   <main className='flex flex-wrap gap-10 p-10 items-center justify-center'>
    <p className='flex-0 w-full text-center capitalize font-bold text-3xl'>samples Nextjs + shadcn ui</p>
    
      <Button size={'icon'} variant={'outline'} className='rounded-full'>
        <LuSun className="p-2 w-full h-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:hidden" onClick={() => { setTheme("dark") }} />
        <LuMoon className="p-2 w-full h-full  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hidden dark:block" onClick={() => { setTheme("light") }} />
        <span className="sr-only">theme</span>
      </Button>

      <Input className='max-w-[20rem]' placeholder='email'/>
      <Button>click me</Button>
      <Badge>badge</Badge>
   </main>
  )
}
