import { View,Text,TextInput,StyleSheet } from "react-native";
import { Button } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Login!</Text>
      <TextInput style={styles.input} placeholder="e-mail" inputMode="Text"/>
      <TextInput  style={styles.input} placeholder="senha" inputMode="Text" secureTextEntry="false"/>
      <Button title="Entrar" onPress={() => navigation.navigate('telas')}/>
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