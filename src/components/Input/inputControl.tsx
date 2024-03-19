import { KeyboardTypeOptions } from "react-native";
import * as Styled  from "./styles"

interface InputContentProps {
    placeholderText?: string;
    type?: KeyboardTypeOptions
}

export function InputControl({placeholderText, type}: InputContentProps) {
    return (
        <Styled.InputControl keyboardType={type} placeholder={placeholderText} />
    )
}