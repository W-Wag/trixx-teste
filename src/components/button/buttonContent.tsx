import { ButtonText } from "./styles"

interface ButtonContentProps {
   text: string,
   variant?: boolean,
}

export function ButtonContent({text, variant}: ButtonContentProps) {
    return (
        <ButtonText variant={variant}>{text}</ButtonText>
    )
}