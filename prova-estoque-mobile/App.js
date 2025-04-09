import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Screens/login';
import Estoque from './Screens/estoque';
import Faleconosco from './Screens/fale';

export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  function Telas(){
    return(
    <Drawer.Navigator>
      <Drawer.Screen name='estoque' component={Estoque}/>
      <Drawer.Screen name='fale' component={Faleconosco}/>
    </Drawer.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login}/>
        <Stack.Screen name='telas' component={Telas}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
