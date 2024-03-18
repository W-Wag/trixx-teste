import { ReactNode } from "react";
import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "../themes/default";

interface ThemeProps {
    children: ReactNode
}

export function Theme({children}: ThemeProps) {
    return (
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    )
}