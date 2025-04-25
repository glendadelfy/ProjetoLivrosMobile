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
import TelaDetalhes from './screens/TelaDetalhes';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#FFA500' }, // Fundo do cabeçalho em laranja médio
          headerTintColor: '#FFF', // Texto do cabeçalho em branco
          drawerStyle: { backgroundColor: '#FFF7E5' }, // Fundo do menu hambúrguer em tom suave de laranja
          drawerActiveTintColor: '#FFA500', // Item ativo no menu em laranja médio
          drawerInactiveTintColor: '#555', // Item inativo no menu com tom neutro
        }}
      >
        <Drawer.Screen name="Home" component={TelaInicial} options={{ title: 'Início' }} />
        <Drawer.Screen name="Catálogo" component={TelaCatalogo} options={{ title: 'Catálogo de Livros' }} />
        <Drawer.Screen name="Detalhes" component={TelaDetalhes} />
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
