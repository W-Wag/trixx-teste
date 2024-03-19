import { Feather } from "@expo/vector-icons";
import { ScrollView, Text, TextInput, View } from "react-native";
import * as Styled from './styles'
import { BackButton } from "../../components/back-button";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { TextInputMask } from "react-native-masked-text";
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
                <Input.Control placeholderText="Numero da Mesa" />
            </Input.Root>
            <Styled.TextAreaInput multiline numberOfLines={5}
            placeholder="Anotações do cliente" />

            <Styled.OrderDateTimeContainer>
                <Styled.OrderTimeInput>
                <Styled.OrderTimeText>Horário do pedido</Styled.OrderTimeText>
                    <Styled.OrderTimeContainer>
                        
                    <Styled.OrderInput id="hours"  />
                    <Styled.OrderInput id="minutes" />
                    </Styled.OrderTimeContainer>
                </Styled.OrderTimeInput>

                <Styled.OrderTimeInput>
                <Styled.OrderTimeText>Data</Styled.OrderTimeText>
                    <Styled.OrderTimeContainer>
                        
                    <Styled.DateInput 
                    id="date"
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