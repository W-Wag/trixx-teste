import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding-top: 40px;
`

export const FormContainer = styled.View`
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    width: 90%;
    height: 60%;
`

export const TextForm = styled.Text`
    color: ${props => props.theme.colors.green};
    font-weight: bold;
    padding-left: 16px;
`

export const ForgotPasswordButton = styled.TouchableOpacity`
    align-items: center;
`

export const ForgotPasswordText = styled.Text`
    color: ${props => props.theme.colors.gray};
    text-decoration: underline dotted;
    font-weight: 800;
`
