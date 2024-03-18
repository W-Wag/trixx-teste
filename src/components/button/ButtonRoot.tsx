import { ReactNode } from "react";
import { Button } from "./styles";

interface ButtonRootProps {
    children: ReactNode
    variant?: boolean
}

export function ButtonRoot({children, variant}: ButtonRootProps) {
    return (
        <Button variant={variant} activeOpacity={.7}>
        {children}
        </Button>
    )
}