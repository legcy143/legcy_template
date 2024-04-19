"use client"
import { AppConfig } from '@/assets/AppConfig'
import { cn } from '@/lib/utils'
import React, { useRef } from 'react'
import { Button } from '../ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { LuBell, LuMenu, LuMoon, LuSun } from "react-icons/lu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SidebarList } from '@/assets/SidebarList'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useTheme } from 'next-themes'

export default function DashboardLayout({ children }: {
  children: React.ReactNode
}) {
  const { theme, setTheme } = useTheme();
  let closeSheetRef = useRef<any>(0)
  const router = useRouter();
  return (
    <main className='h-screen w-screen flex flex-col overflow-hidden '>
      {/* top nav  */}
      <nav className='shadow flex-shrink-0 h-[4.5rem] flex items-center justify-between px-3 md:px-5  border-b-2 dark:border-b-2'>
        <section className='flex items-center gap-2 md:gap-4'>
          <Sheet>
            <SheetTrigger asChild>
              <Button size={'icon'} variant={'link'} className=' flex md:hidden rounded-full'>
                <LuMenu size={30} />
              </Button>
            </SheetTrigger>
            <SheetContent className='p-0 max-w-60' side={'left'}>
              <Logo className={"px-3  border-b-2"} />
              <Sidebar className={"max-w-full bg-transparent"} onChangeRoute={() => {
                // console.log("hii there" ,closeSheetRef)
                closeSheetRef.current.click();
              }} />
              <SheetClose ref={closeSheetRef} />
            </SheetContent>
          </Sheet>
          <Logo onClick={() => {
            router.push("/")
          }} />
        </section>
        <section>
          {
            false ?
              <Button onClick={() => {
                router.push("/login")
              }}>Login</Button>
              :
              <section className='flex items-center gap-2'>
                <Button size={'icon'} variant={'outline'} className='rounded-full'>
                  <LuSun className="p-2 w-full h-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:hidden" onClick={() => { setTheme("dark") }} />
                  <LuMoon className="p-2 w-full h-full  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 hidden dark:block" onClick={() => { setTheme("light") }} />
                  <span className="sr-only">theme</span>
                </Button>
                <Button size={'icon'} variant={'outline'} className='rounded-full'>
                  <LuBell size={23} />
                </Button>
                {/* <Avatar>
                  <AvatarImage src={AppConfig.Logo_Mini} alt="profile" />
                  <AvatarFallback>Fai</AvatarFallback>
                </Avatar> */}
              </section>
          }
        </section>
      </nav>

      {/* side bar */}
      <section className='flex flex-shrink-0 h-[calc(100%-4.5rem)]'>
        <Sidebar className={'hidden md:flex shadow'} />
        <section className='flex-1 p-2 h-full  overflow-hidden overflow-y-scroll'>
          {children}
        </section>
      </section>
    </main>
  )
}

const Sidebar = ({ className, onChangeRoute, ...props }: any) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <nav
      className={cn('max-w-60 h-full bg-card flex flex-col w-full p-1 gap-1 border-r-2/0 dark:border-r-2', className)}
      {...props}>
      {
        SidebarList?.map((e, i) => {
          return (
            <div key={i}
              className={`w-full cursor-pointer flex gap-2 items-center p-2 px-3 opacity-80 rounded-md transition-all ${pathName == e.path ? 'bg-primary/20 opacity-100' : 'hover:bg-primary/10'}`}
              onClick={() => {
                router.push(e.path);
                {
                  onChangeRoute &&
                    onChangeRoute()
                }
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

const Logo = ({ className, ...props }: any) => {
  return (
    <div className={cn('h-full max-h-32 flex items-center gap-2 cursor-pointer', className)} {...props}>
      <img src={AppConfig.Logo_Mini} className='w-12 aspect-square object-contain' />
      <div className='flex flex-col'>
        <p className='font-bold text-2xl leading-7'>{AppConfig.appName}</p>
        <span className='capitalize font-medium text-xs opacity-70'>{AppConfig.Label}</span>
      </div>
    </div>
  )
}