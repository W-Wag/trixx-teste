import * as Styled  from "./styles"

interface InputContentProps {
    placeholderText?: string;
}

export function InputControl({placeholderText}: InputContentProps) {
    return (
        <Styled.InputControl placeholder={placeholderText} />
    )
}