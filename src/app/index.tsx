import * as Styled from '../styles/home/styles'
import { Logo } from '../components/logo'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import {Feather} from '@expo/vector-icons'

export default function Home() {
    return (
        <Styled.Container>
           <Logo />
            <Styled.FormContainer>
                <View>
                    <Styled.TextForm>Entre com a sua conta</Styled.TextForm>
                    <Styled.EmailInput>
                        <Feather name='mail' size={20} />
                        <Styled.FormInput placeholder="E-mail" />
                    </Styled.EmailInput>
                    <Styled.EmailInput>
                        <Feather name='lock' size={20} />
                        <Styled.FormInput placeholder='Senha' />
                    </Styled.EmailInput>
                    <Styled.ForgotPasswordButton activeOpacity={0.7}>
                        <Styled.ForgotPasswordText>Esqueceu sua senha?</Styled.ForgotPasswordText>
                    </Styled.ForgotPasswordButton>
                </View>

                <View>
                <Styled.FormButton isSignIn activeOpacity={.7}>
                    <Styled.SignInText>Entrar</Styled.SignInText>
                </Styled.FormButton>
                <Styled.FormButton activeOpacity={.7}>
                    <Styled.SignUpText>Criar Conta</Styled.SignUpText>
                </Styled.FormButton>
                </View>
            </Styled.FormContainer>

        </Styled.Container>
    )
}