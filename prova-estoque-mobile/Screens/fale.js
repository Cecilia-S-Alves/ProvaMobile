import { useState } from "react";
import { View,Text,TextInput, StyleSheet } from "react-native";

export default function Faleconosco() {
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [mensagem,setMensagem] = useState("");
  return (
    <View style={styles.container}>
      <Text>Fale conosco!</Text>
      <TextInput style={styles.input} placeholder="nome" inputMode="Text" value={nome} onChangeText={setNome}/>
      <TextInput style={styles.input} placeholder="e-mail" inputMode="Text" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Mensagem" inputMode="Text" value={mensagem} onChangeText={setMensagem}/>
      <Text>Dados recebidos:</Text>
      <Text>Nome:{nome}</Text>
      <Text>E-mail:{email}</Text>
      <Text>Mensagem:{mensagem}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#Ad907a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:2,

  }
});