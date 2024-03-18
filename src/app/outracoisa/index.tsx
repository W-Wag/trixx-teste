import { Image, Text } from 'react-native'
import * as Styled from './styles'
import { Logo } from '../../components/logo'

export default function Home() {
    return (
        <Styled.Container>
           <Logo />
        </Styled.Container>
    )
}