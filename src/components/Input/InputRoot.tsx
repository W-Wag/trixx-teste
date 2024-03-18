import { ReactNode } from "react"
import * as Styled from './styles'

interface InputRootProps {
    children: ReactNode
}

export function InputRoot({children}: InputRootProps) {
    return (
        <Styled.Input>
           {children}
        </Styled.Input>
    )
}