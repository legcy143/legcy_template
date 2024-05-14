"use client"
import { cn } from '@/lib/utils'
import React, { useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { LuArrowLeft } from 'react-icons/lu'
import { Button } from '../ui/button'


export interface SidebarPathListType {
  icon: any;
  label: string;
  path: string;
}

export default function OptionalSidebarLayout({ children, PathList }: {
  children: React.ReactNode
  PathList: SidebarPathListType[]
}) {
  const router = useRouter();
  return (
    <main className='h-screen w-screen flex flex-col overflow-hidden '>
      {/* top nav  */}
      <nav className='shadow flex-shrink-0 h-[4rem] flex items-center justify-between px-3 md:px-5  border-b-2/00 dark:border-b-2'>
        <section className='flex items-center gap-2 md:gap-4'>
          <Button variant={'outline'} size={'icon'} onClick={() => {
            router.push("/");
          }}>
            <LuArrowLeft />
          </Button>
        </section>
        <section>
          {/* rigth */}
        </section>
      </nav>

      {/* side bar */}
      <section className='flex-shrink-0 h-[calc(100%-4rem)] block sm:flex'>
        <Sidebar className={'hidden md:flex shadow'} PathList={PathList} />
        <section className='flex-1 w-full  p-2 h-full  overflow-hidden overflow-y-scroll'>
          {children}
        </section>
      </section>
    </main>
  )
}

const Sidebar = ({ className, PathList, ...props }: any) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <nav
      className={cn('max-w-60 h-full bg-card flex flex-col w-full p-1 gap-1 border-r-2/0 dark:border-r-2', className)}
      {...props}>
      {
        PathList?.map((e: SidebarPathListType, i: number) => {
          return (
            <div key={i}
              className={`w-full cursor-pointer flex gap-2 items-center p-2 px-3 opacity-80 rounded-md transition-all ${pathName == e.path ? 'bg-primary/20 opacity-100' : 'hover:bg-primary/10'}`}
              onClick={() => {
                router.push(e.path);
              }}>
              <span>{e.icon}</span>
              <p className='font-semibold capitalize'>{e.label}</p>
            </div>
          )
        })
      }
      {/* //footer */}
      <section className='mt-auto '>
        <p className='text-center font-semibold text-xs capitalize opacity-70'>
          version : 1.0.0
        </p>
      </section>
    </nav>
  )
}