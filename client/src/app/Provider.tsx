"use client"
import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import {FullScreenLoading} from '@/components/ui/Loading'
import { Toaster } from '@/components/ui/sonner'

export default function Provider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider {...props}>
            <Toaster/>
            {/* {isLoading && <FullScreenLoading/>} */}
            {children}
        </NextThemesProvider>
    )
}

