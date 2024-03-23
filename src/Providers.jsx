"use client";

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Hotels from './components/cards/Hotels';

export function Providers({ Hotels }) {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                {<Hotels />}
                <h1 className='text-red-700' class='text-white'>this is children</h1>
            </NextThemesProvider>
        </NextUIProvider>
    )
}