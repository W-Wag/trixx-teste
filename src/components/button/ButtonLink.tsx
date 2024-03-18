import { Link } from "expo-router";
import { Button } from "./styles";
import { ReactNode } from "react";

interface ButtonLinkProps {
    location: string
    children: ReactNode
    variant?: boolean
}

export function ButtonLink({variant, location, children}: ButtonLinkProps) {
    return (
        <Link href={location} asChild>
            <Button variant={variant} activeOpacity={.7}>
            {children}
            </Button>
        </Link>
    )
}