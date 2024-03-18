import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import * as Styled from './styles'

export default function Order() {
    return (
        <Styled.OrderIcon>
            <Feather name="file-text" size={70} />
        </Styled.OrderIcon>
    )
}