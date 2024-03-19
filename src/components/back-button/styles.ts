import styled from "styled-components/native";

export const BackButtonContainer = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.green};
    width: 50px;
    height: 50px;
    margin: 18px;
    border-radius: 100px;
`