import styled from "styled-components/native";


export const Input = styled.View`
    background-color: white;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 90%;
    gap: 8px;
    border-radius: 6px;
    padding: 8px;
    margin-top: 12px;
    margin-bottom: 12px;
    border: 2px solid ${props => props.theme.colors.green};

`

export const InputControl = styled.TextInput`
    background-color: white;
    width: 90%;
`