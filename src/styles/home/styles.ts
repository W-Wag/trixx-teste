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

export const EmailInput = styled.View`
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
export const FormInput = styled.TextInput`
    background-color: white;
    width: 90%;
`

export const ForgotPasswordButton = styled.TouchableOpacity`
    align-items: center;
`

export const ForgotPasswordText = styled.Text`
    color: ${props => props.theme.colors.gray};
    text-decoration: underline dotted;
    font-weight: 800;
`

interface LoginButtonProps {
    isSignIn?: boolean
}

export const FormButton = styled.TouchableOpacity<LoginButtonProps>`
    align-self: center;
    background-color: ${props => props.isSignIn ? props.theme.colors.green : props.theme.colors.white};
    border: 2px solid ${props => !props.isSignIn && props.theme.colors.green};
    width:  80%;
    padding: 12px;
    border-radius: 20px;
    margin: 10px 0;

`

export const SignInText = styled.Text`
    color: white;
    text-align: center;
`
export const SignUpText = styled.Text`
    color: ${props => props.theme.colors.green};
    text-align: center;
`

