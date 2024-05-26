"use client"

import { PropsWithChildren, useState } from "react"
import { ThemeProvider } from "next-themes"

const Providers = ({ children }: PropsWithChildren) => {

    return (
        <ThemeProvider attribute="class" defaultTheme='light' enableSystem>
            {children}
        </ThemeProvider>
    )
}

export default Providers