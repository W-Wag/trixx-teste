import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import * as Styled from './styles'
import { BackButton } from "../../components/back-button";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { useState } from "react";

export default function Order() {
    const [date, setDate] = useState('');
    const handleDateChange = (date: string) => {
        setDate(date);
      };

    return (
        <ScrollView>
            <BackButton />
            <Styled.OrderIcon>
            <Feather name="shopping-bag" size={70} />
            </Styled.OrderIcon>

            <Styled.OrderText>Fazer Pedido</Styled.OrderText>

            <Input.Root>
                <Input.Control placeholderText="Nome do cliente" />
            </Input.Root>
            <Input.Root>
                <Input.Control placeholderText="Nome do prato" />
            </Input.Root>
            <Input.Root>
                <Input.Control placeholderText="Numero da Mesa" type="number-pad" />
            </Input.Root>
            <Styled.TextAreaInput multiline numberOfLines={5}
            placeholder="Anotações do cliente" />

            <Styled.OrderDateTimeContainer>
                <Styled.OrderTimeInput>
                <Styled.OrderTimeText>Horário do pedido</Styled.OrderTimeText>
                    <Styled.OrderTimeContainer>
                        
                    <Styled.OrderInput maxLength={2} keyboardType="number-pad"  />
                    <Styled.OrderInput maxLength={2} keyboardType="number-pad" />
                    </Styled.OrderTimeContainer>
                </Styled.OrderTimeInput>

                <Styled.OrderTimeInput>
                <Styled.OrderTimeText>Data</Styled.OrderTimeText>
                    <Styled.OrderTimeContainer>
                        
                    <Styled.DateInput 
                    type={'datetime'}
                    value={date}
                    onChangeText={handleDateChange}
                    options={{
                      format: 'DD/MM/YYYY',
                    }}
                    placeholder="DD / MM / YYYY"
                    placeholderTextColor={'#035640'}
                    />

                    </Styled.OrderTimeContainer>
                </Styled.OrderTimeInput>
            </Styled.OrderDateTimeContainer>

            <Button.Root>
                <Button.Content text="Enviar" />
            </Button.Root>



        </ScrollView>
    )
}