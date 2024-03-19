import { Feather } from '@expo/vector-icons'
import * as Styled from './styles'
import { useNavigation } from 'expo-router'

export function BackButton() {
    const navigation = useNavigation()
    return (
            <Styled.BackButtonContainer activeOpacity={.7} onPress={() => navigation.goBack()}>
            <Feather name='arrow-left' size={30} color={'#fff'} />
            </Styled.BackButtonContainer>
    )
}