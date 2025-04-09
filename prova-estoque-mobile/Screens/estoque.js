import { useState } from "react";
import { View,Text,TextInput,TouchableOpacity, Image, StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

    
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
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
       <Image style={styles.imagem} source={{uri: 'https://cdn.awsli.com.br/600x450/238/238483/produto/46949036/0588180f94.jpg',}}/>
      <Text>Canecas</Text>
      <Text>Canecas de porcelana</Text>
      <TouchableOpacity onPress={()=>Aumentarcaneca()}>+</TouchableOpacity>
      <TouchableOpacity onPress={()=>Diminuircaneca()}>-</TouchableOpacity>
      <Text >Estoque caneca:{contcaneca}</Text>

      <Image style={styles.imagem} source={{uri: 'https://ocapi.nadir.com.br/on/demandware.static/-/Sites-nadir-main-catalog/default/dw0f847a39/nadir/zoom/57430200935447_a_1000px.webp',}}/>
      <Text>Pratos</Text>
      <Text>Pratos de porcelana</Text>
      <TouchableOpacity onPress={()=>Aumentarprato()}>+</TouchableOpacity>
      <TouchableOpacity onPress={()=>Diminuirprato()}>-</TouchableOpacity>
      <Text >Estoque prato:{contprato}</Text>

      <Image style={styles.imagem} source={{uri:'https://images.tcdn.com.br/img/img_prod/479528/jogo_de_talheres_30_pecas_aco_inox_bar_lanchonete_e_restaurante_1703_1_acaf2d41f6a31d0580f74d23fdb7728f_20230718171219.jpg'}}/>
      <Text>Talheres</Text>
      <Text>Talheres de metal</Text>
      <TouchableOpacity onPress={()=>Aumentartalher()}>+</TouchableOpacity>
      <TouchableOpacity onPress={()=>Diminuirtalher()}>-</TouchableOpacity>
      <Text >Estoque talheres:{conttalher}</Text>

      <Image style={styles.imagem} source={{uri: 'https://m.media-amazon.com/images/I/61eVez3dHzL._AC_UF894,1000_QL80_.jpg',}}/>
      <Text>Copos</Text>
      <Text>Copos de vidro</Text>
      
      <TouchableOpacity onPress={()=>Aumentarcopo()}>+</TouchableOpacity>
      <TouchableOpacity onPress={()=>Diminuircopo()}>-</TouchableOpacity>
      <Text >Estoque copos:{contcopo}</Text>

      <Image style={styles.imagem} source={{uri: 'https://ocapi.nadir.com.br/on/demandware.static/-/Sites-nadir-main-catalog/default/dw4a6d5ad8/nadir/zoom/70340200774250_a_1000px.webp',}}/>
      <Text>Taças</Text>
      <Text>Taças de vidro</Text>
      <TouchableOpacity onPress={()=>Aumentartaca()}>+</TouchableOpacity>
      <TouchableOpacity onPress={()=>Diminuirtaca()}>-</TouchableOpacity>
      <Text >Estoque taças:{conttaca}</Text>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
    imagem:{
        height:200,
        width:200,
        alignItems:'center'
    },
    scroll:{
        backgroundColor: '#Ad907a',    }
})