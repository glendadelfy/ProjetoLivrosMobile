import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const TelaRecursos = () => {
  const abrirLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Erro ao abrir link:', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Recursos Educativos</Text>
      <View style={styles.recurso}>
        <Image
          style={styles.imagem}
          source={{ uri: 'https://via.placeholder.com/150' }} // Substitua pelo link de uma imagem relevante
        />
        <Text style={styles.texto}>Iniciativa de Leitura Inclusiva</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => abrirLink('https://redeleiturainclusiva.org.br/')}
        >
          <Text style={styles.textoBotao}>Acessar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recurso}>
        <Image
          style={styles.imagem}
          source={{ uri: 'https://via.placeholder.com/150' }} // Substitua pelo link de uma imagem relevante
        />
        <Text style={styles.texto}>Livros Gratuitos Online</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => abrirLink('https://openlibrary.org/')}
        >
          <Text style={styles.textoBotao}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  recurso: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    alignItems: 'center',
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TelaRecursos;
