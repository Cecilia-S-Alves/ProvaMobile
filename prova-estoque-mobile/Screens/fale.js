import { useState } from "react";
import { View,Text,TextInput,TouchableOpacity } from "react-native";

export default function Faleconosco() {
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [mensagem,setMensagem] = useState("");
  return (
    <View>
      <Text>Fale conosco!</Text>
      <TextInput placeholder="nome" inputMode="Text" value={nome} onChangeText={setNome}/>
      <TextInput placeholder="e-mail" inputMode="Text" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Mensagem" inputMode="Text" value={mensagem} onChangeText={setMensagem}/>
      <Text>Dados recebidos:</Text>
      <Text>{nome}</Text>
      <Text>{email}</Text>
      <Text>{mensagem}</Text>
    </View>
  );
}