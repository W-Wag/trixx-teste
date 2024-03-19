import * as Styled from './styles'
import { Logo } from '../../components/logo'
import { Button } from '../../components/button'

export default function Home() {
    return (
        <Styled.Container>
           <Logo />
           <Styled.MenuLinks>
           <Button.Link location='/order'>
            <Button.Content text='Fazer Pedidos' />
           </Button.Link>
           <Button.Root variant>
            <Button.Content text='Status do Pedido' variant />
           </Button.Root>
           <Button.Root variant>
            <Button.Content text='Painel do Pedido' variant />
           </Button.Root>
           </Styled.MenuLinks>
        </Styled.Container>
    )
}