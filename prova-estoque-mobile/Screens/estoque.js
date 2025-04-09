import { useState } from "react";
import { View,Text,TextInput,TouchableOpacity, Image, StyleSheet} from "react-native";

    
export default function Estoque() {
    const [contcaneca,setContcaneca] = useState(0);
    const [contprato,setContprato] = useState(0);
    const [conttalher,setConttalher] = useState(0);
    const [contcopo,setContcopo] = useState(0);
    const [conttaca,setConttaca] = useState(0);
    function Aumentarcaneca() {
        setContcaneca(contcaneca+1);
    }
    function Aumentarprato() {
        setContprato(contprato+1);
    }
    function Aumentartalher() {
        setConttalher(conttalher+1);
    }
    function Aumentarcopo() {
        setContcopo(contcopo+1);
    }
    function Aumentartaca() {
        setConttaca(conttaca+1);
    }

    function Diminuircaneca() {
        if(contcaneca>0){
            setContcaneca(contcaneca-1);
        } 
    }
    function Diminuirprato() {
        if(contprato>0){
            setContprato(contprato-1);
        } 
    }
    function Diminuirtalher() {
        if(conttalher>0){
            setConttalher(conttalher-1);
        } 
    }
    function Diminuircopo() {
        if(contcopo>0){
            setContcopo(contcopo+1);
        } 
    }
    function Diminuirtaca() {
        if(conttaca>0){
            setConttaca(conttaca-1);
        } 
    }
  return (
    <View>
       <Image style={styles.imagem} source={{uri: 'https://socd.vtexassets.com/arquivos/ids/184447-800-auto?v=638144151183470000&width=800&height=auto&aspect=true',}}/>
      <Text>caneca</Text>
      <TouchableOpacity onPress={()=>Aumentarcaneca()}>+</TouchableOpacity>
      <TouchableOpacity onPress={()=>Diminuircaneca()}>-</TouchableOpacity>
      <Text >Estoque caneca:{contcaneca}</Text>

      <Image style={styles.imagem} source={{uri: 'https://socd.vtexassets.com/arquivos/ids/184447/Caneca-Love-Branca-para-Sublimacao-com-Alca-e-Interior-vermelho.jpg?v=638144151183470000',}}/>
      <Text>prato</Text>
      <TouchableOpacity onPress={()=>Aumentarprato()}>+</TouchableOpacity>
      <TouchableOpacity onPress={()=>Diminuirprato()}>-</TouchableOpacity>
      <Text >Estoque prato:{contprato}</Text>

      <Image style={styles.imagem} source={{uri: 'https://images.tcdn.com.br/img/img_prod/479528/jogo_de_talheres_30_pecas_aco_inox_bar_lanchonete_e_restaurante_1703_1_acaf2d41f6a31d0580f74d23fdb7728f_20230718171219.jpg'}}/>
      <Text>talheres</Text>
      <TouchableOpacity onPress={()=>Aumentartalher()}>+</TouchableOpacity>
      <TouchableOpacity onPress={()=>Diminuirtalher()}>-</TouchableOpacity>
      <Text >Estoque talheres:{conttalher}</Text>

      <Image style={styles.imagem} source={{uri: 'https://oxfordporcelanas.vteximg.com.br/arquivos/ids/161103-800-800/biona-caneca-drop-colorida-azul.jpg?v=636443591313770000',}}/>
      <Text>copo</Text>
      <TouchableOpacity onPress={()=>Aumentarcopo()}>+</TouchableOpacity>
      <TouchableOpacity onPress={()=>Diminuircopo()}>-</TouchableOpacity>
      <Text >Estoque copos:{contcopo}</Text>

      <Image style={styles.imagem} source={{uri: 'https://oxfordporcelanas.vteximg.com.br/arquivos/ids/161103-800-800/biona-caneca-drop-colorida-azul.jpg?v=636443591313770000',}}/>
      <Text>taça</Text>
      <TouchableOpacity onPress={()=>Aumentartaca()}>+</TouchableOpacity>
      <TouchableOpacity onPress={()=>Diminuirtaca()}>-</TouchableOpacity>
      <Text >Estoque taças:{conttaca}</Text>

    </View>
  );
}
const styles = StyleSheet.create({
    imagem:{
        height:'auto',
        width:'auto',
    }
})