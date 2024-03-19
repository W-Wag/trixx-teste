import * as Styled from '../styles/home/styles'
import { Logo } from '../components/logo'
import { View } from 'react-native'
import {Feather} from '@expo/vector-icons'
import {Input} from '../components/Input'
import { Button } from '../components/button'

export default function Home() {
    return (
        <Styled.Container>
           <Logo />
            <Styled.FormContainer>
                <View>
                    <Styled.TextForm>Entre com a sua conta</Styled.TextForm>

                    <Input.Root>
                        <Input.Icon>
                            <Feather name='mail' size={20} />
                        </Input.Icon>
                        <Input.Control type='email-address' placeholderText='E-mail' />
                    </Input.Root>

                    <Input.Root>
                        <Input.Icon>
                            <Feather name='lock' size={20} />
                        </Input.Icon>
                        <Input.Control type='visible-password' placeholderText='Senha' />
                    </Input.Root>


                    <Styled.ForgotPasswordButton activeOpacity={0.7}>
                        <Styled.ForgotPasswordText>Esqueceu sua senha?</Styled.ForgotPasswordText>
                    </Styled.ForgotPasswordButton>
                </View>

                <View>
                    <Button.Link location='/menu'>
                            <Button.Content text='Entrar' />
                    </Button.Link>

                    <Button.Root variant>
                        <Button.Content variant text='Criar Conta' />
                    </Button.Root>
                
                </View>
            </Styled.FormContainer>

        </Styled.Container>
    )
}