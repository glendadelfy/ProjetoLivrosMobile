import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

// desenvolvido por Glenda Delfy 23/04/2025
// Importando as telas
import TelaInicial from './screens/TelaInicial';
import TelaCatalogo from './screens/TelaCatalogo';
import TelaRecursos from './screens/TelaRecursos';
import TelaContato from './screens/TelaContato';
import TelaDesenvolvedores from './screens/TelaDesenvolvedores';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TelaInicial} options={{ title: 'Início' }} />
        <Drawer.Screen name="Catálogo" component={TelaCatalogo} options={{ title: 'Catálogo de Livros' }} />
        <Drawer.Screen name="Recursos" component={TelaRecursos} options={{ title: 'Recursos Educativos' }} />
        <Drawer.Screen name="Contato" component={TelaContato} options={{ title: 'Fale Conosco' }} />
        <Drawer.Screen name="Desenvolvedores" component={TelaDesenvolvedores} options={{ title: 'Desenvolvedores' }} />
      </Drawer.Navigator>
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
