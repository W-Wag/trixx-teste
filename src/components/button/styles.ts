import styled from "styled-components/native"

interface ButtonProps {
    variant?: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
    align-self: center;
    background-color: ${props => props.variant ? props.theme.colors.white : props.theme.colors.green};
    border: 2px solid ${props => props.variant && props.theme.colors.green};
    width:  80%;
    padding: 12px;
    border-radius: 20px;
    margin: 10px 0;

`

export const ButtonText = styled.Text<ButtonProps>`
    color: ${props => props.variant ? props.theme.colors.green : props.theme.colors.white};
    text-align: center;
`