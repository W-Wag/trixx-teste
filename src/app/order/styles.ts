import { TextInputMask } from "react-native-masked-text";
import styled from "styled-components/native";

export const OrderIcon = styled.View`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.yellow};
    width: 80px;
    height: 80px;
    border-radius: 100px;
`

export const OrderText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.theme.colors.green};
    padding: 24px;
`

export const TextAreaInput = styled.TextInput`
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

export const OrderDateTimeContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const OrderTimeInput = styled.View`
    display: flex;
    flex-direction: column;
    margin: 12px;
`
export const OrderTimeContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 8px;
`

export const OrderTimeText = styled.Text`
    color: ${props => props.theme.colors.green};
    font-weight: 600;
`

export const OrderInput = styled.TextInput`
    background-color: white;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 65px;
    border-radius: 6px;
    padding: 8px;
    margin-top: 12px;
    margin-bottom: 12px;
    border: 2px solid ${props => props.theme.colors.green};
    
`

export const DateInput = styled(TextInputMask)`
    background-color: white;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 140px;
    border-radius: 6px;
    padding: 8px;
    margin-top: 12px;
    margin-bottom: 12px;
    border: 2px solid ${props => props.theme.colors.green};
`