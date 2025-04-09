import { View,Text,TextInput,TouchableOpacity } from "react-native";
import { Button } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Login!</Text>
      <TextInput placeholder="e-mail" inputMode="Text"/>
      <TextInput placeholder="senha" inputMode="Text" secureTextEntry="false"/>
      <Button title="Entrar" onPress={() => navigation.navigate('telas')}/>
    </View>
  );
}